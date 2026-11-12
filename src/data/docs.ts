/** Documentación oficial de OmniSpec 0.9.0 Estable. Los identificadores de sección preservan enlaces profundos. */
export const docsSections = [
  {
    "id": "intro",
    "es": {
      "title": "1. Motor Universal de Ingeniería Agéntica: De la Burocracia SDD a la Certeza",
      "paragraphs": [
        "Los agentes de Inteligencia Artificial son extraordinarios implementando funciones puntuales, pero sufren de tres problemas crónicos: <strong>amnesia de contexto</strong> entre sesiones, <strong>sobreingeniería prematura</strong> (*overengineering*) y <strong>modificación no controlada de código adyacente</strong> (*code slop*).",
        "<strong>OmniSpec 0.9.0</strong> evoluciona más allá del desarrollo guiado por especificaciones (SDD) tradicional: no es un simple generador de documentos ni una burocracia de plantillas rígidas, sino el <em>Motor Universal de Ingeniería Agéntica (Universal Agentic Engineering Engine)</em>.",
        "Calibra el rigor según el impacto real mediante Rutas Proporcionales (Light, Standard, Full con FIT v2), erradica la amnesia con memoria persistente SQLite FTS5 externa (cero residuos en Git), previene regresiones con cartografía AST de dependencias antes de tocar código, y confina a los agentes con gobernanza dura y atestación criptográfica HMAC-SHA256.",
        "Un motor determinista con arquitectura <strong>Zero Runtime Dependencies</strong> (<code>dependencies: {}</code>) que garantiza soberanía absoluta sobre tu código y gobierna a múltiples agentes (Antigravity, Cursor, Claude Code, Copilot, Codex, Kilo y OpenCode) de forma simultánea o en enjambres colaborativos (Swarms)."
      ]
    },
    "en": {
      "title": "1. Universal Agentic Engineering Engine: Beyond SDD to Deterministic Rigor",
      "paragraphs": [
        "AI coding agents are remarkably capable at writing isolated functions, yet they suffer from three chronic pitfalls: <strong>context amnesia</strong> across sessions, <strong>premature overengineering</strong>, and <strong>uncontrolled adjacent edits</strong> (*code slop*).",
        "<strong>OmniSpec 0.9.0</strong> transcends traditional Spec-Driven Development (SDD): it is neither a rigid template bureaucracy nor a passive document framework, but the <em>Universal Agentic Engineering Engine</em>.",
        "It matches ceremony to real impact via Proportional Routes (Light, Standard, Full with FIT v2), eliminates amnesia via external SQLite FTS5 memory (zero Git clutter), prevents cascading breakages through polyglot AST cartography before modifying any code, and confines agents through hard governance and HMAC-SHA256 cryptographic attestation.",
        "A deterministic engine built with <strong>Zero Runtime Dependencies</strong> (<code>dependencies: {}</code>) that guarantees absolute codebase sovereignty and governs multiple AI agents (Antigravity, Cursor, Claude Code, Copilot, Codex, Kilo, and OpenCode) concurrently or in collaborative swarms."
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
    "code": {
      "es": "├── CONSTITUTION.md              # Leyes de ingeniería inviolables (Write-Before-Speak)\n├── AGENTS.md                    # Directivas universales para agentes IA\n├── CLAUDE.md                    # Sincronización gestionada para Claude Code\n└── specs/\n    ├── manifest.json            # Estado del proyecto y especificaciones activas\n    ├── project-context.md       # Memoria destilada (MDD) y finops de contexto\n    ├── checks.json              # Catálogo de quality gates automatizados\n    ├── contracts.json           # Contratos formales y capacidades del proyecto\n    └── 001-feature-login/\n        ├── spec.md              # Contrato EARS: propósito, alcance y criterios AC\n        ├── plan.md              # Estrategia técnica y análisis de impacto\n        ├── tasks.md             # Checklist atómico de implementación\n        ├── acceptance.json      # Cobertura formal de criterios y evidencia\n        └── verification.json    # Huella criptográfica HMAC-SHA256 y resultados\n\n# Memoria Persistente Externa (Zero-Footprint en Git):\n# %LOCALAPPDATA%\\OmniSpec\\workspaces\\<id>\\memory.db (SQLite FTS5)",
      "en": "├── CONSTITUTION.md              # Binding, non-negotiable engineering laws (Write-Before-Speak)\n├── AGENTS.md                    # Universal AI agent directives\n├── CLAUDE.md                    # Managed synchronization for Claude Code\n└── specs/\n    ├── manifest.json            # Machine-readable project state and active specs\n    ├── project-context.md       # Distilled architectural memory (MDD)\n    ├── checks.json              # Automated quality gates catalog\n    ├── contracts.json           # Formal project contracts and capabilities\n    └── 001-feature-login/\n        ├── spec.md              # EARS contract: purpose, scope & acceptance criteria\n        ├── plan.md              # Technical design and impact analysis\n        ├── tasks.md             # Atomic implementation checklist\n        ├── acceptance.json      # Formal criteria coverage and evidence\n        └── verification.json    # Cryptographic HMAC-SHA256 fingerprint & test results\n\n# External Persistent Memory (Zero-Footprint in Git):\n# %LOCALAPPDATA%\\OmniSpec\\workspaces\\<id>\\memory.db (SQLite FTS5)"
    }
  },
  {
    "id": "constitucion",
    "es": {
      "title": "3.1 CONSTITUTION.md: Las Leyes de Ingeniería",
      "paragraphs": [
        "<code>CONSTITUTION.md</code> es el contrato ético y técnico que el agente de IA está obligado a acatar antes de proponer cualquier cambio. Aplica directivas innegociables:",
        "<strong>Cirugía de Código (Minimal Touch):</strong> Prohibido reformatear o alterar código adyacente ajeno a la tarea. <strong>Fail-Fast Estricto:</strong> Prohibido envolver código en bloques <code>try/catch</code> defensivos que silencien excepciones devolviendo <code>null</code>. <strong>Write-Before-Speak:</strong> Prohibido afirmar que existen modificaciones sin llamar a herramientas de escritura o diferir requisitos al código posterior. <strong>Cero Comentarios Tipo Loro:</strong> El código debe ser limpio y autoexplicativo.",
        "Al actualizar OmniSpec con <code>omni-spec update</code>, tu constitución personalizada se preserva intacta y los cambios upstream se presentan como referencia comparativa."
      ]
    },
    "en": {
      "title": "3.1 CONSTITUTION.md: The Engineering Laws",
      "paragraphs": [
        "<code>CONSTITUTION.md</code> is the binding technical agreement that the AI agent must honor before suggesting any change. It enforces non-negotiable principles:",
        "<strong>Minimal Touch Surgery:</strong> Never reformat or mutate adjacent code unrelated to the task. <strong>Strict Fail-Fast:</strong> Never wrap logic in defensive <code>try/catch</code> blocks that swallow errors and silently return <code>null</code>. <strong>Write-Before-Speak:</strong> Strictly forbid claiming changes exist before executing tools or deferring agreed requirements to code. <strong>Zero Parrot Comments:</strong> Code must be self-explanatory with clean naming.",
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
        "El ciclo de ingeniería agéntica comienza con alineación conversacional y triaje proporcional:",
        "<code>omni-init</code>: Reconoce el estado del proyecto, detecta herramientas, registra las capacidades reales de la sesión (renderizado visual, investigación web, herramientas de preguntas) y sella la línea base de contexto.",
        "<code>omni-discuss</code>: Espacio dialéctico para explorar la necesidad, comparar enfoques técnicos y evaluar viabilidad sin escribir código prematuro.",
        "<code>omni-clarify</code>: Protocolo consciente de fase. Resuelve brechas de ambigüedad mediante confirmación interactiva, inspeccionando los archivos que existen antes de editar y ejecutando auditoría obligatoria a 0 errores."
      ]
    },
    "en": {
      "title": "4. Act I: Explore, Align and Clarify",
      "paragraphs": [
        "The agentic engineering lifecycle begins with conversational alignment and proportional triage:",
        "<code>omni-init</code>: Inspects repository state, detects tooling, records actual session capabilities (visual rendering, web research, question tooling) and seals the context baseline.",
        "<code>omni-discuss</code>: An open exploratory space to debate requirements, evaluate technical tradeoffs, and assess viability without premature coding.",
        "<code>omni-clarify</code>: Phase-aware protocol. Resolves material ambiguity through interactive confirmation, inspecting physically existing files before editing and running mandatory zero-error audits."
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
        "<code>omni-implement</code>: Ejecuta la cirugía de código con enfoque minimalista bajo la regla constitucional <strong>Write-Before-Speak</strong>, resolviendo tarea por tarea sin desviarse del alcance acordado.",
        "<code>omni-audit</code>: Un subagente auditor independiente analiza la especificación y el código generado buscando trampas, checkboxes vacíos, comentarios de relleno o desviaciones constitucionales.",
        "<code>omni-converge</code>: Reconcilia la evidencia ejecutable. <code>verify</code> ejecuta los quality gates, aplica <strong>Hollow-Guard</strong> para bloquear pruebas vacías o tautológicas, y sella un registro con atestación criptográfica <strong>HMAC-SHA256</strong> (formato v4); <code>complete</code> valida que todos los criterios estén cubiertos y no existan cambios espurios posteriores al snapshot."
      ]
    },
    "en": {
      "title": "4.2 Acto III: Implement, Audit and Converge",
      "paragraphs": [
        "The final act turns contracts into working software validated with scientific rigor:",
        "<code>omni-implement</code>: Performs surgical code edits task by task under the constitutional <strong>Write-Before-Speak</strong> law, adhering strictly to the agreed plan without scope creep.",
        "<code>omni-audit</code>: An independent auditor subagent inspects specifications and implementation to detect bypasses, empty checkboxes, or constitutional violations.",
        "<code>omni-converge</code>: Reconciles executable evidence. <code>verify</code> runs configured quality gates, enforces <strong>Hollow-Guard</strong> to prevent empty or tautological tests, and stamps a cryptographic <strong>HMAC-SHA256</strong> attestation (v4 format); <code>complete</code> verifies that all criteria are satisfied and no files changed after the snapshot."
      ]
    },
    "commands": [],
    "code": ""
  },
  {
    "id": "arquetipos",
    "es": {
      "title": "5. Arquetipos y Rutas Proporcionales (FIT v2: Light, Standard, Full)",
      "paragraphs": [
        "A diferencia del SDD tradicional que imponía una burocracia documental monolítica para cualquier cambio, OmniSpec clasifica el trabajo en cuatro arquetipos de ingeniería con artefactos especializados:",
        "<strong>feature</strong> (<code>spec.md</code>): Nueva funcionalidad o cambio de comportamiento con criterios EARS tipados. <strong>bugfix</strong> (<code>bug.md</code>, <code>rca.md</code>, <code>fix.md</code>): Diagnóstico estricto con reproducción, análisis de causa raíz (5 Whys) y prevención de regresiones. <strong>debt</strong> (<code>audit.md</code>, <code>migration-plan.md</code>): Reducción de deuda técnica, simplificación o refactors. <strong>rfc</strong> (<code>rfc.md</code>): Registro duradero de decisiones arquitectónicas bajo formato MADR.",
        "<strong>Rutas Proporcionales (Algoritmo FIT v2):</strong> Erradica la sobrecarga documental adaptando el nivel de ceremonia al tamaño y riesgo real del cambio:",
        "• <strong>Ruta Light (Quirúrgica):</strong> Para cambios de 1 a 3 archivos y bajo radio de impacto. Cero planes ni tareas burocráticas innecesarias: el agente define los criterios mínimos y salta directamente a la implementación y convergencia verificada.",
        "• <strong>Ruta Standard (Arquitectónica):</strong> Para cambios multi-módulo que requieren plan técnico explícito, análisis de impacto y mitigación de riesgos.",
        "• <strong>Ruta Full (Gobernada):</strong> Reservada para cambios de alto riesgo, mutaciones de esquemas públicos o dependencias críticas; exige doble compuerta de aprobación, desglose atómico de tareas y validación cruzada con subagente auditor."
      ]
    },
    "en": {
      "title": "5. Archetypes and Proportional Routes (FIT v2: Light, Standard, Full)",
      "paragraphs": [
        "Unlike legacy SDD which enforced a monolithic documentation bureaucracy on every single change, OmniSpec classifies engineering work into four purpose-built archetypes with specialized artifacts:",
        "<strong>feature</strong> (<code>spec.md</code>): New functionality or behavioral change with typed EARS criteria. <strong>bugfix</strong> (<code>bug.md</code>, <code>rca.md</code>, <code>fix.md</code>): Strict defect diagnosis with reproduction, 5-Whys root cause analysis (RCA), and regression prevention. <strong>debt</strong> (<code>audit.md</code>, <code>migration-plan.md</code>): Tech debt reduction, structural refactors, or dependency cleanup. <strong>rfc</strong> (<code>rfc.md</code>): Durable architectural decision records following the MADR standard.",
        "<strong>Proportional Routes (FIT v2 Algorithm):</strong> Eliminates documentation bloat by calibrating ceremonial overhead to the actual risk and blast radius:",
        "• <strong>Light Route (Surgical):</strong> For focused 1-to-3 file changes with minimal blast radius. Zero bureaucratic plan or task breakdown overhead: agents specify concise criteria and jump directly to verified implementation and convergence.",
        "• <strong>Standard Route (Architectural):</strong> For multi-module modifications requiring an explicit technical design, contract mapping, and risk mitigation.",
        "• <strong>Full Route (Governed):</strong> Reserved for high-risk changes, public schema mutations, or critical dependencies; mandates dual approval gates, atomic task checklists, and cross-auditor validation."
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
        "OmniSpec 0.9.0 erradica los clichés visuales y malos hábitos de los modelos de IA mediante el protocolo <strong>Zero-Slop Guard</strong> (Type-Slop, Mock-Slop, Visual-Slop, Scope-Slop, Dependency-Slop):",
        "<strong>Cero Clichés de IA:</strong> Prohibidos los degradados azul/púrpura genéricos, resplandores difusos artificiales y el anidamiento excesivo de tarjetas con sombras (*card-itis*). Se prioriza la jerarquía visual limpia mediante tipografía y whitespace deliberado.",
        "<strong>Matriz Obligatoria de 4 Estados:</strong> Toda vista interactiva debe contemplar explícitamente: 1. <em>Loading</em> (skeletons contextuales con CLS = 0), 2. <em>Empty</em> (explicación clara con llamada a la acción), 3. <em>Error</em> (mensaje comprensible con reintento), y 4. <em>Protected</em> (estado sin permisos o restringido).",
        "Soporte nativo para kits modernos de componentes (<code>shadcn</code>, <code>radix</code>, <code>headlessui</code>, <code>preline</code>, <code>flyonui</code>) vía <code>--ui-components</code> y la guía de diseño del sistema en <code>omni-spec guide design</code>."
      ]
    },
    "en": {
      "title": "5.1 Software Craftsmanship and 4-State UI Matrix",
      "paragraphs": [
        "OmniSpec 0.9.0 eliminates AI visual clichés and bad habits through the <strong>Zero-Slop Guard</strong> protocol (Type-Slop, Mock-Slop, Visual-Slop, Scope-Slop, Dependency-Slop):",
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
      "title": "8.1 Concurrencia, Enjambres Multi-Agente (Swarms) e Integridad Atómica",
      "paragraphs": [
        "OmniSpec 0.9.0 fue diseñado para operar con fiabilidad determinista en arquitecturas multi-agente y enjambres colaborativos (Swarms):",
        "<strong>Cerrojo Mutex de Lamport (<code>specs/manifest.lock/</code>):</strong> Implementa el algoritmo de panadería de Lamport para serializar escrituras concurrentes de estado entre procesos CLI paralelos y agentes o subagentes autónomos que operan simultáneamente.",
        "<strong>Memoria Externa Compartida con Reintentos Exponenciales:</strong> El almacén SQLite FTS5 (<code>memory.db</code>) utiliza transacciones atómicas y <code>fs-retry.mjs</code> para permitir que múltiples agentes en un swarm compartan observaciones, patrones y lecciones aprendidas sin colisiones ni conflictos en Git.",
        "<strong>Circuit Breaker Inteligente (<code>circuit_breakers</code>):</strong> Confinamiento de ejecución con estados <code>CLOSED</code>, <code>HALF_OPEN</code>, <code>OPEN</code> y <code>DEAD_LETTER</code>. Monitorea hasta 3 turnos, 2 reintentos por compuerta, 80.000 tokens por tarea y 25.000 tokens por minuto, frenando bucles infinitos o consumo desmedido cuando un enjambre entra en deriva.",
        "<strong>Subagente Auditor (<code>omni-auditor</code>):</strong> Definición agéntica aislada que puede ser convocada dentro del enjambre como revisor independiente de coherencia y cumplimiento de contratos."
      ]
    },
    "en": {
      "title": "8.1 Concurrency, Multi-Agent Swarms, and Atomic Integrity",
      "paragraphs": [
        "OmniSpec 0.9.0 is engineered from the ground up for deterministic reliability across multi-agent workflows and collaborative swarms:",
        "<strong>Lamport Bakery Mutex (<code>specs/manifest.lock/</code>):</strong> Employs Lamport’s bakery algorithm to serialize concurrent state mutations between parallel CLI runs and autonomous agents or subagents acting at the same time.",
        "<strong>Shared External Memory with Exponential Backoff:</strong> The external SQLite FTS5 store (<code>memory.db</code>) relies on atomic transactions and <code>fs-retry.mjs</code>, enabling multiple workers in a swarm to share observations, patterns, and constraints without Git collisions.",
        "<strong>Intelligent Circuit Breaker (<code>circuit_breakers</code>):</strong> Confinement engine transitioning through <code>CLOSED</code>, <code>HALF_OPEN</code>, <code>OPEN</code>, and <code>DEAD_LETTER</code> states. Enforces budgets (3 turns, 2 retries per gate, 80,000 tokens per task, 25,000 tokens per minute) to arrest infinite loops or runaway spending during swarm execution.",
        "<strong>Auditor Subagent (<code>omni-auditor</code>):</strong> Isolated agent definition ready to be summoned in any swarm as an independent verifier of contract coherence and constitutional compliance."
      ]
    },
    "commands": [],
    "code": "$ omni-spec status --json\n{\n  \"lock\": {\n    \"status\": \"ACQUIRED\",\n    \"algorithm\": \"Lamport-Bakery\",\n    \"holder\": \"agent-omni-auditor-1\",\n    \"heartbeatMs\": 1200\n  },\n  \"circuitBreaker\": {\n    \"state\": \"CLOSED\",\n    \"turnsRemaining\": 3,\n    \"tokensSpent\": 14200,\n    \"tokenLimit\": 80000\n  }\n}"
  },
  {
    "id": "memoria-cartografia",
    "es": {
      "title": "8.2 Memoria SQLite FTS5, Servidor MCP y Cartografía",
      "paragraphs": [
        "OmniSpec 0.9.0 incorpora <strong>Memoria Heurística Persistente (SQLite FTS5)</strong>: los agentes consultan y persisten patrones, lecciones aprendidas y restricciones en el almacén externo <code>%LOCALAPPDATA%\\OmniSpec\\workspaces\\&lt;id&gt;\\memory.db</code> con búsqueda rápida de texto completo mediante <code>omni-spec memory</code>, eliminando la amnesia entre sesiones sin ensuciar el árbol de Git (Modo Zero-Footprint).",
        "<strong>Servidor MCP Nativo:</strong> Ejecuta <code>omni-spec mcp</code> para exponer las herramientas de memoria, lectura de estado activo y cálculo de radio de impacto directamente a clientes MCP por stdio en cualquier entorno de desarrollo o enjambre de agentes compatible.",
        "<strong>Cartografía Políglota de Código & Blast Radius:</strong> Mediante un lexer DFA pushdown (sin dependencias para TypeScript/JavaScript, Python, Go, Rust y Java), <code>omni-spec cartography</code> y <code>omni-spec blast-radius</code> indexan el grafo de dependencias y calculan la puntuación matemática de impacto <code>S = min(100, ...)</code> antes de permitir la edición de código, previniendo roturas en cascada."
      ]
    },
    "en": {
      "title": "8.2 SQLite FTS5 Memory, MCP Server and Cartography",
      "paragraphs": [
        "OmniSpec 0.9.0 introduces <strong>Persistent Heuristic Memory (SQLite FTS5)</strong>: agents query and record patterns, lessons learned, and constraints in the external store <code>%LOCALAPPDATA%\\OmniSpec\\workspaces\\&lt;id&gt;\\memory.db</code> with instant full-text search via <code>omni-spec memory</code>, eliminating session amnesia without Git repository clutter (Zero-Footprint Mode).",
        "<strong>Native MCP Server:</strong> Run <code>omni-spec mcp</code> to expose memory tools, active spec status, and impact analysis directly over stdio JSON-RPC to any MCP-compliant AI assistant or swarm agent.",
        "<strong>Polyglot AST Cartography & Blast Radius:</strong> Powered by a dependency-free pushdown DFA lexer (supporting TypeScript/JavaScript, Python, Go, Rust, and Java), <code>omni-spec cartography</code> and <code>omni-spec blast-radius</code> index dependency graphs and calculate mathematical impact score <code>S = min(100, ...)</code> before permitting file modifications, preventing cascading regressions."
      ]
    },
    "commands": [
      "npx --yes omni-spec memory list",
      "npx --yes omni-spec memory search \"login token\"",
      "npx --yes omni-spec mcp",
      "npx --yes omni-spec cartography --json",
      "npx --yes omni-spec blast-radius src/auth.ts --json"
    ],
    "code": "$ omni-spec memory search \"login token\"\n[FTS5 MATCH: 2 results (0.012s)]\n- [CONVENTION] src/auth/token.ts (score: 0.94)\n  \"JWT token rotation requires 15m expiration with Redis blacklist revocation.\"\n- [GOTCHA] src/middleware/auth.ts (score: 0.88)\n  \"Bearer header must strip 'Bearer ' prefix before HMAC verification.\"\n\n$ omni-spec blast-radius src/auth.ts --json\n{\n  \"target\": \"src/auth.ts\",\n  \"directDependents\": [\"src/routes/login.ts\", \"src/routes/refresh.ts\"],\n  \"transitiveDependents\": [\"src/server.ts\"],\n  \"totalImpacted\": 3,\n  \"score\": 18.42,\n  \"gate\": \"PROCEED\"\n}\n\n$ omni-spec mcp\n[MCP] Serving JSON-RPC over stdio on OmniSpec v0.9.0 (memory, status, blast-radius)"
  },
  {
    "id": "gobernanza-seguridad",
    "es": {
      "title": "8.3 Gobernanza Preventiva: Omni-Guardian, Hollow-Guard y Atestación Criptográfica",
      "paragraphs": [
        "Para eliminar alucinaciones y prevenir modificaciones perjudiciales, OmniSpec 0.9.0 implementa una suite de gobernanza dura y confinamiento estricto:",
        "<strong>Omni-Guardian (Ejecución Sin Shell):</strong> Toda comprobación y quality gate se ejecuta mediante <code>spawn(..., { shell: false })</code> contra una lista blanca de binarios autorizados (<code>node</code>, <code>npm</code>, <code>vitest</code>, <code>tsc</code>, etc.). Rechaza inyecciones de comandos, operadores de shell (<code>&amp;</code>, <code>|</code>, <code>;</code>, backticks) y rutas fuera del proyecto.",
        "<strong>Hook Pre-commit Determinista:</strong> Instala la protección local con <code>omni-spec guardian install</code>. Bloquea commits con marcadores de conflicto (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>), bloques <code>catch</code> vacíos o silenciosos, y tipados peligrosos como <code>any</code> o <code>as unknown as</code>.",
        "<strong>Hollow-Guard (Anti-Slop en Pruebas):</strong> Durante <code>omni-spec verify</code>, rechaza cualquier suite modificada que carezca de aserciones, contenga tautologías engañosas (<code>expect(true).toBe(true)</code>, <code>assert.ok(true)</code>) o no importe código real de la aplicación.",
        "<strong>Atestación Criptográfica HMAC-SHA256:</strong> Cada resultado de verificación y el artefacto <code>verification.json</code> se firman criptográficamente con una clave privada protegida por DPAPI en <code>%LOCALAPPDATA%\\OmniSpec\\keys\\attestation.key</code>, garantizando que nadie pueda falsificar la aprobación de quality gates.",
        "<strong>Broker de Autenticación Seguro:</strong> Gestión de credenciales mediante DPAPI en <code>%LOCALAPPDATA%\\OmniSpec\\auth.dat</code> y cerrojo global entre procesos para refresco de tokens con <code>omni-spec login</code>."
      ]
    },
    "en": {
      "title": "8.3 Preventive Governance: Omni-Guardian, Hollow-Guard and Cryptographic Attestation",
      "paragraphs": [
        "To eliminate hallucinations and prevent harmful mutations, OmniSpec 0.9.0 enforces strict governance and runtime confinement:",
        "<strong>Omni-Guardian (Shell-Free Execution):</strong> All verification gates execute via <code>spawn(..., { shell: false })</code> against an allowed binary whitelist (<code>node</code>, <code>npm</code>, <code>vitest</code>, <code>tsc</code>, etc.). It strictly rejects shell injection, chaining operators (<code>&amp;</code>, <code>|</code>, <code>;</code>, backticks), and paths escaping the repository boundary.",
        "<strong>Deterministic Pre-commit Hook:</strong> Install local repo protection using <code>omni-spec guardian install</code>. Blocks commits containing merge conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>), silent or empty <code>catch</code> blocks, and unsafe types like <code>any</code> or <code>as unknown as</code>.",
        "<strong>Hollow-Guard (Test Anti-Slop):</strong> During <code>omni-spec verify</code>, it blocks modified test suites lacking assertions, using tautological checks (<code>expect(true).toBe(true)</code>, <code>assert.ok(true)</code>), or failing to import real project code.",
        "<strong>Cryptographic HMAC-SHA256 Attestation:</strong> Every gate result and the <code>verification.json</code> record are signed with HMAC-SHA256 using a DPAPI-protected key in <code>%LOCALAPPDATA%\\OmniSpec\\keys\\attestation.key</code>, ensuring verification evidence cannot be fabricated or tampered with.",
        "<strong>Secure Auth Broker:</strong> Credential management using DPAPI in <code>%LOCALAPPDATA%\\OmniSpec\\auth.dat</code> and a cross-process mutex for secure token rotation via <code>omni-spec login</code>."
      ]
    },
    "commands": [
      "npx --yes omni-spec guardian install",
      "npx --yes omni-spec guardian check",
      "npx --yes omni-spec login --provider claude",
      "npx --yes omni-spec auth status"
    ],
    "code": "$ omni-spec guardian check\n[GUARDIAN] Running pre-commit and pre-execution integrity checks...\n  [OK] No merge conflict markers found.\n  [OK] Zero-catch slop: no empty or exception-swallowing catch blocks.\n  [OK] Anti-slop: zero 'any' casts or unsafe assertions detected.\n  [OK] Shell confinement: binary whitelist validated.\n  [OK] Cryptographic key: DPAPI attestation active (HMAC-SHA256).\n\nResult: ALL CHECKS PASSED (exit code 0)"
  }
];
