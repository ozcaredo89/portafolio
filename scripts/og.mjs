// Renders the social share cards (ES/EN) and the touch icon from scripts/og.html using a local Chrome/Edge,
// then exports lightweight JPEGs with sharp (WhatsApp ignores images that are too heavy).
// Usage: npm run og   (set CHROME_PATH if your browser is elsewhere)
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chrome/Edge found. Set CHROME_PATH.');
  process.exit(1);
}

const cache = path.join(root, 'node_modules', '.cache', 'og');
mkdirSync(cache, { recursive: true });
mkdirSync(path.join(root, 'public', 'og'), { recursive: true });
const page = pathToFileURL(path.join(root, 'scripts', 'og.html')).href;

function shot(query, width, height, file) {
  const res = spawnSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--allow-file-access-from-files',
      `--user-data-dir=${path.join(cache, 'profile')}`,
      `--window-size=${width},${height}`,
      '--virtual-time-budget=4000',
      `--screenshot=${file}`,
      `${page}?${query}`,
    ],
    { stdio: 'ignore' },
  );
  if (res.status !== 0 || !existsSync(file)) throw new Error(`Chrome failed for ${query}`);
}

const MAX_BYTES = 200 * 1024;

for (const lang of ['es', 'en']) {
  const png = path.join(cache, `card-${lang}.png`);
  shot(`lang=${lang}`, 1200, 630, png);
  const dest = path.join(root, 'public', 'og', `${lang}.jpg`);
  let quality = 90;
  for (;;) {
    await sharp(png)
      .resize(1200, 630)
      .jpeg({ quality, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
      .toFile(dest);
    const size = statSync(dest).size;
    if (size <= MAX_BYTES || quality <= 70) {
      console.log(`public/og/${lang}.jpg  ${(size / 1024).toFixed(0)} KB  q${quality}`);
      break;
    }
    quality -= 4;
  }
}

const icon = path.join(cache, 'icon.png');
shot('mode=icon', 180, 180, icon);
await sharp(icon).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(root, 'public', 'apple-touch-icon.png'));
console.log('public/apple-touch-icon.png  180x180');
