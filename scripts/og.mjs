// Renders scripts/og.html to public/og.png (1200x630) with a locally installed Chrome/Edge.
// Usage: npm run og   (set CHROME_PATH if your browser is elsewhere)
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

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

const out = path.join(root, 'public', 'og.png');
const src = pathToFileURL(path.join(root, 'scripts', 'og.html')).href;
const profile = path.join(root, 'node_modules', '.cache', 'og-profile');

const res = spawnSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    `--user-data-dir=${profile}`,
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${out}`,
    src,
  ],
  { stdio: 'inherit' },
);

if (res.status !== 0 || !existsSync(out)) {
  console.error('Failed to render og.png');
  process.exit(1);
}
console.log(`Wrote ${path.relative(root, out)}`);
