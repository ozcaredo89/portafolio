import type { Localized, LocalizedList } from './projects';

// Source: owner's CV (03/2026). Employers are kept; end-client names are not published (AGENTS.md).
// Dates are `YYYY-MM`; `to: null` means current.
export interface Role {
  id: string;
  from: string;
  to: string | null;
  role: Localized;
  company: string;
  /** Parent company / product line shown next to the employer. */
  via?: string;
  focus?: Localized;
  highlights: LocalizedList;
  stack: string[];
}

export const experience: Role[] = [
  {
    id: 'apptega',
    from: '2024-10',
    to: null,
    role: { es: 'Software Engineer', en: 'Software Engineer' },
    company: 'CAFETO',
    via: 'Apptega',
    focus: {
      es: 'Automatización de QA, frameworks de pruebas y CI/CD',
      en: 'QA automation, test frameworks and CI/CD',
    },
    highlights: {
      es: [
        'Diseño y mantenimiento de infraestructura como código (Terraform) y pipelines CI/CD que sostienen servicios críticos en varios ambientes.',
        'Frameworks de pruebas automatizadas (Karate) integrados al CI/CD para dar confianza en los despliegues y reducir regresiones.',
        'Resolución de incidentes en producción, con mejor observabilidad y análisis de causa raíz mediante logging y monitoreo.',
        'Runbooks, postmortems y procedimientos operativos documentados para acelerar al equipo.',
      ],
      en: [
        'Designed and maintained Infrastructure as Code (Terraform) and CI/CD pipelines supporting critical services across environments.',
        'Automated test frameworks (Karate) wired into CI/CD to raise deployment confidence and reduce regressions.',
        'Led production incident resolution, improving observability and root-cause analysis through logging and monitoring.',
        'Documented runbooks, postmortems and operational procedures to speed up the team.',
      ],
    },
    stack: ['Terraform', 'AWS', 'Docker', 'Karate', 'PHP', 'Node.js', 'DDD', 'Datadog'],
  },
  {
    id: 'alchemi',
    from: '2024-06',
    to: '2024-10',
    role: { es: 'Software Engineer — QA', en: 'Software Engineer — QA' },
    company: 'CAFETO',
    via: 'Alchemi',
    highlights: {
      es: [
        'Cumplimiento de SLA con documentación y pruebas automatizadas en múltiples ambientes.',
        'Automatización con Python de simulaciones de servidores y herramientas de diagnóstico.',
        'Pruebas automatizadas en distintos sistemas operativos, integradas a pipelines CI/CD.',
      ],
      en: [
        'SLA compliance through documentation and automated tests across multiple environments.',
        'Python automation of server simulations and troubleshooting tools.',
        'Automated tests across operating systems, integrated into CI/CD pipelines.',
      ],
    },
    stack: ['Azure DevOps', 'Terraform', 'Playwright', 'Python', 'Linux', 'Graylog'],
  },
  {
    id: 'pros-support',
    from: '2020-12',
    to: '2024-06',
    role: { es: 'Software Engineer — Soporte de producto (Nivel 2)', en: 'Software Engineer — Product Support (Level 2)' },
    company: 'CAFETO',
    via: 'PROS Holdings',
    highlights: {
      es: [
        'Cumplimiento de SLA mediante monitoreo, documentación y gestión de incidentes.',
        'Diagnóstico y resolución con análisis de causa raíz, entregando soluciones permanentes.',
        'Herramientas y scripts de automatización para diagnosticar y mantener la base de conocimiento.',
        'Recomendaciones de buenas prácticas y mejoras de arquitectura a partir de lo que pedían los clientes.',
      ],
      en: [
        'SLA compliance through incident monitoring, documentation and management.',
        'Diagnosis and resolution with root-cause analysis, delivering permanent fixes.',
        'Automation tools and scripts to troubleshoot issues and maintain the knowledge base.',
        'Best-practice and architecture recommendations driven by customer insight.',
      ],
    },
    stack: ['C#/.NET', 'SQL Server', 'Azure', 'Grafana', 'Zabbix', 'Graylog', 'Bash'],
  },
  {
    id: 'pros-cloud',
    from: '2017-05',
    to: '2020-11',
    role: { es: 'Software Engineer — Cloud Operations', en: 'Software Engineer — Cloud Operations' },
    company: 'CAFETO',
    via: 'PROS Holdings',
    highlights: {
      es: [
        'Soporte de producto en un entorno ágil y de ritmo rápido, por teléfono, correo, autoservicio y chat.',
        'Triage, reproducción y resolución de incidentes con análisis sobre bases de datos y scripts; escalamiento cuando hacía falta.',
        'Material y sesiones de capacitación para clientes, y participación en llamadas de seguimiento.',
      ],
      en: [
        'Product support in a fast-paced agile environment across phone, email, self-service and chat.',
        'Triage, reproduction and resolution of incidents, with database and script analysis; escalation when needed.',
        'Training material and sessions for customers, plus status calls.',
      ],
    },
    stack: ['SQL Server', 'Oracle', 'Linux', 'Zabbix', 'Grafana', 'JIRA'],
  },
  {
    id: 'aloti',
    from: '2024-03',
    to: '2024-05',
    role: { es: 'Desarrollador Front-end Angular (freelance)', en: 'Angular Front-end Developer (freelance)' },
    company: 'Aloti Software',
    highlights: {
      es: [
        'Servicios web y componentes de UI con validación de payloads para asegurar el flujo de datos.',
        'Arquitectura MVC con view models y controladores que conectan los servicios con la interfaz.',
      ],
      en: [
        'Web services and UI components, validating payloads to ensure correct data flow.',
        'MVC architecture with view models and controllers connecting services to the UI.',
      ],
    },
    stack: ['Angular', 'TypeScript', 'REST'],
  },
];

/** Earlier roles: shown collapsed. */
export const earlier: Role[] = [
  {
    id: 'emcali-senior',
    from: '2017-06',
    to: '2017-12',
    role: { es: 'Ingeniero de sistemas — Full-stack senior', en: 'Systems Engineer — Senior Full-stack Developer' },
    company: 'EMCALI E.I.C.E. E.S.P',
    highlights: {
      es: [
        'Ingeniería de requisitos para dos unidades de negocio (energía y acueducto) para resolver problemas de facturación.',
        'Diseño y automatización de módulos para activar el servicio de energía prepago, y alertas por SMS antes de que venza el saldo.',
      ],
      en: [
        'Requirements engineering for two business units (energy and water) to solve billing issues.',
        'Designed and automated modules to activate prepaid energy service, plus SMS alerts before the balance expires.',
      ],
    },
    stack: ['PHP', 'Oracle', 'JavaScript', 'SOAP UI'],
  },
  {
    id: 'eme',
    from: '2016-03',
    to: '2016-08',
    role: { es: 'Desarrollador full-stack (freelance)', en: 'Full-stack Developer (freelance)' },
    company: 'EME Marketing & Consulting',
    highlights: {
      es: ['Mega menú responsivo para un e-commerce con lógica de categorías, subcategorías e imágenes promocionales, desde una aplicación .NET.'],
      en: ['Responsive mega menu for an e-commerce site with category, subcategory and promotional-image logic, from a .NET application.'],
    },
    stack: ['C#/.NET', 'ASP.NET', 'E-commerce'],
  },
  {
    id: 'emcali-lead',
    from: '2014-02',
    to: '2016-09',
    role: { es: 'Ingeniero de sistemas — Líder de equipo full-stack', en: 'Systems Engineer — Full-stack Team Lead' },
    company: 'EMCALI E.I.C.E. E.S.P',
    highlights: {
      es: [
        'Liderazgo del equipo de desarrollo interno: evaluación de procesos de soporte y mejoras.',
        'Bot que inicia sesión en la plataforma del proveedor y obtiene la guía de programación (EPG) del servicio de IPTV.',
        'Servicio que publica la programación en la web y la carga para verla desde el televisor del cliente.',
      ],
      en: [
        'Led the in-house development team: reviewed support processes and drove improvements.',
        'Built a bot that logs into the provider platform and collects EPG data for the IPTV service.',
        'Built the service that publishes the schedule on the web and loads it for viewing on customers’ TVs.',
      ],
    },
    stack: ['PHP', 'Java', 'MySQL', 'cURL'],
  },
  {
    id: 'emcali-junior',
    from: '2013-05',
    to: '2014-02',
    role: { es: 'Ingeniero de sistemas — Full-stack junior', en: 'Systems Engineer — Junior Full-stack Developer' },
    company: 'EMCALI E.I.C.E. E.S.P',
    highlights: {
      es: [
        'Módulos de comunicación entre el sistema de información y los equipos en casa del cliente (IPTV, internet y telefonía).',
        'Apoyo en la configuración de servicios en la infraestructura de red para el middleware.',
      ],
      en: [
        'Modules for communication between the information system and customer-premises devices (IPTV, internet and telephony).',
        'Helped configure services on the network infrastructure for the middleware.',
      ],
    },
    stack: ['PHP', 'Oracle', 'MySQL', 'Perl'],
  },
  {
    id: 'ingesoft',
    from: '2011-07',
    to: '2013-05',
    role: { es: 'Desarrollador full-stack', en: 'Full-stack Developer' },
    company: 'Ingesoft',
    highlights: {
      es: [
        'Módulos y reportes financieros (transacciones, cuentas y comisiones) con CRUD, Crystal Reports y procedimientos almacenados.',
        'Pruebas y control de versiones antes de cada despliegue a producción para varios clientes.',
        'Ingeniería de requisitos para proyectos bancarios y de manufactura.',
      ],
      en: [
        'Financial modules and reports (transactions, accounts and fees) with CRUD, Crystal Reports and stored procedures.',
        'Testing and version control before each production deployment for multiple customers.',
        'Requirements engineering for banking and manufacturing projects.',
      ],
    },
    stack: ['C#/.NET', 'Oracle', 'SVN', 'Kanban'],
  },
];

export const education = {
  degrees: [
    {
      title: { es: 'Ingeniería de Sistemas', en: 'Systems Engineering' },
      place: 'Fundación Universitaria San Martín · Cali',
      years: '2005 – 2011',
    },
    {
      title: { es: 'Desarrollo de aplicaciones web multicapa en Java', en: 'Multilayered Web Application Development in Java' },
      place: '',
      years: '2010 – 2011',
    },
  ] as { title: Localized; place: string; years: string }[],
  certifications: [
    'ISTQB Certified Tester (CTFL) · 2024',
    'Angular Professional 8 · Platzi',
    'Python Essentials 1 · Cisco · 2023',
    'DevOps Foundations: CI/CD',
    'Linux Server Management · Platzi',
    'Basic React JS · GreatLearning · 2024',
    'Java Application Development · SENA',
  ],
  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'C1 (EF SET 62/100)', en: 'C1 (EF SET 62/100)' } },
  ] as { name: Localized; level: Localized }[],
};
