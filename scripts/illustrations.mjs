// Generates the original illustrations used as marks for projects that have no brand of their own
// (Booking, Raffle, antivirus-local). Output: public/logos/*.svg. Usage: npm run logos
// Everything here is drawn from scratch: no third-party or client artwork (see AGENTS.md).
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'logos');

const svg = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">${body}</svg>\n`;

/** App-icon frame shared by all marks: gradient tile, soft light, hairline border. */
const frame = (c1, c2) => `
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
  <radialGradient id="shine" cx="0.15" cy="0.05" r="0.95"><stop offset="0" stop-color="#fff" stop-opacity="0.4"/><stop offset="0.65" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <filter id="sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="14" stdDeviation="13" flood-color="#000" flood-opacity="0.38"/></filter>
</defs>
<rect width="512" height="512" rx="112" fill="url(#bg)"/>
<rect width="512" height="512" rx="112" fill="url(#shine)"/>
<rect x="6" y="6" width="500" height="500" rx="106" fill="none" stroke="#fff" stroke-opacity="0.16" stroke-width="3"/>`;

const star = (cx, cy, outer, inner, points = 5) => {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / points;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(' ');
};
const sparkle = (cx, cy, r, fill = '#fff', op = 1) =>
  `<path d="M${cx} ${cy - r}Q${cx + r * 0.18} ${cy - r * 0.18} ${cx + r} ${cy}Q${cx + r * 0.18} ${cy + r * 0.18} ${cx} ${cy + r}Q${cx - r * 0.18} ${cy + r * 0.18} ${cx - r} ${cy}Q${cx - r * 0.18} ${cy - r * 0.18} ${cx} ${cy - r}Z" fill="${fill}" opacity="${op}"/>`;

// ───────── Booking: calendar with a confirmed day and a clock badge ─────────
const booking = (() => {
  let days = '';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      const x = 140 + c * 62;
      const y = 236 + r * 52;
      const fill = c === 1 && r === 0 ? '#22c55e' : c === 2 && r === 1 ? '#93c5fd' : '#dbeafe';
      days += `<rect x="${x}" y="${y}" width="40" height="36" rx="11" fill="${fill}"/>`;
    }
  }
  return svg(`${frame('#38bdf8', '#4338ca')}
<g filter="url(#sh)"><rect x="104" y="128" width="304" height="284" rx="46" fill="#fff"/></g>
<clipPath id="cal"><rect x="104" y="128" width="304" height="284" rx="46"/></clipPath>
<g clip-path="url(#cal)">
  <rect x="104" y="128" width="304" height="86" fill="#1e3a8a"/>
  <rect x="104" y="128" width="304" height="86" fill="url(#shine)" opacity="0.35"/>
  <rect x="150" y="166" width="96" height="14" rx="7" fill="#fff" opacity="0.9"/>
  <rect x="150" y="188" width="58" height="10" rx="5" fill="#fff" opacity="0.45"/>
</g>
<rect x="166" y="98" width="30" height="66" rx="15" fill="#e0e7ff" stroke="#1e3a8a" stroke-width="9"/>
<rect x="316" y="98" width="30" height="66" rx="15" fill="#e0e7ff" stroke="#1e3a8a" stroke-width="9"/>
${days}
<path d="M213 256l9 9 17-19" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#sh)">
  <circle cx="364" cy="372" r="66" fill="#fbbf24" stroke="#fff" stroke-width="11"/>
</g>
<circle cx="364" cy="372" r="46" fill="#fff"/>
<g stroke="#1e3a8a" stroke-linecap="round" stroke-width="9" fill="none">
  <path d="M364 372V344"/><path d="M364 372l20 12"/>
</g>
<circle cx="364" cy="372" r="6" fill="#1e3a8a"/>
<g fill="#93c5fd"><circle cx="364" cy="334" r="3.5"/><circle cx="402" cy="372" r="3.5"/><circle cx="364" cy="410" r="3.5"/><circle cx="326" cy="372" r="3.5"/></g>
${sparkle(120, 96, 16, '#fff', 0.85)}${sparkle(432, 152, 11, '#fff', 0.6)}`);
})();

// ───────── Raffle: golden ticket with a star, stub and confetti ─────────
const raffle = (() => {
  const ticket =
    'M120 170H392a26 26 0 0 1 26 26V232a24 24 0 0 0 0 48V316a26 26 0 0 1-26 26H120a26 26 0 0 1-26-26V280a24 24 0 0 0 0-48V196a26 26 0 0 1 26-26Z';
  const confetti = [
    [88, 118, 24, 11, 30, '#f472b6'], [414, 104, 22, 10, -40, '#22d3ee'], [140, 428, 26, 11, -20, '#fff'],
    [398, 412, 24, 11, 35, '#f472b6'], [64, 300, 18, 9, 70, '#a78bfa'], [452, 270, 18, 9, -70, '#fde047'],
    [250, 76, 20, 9, 15, '#22d3ee'], [300, 446, 20, 9, -30, '#a78bfa'],
  ]
    .map(([x, y, w, h, r, f]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${f}" transform="rotate(${r} ${x + w / 2} ${y + h / 2})"/>`)
    .join('');
  const dots = [[124, 168, 7, '#22d3ee'], [436, 178, 6, '#fff'], [372, 458, 7, '#fde047'], [78, 384, 6, '#f472b6'], [336, 84, 6, '#f472b6']]
    .map(([x, y, r, f]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`)
    .join('');
  return svg(`${frame('#312e81', '#6d28d9')}
<defs>
  <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fef08a"/><stop offset="0.55" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fde047" stop-opacity="0.55"/><stop offset="1" stop-color="#fde047" stop-opacity="0"/></radialGradient>
</defs>
<circle cx="256" cy="256" r="210" fill="url(#glow)"/>
${confetti}${dots}
<g transform="rotate(-11 256 256)">
  <g filter="url(#sh)"><path d="${ticket}" fill="url(#gold)"/></g>
  <path d="${ticket}" fill="url(#shine)" opacity="0.7"/>
  <path d="M120 186H392a10 10 0 0 1 10 10V316a10 10 0 0 1-10 10H120a10 10 0 0 1-10-10V196a10 10 0 0 1 10-10Z" fill="none" stroke="#b45309" stroke-opacity="0.45" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round"/>
  <path d="M326 186V326" stroke="#b45309" stroke-opacity="0.6" stroke-width="4" stroke-dasharray="7 11" stroke-linecap="round"/>
  <polygon points="${star(206, 258, 64, 27)}" fill="#fff" stroke="#b45309" stroke-opacity="0.35" stroke-width="5" stroke-linejoin="round"/>
  <rect x="348" y="222" width="42" height="13" rx="6.5" fill="#92400e" opacity="0.75"/>
  <rect x="348" y="248" width="30" height="13" rx="6.5" fill="#92400e" opacity="0.55"/>
  <rect x="348" y="274" width="42" height="13" rx="6.5" fill="#92400e" opacity="0.75"/>
</g>
${sparkle(404, 150, 20)}${sparkle(112, 80, 13, '#fff', 0.8)}${sparkle(420, 440, 14, '#fde047', 0.95)}`);
})();

// ───────── antivirus-local: shield scanning a bug ─────────
const antivirus = (() => {
  const shield = 'M256 92L396 146V262C396 346 336 404 256 430C176 404 116 346 116 262V146Z';
  const leg = (sx) =>
    [[226, 262, 188, 246], [222, 284, 182, 284], [226, 306, 188, 324]]
      .map(([x1, y1, x2, y2]) => `<path d="M${sx === 1 ? x1 : 512 - x1} ${y1}L${sx === 1 ? x2 : 512 - x2} ${y2}"/>`)
      .join('');
  return svg(`${frame('#06222b', '#0f766e')}
<defs>
  <linearGradient id="shield" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ccfbf1"/><stop offset="0.5" stop-color="#2dd4bf"/><stop offset="1" stop-color="#0f766e"/></linearGradient>
  <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ecfeff" stop-opacity="0"/><stop offset="0.5" stop-color="#ecfeff"/><stop offset="1" stop-color="#ecfeff" stop-opacity="0"/></linearGradient>
  <linearGradient id="band" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5eead4" stop-opacity="0"/><stop offset="1" stop-color="#5eead4" stop-opacity="0.55"/></linearGradient>
  <clipPath id="sc"><path d="${shield}"/></clipPath>
  <filter id="blur"><feGaussianBlur stdDeviation="5"/></filter>
</defs>
<g fill="#fb7185"><circle cx="418" cy="116" r="15" opacity="0.9"/><circle cx="452" cy="170" r="9" opacity="0.6"/><circle cx="92" cy="148" r="11" opacity="0.7"/><circle cx="70" cy="214" r="6" opacity="0.45"/></g>
<g filter="url(#sh)"><path d="${shield}" fill="url(#shield)"/></g>
<path d="${shield}" fill="url(#shine)" opacity="0.6"/>
<path d="M256 118L372 162V262C372 332 322 380 256 402C190 380 140 332 140 262V162Z" fill="none" stroke="#fff" stroke-opacity="0.55" stroke-width="5" stroke-linejoin="round"/>
<g fill="#083344">
  <ellipse cx="256" cy="284" rx="34" ry="46"/><circle cx="256" cy="228" r="19"/>
</g>
<g stroke="#083344" stroke-width="9" stroke-linecap="round" fill="none">
  ${leg(1)}${leg(-1)}<path d="M246 212l-14-22M266 212l14-22"/>
</g>
<path d="M256 240v90" stroke="#2dd4bf" stroke-opacity="0.55" stroke-width="5"/>
<g clip-path="url(#sc)">
  <rect x="116" y="196" width="280" height="82" fill="url(#band)"/>
  <rect x="104" y="268" width="304" height="20" fill="url(#beam)" filter="url(#blur)"/>
  <rect x="104" y="274" width="304" height="8" rx="4" fill="url(#beam)"/>
</g>
${sparkle(404, 330, 13, '#fff', 0.7)}`);
})();

for (const [file, content] of Object.entries({ 'booking.svg': booking, 'raffle.svg': raffle, 'antivirus-local.svg': antivirus })) {
  writeFileSync(path.join(out, file), content);
  console.log(`Wrote public/logos/${file} (${content.length} B)`);
}
