/** Current Preview documentation; section ids preserve existing deep links. */
export const docsSections = [
  {
    "id": "intro",
    "es": {
      "title": "1. Desarrollo guiado por especificaciones",
      "paragraphs": [
        "OmniSpec prepara instrucciones para tu agente y conserva contexto, decisiones y contratos en el repositorio. El agente ayuda a convertir una intención en un resultado verificable, tanto en un proyecto nuevo como en uno existente.",
        "El CLI comprueba estructura, integridad y evidencia registrada. La pertinencia de las pruebas y el significado de los requisitos requieren revisión; instalar el framework no certifica una aplicación."
      ]
    },
    "en": {
      "title": "1. Spec-driven development",
      "paragraphs": [
        "OmniSpec prepares agent instructions and keeps context, decisions and contracts in the repository. The agent helps turn intent into a verifiable outcome in both new and existing projects.",
        "The CLI checks structure, integrity and recorded evidence. Test relevance and requirement meaning still need review; installing the framework does not certify an application."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "instalacion",
    "es": {
      "title": "2. Instalar la Preview",
      "paragraphs": [
        "Requiere <strong>Node.js ≥22.19.0</strong>; no tiene dependencias runtime externas. Usa la raíz de tu proyecto o una carpeta nueva. El canal <code>preview</code> selecciona 0.8.0-preview.2, publicada el 28 de octubre de 2026; <code>latest</code> conserva 0.6.1.",
        "El <code>--yes</code> de npm acepta obtener el paquete. OmniSpec mantiene sus preguntas: idioma, herramienta con IA y confirmación de carpeta. Puedes elegir varias herramientas o <code>generic</code>. Usa flechas, Espacio y Enter; Esc o Ctrl+C cancelan antes de instalar.",
        "init instala archivos y comprueba integridad y versión local. No ejecuta scripts de tu aplicación. Tras la inicialización, tu agente de IA asiste en el onboarding conversacional guiado."
      ]
    },
    "en": {
      "title": "2. Install the Preview",
      "paragraphs": [
        "Requires <strong>Node.js ≥22.19.0</strong> with no external runtime dependencies. Use your project root or a new folder. The <code>preview</code> channel selects 0.8.0-preview.2, published on October 28, 2026; <code>latest</code> stays on 0.6.1.",
        "npm’s <code>--yes</code> accepts obtaining the package. OmniSpec still asks for language, AI tool and folder confirmation. Choose multiple tools or <code>generic</code>. Use arrows, Space and Enter; Esc or Ctrl+C cancel before installation.",
        "init installs files and checks integrity and local version. It does not run application scripts. Following initialization, your AI agent guides the conversational onboarding process."
      ]
    },
    "commands": [
      "npx --yes omni-spec@preview init",
      "npx --yes omni-spec@preview init --plain"
    ],
    "code": ""
  },
  {
    "id": "quickstart",
    "es": {
      "title": "2.1 Una carpeta, dos puntos de partida",
      "paragraphs": [
        "<strong>Proyecto nuevo:</strong> crea una carpeta, instala OmniSpec y abre esa misma carpeta en tu agente. Usa la invocación indicada: <code>/omni-init</code>, <code>@omni-init</code> en OpenCode, <code>$omni-init</code> en Codex o lectura explícita de la skill. Explica qué quieres construir; producto, tecnologías, documentación y checks se aclaran con el agente.",
        "<strong>Proyecto existente:</strong> instala en la raíz. El agente reconoce módulos, convenciones y comandos reales, conserva decisiones confirmadas y distingue lo declarado de lo ejecutado. Los scripts detectados quedan como candidatos <code>NOT_RUN</code>, no como gates implícitos.",
        "Para automatización añade el <code>--yes</code> de OmniSpec después de init. Para actualizar un proyecto existente, ejecuta <code>npx --yes omni-spec@0.8.0-preview.2 update --dry-run</code> y revisa el resultado antes de repetir sin <code>--dry-run</code>. init no migra versiones. Desde 0.7.0-rc.1 o rc.2 a esta Preview 0.8 no hace falta permitir un downgrade."
      ]
    },
    "en": {
      "title": "2.1 One folder, two starting points",
      "paragraphs": [
        "<strong>New project:</strong> create a folder, install OmniSpec and open that exact folder in your agent. Use the printed invocation: <code>/omni-init</code>, <code>@omni-init</code> in OpenCode, <code>$omni-init</code> in Codex or explicit skill reading. Describe what you want to build; product, technologies, documentation and checks are clarified with the agent.",
        "<strong>Existing project:</strong> install at its root. The agent recognizes modules, conventions and real commands, preserves confirmed decisions and separates declarations from execution. Detected scripts remain <code>NOT_RUN</code> candidates, not implicit gates.",
        "For automation, add OmniSpec’s <code>--yes</code> after init. To update an existing project, run <code>npx --yes omni-spec@0.8.0-preview.2 update --dry-run</code> and review the result before repeating without <code>--dry-run</code>. init does not migrate versions. Moving from 0.7.0-rc.1 or rc.2 to this 0.8 Preview does not require allowing a downgrade."
      ]
    },
    "commands": [
      "npx --yes omni-spec@preview init --agent opencode",
      "npx --yes omni-spec@preview init --yes --agent codex --lang es"
    ],
    "code": ""
  },
  {
    "id": "antigravity-plugin",
    "es": {
      "title": "2.2 Antigravity: instalar y actualizar el plugin",
      "paragraphs": [
        "Puedes usar las skills locales del proyecto con <code>init --agent antigravity</code> o el plugin global compartido por los proyectos de esta máquina. El plugin requiere Node.js ≥22.19.0 y se instala por separado; los comandos siguientes fijan la Preview 0.8.0-preview.2.",
        "<strong>Instalar:</strong> ejecuta el primer comando una vez. <strong>Consultar:</strong> el segundo muestra la versión del plugin instalado. <strong>Actualizar:</strong> usa el tercero si ya tienes el plugin; reemplaza el bundle global, así que conserva aparte cualquier personalización de ese directorio.",
        "<strong>Proyecto nuevo:</strong> después de instalar el plugin, ejecuta el cuarto comando desde la raíz del proyecto. <code>--agent plugin</code> prepara el proyecto para usar el plugin global. <strong>Proyecto existente:</strong> actualizar el plugin no migra sus archivos administrados; revisa <code>update --dry-run</code> desde su raíz antes de aplicar la actualización del proyecto.",
        "Si ya tienes skills locales de OmniSpec, revisa los avisos de coexistencia antes de cambiar al modo plugin. No borres carpetas de integraciones manualmente: <code>clean --dry-run</code> permite revisar la retirada de archivos administrados antes de ejecutar <code>clean</code>; conserva las especificaciones y trata las personalizaciones como conflictos.",
        "Tras instalar o actualizar, recarga Antigravity si hace falta y comprueba que descubre las skills del plugin. La instalación de archivos y <code>plugin status</code> no demuestran su descubrimiento en el host."
      ]
    },
    "en": {
      "title": "2.2 Antigravity: install and update the plugin",
      "paragraphs": [
        "Use project-local skills with <code>init --agent antigravity</code> or the global plugin shared by projects on this machine. The plugin requires Node.js ≥22.19.0 and is installed separately; the commands below pin Preview 0.8.0-preview.2.",
        "<strong>Install:</strong> run the first command once. <strong>Inspect:</strong> the second shows the installed plugin version. <strong>Update:</strong> use the third if you already have the plugin; it replaces the global bundle, so keep any customizations to that directory separately.",
        "<strong>New project:</strong> after installing the plugin, run the fourth command from the project root. <code>--agent plugin</code> prepares the project to use the global plugin. <strong>Existing project:</strong> updating the plugin does not migrate its managed files; review <code>update --dry-run</code> from its root before applying the project update.",
        "If you already have local OmniSpec skills, review coexistence warnings before switching to plugin mode. Do not delete integration folders manually: <code>clean --dry-run</code> previews managed file removal before running <code>clean</code>; it preserves specifications and treats customizations as conflicts.",
        "After installation or an update, reload Antigravity if needed and confirm it discovers the plugin skills. File installation and <code>plugin status</code> do not establish host discovery."
      ]
    },
    "commands": [
      "npx --yes omni-spec@0.8.0-preview.2 plugin install",
      "npx --yes omni-spec@0.8.0-preview.2 plugin status",
      "npx --yes omni-spec@0.8.0-preview.2 plugin update",
      "npx --yes omni-spec@0.8.0-preview.2 init --agent plugin"
    ],
    "code": ""
  },
  {
    "id": "constitucion",
    "es": {
      "title": "3. CONSTITUTION.md: acuerdos del proyecto",
      "paragraphs": [
        "La constitución recoge decisiones, convenciones de documentación, alcance y controles aplicables. El agente debe leerla y revisar discrepancias con la evidencia actual antes de proponer cambios.",
        "No es un bloqueo del sistema de archivos ni una garantía de comportamiento del modelo. update conserva la constitución propia y deja una referencia actualizada para comparar. Una modificación destructiva o una publicación requiere la autorización que corresponda."
      ]
    },
    "en": {
      "title": "3. CONSTITUTION.md: project agreements",
      "paragraphs": [
        "The constitution records decisions, documentation conventions, scope and applicable controls. The agent reads it and reconciles discrepancies with current evidence before proposing changes.",
        "It does not lock the filesystem or guarantee model behavior. update preserves your constitution and provides a current reference for comparison. Destructive changes and publication require the relevant authorization."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "anti-slop",
    "es": {
      "title": "3.1 Diseño y revisión con evidencia",
      "paragraphs": [
        "Para una interfaz nueva o un rediseño, acuerda referencias visuales, dirección y una superficie representativa antes de extender pantallas. Elige estados de carga, vacío, error o éxito cuando el producto los necesite; no hay una receta universal de cuatro estados.",
        "Revisa el resultado renderizado, recorrido, teclado y accesibilidad. Un build no acredita calidad visual. En backend, limita abstracciones y dependencias a necesidades verificadas y revisa contratos, errores y pruebas pertinentes.",
        "La arquitectura visual de OmniSpec 0.8 no requiere companions externos de terceros. Se gobierna directamente mediante kits de componentes nativos (<code>shadcn</code>, <code>radix</code>, <code>headlessui</code>, <code>preline</code>, <code>flyonui</code>) con <code>--ui-components</code> y las directrices del sistema en <code>guide design</code>.",
        "Los requerimientos y criterios de aceptación se estandarizan con la sintaxis formal EARS (Easy Approach to Requirements Syntax). Para tareas acotadas, el triaje dinámico permite inicializar especificaciones ligeras con <code>create --light</code> o <code>create --preset light</code>, escalando a standard o full solo cuando el alcance o los contratos lo exigen."
      ]
    },
    "en": {
      "title": "3.1 Design and review with evidence",
      "paragraphs": [
        "For a new interface or redesign, agree on references, direction and a representative surface before expanding screens. Choose loading, empty, error or success states when the product needs them; there is no universal four-state recipe.",
        "Review the rendered result, journey, keyboard behavior and accessibility. A build does not establish visual quality. For backend work, tie abstractions and dependencies to verified needs and review contracts, errors and relevant tests.",
        "OmniSpec 0.8 visual architecture requires no third-party companions. It is governed directly through native component kits (<code>shadcn</code>, <code>radix</code>, <code>headlessui</code>, <code>preline</code>, <code>flyonui</code>) with <code>--ui-components</code> and system guidelines in <code>guide design</code>.",
        "Requirements and acceptance criteria are standardized using formal EARS syntax (Easy Approach to Requirements Syntax). For scoped tasks, dynamic triage enables lightweight specifications via <code>create --light</code> or <code>create --preset light</code>, escalating to standard or full only when scope or contracts demand it."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "estructura",
    "es": {
      "title": "4. Archivos y contexto persistente",
      "paragraphs": [
        "El runtime, el estado y los contratos viven en <code>specs/</code>. Las integraciones utilizan las rutas de cada host; el ejemplo siguiente corresponde a Antigravity. Los registros de trabajo aparecen conforme avanzas.",
        "<code>specs/commands/omni-init.md</code> apunta a la skill instalada. En generic, los nueve prompts completos de esa carpeta son la vía principal. Los logs, tickets, entradas temporales y backups se mantienen separados del contrato del trabajo."
      ]
    },
    "en": {
      "title": "4. Files and persistent context",
      "paragraphs": [
        "Runtime, state and contracts live under <code>specs/</code>. Integrations use host-specific paths; the example below is for Antigravity. Work records appear as you progress.",
        "<code>specs/commands/omni-init.md</code> points to the installed skill. In generic mode, the nine complete prompts in that folder are the main interface. Logs, tickets, temporary inputs and backups are kept separate from the work contract."
      ]
    },
    "commands": [],
    "code": "AGENTS.md\nCONSTITUTION.md\n.agents/skills/omni-*/SKILL.md       # Antigravity / Codex / Copilot\n.agents/agents/omni-auditor.md      # Antigravity\nspecs/\n  manifest.json\n  project-context.md\n  project-state.json\n  checks.json\n  commands/omni-init.md            # recovery entry\n  manifest.lock/                  # temporary tickets\n  _templates/\n  001-example/\n    spec.md\n    acceptance.json\n    verification.json\n  .omni/runtime/"
  },
  {
    "id": "arquetipos",
    "es": {
      "title": "4.1 Cuatro tipos de trabajo, rigor proporcional",
      "paragraphs": [
        "<code>feature</code> utiliza spec.md; <code>bugfix</code>, bug.md; <code>debt</code>, audit.md; <code>rfc</code>, rfc.md. Cada uno conserva su propósito: funcionalidad, reproducción/causa/regresión, reducción de deuda o decisión.",
        "Fit v2 deriva light, standard o full según alcance, riesgo, incertidumbre y reversibilidad. light exige el contrato primario y aceptación; standard añade diseño y full el desglose de tareas. Una RFC registra una decisión. Sin fit válido no se omiten los controles de la ruta completa."
      ]
    },
    "en": {
      "title": "4.1 Four work types, proportional rigor",
      "paragraphs": [
        "<code>feature</code> uses spec.md; <code>bugfix</code>, bug.md; <code>debt</code>, audit.md; <code>rfc</code>, rfc.md. Their purposes remain distinct: functionality, reproduction/cause/regression, debt reduction or a decision.",
        "Fit v2 derives light, standard or full from scope, risk, uncertainty and reversibility. light needs the primary contract and acceptance; standard adds design and full adds task breakdown. An RFC records a decision. Without valid fit data, full-route controls are not omitted."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "manifest-lock",
    "es": {
      "title": "4.2 Estado y concurrencia",
      "paragraphs": [
        "manifest.json conserva la versión, configuración, trabajo activo e historial. <code>manifest.lock/</code> vacío es normal: contiene tickets temporales solo durante las escrituras de estado.",
        "Los checks utilizan un bloqueo de verificación separado. status y los registros de sesión/decisiones pueden responder durante verify; complete no se cruza con una verificación activa. La coordinación de comandos no restringe escrituras de otros programas."
      ]
    },
    "en": {
      "title": "4.2 State and concurrency",
      "paragraphs": [
        "manifest.json keeps version, configuration, active work and history. An empty <code>manifest.lock/</code> is normal: it contains temporary tickets only during state writes.",
        "Checks use a separate verification lock. status and session/decision records can respond during verify; complete refuses to race active verification. Command coordination does not restrict other programs from writing files."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "flujo-descubrimiento",
    "es": {
      "title": "5. Descubrir, conversar y aclarar",
      "paragraphs": [
        "<code>omni-init</code> reconoce el proyecto y registra contexto, capacidades y decisiones pendientes. <code>omni-discuss</code> explora la necesidad; <code>omni-clarify</code> resuelve ambigüedades materiales.",
        "Estas son skills del agente, distintas del comando CLI init. La invocación depende del host. No se crea una aplicación por terminar el reconocimiento y no se asume que existan herramientas de investigación o renderizado."
      ]
    },
    "en": {
      "title": "5. Discover, discuss and clarify",
      "paragraphs": [
        "<code>omni-init</code> recognizes the project and records context, capabilities and pending decisions. <code>omni-discuss</code> explores the need; <code>omni-clarify</code> resolves material ambiguity.",
        "These are agent skills, distinct from CLI init. Invocation depends on the host. Finishing recognition does not create an application or assume research/rendering tools exist."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "flujo-contratos",
    "es": {
      "title": "5.1 Especificar, planificar y organizar",
      "paragraphs": [
        "<code>omni-specify</code> formaliza necesidad, alcance, exclusiones y criterios identificados. <code>omni-plan</code> conecta el diseño con esos criterios. <code>omni-tasks</code> organiza el trabajo cuando su rigor lo requiere.",
        "Las decisiones confirmadas se conservan. Los criterios funcionales, visuales, de interacción, accesibilidad o decisión requieren evidencia acorde con su tipo. El agente revisa el significado; un archivo con suficiente texto no demuestra coherencia."
      ]
    },
    "en": {
      "title": "5.1 Specify, plan and organize",
      "paragraphs": [
        "<code>omni-specify</code> formalizes need, scope, exclusions and identified criteria. <code>omni-plan</code> connects design to those criteria. <code>omni-tasks</code> organizes work when the selected rigor requires it.",
        "Confirmed decisions are preserved. Functional, visual, interaction, accessibility and decision criteria need evidence appropriate to their type. The agent reviews meaning; enough text in a file does not prove consistency."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "flujo-ejecucion",
    "es": {
      "title": "5.2 Implementar, auditar y cerrar",
      "paragraphs": [
        "<code>omni-implement</code> trabaja sobre el alcance acordado. <code>omni-audit</code> combina la comprobación estructural del CLI con la revisión de consistencia del agente. En Antigravity se instala la definición omni-auditor; solo se informa revisión independiente si realmente se ejecutó.",
        "<code>omni-converge</code> revisa lo entregado, la evidencia y los pendientes. verify ejecuta checks configurados y registra una huella; complete exige contexto vigente, criterios cubiertos y evidencia válida, sin cambios posteriores que la invaliden. Una entrega parcial conserva lo pendiente."
      ]
    },
    "en": {
      "title": "5.2 Implement, audit and close",
      "paragraphs": [
        "<code>omni-implement</code> works within agreed scope. <code>omni-audit</code> combines CLI structural checks with agent consistency review. Antigravity receives an omni-auditor definition; a separate review is reported only if it actually ran.",
        "<code>omni-converge</code> reviews delivery, evidence and remaining work. verify runs configured checks and records a fingerprint; complete requires current context, covered criteria and valid evidence without later invalidating changes. Partial delivery keeps outstanding work visible."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "perfiles-intro",
    "es": {
      "title": "6. Perfiles como revisión de aplicabilidad",
      "paragraphs": [
        "Los perfiles aportan controles del dominio para revisar con el agente. No certifican cumplimiento normativo ni fuerzan una base de datos, tenancy, cifrado o arquitectura para todos los proyectos.",
        "Puedes declarar un perfil con <code>--profile</code> si ya lo decidiste. El instalador no lo convierte en un cuestionario obligatorio: primero se comprende el producto y sus restricciones."
      ]
    },
    "en": {
      "title": "6. Profiles as applicability reviews",
      "paragraphs": [
        "Profiles supply domain controls to review with the agent. They do not certify regulatory compliance or force one database, tenancy model, encryption setup or architecture on every project.",
        "Declare a profile with <code>--profile</code> if already decided. The installer does not make it a mandatory questionnaire: understand the product and constraints first."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "perfiles-catalogo",
    "es": {
      "title": "6.1 Perfiles disponibles",
      "paragraphs": [
        "Cada perfil conserva preguntas y controles pertinentes al dominio. La aplicación efectiva se registra y comprueba en el proyecto."
      ]
    },
    "en": {
      "title": "6.1 Available profiles",
      "paragraphs": [
        "Each profile preserves domain-relevant questions and controls. Their actual application is recorded and checked in the project."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "adaptadores-agentes",
    "es": {
      "title": "7. Integraciones y recuperación",
      "paragraphs": [
        "Las rutas siguientes son las instaladas por 0.8.0 Preview. Si la skill no aparece, reabre el proyecto o pide al agente que lea la ruta exacta mostrada por el instalador.",
        "El plugin global de Antigravity se instala por separado. Comprueba la versión que lee el host si existe una instalación global anterior. Los archivos instalados no prueban descubrimiento ni conceden herramientas o permisos."
      ]
    },
    "en": {
      "title": "7. Integrations and recovery",
      "paragraphs": [
        "The following paths are installed by 0.8.0 Preview. If a skill is missing, reopen the project or ask the agent to read the exact path printed by the installer.",
        "The global Antigravity plugin is installed separately. Check the version read by the host if an older global installation exists. Installed files do not prove discovery or grant tools or permissions."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "quality-gates",
    "es": {
      "title": "7.1 Checks, criterios y evidencia",
      "paragraphs": [
        "Configura checks por módulo con ID, comando, cwd y timeout, o conserva los gates heredados del proyecto. Los comandos detectados no se ejecutan durante la instalación. verify registra resultados; un comando inexistente o un timeout no cuenta como aprobación.",
        "acceptance.json vincula cada criterio a pruebas o evidencia específica. Una observación visual requiere una superficie renderizada; el código o un build no la sustituyen. La huella respeta .gitignore, .omnispecignore y exclusiones de salidas generadas, salvo los artefactos de la spec activa, que se incluyen para proteger su contrato. Detecta cambios posteriores; no demuestra ausencia universal de defectos."
      ]
    },
    "en": {
      "title": "7.1 Checks, criteria and evidence",
      "paragraphs": [
        "Configure checks per module with ID, command, cwd and timeout, or preserve legacy project gates. Detected commands are not run during installation. verify records results; a missing command or timeout is not a pass.",
        "acceptance.json links each criterion to tests or specific evidence. Visual observations require a rendered surface; source or a build cannot replace it. The fingerprint respects .gitignore, .omnispecignore and generated-output exclusions, except for the active spec’s artifacts, which are included to protect its contract. It detects later changes; it does not prove universal absence of defects."
      ]
    },
    "commands": [],
    "code": ""
  }
];
