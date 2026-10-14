#!/usr/bin/env node
// Read-only protocol probe. Creates no thread, turn, config write or activation.
import { spawn } from 'node:child_process';
import readline from 'node:readline';
const codex = process.env.BGM_CODEX_BINARY || '/Users/damian/.local/bin/codex';
const cwds = process.argv.slice(2).length ? process.argv.slice(2) : ['/Users/damian/Documents/Codex/PROJECTS/BGM HUMANIZE IT','/Users/damian/Sites/localhost/bgm-humanize-it'];
const proc = spawn(codex, ['app-server', '--stdio'], {stdio:['pipe','pipe','pipe']});
let stderrBytes = 0;
proc.stderr.on('data', chunk => { stderrBytes += chunk.length; });
const lines = readline.createInterface({input:proc.stdout});
const send = message => proc.stdin.write(JSON.stringify(message)+'\n');
const started = new Date().toISOString();
let completed = false;
const timer = setTimeout(() => { finish({ok:false, error:'Probe timed out after 30 seconds'}); },30000);
function finish(result) {
  if (completed) return;
  completed=true;
  process.exitCode = result.ok ? 0 : 1;
  clearTimeout(timer);
  console.log(JSON.stringify({...result,started,finished:new Date().toISOString(),codex,transport:'isolated stdio process',forceReload:true,perCwdExtraUserRoots:'not supplied',codexHome:process.env.CODEX_HOME || null,stderrBytes},null,2));
  lines.close();
  proc.stdin.end();
  proc.kill('SIGTERM');
}
lines.on('line', line => {
  let msg;
  try { msg=JSON.parse(line); } catch { return; }
  if (msg.id===0) {
    if(msg.error) return finish({ok:false, stage:'initialize', error:msg.error});
    send({method:'initialized',params:{}});
    send({method:'skills/list',id:1,params:{cwds,forceReload:true}});
  }
  if(msg.id===1) {
    if(msg.error) return finish({ok:false, stage:'skills/list', error:msg.error});
    const results=(msg.result?.data || []).map(row=>{
      const skills=row.skills || [];
      const rootStats = {};
      for(const skill of skills) {
        const skillPath=skill.path || '<path unavailable>';
        let root;
        for(const candidate of ['/Users/damian/.codex/skills','/Users/damian/.agents/skills','/etc/codex/skills'])
          if(skillPath.startsWith(candidate+'/')) root=candidate;
        if(!root) root=skillPath.includes('/.codex/plugins/') ? 'plugin bundles' : 'other roots';
        const key=root+' | '+(skill.scope || '<unknown scope>');
        rootStats[key]=(rootStats[key] || 0)+1;
      }
      return {cwd:row.cwd,skillsTotal:skills.length,rootStats,errors:row.errors || [],selected:skills.filter(s=>['bgm-humanize-it','humanize','ai-check','skill-creator','skill-installer'].includes(s.name)).map(s=>({name:s.name,path:s.path,scope:s.scope,enabled:s.enabled,interface:s.interface,policy:s.policy}))};
    });
    finish({ok:true,results});
  }
});
proc.on('error', error=>finish({ok:false,error:error.message}));
proc.on('exit', (code,signal)=>{if(!completed)finish({ok:false,error:'Server exited before readback',code,signal});});
send({method:'initialize',id:0,params:{clientInfo:{name:'bgm_skill_discovery_probe',title:'BGM read-only skill discovery',version:'1.0.0'}}});
