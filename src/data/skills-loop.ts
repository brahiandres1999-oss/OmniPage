export interface SkillStep {
  id: string;
  stage: 1 | 2 | 3;
  number: string;
  command: string;
  size: string;
  shortTitle: {
    es: string;
    en: string;
  };
  mission: {
    es: string;
    en: string;
  };
  instruction: {
    es: string;
    en: string;
  };
  badge?: {
    es: string;
    en: string;
    variant: 'neutral' | 'gate' | 'success';
  };
}

export interface StageInfo {
  number: string;
  title: {
    es: string;
    en: string;
  };
  subtitle: {
    es: string;
    en: string;
  };
}

export const stages: Record<1 | 2 | 3, StageInfo> = {
  1: {
    number: '01',
    title: {
      es: 'Onboarding & Alcance',
      en: 'Onboarding & Scope'
    },
    subtitle: {
      es: '4 skills · Descubrimiento y especificación EARS',
      en: '4 skills · Discovery and formal EARS spec'
    }
  },
  2: {
    number: '02',
    title: {
      es: 'Diseño & Planificación',
      en: 'Design & Planning'
    },
    subtitle: {
      es: '3 skills · Arquitectura YAGNI y auditoría previa',
      en: '3 skills · YAGNI architecture and pre-audit'
    }
  },
  3: {
    number: '03',
    title: {
      es: 'Cirugía & Verificación',
      en: 'Surgery & Verification'
    },
    subtitle: {
      es: '2 skills · Código Anti-Slop y evidencia ejecutable',
      en: '2 skills · Anti-Slop code and executable evidence'
    }
  }
};

export const skillsLoop: SkillStep[] = [
  {
    id: 'init',
    stage: 1,
    number: '01',
    command: '/omni-init',
    size: '22.5 KB',
    shortTitle: {
      es: 'Onboarding del repositorio',
      en: 'Repository onboarding'
    },
    mission: {
      es: 'Reconocimiento inicial de cualquier repositorio.',
      en: 'Initial discovery and reconnaissance of any codebase.'
    },
    instruction: {
      es: 'Inspecciona package.json, Git y linters con el detector heurístico. Tiene prohibido inventar dependencias, prohibido modificar código de la aplicación y prohibido ejecutar scripts no revisados. Solo puede escribir specs/project-context.md.',
      en: 'Inspect package.json, Git and linters with heuristic detection. Forbidden from inventing dependencies, modifying app code, or running uninspected scripts. Can only write specs/project-context.md.'
    },
    badge: {
      es: 'READ-ONLY',
      en: 'READ-ONLY',
      variant: 'neutral'
    }
  },
  {
    id: 'discuss',
    stage: 1,
    number: '02',
    command: '/omni-discuss',
    size: '8.5 KB',
    shortTitle: {
      es: 'Exploración libre y debate',
      en: 'Open discovery & trade-offs'
    },
    mission: {
      es: 'Exploración abierta de ideas y dudas técnicas.',
      en: 'Open exploration of ideas and technical doubts.'
    },
    instruction: {
      es: 'Prohibido crear especificaciones o escribir código por una simple pregunta exploratoria. Compara alternativas, ventajas y desventajas. Si el usuario decide avanzar, guíalo hacia specify.',
      en: 'Forbidden from creating specifications or writing code for an exploratory question. Compare trade-offs and alternatives. If user proceeds, guide towards specify.'
    }
  },
  {
    id: 'specify',
    stage: 1,
    number: '03',
    command: '/omni-specify',
    size: '8.2 KB',
    shortTitle: {
      es: 'Crea spec y criterios EARS',
      en: 'Spec & EARS criteria'
    },
    mission: {
      es: 'Formalizar una solicitud en un tipo de trabajo (feature, bugfix, debt o rfc).',
      en: 'Formalize a request into work archetypes (feature, bugfix, debt, rfc).'
    },
    instruction: {
      es: 'Evalúa el triaje ceremonial (omni-spec fit). Redacta criterios de aceptación obligatorios bajo sintaxis formal EARS (AC-01 [functional]). Define explícitamente lo que está FUERA de alcance (Non-Goals) para evitar desviaciones.',
      en: 'Evaluate ceremonial triage (omni-spec fit). Write mandatory acceptance criteria using formal EARS syntax (AC-01 [functional]). Explicitly declare Non-Goals to avoid scope drift.'
    },
    badge: {
      es: 'EARS SYNTAX',
      en: 'EARS SYNTAX',
      variant: 'neutral'
    }
  },
  {
    id: 'clarify',
    stage: 1,
    number: '04',
    command: '/omni-clarify',
    size: '7.2 KB',
    shortTitle: {
      es: 'Resuelve dudas con el usuario',
      en: 'Resolve business ambiguities'
    },
    mission: {
      es: 'Resolver ambigüedades antes de diseñar.',
      en: 'Resolve ambiguities before technical design.'
    },
    instruction: {
      es: 'No pases a programar a ciegas. Si faltan reglas de negocio o límites de API, haz preguntas concretas al usuario y registra las respuestas en la spec.',
      en: 'Do not code blindly. If business rules or API boundaries are missing, ask targeted questions and record answers in the spec.'
    }
  },
  {
    id: 'plan',
    stage: 2,
    number: '05',
    command: '/omni-plan',
    size: '10.8 KB',
    shortTitle: {
      es: 'Diseño técnico y arquitectura',
      en: 'Architecture & contracts'
    },
    mission: {
      es: 'Diseño técnico proporcional.',
      en: 'Proportional technical design.'
    },
    instruction: {
      es: 'Define contratos de datos, observabilidad de errores y la matriz de 4 estados de UI si toca pantallas. Aplica YAGNI estricto: prohibido inventar capas de servicios, repositorios o fábricas innecesarias si una función directa basta.',
      en: 'Define data contracts, error observability, and 4-state UI matrix. Enforce strict YAGNI: forbidden from inventing speculative service layers, repositories or factories if a direct function suffices.'
    },
    badge: {
      es: 'YAGNI STRICT',
      en: 'YAGNI STRICT',
      variant: 'neutral'
    }
  },
  {
    id: 'tasks',
    stage: 2,
    number: '06',
    command: '/omni-tasks',
    size: '7.7 KB',
    shortTitle: {
      es: 'Desglose de tareas atómicas',
      en: 'Atomic task breakdown'
    },
    mission: {
      es: 'Desglose secuencial de tareas.',
      en: 'Sequential task breakdown.'
    },
    instruction: {
      es: 'Crea solo las tareas necesarias vinculadas a un criterio de aceptación AC-n. Prohibido inflar tareas con micro-pasos redundantes.',
      en: 'Create only necessary tasks explicitly bound to an acceptance criterion AC-n. Forbidden from inflating tasks with redundant micro-steps.'
    }
  },
  {
    id: 'audit',
    stage: 2,
    number: '07',
    command: '/omni-audit',
    size: '7.6 KB',
    shortTitle: {
      es: 'Auditoría documental previa',
      en: 'Pre-implementation audit'
    },
    mission: {
      es: 'Auditoría previa de coherencia.',
      en: 'Pre-implementation coherence audit.'
    },
    instruction: {
      es: 'Ejecuta omni-spec audit. Si hay contradicciones entre lo que pide el usuario, el plan y las tareas, DETÉN la ejecución antes de tocar código.',
      en: 'Run omni-spec audit. If there are contradictions between user intent, technical plan and tasks, HALT execution before touching code.'
    },
    badge: {
      es: 'QUALITY GATE',
      en: 'QUALITY GATE',
      variant: 'gate'
    }
  },
  {
    id: 'implement',
    stage: 3,
    number: '08',
    command: '/omni-implement',
    size: '8.8 KB',
    shortTitle: {
      es: 'Código con 5 reglas Anti-Slop',
      en: '5 Anti-Slop code rules'
    },
    mission: {
      es: 'Programación y cirugía de código (Minimal Touch Surgery).',
      en: 'Code implementation and Minimal Touch Surgery.'
    },
    instruction: {
      es: 'Modifica únicamente los archivos aprobados en el plan. Cumple estrictamente las 5 reglas Anti-Slop: cero any, cero tests con mocks falsos, 4 estados en UI, cero abstracciones especulativas y cero dependencias nuevas sin autorización.',
      en: 'Modify only files approved in the plan. Strictly enforce 5 Anti-Slop rules: zero any, zero tests with fake mocks, 4 UI states, zero speculative wrappers, and zero unauthorized new dependencies.'
    },
    badge: {
      es: 'MINIMAL TOUCH',
      en: 'MINIMAL TOUCH',
      variant: 'neutral'
    }
  },
  {
    id: 'converge',
    stage: 3,
    number: '09',
    command: '/omni-converge',
    size: '11.0 KB',
    shortTitle: {
      es: 'Verificación de pruebas y cierre',
      en: 'Proof verification & close'
    },
    mission: {
      es: 'Verificación de evidencia y cierre del ciclo.',
      en: 'Evidence verification and cycle closure.'
    },
    instruction: {
      es: 'Ejecuta omni-spec verify. Verifica que todas las pruebas pasen con exit code 0. Si el contexto está inflado, destílalo. Solo si todo está demostrado con evidencia real, ejecuta omni-spec complete.',
      en: 'Run omni-spec verify. Verify all tests pass with exit code 0. If context is bloated, distill it. Only when everything is proven with executable evidence, execute omni-spec complete.'
    },
    badge: {
      es: 'EXIT 0',
      en: 'EXIT 0',
      variant: 'success'
    }
  }
];
