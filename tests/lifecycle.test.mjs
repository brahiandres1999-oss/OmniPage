import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
const recording=JSON.parse(readFileSync('src/data/lifecycle-recording.json','utf8'));
const at=(path,stage)=>recording.files.find(file=>file.path===path)?.versions.filter(v=>v.stage<=stage).at(-1)?.content;

test('the displayed module passes its recorded behavioral tests again',()=>{
  const folder=mkdtempSync(join(tmpdir(),'omnipage-replay-test-'));
  writeFileSync(join(folder,'copy-command.mjs'),at('src/copy-command.mjs',9));
  writeFileSync(join(folder,'copy-command.test.mjs'),at('test/copy-command.test.mjs',9).replace('../src/copy-command.mjs','./copy-command.mjs'));
  const env={...process.env};delete env.NODE_TEST_CONTEXT;
  const result=spawnSync(process.execPath,['--test','--test-reporter=tap','copy-command.test.mjs'],{cwd:folder,env,encoding:'utf8'});
  assert.equal(result.status,0,result.stdout+result.stderr);
  assert.match(result.stdout,/# pass 4/);
});

test('the replay exposes pending criteria before evidence, and completed state only after verify',()=>{
  assert.equal(at('src/copy-command.mjs',6),undefined);
  assert.equal(at('specs/001-copiar-comando/verification.json',8),undefined);
  const pending=JSON.parse(at('specs/001-copiar-comando/acceptance.json',3));
  assert.equal(pending.criteria.length,5);
  assert.ok(pending.criteria.every(c=>c.status==='pending'));
  const verified=JSON.parse(at('specs/001-copiar-comando/verification.json',9));
  assert.equal(verified.passed,true);
  const manifest=JSON.parse(at('specs/manifest.json',9));
  assert.equal(manifest.specs[0].status,'COMPLETED');
  assert.equal(manifest.active_spec,null);
  assert.ok(recording.events.every(e=>e.exitCode===0));
  assert.ok(!at('specs/project-context.md',9).includes('todavía no fue ejecutado'));
});
