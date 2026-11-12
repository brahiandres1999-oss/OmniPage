/** Reading order shared by the documentation index and its content. IDs are stable public anchors. */
export const docsNavigation = [
  { es: 'Primeros pasos', en: 'Getting started', items: [
    { id: 'intro', es: 'Qué es OmniSpec', en: 'What is OmniSpec' },
    { id: 'instalacion', es: 'Instalación', en: 'Installation' },
    { id: 'quickstart', es: 'Tu primer proyecto', en: 'Your first project' },
  ] },
  { es: 'Arquitectura', en: 'Architecture', items: [
    { id: 'estructura', es: 'Archivos del proyecto', en: 'Project files' },
    { id: 'constitucion', es: 'Constitución', en: 'Constitution' },
    { id: 'arquetipos', es: 'Tipos de trabajo y rutas FIT', en: 'Work types and FIT routes' },
    { id: 'memoria-cartografia', es: 'Memoria y cartografía', en: 'Memory and cartography' },
  ] },
  { es: 'Flujo de trabajo', en: 'Workflow', items: [
    { id: 'flujo-descubrimiento', es: 'Explorar y aclarar', en: 'Explore and clarify' },
    { id: 'flujo-contratos', es: 'Especificar y planificar', en: 'Specify and plan' },
    { id: 'flujo-ejecucion', es: 'Implementar y verificar', en: 'Implement and verify' },
    { id: 'quality-gates', es: 'Checks y evidencia', en: 'Checks and evidence' },
  ] },
  { es: 'Perfiles e integraciones', en: 'Profiles and integrations', items: [
    { id: 'perfiles-intro', es: 'Cómo usar los perfiles', en: 'Using profiles' },
    { id: 'perfiles-catalogo', es: 'Catálogo de perfiles', en: 'Profile catalog' },
    { id: 'adaptadores-agentes', es: 'Configurar tu agente', en: 'Configure your agent' },
    { id: 'antigravity-plugin', es: 'Plugin de Antigravity', en: 'Antigravity plugin' },
  ] },
  { es: 'Controles de ingeniería', en: 'Engineering controls', items: [
    { id: 'anti-slop', es: 'Calidad de código e interfaz', en: 'Code and interface quality' },
    { id: 'gobernanza-seguridad', es: 'Guardian y atestación', en: 'Guardian and attestation' },
    { id: 'manifest-lock', es: 'Concurrencia entre agentes', en: 'Agent concurrency' },
  ] },
  { es: 'Mantenimiento', en: 'Maintenance', items: [
    { id: 'mantenimiento', es: 'Actualizar una instalación', en: 'Update an installation' },
    { id: 'recuperacion', es: 'Resolver problemas', en: 'Troubleshooting' },
  ] },
];
