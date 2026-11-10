import type { Localized, LocalizedList } from './projects';

// TODO(owner): confirm headline/bio wording and fill `linkedin` and `email`.
// Empty values are simply not rendered, so nothing personal is published by accident.
export const profile = {
  name: 'Oscar Eduardo Hincapié Vargas',
  github: 'https://github.com/ozcaredo89',
  linkedin: '',
  email: '',
  headline: {
    es: 'Desarrollador full-stack en Colombia',
    en: 'Full-stack developer in Colombia',
  } satisfies Localized,
  intro: {
    es: 'Construyo productos web de punta a punta: desde el modelo de datos y la API hasta una PWA que se instala en el teléfono. Trabajo con specs, PRs y CI para entregar cambios pequeños y verificables.',
    en: 'I build web products end to end: from the data model and API to a PWA you can install on your phone. I work with specs, PRs and CI to ship small, verifiable changes.',
  } satisfies Localized,
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
  workflow: {
    es: ['Issue', 'Spec', 'Rama', 'PR + CI', 'Merge'],
    en: ['Issue', 'Spec', 'Branch', 'PR + CI', 'Merge'],
  } satisfies LocalizedList,
  skills: [
    { group: { es: 'Lenguajes', en: 'Languages' }, items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
    { group: { es: 'Frontend', en: 'Frontend' }, items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'PWA'] },
    { group: { es: 'Backend y datos', en: 'Backend & data' }, items: ['Node.js', 'Express', 'Supabase / PostgreSQL', 'Firebase', 'SQLite', 'Prisma'] },
    { group: { es: 'Infraestructura', en: 'Infrastructure' }, items: ['Docker', 'AWS (Lambda, CloudFront, ECS)', 'Railway', 'Vercel', 'GitHub Actions'] },
    { group: { es: 'Calidad', en: 'Quality' }, items: ['Vitest', 'Playwright', 'ESLint', 'Conventional Commits'] },
  ] as { group: Localized; items: string[] }[],
};
