// Privacy-first measurement (spec 0008). Inert unless src/data/analytics.ts has values.
//  - GoatCounter: a page-view pixel + the public visitor counter shown in the header.
//  - PostHog: heatmaps, clicks and section views, loaded lazily, no cookies, no session recording.
// Nothing is measured when the browser sends Do Not Track / Global Privacy Control, when the page is
// driven by automation, or on the owner's own devices (visit once with ?notrack, undo with ?track).

interface Config {
  posthog: { key: string; host: string; uiHost: string };
  goatcounter: { code: string };
}

const raw = document.getElementById('analytics-config')?.textContent;
const config: Config | null = raw ? (JSON.parse(raw) as Config) : null;

const OWNER_FLAG = 'notrack';

function isOwnerDevice(): boolean {
  try {
    const q = new URLSearchParams(location.search);
    if (q.has('notrack')) localStorage.setItem(OWNER_FLAG, '1');
    if (q.has('track')) localStorage.removeItem(OWNER_FLAG);
    return localStorage.getItem(OWNER_FLAG) === '1';
  } catch {
    return false;
  }
}

function privacySignal(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  return nav.doNotTrack === '1' || nav.globalPrivacyControl === true;
}

function whenIdle(fn: () => void) {
  const run = () => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 3000 }) : setTimeout(fn, 1500));
  if (document.readyState === 'complete') run();
  else addEventListener('load', run, { once: true });
}

// ───────── Public visitor counter (GoatCounter) ─────────
async function showCounter(code: string) {
  const boxes = document.querySelectorAll<HTMLElement>('[data-visit-counter]');
  if (!boxes.length) return;
  try {
    const res = await fetch(`https://${code}.goatcounter.com/counter/TOTAL.json`, { headers: { Accept: 'application/json' } });
    if (!res.ok) return;
    const data = (await res.json()) as { count?: string };
    // `count` is a string with thousands separators ("1,234"); keep digits only.
    const total = parseInt(String(data.count ?? '').replace(/\D/g, ''), 10);
    if (!Number.isFinite(total) || total <= 0) return;

    const fmt = new Intl.NumberFormat(document.documentElement.lang === 'es' ? 'es-CO' : 'en-US');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    boxes.forEach((box) => {
      const out = box.querySelector<HTMLElement>('[data-visit-count]');
      if (!out) return;
      box.hidden = false;
      if (reduce || total < 20) {
        out.textContent = fmt.format(total);
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / 900);
        out.textContent = fmt.format(Math.round(total * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  } catch {
    /* Network or CORS failure: the counter simply stays hidden. */
  }
}

function sendHit(code: string) {
  const params = new URLSearchParams({
    p: location.pathname,
    t: document.title,
    s: `${screen.width},${screen.height},${window.devicePixelRatio || 1}`,
    rnd: Math.random().toString(36).slice(2),
  });
  if (document.referrer && new URL(document.referrer).host !== location.host) params.set('r', document.referrer);
  new Image().src = `https://${code}.goatcounter.com/count?${params.toString()}`;
}

// ───────── Heatmaps and events (PostHog) ─────────
async function startPosthog(cfg: Config['posthog']) {
  const { default: posthog } = await import('posthog-js');
  posthog.init(cfg.key, {
    api_host: cfg.host,
    ui_host: cfg.uiHost,
    persistence: 'memory', // no cookies, no localStorage identifiers
    person_profiles: 'identified_only', // anonymous events only, no person profiles
    ip: false, // ask the server not to record the IP (also enable "Discard client IP data" in the project)
    respect_dnt: true,
    disable_session_recording: true,
    disable_surveys: true,
    advanced_disable_flags: true, // no feature flags needed: skip that request
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    capture_heatmaps: true,
    loaded: (ph) => ph.register({ site_lang: document.documentElement.lang }),
  });

  // Meaningful clicks (elements carry data-track) become readable events.
  document.addEventListener(
    'click',
    (e) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]');
      if (el) posthog.capture('portfolio_click', { target: el.dataset.track });
    },
    { capture: true },
  );

  // Which sections actually reach the screen (answers "where do they stop?").
  if ('IntersectionObserver' in window) {
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            posthog.capture('section_viewed', { section: id });
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.35 },
    );
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));
  }
}

// ───────── Boot ─────────
if (config) {
  // The counter only reads a number, so it shows for everyone, owner included.
  if (config.goatcounter.code) whenIdle(() => void showCounter(config.goatcounter.code));

  const optedOut = isOwnerDevice() || privacySignal() || navigator.webdriver;
  if (!optedOut && import.meta.env.PROD) {
    if (config.goatcounter.code) whenIdle(() => sendHit(config.goatcounter.code));
    if (config.posthog.key) whenIdle(() => void startPosthog(config.posthog));
  }
}
