import type { Localized, LocalizedList } from './projects';

// Empty values are simply not rendered, so nothing personal is published by accident.
export const profile = {
  name: 'Oscar Eduardo Hincapié Vargas',
  shortName: 'Oscar Hincapié',
  github: 'https://github.com/ozcaredo89',
  linkedin: 'https://www.linkedin.com/in/ing-oscar-eduardo-hincapie/',
  email: 'oscar.hv89@gmail.com',
  /** Stated by the owner. */
  years: 13,
  headline: {
    es: 'Ingeniero de software full-stack · Colombia',
    en: 'Full-stack software engineer · Colombia',
  } satisfies Localized,
  intro: {
    es: 'Más de 13 años diseñando, construyendo y operando productos web: del modelo de datos y la API hasta una PWA que se instala en el teléfono. Hoy lo hago con IA como copiloto, specs claras y CI en verde.',
    en: '13+ years designing, building and operating web products: from the data model and API to a PWA you can install on your phone. Today I do it with AI as a copilot, clear specs and green CI.',
  } satisfies Localized,
  /** Every number must be traceable to the repos or the brain catalog (AGENTS.md). */
  stats: [
    { value: '13+', label: { es: 'años de experiencia', en: 'years of experience' } },
    { value: '12', label: { es: 'proyectos en el ecosistema AllAtYou', en: 'projects in the AllAtYou ecosystem' } },
    { value: '580+', label: { es: 'commits en 3 productos principales', en: 'commits across 3 core products' } },
  ] as { value: string; label: Localized }[],
  about: {
    es: [
      'Soy el creador del ecosistema AllAtYou: una familia de productos para operación de flotas, talleres, reservas y comunidades, cada uno desplegado de forma independiente.',
      'Mi forma de trabajar es «spec primero»: cada cambio parte de un issue y una especificación con alcance explícito, avanza en una rama con commits convencionales y se fusiona solo con CI en verde. Eso mantiene el ritmo alto sin perder trazabilidad, también cuando trabajo con asistentes de IA.',
    ],
    en: [
      'I created the AllAtYou ecosystem: a family of products for fleet operations, workshops, bookings and communities, each deployed independently.',
      'I work spec-first: every change starts from an issue and a spec with explicit scope, moves forward on a branch with conventional commits and merges only with green CI. That keeps the pace high without losing traceability, including when I work with AI assistants.',
    ],
  } satisfies LocalizedList,
  workflow: [
    {
      title: { es: 'Issue', en: 'Issue' },
      text: { es: 'Qué y por qué, con criterios de aceptación medibles.', en: 'What and why, with measurable acceptance criteria.' },
    },
    {
      title: { es: 'Spec', en: 'Spec' },
      text: { es: 'Alcance, fuera de alcance y plan de rollback por escrito.', en: 'Scope, out of scope and a rollback plan in writing.' },
    },
    {
      title: { es: 'Rama', en: 'Branch' },
      text: { es: 'Una rama por spec y commits convencionales pequeños.', en: 'One branch per spec and small conventional commits.' },
    },
    {
      title: { es: 'PR + CI', en: 'PR + CI' },
      text: { es: 'Lint, typecheck, tests y build en verde antes de fusionar.', en: 'Lint, typecheck, tests and build green before merging.' },
    },
    {
      title: { es: 'Merge', en: 'Merge' },
      text: { es: 'main solo cambia por PRs; el historial queda completo.', en: 'main only changes through PRs; full history is kept.' },
    },
  ] as { title: Localized; text: Localized }[],
  skills: [
    { group: { es: 'Lenguajes', en: 'Languages' }, items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
    { group: { es: 'Frontend', en: 'Frontend' }, items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'PWA', 'Astro'] },
    { group: { es: 'Backend y datos', en: 'Backend & data' }, items: ['Node.js', 'Express', 'Supabase / PostgreSQL', 'Firebase', 'SQLite', 'Prisma'] },
    { group: { es: 'Infraestructura', en: 'Infrastructure' }, items: ['Docker', 'AWS (Lambda, CloudFront, ECS)', 'Railway', 'Vercel', 'GitHub Actions'] },
    { group: { es: 'Calidad', en: 'Quality' }, items: ['Vitest', 'Playwright', 'ESLint', 'Conventional Commits'] },
  ] as { group: Localized; items: string[] }[],
};
