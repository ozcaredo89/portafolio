import type { Lang } from './ui';

// Keep this text truthful: it must match src/scripts/analytics.ts and spec 0008.
export const privacy: Record<
  Lang,
  {
    title: string;
    metaTitle: string;
    back: string;
    intro: string;
    blocks: { heading: string; items: string[] }[];
    contact: string;
    updated: string;
  }
> = {
  es: {
    title: 'Privacidad y medición',
    metaTitle: 'Privacidad y medición — Oscar Hincapié',
    back: 'Volver al portafolio',
    intro:
      'Este portafolio mide de forma anónima cuántas personas lo visitan y qué partes resultan útiles, para mejorarlo. No vendo ni comparto estos datos con nadie.',
    blocks: [
      {
        heading: 'Qué se mide',
        items: [
          'Cuántas veces se visita la página (conteo agregado, que es el número que ves arriba).',
          'Dónde se hace clic, hacia dónde se mueve el mouse y hasta dónde se desplaza la página, en forma de mapas de calor.',
          'Qué secciones llegan a mostrarse en pantalla y en qué enlaces se hace clic.',
          'País y navegador aproximados, que el contador deduce al instante.',
        ],
      },
      {
        heading: 'Qué no se mide',
        items: [
          'No uso cookies ni guardo identificadores en tu navegador.',
          'No grabo sesiones, teclas ni nada de lo que escribas.',
          'No recojo nombre, correo ni otros datos personales de los visitantes.',
          'No guardo tu dirección IP en mis datos. El contador la usa solo en memoria, hasta 8 horas, para reconocer visitas repetidas.',
        ],
      },
      {
        heading: 'Servicios que uso',
        items: [
          'GoatCounter: contador de visitas, sin cookies.',
          'PostHog: mapas de calor y eventos anónimos, configurado sin identificadores persistentes, sin perfiles de personas y con las grabaciones desactivadas.',
        ],
      },
      {
        heading: 'Tus opciones',
        items: [
          'Si tu navegador envía «No rastrear» (DNT) o «Global Privacy Control», no se mide nada.',
          'Los bloqueadores de anuncios y de rastreadores también lo impiden, y el sitio funciona igual.',
        ],
      },
    ],
    contact: 'Si tienes dudas o quieres que borre algo, escríbeme a',
    updated: 'Actualizado: noviembre de 2026',
  },
  en: {
    title: 'Privacy and measurement',
    metaTitle: 'Privacy and measurement — Oscar Hincapié',
    back: 'Back to the portfolio',
    intro:
      'This portfolio anonymously measures how many people visit it and which parts are useful, so I can improve it. I do not sell or share this data with anyone.',
    blocks: [
      {
        heading: 'What is measured',
        items: [
          'How many times the page is visited (an aggregate count: the number you see at the top).',
          'Where people click, where the mouse moves and how far the page is scrolled, as heatmaps.',
          'Which sections reach the screen and which links are clicked.',
          'Approximate country and browser, which the counter infers instantly.',
        ],
      },
      {
        heading: 'What is not measured',
        items: [
          'No cookies and no identifiers stored in your browser.',
          'No session recordings, keystrokes or anything you type.',
          'No name, email or other personal data from visitors.',
          'I do not store your IP address. The counter uses it only in memory, for up to 8 hours, to recognise repeat visits.',
        ],
      },
      {
        heading: 'Services I use',
        items: [
          'GoatCounter: visit counter, cookie-free.',
          'PostHog: heatmaps and anonymous events, configured with no persistent identifiers, no person profiles and recordings turned off.',
        ],
      },
      {
        heading: 'Your choices',
        items: [
          'If your browser sends “Do Not Track” (DNT) or “Global Privacy Control”, nothing is measured.',
          'Ad and tracker blockers also prevent it, and the site works the same.',
        ],
      },
    ],
    contact: 'Questions, or want something deleted? Write to',
    updated: 'Updated: November 2026',
  },
};
