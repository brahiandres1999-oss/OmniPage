export type AnatomyLayer = 'plinth' | 'feature' | 'bugfix' | 'techdebt' | 'rfc' | 'verify';

  interface LayerSpecCopy {
    title: string;
    role: string;
    href: string;
    cta: string;
  }

/** Bilingual explanations shared by every ASCII layer readout. */
export const LAYER_COPY: Record<'es' | 'en', Record<AnatomyLayer, LayerSpecCopy>> = {
    es: {
      plinth: {
        title: 'CONSTITUTION.md',
        role: 'Reglas invariantes y límites del repositorio que anclan cada sesión.',
        href: '#leyes',
        cta: 'Ver arquitectura →',
      },
      feature: {
        title: 'feature · /omni-specify',
        role: 'Especificación, plan proporcional, tareas y pruebas verificadas.',
        href: '#canvas',
        cta: 'Ver flujo en vivo →',
      },
      bugfix: {
        title: 'bugfix · reproducción',
        role: 'Aísla causa raíz con evidencia reproducible antes de editar código.',
        href: '#caos-vs-spec',
        cta: 'Comparar flujo →',
      },
      techdebt: {
        title: 'debt · blast-radius',
        role: 'Mide impacto en dependencias y refactoriza sin romper contratos.',
        href: '#leyes',
        cta: 'Ver controles →',
      },
      rfc: {
        title: 'rfc · /omni-discuss',
        role: 'Explora decisiones y riesgos de diseño antes de implementar.',
        href: '#empezar',
        cta: 'Cómo empezar →',
      },
      verify: {
        title: 'verify · /omni-converge',
        role: 'Compuerta final: exige evidencia ejecutada y sello HMAC-SHA256.',
        href: '#canvas',
        cta: 'Inspeccionar sello →',
      },
    },
    en: {
      plinth: {
        title: 'CONSTITUTION.md',
        role: 'Repository invariants and engineering boundaries grounding every run.',
        href: '#leyes',
        cta: 'Inspect architecture →',
      },
      feature: {
        title: 'feature · /omni-specify',
        role: 'Spec contract, proportional plan, executable tasks, and checks.',
        href: '#canvas',
        cta: 'See workflow live →',
      },
      bugfix: {
        title: 'bugfix · reproduction',
        role: 'Isolates root cause with reproducible evidence before code edits.',
        href: '#caos-vs-spec',
        cta: 'Compare approach →',
      },
      techdebt: {
        title: 'debt · blast-radius',
        role: 'Maps dependency impact and refactors without breaking contracts.',
        href: '#leyes',
        cta: 'See controls →',
      },
      rfc: {
        title: 'rfc · /omni-discuss',
        role: 'Evaluates design tradeoffs and architecture before writing code.',
        href: '#empezar',
        cta: 'Quickstart →',
      },
      verify: {
        title: 'verify · /omni-converge',
        role: 'Final gate: enforces executed checks and HMAC-SHA256 seal.',
        href: '#canvas',
        cta: 'Inspect seal →',
      },
    },
  };

