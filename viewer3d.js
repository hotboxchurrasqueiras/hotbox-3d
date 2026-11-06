(function(){
var SRC=window.__HB3D_SRC;
var H={"alt":[[-0.38,0.0004,-0.3249],[-0.38,0.7874,-0.3249],"78cm",[-0.08,0.0,0]],"larg":[[-0.3697,0.0004,0.14],[0.3703,0.0004,0.14],"74cm",[0,0,0.08]],"prof":[[0.385,0.0004,-0.3249],[0.385,0.0004,0.1251],"45cm",[0.08,0,0]],"pe":[[-0.38,0.0004,0.14],[-0.38,0.1694,0.14],"15cm",[-0.07,0,0.03]],"fbw":[[0.1043,0.415,-0.3],[0.3353,0.415,-0.3],"23cm",[0,0.03,-0.07]],"fbd":[[0.345,0.415,-0.2919],[0.345,0.415,0.0921],"38cm",[0.08,0.02,0]],"tdw":[[-0.3557,0.5,-0.1269],[0.0853,0.5,-0.1269],"44cm",[0,0.05,0]],"tdd":[[-0.3617,0.5,-0.3029],[-0.3617,0.5,-0.1319],"16cm",[-0.07,0.02,0]]};
var old=document.getElementById('hb3d-ov');if(old)old.remove();
var st=document.createElement('style');st.textContent=
'#hb3d-ov{position:fixed;inset:0;z-index:999998;background:rgba(10,10,10,.92);display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif}'+
'#hb3d-box{position:relative;width:min(1100px,96vw);height:min(740px,90vh);background:radial-gradient(circle at 50% 40%,#5a5a5a,#262626);border-radius:20px;overflow:hidden}'+
'#hb3d-mv{width:100%;height:100%;--poster-color:transparent}'+
'.hb3d-t{position:absolute;left:20px;top:16px;color:#fff;font-weight:700;font-size:18px;pointer-events:none}.hb3d-t span{color:#F16122}.hb3d-t small{display:block;font-weight:400;font-size:13px;color:#bbb;margin-top:4px}'+
'.hb3d-x{position:absolute;right:14px;top:12px;background:#F16122;color:#fff;border:0;border-radius:20px;padding:8px 16px;font-weight:700;font-size:14px;cursor:pointer}'+
'.hb3d-bar{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);display:flex;gap:8px;flex-wrap:wrap;justify-content:center;width:max-content;max-width:94%}'+
'.hb3d-b{background:rgba(0,0,0,.6);color:#fff;border:1px solid rgba(255,255,255,.25);border-radius:22px;padding:9px 14px;font-weight:700;font-size:13px;cursor:pointer;user-select:none;-webkit-user-select:none;touch-action:none;display:flex;align-items:center;gap:6px}'+
'.hb3d-b:hover{border-color:#F16122}.hb3d-b.on{background:#F16122;border-color:#F16122}'+
'.hb3d-ar{position:absolute;right:14px;bottom:70px;background:#fff;color:#111;border:0;border-radius:22px;padding:10px 16px;font-weight:800;font-size:14px;box-shadow:0 4px 14px rgba(0,0,0,.3)}'+
'.hb3d-h{display:none;pointer-events:none}.hb3d-on .hb3d-h{display:block}'+
'.hb3d-lab{background:#F16122;color:#fff;font-weight:800;font-size:13px;padding:3px 8px;border-radius:12px;white-space:nowrap;transform:translateY(-2px)}'+
'.hb3d-dot{width:1px;height:1px}'+
'#hb3d-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:none}.hb3d-on #hb3d-svg{display:block}'+
'#hb3d-svg line{stroke:#F16122;stroke-width:2;stroke-dasharray:4 4}#hb3d-svg line.ld{stroke-width:1;stroke-dasharray:none;opacity:.8}'+
'.hb3d-gauge{position:absolute;left:20px;bottom:76px;color:#fff;font-size:12px;background:rgba(0,0,0,.55);padding:8px 12px;border-radius:12px;line-height:1.5}.hb3d-gauge b{color:#F16122}'+
'.hb3d-cfg{position:absolute;right:14px;top:58px;width:230px;background:rgba(0,0,0,.55);border-radius:14px;padding:10px 12px;color:#fff;font-size:12px}'+
'.hb3d-cfg .g{margin-bottom:8px}.hb3d-cfg .l{color:#bbb;font-size:11px;text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px}'+
'.hb3d-cfg .o{display:flex;gap:5px;flex-wrap:wrap}.hb3d-cfg button{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.25);border-radius:14px;padding:5px 9px;font-size:12px;font-weight:700;cursor:pointer}'+
'.hb3d-cfg button.on{background:#F16122;border-color:#F16122}.hb3d-cfg .pr{border-top:1px solid rgba(255,255,255,.15);padding-top:8px;margin-top:4px}.hb3d-cfg .pr s{color:#aaa;font-size:12px}.hb3d-cfg .pr b{display:block;font-size:18px;color:#fff}.hb3d-cfg .pr small{color:#F16122;font-weight:700}'+
'.hb3d-cfg .nt{background:#F16122;border-radius:8px;padding:5px 8px;margin-bottom:8px;font-weight:700}'+
'@media(max-width:700px){.hb3d-cfg{left:8px;right:8px;top:54px;width:auto;display:flex;gap:10px;overflow-x:auto;padding:8px 10px;white-space:nowrap}.hb3d-cfg .g{margin:0;flex:none}.hb3d-cfg .pr{border:0;padding:0;margin:0;flex:none}.hb3d-cfg .pr b{font-size:15px}.hb3d-cfg .nt{flex:none;margin:0}}'+
'@media(max-width:700px){#hb3d-box{width:100vw;height:100%;border-radius:0}.hb3d-t{font-size:14px;right:92px;left:14px;top:12px}.hb3d-t small{font-size:11px}'+
'.hb3d-bar{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:auto;left:8px;right:8px;transform:none;bottom:calc(30px + env(safe-area-inset-bottom))}'+
'.hb3d-b{padding:9px 4px;font-size:12px;justify-content:center;border-radius:14px}.hb3d-gauge{left:14px;top:auto;bottom:calc(126px + env(safe-area-inset-bottom));padding:5px 10px}.hb3d-ar{bottom:136px;right:12px}.hb3d-lab{font-size:11px;padding:2px 6px}}';
document.head.appendChild(st);
var hs='',ln='';
Object.keys(H).forEach(function(k){var a=H[k][0],b=H[k][1],o=H[k][3],c=[(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2],m=[c[0]+o[0],c[1]+o[1],c[2]+o[2]];
 hs+='<div class="hb3d-h hb3d-dot" slot="hotspot-'+k+'a" data-position="'+a.join(' ')+'"></div><div class="hb3d-h hb3d-dot" slot="hotspot-'+k+'b" data-position="'+b.join(' ')+'"></div><div class="hb3d-h hb3d-dot" slot="hotspot-'+k+'c" data-position="'+c.join(' ')+'"></div><div class="hb3d-h hb3d-lab" slot="hotspot-'+k+'m" data-position="'+m.join(' ')+'">'+H[k][2]+'</div>';
 ln+='<line marker-start="url(#hbar)" marker-end="url(#hbar)" id="hb3d-l-'+k+'"/><line class="ld" id="hb3d-d-'+k+'"/>';});
var ov=document.createElement('div');ov.id='hb3d-ov';
ov.innerHTML='<div id="hb3d-box"><model-viewer id="hb3d-mv" src="'+SRC+'" camera-controls touch-action="pan-y" shadow-intensity="1" shadow-softness="0.7" exposure="0.95" tone-mapping="aces" environment-image="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr" camera-orbit="30deg 72deg 100%" ar ar-modes="webxr quick-look scene-viewer" ar-placement="floor" ar-scale="fixed" interaction-prompt="none">'+hs+
'<button slot="ar-button" class="hb3d-ar">📱 Ver na sua casa</button></model-viewer>'+
'<svg id="hb3d-svg"><defs><marker id="hbar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" fill="#F16122"/></marker></defs>'+ln+'</svg>'+
'<div class="hb3d-t">Parrilla Hotbox 74x45 · Alvenaria <span>em 3D</span><small>Arraste para girar · role ou pinça para dar zoom</small></div>'+
'<button class="hb3d-x" id="hb3d-close">Fechar ×</button>'+
'<div class="hb3d-cfg" id="hb3d-cfg" style="display:none"></div>'+
'<div class="hb3d-gauge" id="hb3d-g">Altura da grelha: <b id="hb3d-gv">0 cm</b></div>'+
'<div class="hb3d-bar">'+
'<button class="hb3d-b" id="hb3d-down">⟲ Girar p/ esquerda (desce)</button>'+
'<button class="hb3d-b" id="hb3d-up">⟳ Girar p/ direita (sobe)</button>'+
'<button class="hb3d-b" id="hb3d-door">Abrir porta</button>'+
'<button class="hb3d-b" id="hb3d-rm">Tirar porta</button>'+
'<button class="hb3d-b" id="hb3d-med">📏 Medidas</button>'+
'<button class="hb3d-b" id="hb3d-ctr">⌖ Centralizar</button>'+
'</div></div>';
document.body.appendChild(ov);
var box=document.getElementById('hb3d-box'),mv=document.getElementById('hb3d-mv');
var MOB=(window.innerWidth||1000)<700;if(MOB){document.getElementById('hb3d-down').textContent='⟲ Desce grelha';document.getElementById('hb3d-up').textContent='⟳ Sobe grelha';document.getElementById('hb3d-med').textContent='📏 Medidas';document.getElementById('hb3d-ctr').textContent='⌖ Centro';mv.cameraOrbit='30deg 72deg 108%'}
document.getElementById('hb3d-close').onclick=function(){ov.remove()};
var scene=null,N={},base={};
var TRAVEL=0.11,TURNS=4; // 11 cm de curso, 4 voltas do volante
var S={lift:0,liftV:0,door:0,doorT:0,attached:1,attT:1,grelha:'arg',esp:true,tam:'74'};
function render(){if(scene&&scene.queueRender)scene.queueRender()}
function apply(){
 if(!scene)return;
 var ang=-(S.lift/TRAVEL)*TURNS*2*Math.PI; // direita (horário visto de frente) = negativo em Z
 ['volante_inox','volante_preto'].forEach(function(n){if(N[n])N[n].rotation.z=ang});
 ['grelha_inox','grelhaarg_inox','grelhauru_inox'].forEach(function(n){if(N[n])N[n].position.y=base[n]+S.lift});
 if(N.grelhaarg_inox)N.grelhaarg_inox.visible=S.grelha!=='uru';if(N.grelhauru_inox)N.grelhauru_inox.visible=S.grelha==='uru';
 if(N.espetos_inox)N.espetos_inox.visible=!!S.esp;
 if(N.correntes_inox)N.correntes_inox.scale.y=(0.453-S.lift)/0.453;
 if(N.porta_inox){var p=N.porta_inox;p.rotation.x=S.door*Math.PI/2*0.98;var k=1-S.attT;p.position.z=base.porta_inox+k*0.35;p.position.y=base.porta_y-k*0.0;p.visible=S.attT>0.02;
  p.traverse(function(o){if(o.material){o.material.transparent=S.attT<1;o.material.opacity=S.attT}})}
 if(N.trava_inox){var t=N.trava_inox,k2=1-S.attT;t.position.z=base.trava_inox+k2*0.35;t.visible=S.attT>0.02;t.traverse(function(o){if(o.material){o.material.transparent=S.attT<1;o.material.opacity=S.attT}})}
 var pe=scene.getObjectByName('pes_inox');if(pe)pe.visible=S.attT<0.98;var pe2=scene.getObjectByName('pes_inox_ed');if(pe2)pe2.visible=S.attT<0.98;
 document.getElementById('hb3d-gv').textContent=Math.round(S.lift*100)+' cm';
 render();
}
var hold=0;
function loop(){
 var ch=false;
 if(hold){var nl=Math.max(0,Math.min(TRAVEL,S.lift+hold*0.0016));if(nl!==S.lift){S.lift=nl;ch=true}}
 var dt=S.doorT-S.door;if(Math.abs(dt)>0.001){S.door+=dt*0.12;ch=true}
 var at=S.attached-S.attT;if(Math.abs(at)>0.001){S.attT+=at*0.1;ch=true}
 if(ch)apply();
 if(document.getElementById('hb3d-mv'))requestAnimationFrame(loop);
}
function bindHold(id,dir){var b=document.getElementById(id);
 var on=function(e){e.preventDefault();hold=dir;b.classList.add('on')},off=function(){hold=0;b.classList.remove('on')};
 b.addEventListener('pointerdown',on);['pointerup','pointerleave','pointercancel'].forEach(function(ev){b.addEventListener(ev,off)});}
bindHold('hb3d-up',1);bindHold('hb3d-down',-1);
var bd=document.getElementById('hb3d-door'),br=document.getElementById('hb3d-rm');
bd.onclick=function(){if(!S.attached)return;S.doorT=S.doorT?0:1;bd.textContent=S.doorT?'Fechar porta':'Abrir porta';bd.classList.toggle('on',!!S.doorT)};
br.onclick=function(){S.attached=S.attached?0:1;if(!S.attached){S.doorT=0;bd.textContent='Abrir porta';bd.classList.remove('on')}br.textContent=S.attached?'Tirar porta':'Colocar porta';br.classList.toggle('on',!S.attached);bd.style.opacity=S.attached?1:.4};
document.getElementById('hb3d-ctr').onclick=function(){mv.cameraTarget='auto auto auto';mv.cameraOrbit=MOB?'30deg 72deg 108%':'30deg 72deg 100%';mv.fieldOfView='auto'};
var CFG=document.querySelector('.hb-config'),cfgBox=document.getElementById('hb3d-cfg');
function groups(){if(!CFG)return [];return Array.from(CFG.querySelectorAll('.hb-config-group')).map(function(g){var lab=(g.querySelector('.hb-config-label')||g).cloneNode(true);Array.from(lab.querySelectorAll('.hb-current-value,.hb-req')).forEach(function(x){x.remove()});
 var name=lab.textContent.replace(/[*:]/g,'').trim(),cur=((g.querySelector('.hb-current-value')||{}).textContent||'').trim();return {name:name,cur:cur,btns:Array.from(g.querySelectorAll('.hb-opt-btn'))}})}
function pick(re,val){var g=groups().find(function(x){return re.test(x.name)});if(!g)return false;var b=g.btns.find(function(x){return x.textContent.trim()===val});if(b&&!b.classList.contains('hb-selected')){b.click();setTimeout(sync,200)}return true}
function sync(){var gs=groups();if(!gs.length)return;
 gs.forEach(function(g){if(/PORTA/i.test(g.name)){var a=!/Sem/i.test(g.cur);if(a!==!!S.attached){S.attached=a?1:0;if(!a){S.doorT=0;bd.textContent='Abrir porta';bd.classList.remove('on')}br.textContent=a?'Tirar porta':'Colocar porta';br.classList.toggle('on',!a);bd.style.opacity=a?1:.4}}
  if(/GRELHA/i.test(g.name))S.grelha=/Urugua/i.test(g.cur)?'uru':'arg';
  if(/ESPETO/i.test(g.name))S.esp=/Sim/i.test(g.cur);
  if(/TAMANHO/i.test(g.name))S.tam=(g.cur.match(/\d+/)||['74'])[0];});
 var h='';if(S.tam!=='74')h+='<div class="nt">3D mostrando o 74x45 · '+S.tam+'x45 em breve</div>';
 gs.forEach(function(g,gi){h+='<div class="g"><div class="l">'+g.name+'</div><div class="o">'+g.btns.map(function(b,bi){return '<button data-g="'+gi+'" data-b="'+bi+'" class="'+(b.classList.contains('hb-selected')?'on':'')+'">'+b.textContent.trim()+'</button>'}).join('')+'</div></div>'});
 var ac=document.querySelector('.acoes-produto');if(ac){var old=ac.querySelector('.preco-promocional')||ac.querySelector('.preco-venda'),cp=ac.querySelector('.hbcp b');
  h+='<div class="pr">'+(cp&&old?'<s>'+old.textContent.trim()+'</s><b>'+cp.textContent.trim()+'</b><small>com o cupom BLACKHOTBOX</small>':(old?'<b>'+old.textContent.trim()+'</b>':''))+'</div>'}
 cfgBox.innerHTML=h;cfgBox.style.display='';
 Array.from(cfgBox.querySelectorAll('button[data-g]')).forEach(function(x){x.onclick=function(){var g=groups()[+x.dataset.g];g.btns[+x.dataset.b].click();setTimeout(sync,250);setTimeout(sync,900)}});
 apply();}
if(CFG){new MutationObserver(function(){clearTimeout(window.__hb3dT);window.__hb3dT=setTimeout(sync,150)}).observe(CFG,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class']});
 br.onclick=function(){if(!pick(/PORTA/i,S.attached?'Sem porta':'Com porta')){S.attached=S.attached?0:1}};}
var bm=document.getElementById('hb3d-med');
bm.onclick=function(){box.classList.toggle('hb3d-on');bm.classList.toggle('on');lines()};
function lines(){if(!box.classList.contains('hb3d-on'))return;
 Object.keys(H).forEach(function(k){var a=mv.queryHotspot('hotspot-'+k+'a'),b=mv.queryHotspot('hotspot-'+k+'b'),l=document.getElementById('hb3d-l-'+k);
  if(!a||!b||!l)return;l.setAttribute('x1',a.canvasPosition.x);l.setAttribute('y1',a.canvasPosition.y);l.setAttribute('x2',b.canvasPosition.x);l.setAttribute('y2',b.canvasPosition.y);var c=mv.queryHotspot('hotspot-'+k+'c'),m=mv.queryHotspot('hotspot-'+k+'m'),d=document.getElementById('hb3d-d-'+k);if(c&&m&&d){d.setAttribute('x1',c.canvasPosition.x);d.setAttribute('y1',c.canvasPosition.y);d.setAttribute('x2',m.canvasPosition.x);d.setAttribute('y2',m.canvasPosition.y)}});}
mv.addEventListener('camera-change',lines);
mv.addEventListener('load',function(){
 var sym=Object.getOwnPropertySymbols(mv).find(function(s){return s.description==='scene'});
 scene=mv[sym];
 ['volante_inox','volante_preto','grelha_inox','grelhaarg_inox','grelhauru_inox','espetos_inox','correntes_inox','porta_inox','trava_inox'].forEach(function(n){var o=scene.getObjectByName(n);if(o){N[n]=o;base[n]=(n==='porta_inox'||n==='trava_inox')?o.position.z:o.position.y}});
 if(N.porta_inox)base.porta_y=N.porta_inox.position.y;
 for(var i=0;i<mv.model.materials.length;i++){var m=mv.model.materials[i];
  }
 ['porta_inox','trava_inox'].forEach(function(n){if(N[n])N[n].traverse(function(o){if(o.material)o.material=o.material.clone()})});
 ['volante_inox','volante_preto','grelha_inox','grelhaarg_inox','grelhauru_inox','espetos_inox','correntes_inox','porta_inox','trava_inox'].forEach(function(n){var e=scene.getObjectByName(n+'_ed');if(e&&N[n]){N[n].add(e);e.position.set(0,0,0);e.rotation.set(0,0,0);e.scale.set(1,1,1)}});
 mv.addEventListener('ar-status',function(ev){var on=ev.detail.status==='session-started';scene.traverse(function(o){if(/_ed$/.test(o.name))o.visible=!on});box.classList.toggle('hb3d-ar-on',on)});
 window.__hb3d={N:N,scene:scene,S:S};
 apply();lines();sync();requestAnimationFrame(loop);
});
})();
