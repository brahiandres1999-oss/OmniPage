/** Documentación oficial de OmniSpec 0.8.0 Estable. Los identificadores de sección preservan enlaces profundos. */
export const docsSections = [
  {
    "id": "intro",
    "es": {
      "title": "1. El Manifiesto SDD: De la Alucinación a la Certeza",
      "paragraphs": [
        "Los agentes de Inteligencia Artificial son extraordinarios implementando funciones puntuales, pero sufren de tres problemas crónicos: <strong>amnesia de contexto</strong> entre sesiones, <strong>sobreingeniería prematura</strong> (*overengineering*) y <strong>modificación no controlada de código adyacente</strong> (*code slop*).",
        "<strong>OmniSpec</strong> introduce el estándar de <em>Desarrollo Guiado por Especificaciones</em> (Spec-Driven Development / SDD): el repositorio es la fuente de la verdad duradera. Ningún agente escribe una sola línea de código sin antes acordar un contrato formal, un plan proporcional y criterios de aceptación verificables con evidencia ejecutable.",
        "Un motor determinista con arquitectura <strong>Zero Runtime Dependencies</strong> (<code>dependencies: {}</code>) que garantiza soberanía sobre tu código, reduce más del 70% del consumo de tokens y blinda tu proyecto contra regresiones silenciosas."
      ]
    },
    "en": {
      "title": "1. The SDD Manifesto: From Hallucination to Certainty",
      "paragraphs": [
        "AI agents are remarkably capable at writing single functions, yet they suffer from three chronic pitfalls: <strong>context amnesia</strong> across sessions, <strong>premature overengineering</strong>, and <strong>uncontrolled adjacent edits</strong> (*code slop*).",
        "<strong>OmniSpec</strong> introduces the <em>Spec-Driven Development</em> (SDD) engineering standard: the repository is the single source of durable truth. No agent writes a single line of code without first establishing a formal contract, a proportional plan, and acceptance criteria validated by executable evidence.",
        "A deterministic engine built with <strong>Zero Runtime Dependencies</strong> (<code>dependencies: {}</code>) that guarantees absolute codebase sovereignty, cuts token consumption by over 70%, and protects your application against silent regressions."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "instalacion",
    "es": {
      "title": "2. Punto de Partida: Quickstart en 30 Segundos",
      "paragraphs": [
        "OmniSpec requiere <strong>Node.js ≥22.19.0</strong> (Node 22 LTS o Node 24 Current) o <strong>Bun 1.1+</strong>. No descarga dependencias ajenas ni modifica variables globales del sistema.",
        "Abre una terminal en la carpeta de tu proyecto y ejecuta el comando insignia. El flag <code>--yes</code> de npm acepta obtener el paquete oficial publicado en el canal <code>latest</code>, mientras que OmniSpec despliega un asistente interactivo con teclado para seleccionar tu idioma y tus herramientas de IA preferidas.",
        "¿Prefieres otro gestor o instalación permanente? OmniSpec es compatible de forma nativa con pnpm, Bun, Yarn Modern y CLI global."
      ]
    },
    "en": {
      "title": "2. Starting Point: 30-Second Quickstart",
      "paragraphs": [
        "OmniSpec requires <strong>Node.js ≥22.19.0</strong> (Node 22 LTS or Node 24 Current) or <strong>Bun 1.1+</strong>. It brings zero external runtime dependencies and requires no elevated system privileges.",
        "Open a terminal in your project folder and run the flagship command. npm’s <code>--yes</code> flag confirms fetching the official package on the <code>latest</code> channel, while OmniSpec presents an interactive keyboard wizard to configure your language and favorite AI tools.",
        "Prefer another package manager or permanent global CLI? OmniSpec natively supports pnpm, Bun, Yarn Modern and global installation."
      ]
    },
    "commands": [
      "npx --yes omni-spec init",
      "pnpm dlx omni-spec init",
      "bunx omni-spec init"
    ],
    "code": ""
  },
  {
    "id": "quickstart",
    "es": {
      "title": "2.1 Dos Modos de Entrada: Proyecto Nuevo o Existente",
      "paragraphs": [
        "<strong>Proyecto Nuevo:</strong> Inicializa en una carpeta vacía y abre tu editor con tu agente favorito (Cursor, Claude Code, Antigravity, Copilot, Codex, etc.). Escribe en el chat <code>/omni-init</code> o la invocación indicada: el agente te ayudará a conceptualizar el stack, la arquitectura y tu primera especificación sin tocar código a ciegas.",
        "<strong>Proyecto Existente:</strong> Ejecuta <code>omni-spec init</code> en la raíz. El motor inspecciona automáticamente tus manifiestos y herramientas (Astro, Next.js, React, Svelte, Vue, Python, Go, Rust, Java, etc.) y detecta tus scripts de prueba y compilación como candidatos de verificación (<code>NOT_RUN</code>), respetando rigurosamente tu código existente.",
        "Para pipelines de CI o automatización desatendida, añade <code>--yes</code> como argumento de OmniSpec junto con las banderas deseadas:"
      ]
    },
    "en": {
      "title": "2.1 Two Entry Paths: Brand New or Existing Project",
      "paragraphs": [
        "<strong>New Project:</strong> Initialize in an empty folder and open your workspace with your chosen AI tool (Cursor, Claude Code, Antigravity, Copilot, Codex, etc.). Type <code>/omni-init</code> in chat: your agent helps articulate product scope, tech stack and your first spec before any code is generated.",
        "<strong>Existing Project:</strong> Run <code>omni-spec init</code> at repository root. The engine scans your manifests and frameworks (Astro, Next.js, React, Svelte, Vue, Python, Go, Rust, Java, etc.) and lists your test/build scripts as verification candidates (<code>NOT_RUN</code>) without mutating your application.",
        "For CI pipelines or headless scripting, pass OmniSpec's own <code>--yes</code> flag alongside your target parameters:"
      ]
    },
    "commands": [
      "npx --yes omni-spec init --agent claude --lang es",
      "npx --yes omni-spec init --yes --agent cursor --ui-components shadcn"
    ],
    "code": ""
  },
  {
    "id": "estructura",
    "es": {
      "title": "3. La Anatomía del Repositorio de la Verdad",
      "paragraphs": [
        "OmniSpec organiza la gobernanza del proyecto de forma visible y versionable en Git bajo el directorio <code>specs/</code>, complementado con archivos raíz estandarizados:",
        "Cada archivo tiene una responsabilidad estricta: <code>CONSTITUTION.md</code> dicta las normas innegociables de ingeniería; <code>specs/project-context.md</code> preserva la memoria duradera de decisiones arquitectónicas; <code>manifest.json</code> gobierna el estado estructurado leíble por máquina, y cada carpeta <code>001-nombre/</code> encapsula el contrato, diseño y evidencia del trabajo."
      ]
    },
    "en": {
      "title": "3. The Anatomy of the Repository of Truth",
      "paragraphs": [
        "OmniSpec organizes project governance in a visible, Git-tracked structure under <code>specs/</code>, accompanied by standardized root instructions:",
        "Every file carries a clear responsibility: <code>CONSTITUTION.md</code> defines mandatory engineering laws; <code>specs/project-context.md</code> preserves durable architectural memory; <code>manifest.json</code> holds machine-readable project state, and each <code>001-name/</code> folder encapsulates the contract, plan and evidence of that specific task."
      ]
    },
    "commands": [],
    "code": "CONSTITUTION.md                  # Leyes de ingeniería inviolables\nAGENTS.md                        # Directivas universales para agentes IA\nCLAUDE.md                        # Sincronización gestionada para Claude Code\nspecs/\n  manifest.json                  # Estado del proyecto y especificaciones activas\n  project-context.md             # Memoria destilada (MDD) y finops de contexto\n  checks.json                    # Catálogo de quality gates automatizados\n  001-feature-login/\n    spec.md                      # Contrato EARS: propósito, alcance y criterios AC\n    plan.md                      # Estrategia técnica y análisis de impacto\n    tasks.md                     # Checklist atómico de implementación\n    acceptance.json              # Cobertura formal de criterios y evidencia\n    verification.json            # Huella criptográfica y resultados de checks\n  .omni/runtime/                 # Motor determinista local (ignorado por Git)"
  },
  {
    "id": "constitucion",
    "es": {
      "title": "3.1 CONSTITUTION.md: Las Leyes de Ingeniería",
      "paragraphs": [
        "<code>CONSTITUTION.md</code> es el contrato ético y técnico que el agente de IA está obligado a acatar antes de proponer cualquier cambio. Aplica directivas innegociables:",
        "<strong>Cirugía de Código (Minimal Touch):</strong> Prohibido reformatear o alterar código adyacente ajeno a la tarea. <strong>Fail-Fast Estricto:</strong> Prohibido envolver código en bloques <code>try/catch</code> defensivos que silencien excepciones devolviendo <code>null</code>. <strong>Cero Comentarios Tipo Loro:</strong> El código debe ser limpio y autoexplicativo.",
        "Al actualizar OmniSpec con <code>omni-spec update</code>, tu constitución personalizada se preserva intacta y los cambios upstream se presentan como referencia comparativa."
      ]
    },
    "en": {
      "title": "3.1 CONSTITUTION.md: The Engineering Laws",
      "paragraphs": [
        "<code>CONSTITUTION.md</code> is the binding technical agreement that the AI agent must honor before suggesting any change. It enforces non-negotiable principles:",
        "<strong>Minimal Touch Surgery:</strong> Never reformat or mutate adjacent code unrelated to the task. <strong>Strict Fail-Fast:</strong> Never wrap logic in defensive <code>try/catch</code> blocks that swallow errors and silently return <code>null</code>. <strong>Zero Parrot Comments:</strong> Code must be self-explanatory with clean naming.",
        "When upgrading OmniSpec via <code>omni-spec update</code>, your custom constitution is preserved and upstream changes are provided as comparative reference."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "flujo-descubrimiento",
    "es": {
      "title": "4. Acto I: Explorar, Alinear y Aclarar",
      "paragraphs": [
        "El ciclo de vida SDD comienza con alineación conversacional antes de redactar especificaciones formales:",
        "<code>omni-init</code>: Reconoce el estado del proyecto, detecta herramientas, registra las capacidades reales de la sesión (renderizado visual, investigación web, herramientas de preguntas) y sella la línea base de contexto.",
        "<code>omni-discuss</code>: Espacio dialéctico para explorar la necesidad, comparar enfoques técnicos y evaluar viabilidad sin escribir código prematuro.",
        "<code>omni-clarify</code>: Detecta brechas de ambigüedad material mediante preguntas precisas. Si falta una decisión clave de producto o arquitectura, se resuelve y documenta aquí."
      ]
    },
    "en": {
      "title": "4. Act I: Explore, Align and Clarify",
      "paragraphs": [
        "The SDD lifecycle begins with conversational alignment before drafting formal specifications:",
        "<code>omni-init</code>: Inspects repository state, detects tooling, records actual session capabilities (visual rendering, web research, question tooling) and seals the context baseline.",
        "<code>omni-discuss</code>: An open exploratory space to debate requirements, evaluate technical tradeoffs, and assess viability without premature coding.",
        "<code>omni-clarify</code>: Resolves material ambiguity through targeted questioning. Any unresolved design or architectural decision is clarified and recorded here."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "flujo-contratos",
    "es": {
      "title": "4.1 Acto II: Formalizar, Planificar y Desglosar",
      "paragraphs": [
        "Una vez aclarada la intención, se establecen los contratos duraderos que guían la ejecución:",
        "<code>omni-specify</code>: Redacta la especificación formal (<code>spec.md</code>) estructurando requerimientos y criterios de aceptación con sintaxis EARS (<em>Easy Approach to Requirements Syntax</em>). Cada criterio recibe un identificador único (ej. <code>AC-01</code>) y una tipificación clara (funcional, visual, accesibilidad, seguridad).",
        "<code>omni-plan</code>: Conecta el diseño técnico con los criterios acordados, detallando cambios de interfaz, endpoints, contratos de datos y mitigación de riesgos.",
        "<code>omni-tasks</code>: Desglosa el plan en un checklist de tareas atómicas e independientes, ordenadas secuencialmente para permitir implementación paso a paso."
      ]
    },
    "en": {
      "title": "4.1 Act II: Formalize, Plan and Breakdown",
      "paragraphs": [
        "Once intent is clear, durable contracts are formalized to guide execution:",
        "<code>omni-specify</code>: Drafts the formal specification (<code>spec.md</code>) structuring requirements and acceptance criteria using EARS syntax (<em>Easy Approach to Requirements Syntax</em>). Every criterion gets a unique identifier (e.g. <code>AC-01</code>) and an explicit type (functional, visual, accessibility, security).",
        "<code>omni-plan</code>: Connects technical architecture directly to acceptance criteria, mapping UI changes, endpoints, data contracts, and risk mitigations.",
        "<code>omni-tasks</code>: Breaks the plan into an atomic, dependency-ordered task checklist enabling verified step-by-step implementation."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "flujo-ejecucion",
    "es": {
      "title": "4.2 Acto III: Implementar, Auditar y Converger",
      "paragraphs": [
        "El último acto transforma los contratos en software funcional verificado con rigor científico:",
        "<code>omni-implement</code>: Ejecuta la cirugía de código con enfoque minimalista, resolviendo tarea por tarea sin desviarse del alcance acordado.",
        "<code>omni-audit</code>: Un subagente auditor independiente analiza la especificación y el código generado buscando trampas, checkboxes vacíos, comentarios de relleno o desviaciones constitucionales.",
        "<code>omni-converge</code>: Reconcilia la evidencia ejecutable. <code>verify</code> ejecuta los quality gates y genera una huella criptográfica SHA-256 de los archivos; <code>complete</code> valida que todos los criterios estén cubiertos y no existan cambios espurios posteriores al snapshot."
      ]
    },
    "en": {
      "title": "4.2 Act III: Implement, Audit and Converge",
      "paragraphs": [
        "The final act turns contracts into working software validated with scientific rigor:",
        "<code>omni-implement</code>: Performs surgical code edits task by task, adhering strictly to the agreed plan without scope creep.",
        "<code>omni-audit</code>: An independent auditor subagent inspects specifications and implementation to detect bypasses, empty checkboxes, or constitutional violations.",
        "<code>omni-converge</code>: Reconciles executable evidence. <code>verify</code> runs configured quality gates and stamps a cryptographic SHA-256 fingerprint; <code>complete</code> verifies that all criteria are satisfied and no files changed after the snapshot."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "arquetipos",
    "es": {
      "title": "5. Los Cuatro Arquetipos y Triaje Dinámico",
      "paragraphs": [
        "En ingeniería de software no todo cambio es una 'Feature'. OmniSpec proporciona cuatro arquetipos con artefactos especializados:",
        "<strong>feature</strong> (<code>spec.md</code>): Nueva funcionalidad o cambio de comportamiento. <strong>bugfix</strong> (<code>bug.md</code>, <code>rca.md</code>, <code>fix.md</code>): Diagnóstico estricto con reproducción, análisis de causa raíz (5 Whys) y prevención de regresiones. <strong>debt</strong> (<code>audit.md</code>, <code>migration-plan.md</code>): Reducción de deuda técnica o simplificación de dependencias. <strong>rfc</strong> (<code>rfc.md</code>): Registro duradero de decisiones arquitectónicas.",
        "<strong>Triaje Dinámico (Fit v2):</strong> Permite ajustar la ceremonia al tamaño real del problema. Usa <code>create --light</code> para cambios quirúrgicos de 1 a 3 archivos (omite plan y tareas pesadas), y escala a <code>standard</code> o <code>full</code> automáticamente cuando aumenta el riesgo o la ambigüedad."
      ]
    },
    "en": {
      "title": "5. The Four Archetypes and Dynamic Triage",
      "paragraphs": [
        "Not all engineering work is a 'Feature'. OmniSpec provides four purpose-built archetypes with specialized artifacts:",
        "<strong>feature</strong> (<code>spec.md</code>): New functionality or behavioral change. <strong>bugfix</strong> (<code>bug.md</code>, <code>rca.md</code>, <code>fix.md</code>): Strict defect diagnosis with reproduction, 5-Whys root cause analysis (RCA), and regression prevention. <strong>debt</strong> (<code>audit.md</code>, <code>migration-plan.md</code>): Tech debt reduction and code simplification. <strong>rfc</strong> (<code>rfc.md</code>): Durable architectural decision record.",
        "<strong>Dynamic Triage (Fit v2):</strong> Proportional ceremony matched to problem scope. Use <code>create --light</code> for surgical 1-to-3 file edits (bypassing heavy plans and tasks), auto-escalating to <code>standard</code> or <code>full</code> when risk or architectural impact demands it."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "anti-slop",
    "es": {
      "title": "5.1 Artesanía de Software y Matriz de 4 Estados de UI",
      "paragraphs": [
        "OmniSpec 0.8 erradica los clichés visuales y malos hábitos de los modelos de IA mediante el protocolo <strong>Zero-Slop Guard</strong>:",
        "<strong>Cero Clichés de IA:</strong> Prohibidos los degradados azul/púrpura genéricos, resplandores difusos artificiales y el anidamiento excesivo de tarjetas con sombras (*card-itis*). Se prioriza la jerarquía visual limpia mediante tipografía y whitespace deliberado.",
        "<strong>Matriz Obligatoria de 4 Estados:</strong> Toda vista interactiva debe contemplar explícitamente: 1. <em>Loading</em> (skeletons contextuales con CLS = 0), 2. <em>Empty</em> (explicación clara con llamada a la acción), 3. <em>Error</em> (mensaje comprensible con reintento), y 4. <em>Protected</em> (estado sin permisos o restringido).",
        "Soporte nativo para kits modernos de componentes (<code>shadcn</code>, <code>radix</code>, <code>headlessui</code>, <code>preline</code>, <code>flyonui</code>) vía <code>--ui-components</code> y la guía de diseño del sistema en <code>omni-spec guide design</code>."
      ]
    },
    "en": {
      "title": "5.1 Software Craftsmanship and 4-State UI Matrix",
      "paragraphs": [
        "OmniSpec 0.8 eliminates AI visual clichés and bad habits through the <strong>Zero-Slop Guard</strong> protocol:",
        "<strong>Anti-Cliché Design:</strong> Generic blue/purple gradients, fuzzy artificial glow, and nested shadow-boxed cards (*card-itis*) are strictly prohibited. Visual hierarchy is established through intentional typography and whitespace.",
        "<strong>Mandatory 4-State Matrix:</strong> Every interactive view must deliberately support: 1. <em>Loading</em> (contextual skeletons with CLS = 0), 2. <em>Empty</em> (clear explanation with immediate CTA), 3. <em>Error</em> (actionable message with retry mechanism), and 4. <em>Protected</em> (unauthorized or permission-restricted state).",
        "Native governance for modern component kits (<code>shadcn</code>, <code>radix</code>, <code>headlessui</code>, <code>preline</code>, <code>flyonui</code>) via <code>--ui-components</code> and system guidelines in <code>omni-spec guide design</code>."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "perfiles-intro",
    "es": {
      "title": "6. Perfiles de Dominio Regulados",
      "paragraphs": [
        "Los perfiles inyectan controles de seguridad, privacidad y mejores prácticas específicas para sectores de alta exigencia técnica y regulatoria.",
        "No imponen bases de datos ni arquitecturas forzadas para todos los proyectos; son revisiones de aplicabilidad que el agente evalúa en diálogo con el desarrollador. Puedes declarar un perfil con <code>--profile</code> o explorarlo durante el onboarding."
      ]
    },
    "en": {
      "title": "6. Regulated Domain Profiles",
      "paragraphs": [
        "Domain profiles inject compliance, privacy, and security controls tailored for highly regulated industries.",
        "They do not impose rigid databases or universal architectures; they act as applicability checklists that the agent audits alongside you. Declare a profile via <code>--profile</code> or explore it during conversational onboarding."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "perfiles-catalogo",
    "es": {
      "title": "6.1 Catálogo de Perfiles Disponibles",
      "paragraphs": [
        "Explora los controles especializados y preguntas clave para industrias como Fintech, Healthtech, BPO y E-commerce:"
      ]
    },
    "en": {
      "title": "6.1 Catalog of Available Profiles",
      "paragraphs": [
        "Explore specialized controls and critical questions for industries including Fintech, Healthtech, BPO, and E-commerce:"
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "adaptadores-agentes",
    "es": {
      "title": "7. Tu Agente Favorito: 10 Adaptadores Estandarizados",
      "paragraphs": [
        "OmniSpec no te ata a un único modelo o entorno. Genera instrucciones nativas y compatibles con la documentación oficial de los principales agentes de desarrollo:",
        "<strong>Antigravity:</strong> Workspace skills en <code>.agents/skills/</code> y subagente auditor en <code>.agents/agents/omni-auditor.md</code>. <strong>Claude Code:</strong> Skills en <code>.claude/skills/</code> y sincronización gestionada en <code>CLAUDE.md</code>. <strong>Cursor:</strong> Skills en <code>.cursor/skills/</code> y reglas de proyecto. <strong>Codex:</strong> Skills en <code>.agents/skills/</code> con invocación <code>$omni-init</code> en <code>AGENTS.md</code>. <strong>Copilot, Kilo, OpenCode y Gemini CLI:</strong> Adaptadores específicos por host. <strong>Generic:</strong> Modo universal por prompts para cualquier terminal o LLM."
      ]
    },
    "en": {
      "title": "7. Your Favorite Agent: 10 Standardized Adapters",
      "paragraphs": [
        "OmniSpec never locks you into a single vendor or model. It outputs native, spec-compliant instructions for all major AI coding agents:",
        "<strong>Antigravity:</strong> Workspace skills under <code>.agents/skills/</code> and auditor subagent in <code>.agents/agents/omni-auditor.md</code>. <strong>Claude Code:</strong> Skills in <code>.claude/skills/</code> and managed synchronization inside <code>CLAUDE.md</code>. <strong>Cursor:</strong> Skills in <code>.cursor/skills/</code> and project rules. <strong>Codex:</strong> Skills under <code>.agents/skills/</code> with <code>$omni-init</code> invocation in <code>AGENTS.md</code>. <strong>Copilot, Kilo, OpenCode and Gemini CLI:</strong> Host-specific adapters. <strong>Generic:</strong> Universal prompt fallback for any terminal or LLM."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "antigravity-plugin",
    "es": {
      "title": "7.1 Plugin Oficial para Google Antigravity",
      "paragraphs": [
        "Además del modo workspace local, los desarrolladores en Google Antigravity pueden instalar el <strong>Plugin Global Oficial</strong> (paquete autónomo de ~540 KB).",
        "El plugin proporciona inyección permanente de constitución (<code>trigger: always_on</code>) y un subagente auditor aislado (<code>omni-auditor</code>) disponible en cualquier proyecto sin duplicar archivos. Inicializa proyectos vinculados al plugin ejecutando <code>omni-spec init --agent plugin</code>."
      ]
    },
    "en": {
      "title": "7.1 Official Plugin for Google Antigravity",
      "paragraphs": [
        "Beyond local workspace skills, Google Antigravity users can install the <strong>Official Global Plugin</strong> (~540 KB self-contained bundle).",
        "The plugin offers always-on constitutional injection (<code>trigger: always_on</code>) and an isolated auditor subagent (<code>omni-auditor</code>) available across all machine workspaces without duplicating files. Initialize plugin-bound projects via <code>omni-spec init --agent plugin</code>."
      ]
    },
    "commands": [
      "npx --yes omni-spec plugin install",
      "npx --yes omni-spec plugin status",
      "npx --yes omni-spec init --agent plugin"
    ],
    "code": ""
  },
  {
    "id": "quality-gates",
    "es": {
      "title": "8. Quality Gates y Evidencia Ejecutable",
      "paragraphs": [
        "En OmniSpec, la palabra del agente no es suficiente: el cierre exige evidencia empírica. <code>specs/checks.json</code> cataloga los comandos de prueba y verificación por módulo con timeout y directorio de trabajo.",
        "<code>acceptance.json</code> vincula cada criterio de aceptación a un comando ejecutado o a una observación manual fundamentada. <code>verify</code> ejecuta los checks y sella una huella criptográfica SHA-256 de los archivos; <code>complete</code> valida la integridad total y rechaza el cierre si hubo modificaciones posteriores o criterios pendientes.",
        "La evidencia declarada permanece separada de los resultados ejecutados en máquina, garantizando máxima fidelidad técnica."
      ]
    },
    "en": {
      "title": "8. Quality Gates and Executable Evidence",
      "paragraphs": [
        "In OmniSpec, agent assertions alone are never proof: task completion demands empirical evidence. <code>specs/checks.json</code> catalogs per-module automated checks with explicit cwd and timeouts.",
        "<code>acceptance.json</code> binds every acceptance criterion to an executed command or a justified manual observation with local artifacts. <code>verify</code> runs configured gates and stamps a SHA-256 cryptographic fingerprint; <code>complete</code> validates integrity and blocks closure if post-snapshot mutations or pending criteria exist.",
        "Declared evidence remains strictly separated from machine-executed results, ensuring full audit fidelity."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "manifest-lock",
    "es": {
      "title": "8.1 Bajo el Capó: Concurrencia e Integridad Atómica",
      "paragraphs": [
        "<code>specs/manifest.lock/</code> implementa un mecanismo de exclusión mutua basado en el algoritmo de panadería de Lamport para serializar escrituras concurrentes de estado entre procesos y subagentes.",
        "Las operaciones de disco utilizan reemplazos atómicos con reintentos exponenciales (<code>fs-retry.mjs</code>) diseñados para mitigar bloqueos transitorios en entornos Windows causados por antivirus o sincronizadores en la nube.",
        "Una arquitectura limpia de dependencias que asegura que OmniSpec funcione sin fricción tanto en estaciones de trabajo locales como en pipelines de CI/CD."
      ]
    },
    "en": {
      "title": "8.1 Under the Hood: Concurrency and Atomic Integrity",
      "paragraphs": [
        "<code>specs/manifest.lock/</code> implements a Lamport bakery algorithm mutex to serialize concurrent state writes between CLI commands, parallel processes, and autonomous subagents.",
        "All filesystem writes use atomic replacements with exponential retry mechanisms (<code>fs-retry.mjs</code>) specifically designed to withstand transient Windows locks from antivirus scanners or cloud sync daemons.",
        "A zero-dependency architecture ensuring OmniSpec runs seamlessly across local workstations and headless CI/CD pipelines."
      ]
    },
    "commands": [],
    "code": ""
  }
];
