import { lifecycleFiles, lifecycleSteps, fileIcon } from '../data/lifecycle';
import { getLanguage } from './preferences';

const root=document.getElementById('lifecycle-demo');
if(root){
  const el=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
  const tree=el('demo-file-tree'), ide=el('omni-ide'), film=el('demo-film');
  const video=el<HTMLVideoElement>('workflow-video');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let selectedStep=0,selectedFile=lifecycleSteps('es')[0].file,exploring=false,userPaused=reduced.matches,visible=false,loaded=false;
  const closedFolders=new Set<string>();
  const p=(es:string,en:string)=>getLanguage()==='es'?es:en;

  function showFile(path:string){
    const file=lifecycleFiles(selectedStep).find(item=>item.path===path)!;
    if(!file)return;
    selectedFile=file.path;
    el('demo-file-tab').textContent=file.path.split('/').at(-1)!;
    el('demo-file-path').textContent=file.path;
    // Highlighted HTML is escaped by Shiki at authoring time from the bundled recording.
    if(file.html)el('demo-file-content').innerHTML=file.html;else el('demo-file-content').textContent=file.content;
    const icon=fileIcon(file.path);el('demo-tab-icon').textContent=icon.glyph;el('demo-tab-icon').style.color=icon.color;
    el('demo-file-type').textContent=file.path.endsWith('.json')?'JSON':file.path.endsWith('.md')?'Markdown':'JavaScript';
    el('demo-line-numbers').replaceChildren(...file.content.split('\n').map((_,i)=>{const line=document.createElement('span');line.textContent=String(i+1);return line;}));
    tree.querySelectorAll<HTMLButtonElement>('[data-file]').forEach(button=>{if(button.dataset.file===path)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');});
    el('demo-file-content').closest('.lifecycle-editor')!.scrollTop=0;
  }

  function renderTree(){
    const files=lifecycleFiles(selectedStep),groups=new Map<string,HTMLElement>([['',tree]]);
    tree.replaceChildren();
    for(const file of [...files].sort((a,b)=>a.path.localeCompare(b.path))){
      const parts=file.path.split('/');let parent=tree;
      for(let i=0;i<parts.length-1;i++){
        const path=parts.slice(0,i+1).join('/');
        if(!groups.has(path)){
          const folder=document.createElement('details');folder.className='demo-tree-folder';
          const selectedInside=selectedFile.startsWith(path+'/');
          const compact=!['specs/.omni','specs/_templates'].includes(path)&&!parts[i].startsWith('omni-')&&!(selectedStep>0&&path==='.claude');
          folder.open=selectedInside||(!closedFolders.has(path)&&compact);
          const summary=document.createElement('summary');summary.textContent=parts[i];folder.append(summary);parent.append(folder);groups.set(path,folder);
          folder.addEventListener('toggle',()=>{if(folder.open)closedFolders.delete(path);else closedFolders.add(path);});
        }
        parent=groups.get(path)!;
      }
      const button=document.createElement('button');button.type='button';button.dataset.file=file.path;button.className='demo-tree-file';button.title=file.path;
      const glyph=fileIcon(file.path),icon=document.createElement('span');icon.className='seti-icon';icon.textContent=glyph.glyph;icon.style.color=glyph.color;icon.setAttribute('aria-hidden','true');
      const name=document.createElement('span');name.textContent=parts.at(-1)!;button.append(icon,name);
      if(file.changed){const badge=document.createElement('span');badge.className='demo-file-change';badge.textContent='●';badge.title=p('Actualizado en este paso','Updated in this step');button.append(badge);}
      button.addEventListener('click',()=>showFile(file.path));parent.append(button);
    }
    el('demo-file-count').textContent=String(files.length);showFile(selectedFile);
  }

  function render(announce=false){
    const steps=lifecycleSteps(getLanguage()),step=steps[selectedStep];
    root!.dataset.stage=String(selectedStep);
    el('demo-skill-command').textContent=selectedStep===0?'Terminal':step.command;
    el('demo-step-prompt').textContent=step.prompt;el('demo-step-response').textContent=step.response;
    el('demo-agent-response').hidden=false;el('demo-ready-note').hidden=true;
    const terminal=step.terminal||steps.slice(0,selectedStep).reverse().find(item=>item.terminal)?.terminal||'';
    el('demo-terminal-content').textContent=terminal;
    el('demo-progress').textContent=(selectedStep+1)+' / '+steps.length;
    el('demo-run-label').textContent=selectedStep===steps.length-1?p('Volver al inicio','Back to the start'):p('Siguiente: ','Next: ')+steps[selectedStep+1].command;
    el('demo-current-skill').textContent=selectedStep===0?p('Instalación','Installation'):step.command;
    const changed=el('demo-changed-files');changed.replaceChildren();
    const button=document.createElement('button');button.type='button';button.textContent=p('Abrir ','Open ')+step.file.split('/').at(-1)!;
    button.addEventListener('click',()=>{showFile(step.file);el('demo-file-content').closest<HTMLElement>('.lifecycle-editor')!.focus();});changed.append(button);
    renderTree();if(announce){el('demo-live-status').lang='es';el('demo-live-status').textContent=step.label+'. '+step.response;}
  }

  function updatePlayer(){
    const playing=!video.paused;
    el('film-toggle').setAttribute('aria-label',playing?p('Pausar recorrido','Pause walkthrough'):p('Reproducir recorrido','Play walkthrough'));
    el('film-toggle').title=el('film-toggle').getAttribute('aria-label')!;
    el('film-toggle').querySelector('i')!.className='codicon codicon-'+(playing?'debug-pause':'play');
  }
  function loadVideo(){if(loaded)return;const source=video.querySelector('source')!;source.src=source.dataset.videoSrc!;video.load();loaded=true;}
  function playbackFailed(){
    const restoreFocus=film.contains(document.activeElement)||el('film-toggle')===document.activeElement;
    exploring=true;showMode();
    el('demo-live-status').lang=getLanguage();
    el('demo-live-status').textContent=p('El vídeo no pudo cargarse. Puedes explorar los archivos.','The video could not load. You can explore the files.');
    if(restoreFocus)el('demo-run').focus();
  }
  function play(){loadVideo();void video.play().catch((error:DOMException)=>{
    if(error.name==='AbortError')return;
    if(error.name==='NotAllowedError'){userPaused=true;updatePlayer();return;}
    playbackFailed();
  });}
  function showMode(){
    ide.hidden=!exploring;film.hidden=exploring;
    el('demo-explore').hidden=exploring;el('demo-watch').hidden=!exploring;el('film-toggle').hidden=exploring;
    if(exploring){video.pause();selectedStep=Math.min(9,Math.floor(video.currentTime/8));selectedFile=lifecycleSteps(getLanguage())[selectedStep].file;render();}
    else if(visible&&!userPaused)play();
  }
  el('demo-run').addEventListener('click',()=>{selectedStep=(selectedStep+1)%10;selectedFile=lifecycleSteps(getLanguage())[selectedStep].file;render(true);});
  el('demo-reset').addEventListener('click',()=>{selectedStep=0;selectedFile=lifecycleSteps(getLanguage())[0].file;closedFolders.clear();if(exploring)render(true);else{video.currentTime=0;if(!userPaused)play();}});
  el('demo-explore').addEventListener('click',()=>{exploring=true;showMode();el('demo-run').focus();});
  el('demo-watch').addEventListener('click',()=>{exploring=false;showMode();el('film-toggle').focus();});
  el('film-toggle').addEventListener('click',()=>{if(video.paused){userPaused=false;play();}else{userPaused=true;video.pause();}});
  video.addEventListener('play',updatePlayer);video.addEventListener('pause',updatePlayer);
  video.addEventListener('timeupdate',()=>{if(!exploring){const step=lifecycleSteps(getLanguage())[Math.min(9,Math.floor(video.currentTime/8))];el('demo-current-skill').textContent=step.id==='install'?p('Instalación','Installation'):step.command;}});
  video.addEventListener('error',playbackFailed);video.querySelector('source')!.addEventListener('error',playbackFailed);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible&&!exploring&&!userPaused)play();else video.pause();},{threshold:.2}).observe(root);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else if(visible&&!exploring&&!userPaused)play();});
  reduced.addEventListener('change',()=>{if(reduced.matches){userPaused=true;video.pause();}});
  window.addEventListener('omni:language-change',()=>{render();updatePlayer();});
  render();showMode();updatePlayer();
}
