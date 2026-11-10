// Projects are data, not markup. ES and EN live side by side so they never drift.
// Rule (AGENTS.md): private projects NEVER get a `repo` link — enforced by the type below.

export type Localized = { es: string; en: string };
export type LocalizedList = { es: string[]; en: string[] };

interface BaseProject {
  id: string;
  name: string;
  featured: boolean;
  tagline: Localized;
  description: Localized;
  highlights: LocalizedList;
  stack: string[];
  /** Public, verified-working demo URL. */
  live?: string;
}

export type Project = BaseProject &
  (
    | { visibility: 'public'; repo?: string }
    | { visibility: 'private'; repo?: never }
  );

export const projects: Project[] = [
  {
    id: 'renting-hub',
    name: 'AllAtYou Renting Hub',
    featured: true,
    visibility: 'public',
    tagline: {
      es: 'Operación financiera de una flota de renting',
      en: 'Financial operations for a vehicle-rental fleet',
    },
    description: {
      es: 'Monorepo con API y web para registrar pagos, gastos y anticipos operativos, adjuntar comprobantes y generar reportes de mora, utilidad mensual y libro contable.',
      en: 'Monorepo with an API and a web app to record payments, expenses and operating advances, attach receipts and produce arrears, monthly profit and ledger reports.',
    },
    highlights: {
      es: [
        'Más de 360 commits y 8 ramas: producto en uso continuo',
        'Storage de comprobantes y reglas de negocio como «no paga hoy»',
        'API en Railway, web en Vercel',
      ],
      en: [
        '360+ commits and 8 branches: a product in continuous use',
        'Receipt storage and business rules such as “no payment today”',
        'API on Railway, web on Vercel',
      ],
    },
    stack: ['TypeScript', 'Express 5', 'React', 'Vite', 'Tailwind v4', 'Supabase'],
    repo: 'https://github.com/ozcaredo89/allatyou-renting-hub',
  },
  {
    id: 'taller',
    name: 'AllAtYou Taller',
    featured: true,
    visibility: 'public',
    tagline: {
      es: 'SaaS multi-taller para talleres mecánicos',
      en: 'Multi-tenant SaaS for auto repair shops',
    },
    description: {
      es: 'Gestión y diagnóstico rápido para talleres mecánicos en Colombia. Cada taller es un tenant aislado y está conectado con la flota de Renting Hub.',
      en: 'Management and quick diagnosis for auto repair shops in Colombia. Each shop is an isolated tenant and the app is connected to the Renting Hub fleet.',
    },
    highlights: {
      es: [
        'Aislamiento por tenant en cada consulta y rutas por /:slug',
        'Migraciones SQL versionadas que corren al arrancar',
        'KPIs y presupuestos calculados en zona horaria America/Bogota',
      ],
      en: [
        'Tenant isolation on every query and per-shop /:slug routing',
        'Versioned SQL migrations that run on startup',
        'KPIs and budgets computed in the America/Bogota timezone',
      ],
    },
    stack: ['TypeScript', 'Express', 'React 19', 'Vite', 'Tailwind v4', 'Supabase'],
    repo: 'https://github.com/ozcaredo89/allatyou-taller',
    live: 'https://taller.allatyou.com',
  },
  {
    id: 'app',
    name: 'allatyou',
    featured: true,
    visibility: 'private',
    tagline: {
      es: 'Desarrollo personal convertido en datos diarios',
      en: 'Personal development turned into daily data',
    },
    description: {
      es: 'App auto-hospedada que mide mentalidad, ejecución y resultados con un check-in diario. Instalable como PWA, funciona sin conexión y está en español e inglés.',
      en: 'Self-hosted app that measures mindset, execution and results through a daily check-in. Installable as a PWA, works offline, available in Spanish and English.',
    },
    highlights: {
      es: [
        'Es el repo de referencia de mi flujo: specs numeradas, PRs y CI',
        'Pruebas unitarias y E2E con Playwright',
        'Docker Compose, SQLite y despliegue en red privada',
      ],
      en: [
        'The reference repo for my workflow: numbered specs, PRs and CI',
        'Unit tests and Playwright E2E',
        'Docker Compose, SQLite and private-network deployment',
      ],
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'SQLite', 'Docker', 'Playwright'],
  },
  {
    id: 'deseos',
    name: 'AllAtYou Deseos',
    featured: true,
    visibility: 'private',
    tagline: {
      es: 'Pide un deseo, cumple un deseo',
      en: 'Ask for a wish, grant a wish',
    },
    description: {
      es: 'PWA con feed vertical estilo TikTok. El login se pide solo al publicar, con Google o código por WhatsApp, y hay pagos con Stripe.',
      en: 'PWA with a TikTok-style vertical feed. Login is only asked when publishing, with Google or a WhatsApp code, and payments run through Stripe.',
    },
    highlights: {
      es: [
        'Modo demo sin credenciales para probarlo en un minuto',
        'Imágenes Open Graph automáticas por cada deseo compartido',
        'Contenedores en AWS ECS Fargate',
      ],
      en: [
        'Credential-free demo mode to try it in a minute',
        'Automatic Open Graph image for every shared wish',
        'Containers on AWS ECS Fargate',
      ],
    },
    stack: ['Next.js 15', 'Firebase', 'Stripe', 'Twilio Verify', 'AWS ECS'],
    live: 'https://deseos.allatyou.com',
  },
  {
    id: 'santaelena',
    name: 'AllAtYou Santa Elena',
    featured: false,
    visibility: 'private',
    tagline: {
      es: 'PWA para la plaza de mercado Santa Elena (Cali)',
      en: 'PWA for the Santa Elena market square (Cali)',
    },
    description: {
      es: 'Conecta compradores de Cali con los vendedores de la plaza. Desplegada con SST y OpenNext sobre AWS Lambda y CloudFront.',
      en: 'Connects Cali shoppers with the market vendors. Deployed with SST and OpenNext on AWS Lambda and CloudFront.',
    },
    highlights: { es: [], en: [] },
    stack: ['Next.js', 'TypeScript', 'SST', 'AWS Lambda', 'CloudFront'],
  },
  {
    id: 'booking',
    name: 'AllAtYou Booking',
    featured: false,
    visibility: 'public',
    tagline: {
      es: 'Reservas y agendamiento, con variante para estética',
      en: 'Reservations and scheduling, with an aesthetics variant',
    },
    description: {
      es: 'Sistema de reservas reutilizable. Una variante vertical atiende a una clínica de estética.',
      en: 'Reusable booking system. A vertical variant serves an aesthetics clinic.',
    },
    highlights: { es: [], en: [] },
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    repo: 'https://github.com/ozcaredo89/allatyou-booking',
    live: 'https://allatyou-booking.vercel.app',
  },
  {
    id: 'raffle',
    name: 'AllAtYou Raffle',
    featured: false,
    visibility: 'public',
    tagline: {
      es: 'Gestión de rifas en línea',
      en: 'Online raffle management',
    },
    description: {
      es: 'Módulo web para vender números y gestionar sorteos, con proxy interno y GitHub Actions.',
      en: 'Web module to sell numbers and manage draws, with an internal proxy and GitHub Actions.',
    },
    highlights: { es: [], en: [] },
    stack: ['Next.js', 'TypeScript', 'GitHub Actions'],
    repo: 'https://github.com/ozcaredo89/allatyou-raffle',
  },
  {
    id: 'antivirus',
    name: 'antivirus-local',
    featured: false,
    visibility: 'private',
    tagline: {
      es: 'Antivirus por línea de comandos para Windows',
      en: 'Command-line antivirus for Windows',
    },
    description: {
      es: 'Vigila en tiempo real carpetas del sistema, con reglas YARA y actualizador propio.',
      en: 'Watches system folders in real time, with YARA rules and its own updater.',
    },
    highlights: { es: [], en: [] },
    stack: ['Python', 'YARA', 'CLI'],
  },
];
