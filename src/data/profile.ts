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
    es: 'Senior Software Engineer · DevOps & Cloud · Cali, Colombia',
    en: 'Senior Software Engineer · DevOps & Cloud · Cali, Colombia',
  } satisfies Localized,
  intro: {
    es: 'Más de 13 años diseñando, automatizando y operando plataformas escalables y seguras: infraestructura como código, pipelines CI/CD, pruebas automatizadas y productos web propios de punta a punta. Hoy lo hago con IA como copiloto, specs claras y CI en verde.',
    en: '13+ years designing, automating and operating scalable, secure platforms: infrastructure as code, CI/CD pipelines, automated testing and in-house web products end to end. Today I do it with AI as a copilot, clear specs and green CI.',
  } satisfies Localized,
  /** Every number must be traceable to the repos or the brain catalog (AGENTS.md). */
  stats: [
    { value: '13+', label: { es: 'años de experiencia', en: 'years of experience' } },
    { value: '12', label: { es: 'proyectos en el ecosistema AllAtYou', en: 'projects in the AllAtYou ecosystem' } },
    { value: '580+', label: { es: 'commits en 3 productos principales', en: 'commits across 3 core products' } },
  ] as { value: string; label: Localized }[],
  about: {
    es: [
      'Soy Senior Software Engineer con enfoque en DevOps y cloud. He trabajado en plataformas empresariales y SaaS, incluidos entornos regulados, con foco en confiabilidad, optimización de costos, observabilidad y mejora continua.',
      'Soy el creador del ecosistema AllAtYou: una familia de productos para operación de flotas, talleres, reservas y comunidades, cada uno desplegado de forma independiente.',
      'Mi forma de trabajar es «spec primero»: cada cambio parte de un issue y una especificación con alcance explícito, avanza en una rama con commits convencionales y se fusiona solo con CI en verde. Eso mantiene el ritmo alto sin perder trazabilidad, también cuando trabajo con asistentes de IA.',
    ],
    en: [
      'I am a Senior Software Engineer focused on DevOps and cloud. I have worked on enterprise and SaaS platforms, including regulated environments, with a focus on reliability, cost optimisation, observability and continuous improvement.',
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
    { group: { es: 'Nube y DevOps', en: 'Cloud & DevOps' }, items: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Azure DevOps', 'Linux', 'Serverless'] },
    { group: { es: 'Observabilidad', en: 'Observability' }, items: ['Datadog', 'Grafana', 'Zabbix', 'Graylog'] },
    { group: { es: 'Pruebas y calidad', en: 'Testing & quality' }, items: ['Karate', 'Playwright', 'Vitest', 'Postman / SoapUI', 'TestRail', 'TDD', 'ISTQB CTFL', 'ESLint'] },
    { group: { es: 'Lenguajes', en: 'Languages' }, items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Java', 'C#/.NET', 'SQL', 'Bash'] },
    { group: { es: 'Frontend y backend', en: 'Frontend & backend' }, items: ['React', 'Next.js', 'Angular', 'Vite', 'Tailwind CSS', 'PWA', 'Node.js', 'Express'] },
    { group: { es: 'Datos', en: 'Data' }, items: ['PostgreSQL / Supabase', 'Oracle', 'SQL Server', 'MySQL', 'MongoDB', 'Firebase', 'SQLite', 'Prisma'] },
  ] as { group: Localized; items: string[] }[],
};
