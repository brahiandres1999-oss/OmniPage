import type { AgentData, DomainProfile } from '../types';
import type { Language } from '../i18n/translations';

/** Publication verified against npm and the GitHub release on 2026-10-26. */
export const omniSpecRelease = {
  "version": "0.7.0-preview.2",
  "label": "0.7.0 Preview",
  "channel": "preview",
  "stableVersion": "0.6.1",
  "published": true,
  "tagPublished": true,
  "releasePublished": true
} as const;
export const installCommand = 'npx --yes omni-spec@preview init';
export const agentsByLang: Record<Language, Record<string, AgentData>> = {
  "es": {
    "antigravity": {
      "title": "Google Antigravity",
      "desc": "Instala nueve skills y la definición del auditor. El host debe confirmar su descubrimiento; un archivo instalado no demuestra que el auditor se haya ejecutado.",
      "format": "Skills + auditor de workspace",
      "path": ".agents/skills/omni-*/SKILL.md + .agents/agents/omni-auditor.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent antigravity",
      "altCmd": {
        "label": "Plugin global opcional; se instala por separado:",
        "cmd": "npx --yes omni-spec@preview plugin install"
      }
    },
    "opencode": {
      "title": "OpenCode",
      "desc": "Skills con metadata de invocación. Comprueba su descubrimiento en la versión de OpenCode que utilizas.",
      "format": "Agent Skills + metadata de slash",
      "path": ".opencode/skills/omni-*/SKILL.md + AGENTS.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent opencode"
    },
    "claude": {
      "title": "Claude Code",
      "desc": "Prepara las skills del proyecto para trabajar con Claude Code. Conserva contexto y especificaciones; las capacidades y permisos dependen de la sesión.",
      "format": "Agent Skills",
      "path": ".claude/skills/omni-*/SKILL.md + AGENTS.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent claude"
    },
    "cursor": {
      "title": "Cursor",
      "desc": "Distribuye las skills y una regla de proyecto. Las reglas guían al agente; no son un bloqueo del sistema de archivos.",
      "format": "Skills + regla de proyecto",
      "path": ".cursor/skills/omni-*/SKILL.md + .cursor/rules/omni-spec.mdc",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent cursor"
    },
    "copilot": {
      "title": "VS Code / GitHub Copilot",
      "desc": "Instala skills e instrucciones del repositorio. La invocación depende del soporte Agent Skills de tu host.",
      "format": "Agent Skills + instrucciones",
      "path": ".agents/skills/omni-*/SKILL.md + .github/copilot-instructions.md",
      "invocation": "/omni-init (Agent Skills)",
      "cmd": "npx --yes omni-spec@preview init --agent copilot"
    },
    "codex": {
      "title": "Codex",
      "desc": "Usa el selector de skills o $omni-init. Si no aparece, lee la ruta de la skill que muestra el instalador.",
      "format": "Agent Skills + AGENTS.md",
      "path": ".agents/skills/omni-*/SKILL.md + AGENTS.md",
      "invocation": "$omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent codex"
    },
    "kilo": {
      "title": "Kilo",
      "desc": "Incluye skills y comandos Markdown en las rutas de Kilo. El descubrimiento real se comprueba en el editor.",
      "format": "Skills + comandos Markdown",
      "path": ".kilo/skills/omni-*/SKILL.md + .kilo/commands/omni-*.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent kilo"
    },
    "gemini": {
      "title": "Gemini CLI",
      "desc": "Incluye skills y comandos TOML para Gemini CLI. No presupone las herramientas disponibles en tu sesión.",
      "format": "Skills + comandos TOML",
      "path": ".gemini/skills/omni-*/SKILL.md + .gemini/commands/omni-*.toml",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent gemini"
    },
    "universal": {
      "title": "Otra herramienta / Generic",
      "desc": "Conserva nueve prompts completos para herramientas sin integración elegida. No registra comandos nativos.",
      "format": "Prompts de lectura explícita",
      "path": "specs/commands/omni-*.md",
      "invocation": "Lee specs/commands/omni-init.md",
      "cmd": "npx --yes omni-spec@preview init --agent generic"
    }
  },
  "en": {
    "antigravity": {
      "title": "Google Antigravity",
      "desc": "Installs nine skills and an auditor definition. The host must confirm discovery; an installed file does not prove that a separate auditor ran.",
      "format": "Skills + workspace auditor",
      "path": ".agents/skills/omni-*/SKILL.md + .agents/agents/omni-auditor.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent antigravity",
      "altCmd": {
        "label": "Optional global plugin; installed separately:",
        "cmd": "npx --yes omni-spec@preview plugin install"
      }
    },
    "opencode": {
      "title": "OpenCode",
      "desc": "Skills with invocation metadata. Check discovery in the OpenCode version you use.",
      "format": "Agent Skills + slash metadata",
      "path": ".opencode/skills/omni-*/SKILL.md + AGENTS.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent opencode"
    },
    "claude": {
      "title": "Claude Code",
      "desc": "Prepares project skills for Claude Code. Context and specifications are preserved; capabilities and permissions depend on the session.",
      "format": "Agent Skills",
      "path": ".claude/skills/omni-*/SKILL.md + AGENTS.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent claude"
    },
    "cursor": {
      "title": "Cursor",
      "desc": "Distributes skills and a project rule. Rules guide the agent; they do not lock the filesystem.",
      "format": "Skills + project rule",
      "path": ".cursor/skills/omni-*/SKILL.md + .cursor/rules/omni-spec.mdc",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent cursor"
    },
    "copilot": {
      "title": "VS Code / GitHub Copilot",
      "desc": "Installs repository skills and instructions. Invocation depends on your host’s Agent Skills support.",
      "format": "Agent Skills + instructions",
      "path": ".agents/skills/omni-*/SKILL.md + .github/copilot-instructions.md",
      "invocation": "/omni-init (Agent Skills)",
      "cmd": "npx --yes omni-spec@preview init --agent copilot"
    },
    "codex": {
      "title": "Codex",
      "desc": "Use the skill picker or $omni-init. If it is missing, read the skill path printed by the installer.",
      "format": "Agent Skills + AGENTS.md",
      "path": ".agents/skills/omni-*/SKILL.md + AGENTS.md",
      "invocation": "$omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent codex"
    },
    "kilo": {
      "title": "Kilo",
      "desc": "Includes skills and Markdown commands in Kilo’s paths. Verify actual discovery in the editor.",
      "format": "Skills + Markdown commands",
      "path": ".kilo/skills/omni-*/SKILL.md + .kilo/commands/omni-*.md",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent kilo"
    },
    "gemini": {
      "title": "Gemini CLI",
      "desc": "Includes skills and TOML commands for Gemini CLI. It does not assume which tools your session exposes.",
      "format": "Skills + TOML commands",
      "path": ".gemini/skills/omni-*/SKILL.md + .gemini/commands/omni-*.toml",
      "invocation": "/omni-init",
      "cmd": "npx --yes omni-spec@preview init --agent gemini"
    },
    "universal": {
      "title": "Another tool / Generic",
      "desc": "Keeps nine complete prompts for tools without a selected integration. It does not register native commands.",
      "format": "Explicit-read prompts",
      "path": "specs/commands/omni-*.md",
      "invocation": "Read specs/commands/omni-init.md",
      "cmd": "npx --yes omni-spec@preview init --agent generic"
    }
  }
};
export const profileDataByLang: Record<Language, Record<string, DomainProfile>> = {
  "es": {
    "fintech": {
      "id": "fintech",
      "name": "Fintech & Pagos",
      "flag": "--profile fintech",
      "tag": "Idempotencia · Datos · Trazabilidad",
      "description": "Controles de Fintech & Pagos para revisar y adaptar con el agente. El perfil no impone un stack ni certifica cumplimiento.",
      "invariants": [
        "Revisar riesgos de cobros y operaciones repetidas",
        "Determinar alcance de datos financieros y acceso",
        "Elegir controles y pruebas relevantes al producto"
      ]
    },
    "healthtech": {
      "id": "healthtech",
      "name": "Healthtech & Salud",
      "flag": "--profile healthtech",
      "tag": "Privacidad · Datos de salud · Alcance",
      "description": "Controles de Healthtech & Salud para revisar y adaptar con el agente. El perfil no impone un stack ni certifica cumplimiento.",
      "invariants": [
        "Identificar datos sensibles y actores con acceso",
        "Revisar obligaciones aplicables y trazabilidad",
        "Separar controles declarados de cumplimiento comprobado"
      ]
    },
    "ecommerce": {
      "id": "ecommerce",
      "name": "E-Commerce",
      "flag": "--profile ecommerce",
      "tag": "Inventario · Checkout · Consistencia",
      "description": "Controles de E-Commerce para revisar y adaptar con el agente. El perfil no impone un stack ni certifica cumplimiento.",
      "invariants": [
        "Revisar concurrencia y estados del pedido",
        "Acordar consistencia de precios, stock y pagos",
        "Probar los escenarios relevantes del checkout"
      ]
    },
    "bpo": {
      "id": "bpo",
      "name": "BPO & Workplace",
      "flag": "--profile bpo",
      "tag": "Privacidad laboral · Acceso · Agregación",
      "description": "Controles de BPO & Workplace para revisar y adaptar con el agente. El perfil no impone un stack ni certifica cumplimiento.",
      "invariants": [
        "Revisar qué datos personales necesita el producto",
        "Acordar acceso y finalidad de métricas agregadas",
        "Evaluar reidentificación y privacidad según contexto"
      ]
    },
    "general": {
      "id": "general",
      "name": "General Software",
      "flag": "--profile general",
      "tag": "Alcance · Convenciones · Evidencia",
      "description": "Controles de General Software para revisar y adaptar con el agente. El perfil no impone un stack ni certifica cumplimiento.",
      "invariants": [
        "Conservar decisiones y convenciones del proyecto",
        "Acordar cambios acotados antes de implementar",
        "Configurar comprobaciones pertinentes y registrar resultados"
      ]
    }
  },
  "en": {
    "fintech": {
      "id": "fintech",
      "name": "Fintech & Payments",
      "flag": "--profile fintech",
      "tag": "Idempotency · Data · Traceability",
      "description": "Controls for Fintech & Payments to review and adapt with the agent. A profile does not impose a stack or certify compliance.",
      "invariants": [
        "Review payment risks and repeated operations",
        "Determine financial data and access boundaries",
        "Choose controls and tests relevant to the product"
      ]
    },
    "healthtech": {
      "id": "healthtech",
      "name": "Healthtech & Health",
      "flag": "--profile healthtech",
      "tag": "Privacy · Health data · Scope",
      "description": "Controls for Healthtech & Health to review and adapt with the agent. A profile does not impose a stack or certify compliance.",
      "invariants": [
        "Identify sensitive data and actors with access",
        "Review applicable obligations and traceability",
        "Separate declared controls from demonstrated compliance"
      ]
    },
    "ecommerce": {
      "id": "ecommerce",
      "name": "E-Commerce",
      "flag": "--profile ecommerce",
      "tag": "Inventory · Checkout · Consistency",
      "description": "Controls for E-Commerce to review and adapt with the agent. A profile does not impose a stack or certify compliance.",
      "invariants": [
        "Review concurrency and order states",
        "Agree on price, stock and payment consistency",
        "Test relevant checkout scenarios"
      ]
    },
    "bpo": {
      "id": "bpo",
      "name": "BPO & Workplace",
      "flag": "--profile bpo",
      "tag": "Worker privacy · Access · Aggregation",
      "description": "Controls for BPO & Workplace to review and adapt with the agent. A profile does not impose a stack or certify compliance.",
      "invariants": [
        "Review which personal data the product needs",
        "Agree on access and purpose for aggregate metrics",
        "Assess reidentification and privacy in context"
      ]
    },
    "general": {
      "id": "general",
      "name": "General Software",
      "flag": "--profile general",
      "tag": "Scope · Conventions · Evidence",
      "description": "Controls for General Software to review and adapt with the agent. A profile does not impose a stack or certify compliance.",
      "invariants": [
        "Preserve project decisions and conventions",
        "Agree on bounded changes before implementation",
        "Configure relevant checks and record results"
      ]
    }
  }
};
