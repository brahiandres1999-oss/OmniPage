import recording from './lifecycle-recording.json';
import fileIcons from './file-icons.json';
import highlights from './lifecycle-highlighted.json';
export type DemoLanguage = 'es' | 'en';
export interface DemoFile { path: string; content: string; changed: boolean; html?:string }
export interface DemoStep { id:string; label:string; command:string; prompt:string; response:string; terminal:string; file:string; focusLine:number }
const feature='specs/001-copiar-comando/';
const source=[
  ['install','Instalar','Install','.claude/skills/omni-init/SKILL.md','Instala OmniSpec en esta carpeta para Claude Code.','El runtime y las nueve skills están instalados. El onboarding del proyecto es el siguiente paso.',0,0],
  ['init','Init','Init','specs/project-context.md','Revisa el proyecto y registra su contexto.','El proyecto usa JavaScript ESM y node --test. La validación de aplicación queda separada del onboarding.',2,0],
  ['discuss','Discuss','Discuss','specs/project-context.md','Quiero copiar el comando exacto de la landing y recuperar los fallos del portapapeles. Conserva el acuerdo.','Acordamos una función con adaptadores de Clipboard y feedback. La apariencia de la interfaz se revisa aparte.',-1,21],
  ['specify','Specify','Specify',feature+'spec.md','Formaliza la feature copiar-comando con criterios verificables.','SPEC-001 define copia exacta, éxito, error, estado ocupado y resultados tardíos.',3,4],
  ['clarify','Clarify','Clarify',feature+'spec.md','Si el comando cambia durante la copia, descarta el aviso del comando anterior.','La decisión queda en spec.md. La operación conserva el texto que capturó antes de esperar al portapapeles.',-1,12],
  ['plan','Plan','Plan',feature+'plan.md','Diseña la función, sus comprobaciones y la recuperación.','El plan conecta copyCommand con pruebas de éxito, rechazo y cambios de comando durante la espera.',-1,0],
  ['tasks','Tasks','Tasks',feature+'tasks.md','Divide el plan en tareas y audita la estructura antes de implementar.','Cuatro tareas relacionan el cambio con sus cinco criterios. El audit estructural no ejecuta pruebas.',4,0],
  ['implement','Implement','Implement','src/copy-command.mjs','Implementa la función y las pruebas que acordamos.','La función captura el texto, compara su vigencia al resolver y libera busy en finally. Las cuatro pruebas se ejecutaron.',5,7],
  ['audit','Audit','Audit',feature+'verification.md','Revisa el código y las regresiones de copia tardía.','La evidencia distingue las pruebas del módulo de una revisión de interfaz. No se declara validación visual.',6,0],
  ['converge','Converge','Converge',feature+'verification.json','Comprueba los criterios, verifica y completa la feature.','Verify ejecutó los checks configurados. Complete comprobó el cierre y marcó esta feature como COMPLETED.',9,0],
] as const;

/** Uses recorded CLI output verbatim, with only the temporary machine path normalized. */
export function lifecycleSteps(lang:DemoLanguage):DemoStep[]{
  return source.map(([id,es,en,file,prompt,response,event,focusLine])=>{
    const events=event<0?[]:id==='converge'?recording.events.slice(9):[recording.events[event]];
    return {id,label:lang==='es'?es:en,file,prompt,response,focusLine,
      command:id==='install'?recording.events[0].command:'/omni-'+id,
      terminal:events.map(e=>'OmniPage > '+e.command+'\n\n'+e.output.replace(/\u001b\[[0-9;]*m/g,'').trim()).join('\n\n'),
    };
  });
}

/** Reconstructs exact recorded files at the selected point, without inventing future artifacts. */
export function lifecycleFiles(stage:number):DemoFile[]{
  return recording.files.flatMap(file=>{
    const version=file.versions.filter(v=>v.stage<=stage).at(-1);
    return version?[{path:file.path,content:version.content,changed:version.stage===stage,html:(highlights as Record<string,string>)[file.path+'@'+version.stage]}]:[];
  });
}

/** Official Seti file glyph and color from the pinned VS Code source. */
export function fileIcon(path:string){
  const type=path.endsWith('.md')?'markdown':path.endsWith('.json')?'json':/\.m?js$/.test(path)?'javascript':path.endsWith('.ts')?'typescript':'default';
  const icon=fileIcons[type];
  return {glyph:String.fromCodePoint(parseInt(icon.fontCharacter.slice(1),16)),color:icon.fontColor};
}
export const recordingDate=recording.recordedAt;
