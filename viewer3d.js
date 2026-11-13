(function(){
var MODELS=window.__HB3D_MODELS||null,CUR=window.__HB3D_FIRST||'74';
var SRC=MODELS?MODELS[CUR].src:window.__HB3D_SRC;
var H={"alt":[[-0.38,0.0004,-0.3249],[-0.38,0.7874,-0.3249],"78cm",[-0.08,0.0,0]],"larg":[[-0.3697,0.0004,0.14],[0.3703,0.0004,0.14],"74cm",[0,0,0.08]],"prof":[[0.385,0.0004,-0.3249],[0.385,0.0004,0.1251],"45cm",[0.08,0,0]],"pe":[[-0.38,0.0004,0.14],[-0.38,0.1694,0.14],"15cm",[-0.07,0,0.03]],"fbw":[[0.1043,0.415,-0.3],[0.3353,0.415,-0.3],"23cm",[0,0.03,-0.07]],"fbd":[[0.345,0.415,-0.2919],[0.345,0.415,0.0921],"38cm",[0.08,0.02,0]],"tdw":[[-0.3557,0.5,-0.1269],[0.0853,0.5,-0.1269],"44cm",[0,0.05,0]],"tdd":[[-0.3617,0.5,-0.3029],[-0.3617,0.5,-0.1319],"16cm",[-0.07,0.02,0]]};
if(MODELS&&MODELS[CUR].H)H=MODELS[CUR].H;
var old=document.getElementById('hb3d-ov');if(old)old.remove();
var st=document.createElement('style');st.textContent=
'#hb3d-ov{position:fixed;inset:0;z-index:999998;background:rgba(10,10,10,.92);display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif}'+
'#hb3d-box{position:relative;width:min(1100px,96vw);height:min(740px,90vh);background:radial-gradient(circle at 50% 40%,#5a5a5a,#262626);border-radius:20px;overflow:hidden}'+
'#hb3d-mv{width:100%;height:100%;--poster-color:transparent}'+
'.hb3d-t{position:absolute;left:20px;top:16px;color:#fff;font-weight:700;font-size:18px;pointer-events:none}.hb3d-t span{color:#F16122}.hb3d-t small{display:block;font-weight:400;font-size:13px;color:#bbb;margin-top:4px}'+
'.hb3d-arhint{position:absolute;right:12px;bottom:186px;max-width:220px;background:rgba(255,255,255,.96);color:#222;font-size:12px;line-height:1.35;padding:9px 12px;border-radius:12px;box-shadow:0 6px 18px rgba(0,0,0,.25);opacity:0;transform:translateY(6px);transition:opacity .5s,transform .5s;pointer-events:auto}'+
'.hb3d-arhint.on{opacity:1;transform:none}.hb3d-arhint b{color:#F16122}.hb3d-arhint:after{content:"";position:absolute;right:26px;bottom:-6px;border:6px solid transparent;border-bottom:0;border-top-color:rgba(255,255,255,.96)}'+
'#hb3d-rm,#hb3d-g{display:none!important}.hb3d-x{position:absolute;right:14px;top:12px;background:#F16122;color:#fff;border:0;border-radius:20px;padding:8px 16px;font-weight:700;font-size:14px;cursor:pointer}'+
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
'<div class="hb3d-t">'+(window.__HB3D_TITLE||'Parrilla Hotbox')+' <b id="hb3d-tam">'+(window.__HB3D_FIRST||'74x45')+'</b>'+(window.__HB3D_TITLE?'':' · Alvenaria')+' <span>em 3D</span><small>Arraste para girar · role ou pinça para dar zoom</small></div>'+
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
var box=document.getElementById('hb3d-box'),mv=document.getElementById('hb3d-mv');mv.style.opacity=0;
var MOB=(window.innerWidth||1000)<700;if(MOB){document.getElementById('hb3d-down').textContent='⟲ Desce grelha';document.getElementById('hb3d-up').textContent='⟳ Sobe grelha';document.getElementById('hb3d-med').textContent='📏 Medidas';document.getElementById('hb3d-ctr').textContent='⌖ Centro';mv.cameraOrbit='30deg 72deg 108%'}
document.getElementById('hb3d-close').onclick=function(){ov.remove()};
var scene=null,N={},base={},ELOS=[],CH={};
function chainDir(ch,t){var L=CH[ch].L,i=1;while(i<L.length-1&&L[i].t<t)i++;var a=L[i-1].p,b=L[i].p;return Math.atan2(b[1]-a[1],b[0]-a[0])}
function chainAt(ch,t){var L=CH[ch].L;if(t<=0)return L[0].p;for(var i=1;i<L.length;i++){if(L[i].t>=t){var a=L[i-1],b=L[i],k=(t-a.t)/((b.t-a.t)||1);return [a.p[0]+(b.p[0]-a.p[0])*k,a.p[1]+(b.p[1]-a.p[1])*k,a.p[2]+(b.p[2]-a.p[2])*k]}}return L[L.length-1].p}
var TRAVEL=0.11,TURNS=4; // 11 cm de curso, 4 voltas do volante
var S={lift:0,liftV:0,door:0,doorT:0,attached:1,attT:1,grelha:'arg',esp:true,tendal:true,tam:'74'};
function render(){if(scene&&scene.queueRender)scene.queueRender()}
function apply(){
 if(!scene)return;
 var ang=-(S.lift/TRAVEL)*TURNS*2*Math.PI; // direita (horário visto de frente) = negativo em Z
 ['volante_inox','volante_preto','volante2_inox','volante2_preto'].forEach(function(n){if(N[n])N[n].rotation.z=ang});
 ['grelha_inox','grelhaarg_inox','grelhauru_inox','grelhaarg2_inox','grelhauru2_inox','travinha2_inox'].forEach(function(n){if(N[n])N[n].position.y=base[n]+S.lift});if(N.grelhaarg2_inox){N.grelhaarg2_inox.visible=S.grelha==='arg';N.grelhauru2_inox.visible=S.grelha!=='arg'}
 if(N.grelhaarg_inox)N.grelhaarg_inox.visible=S.grelha!=='uru';if(N.grelhauru_inox)N.grelhauru_inox.visible=S.grelha==='uru';
 if(N.espetos_inox)N.espetos_inox.visible=!!S.esp;if(N.espetos_preto)N.espetos_preto.visible=!!S.esp;if(N.tendal_inox)N.tendal_inox.visible=!!S.tendal;if(N.grelhaarg_preto)N.grelhaarg_preto.visible=S.grelha!=='uru';if(N.grelhauru_preto)N.grelhauru_preto.visible=S.grelha==='uru';
 if(N.travinha_inox)N.travinha_inox.position.y=base.travinha_inox+S.lift;
 ELOS.forEach(function(e){var s=S.lift*1000,c=CH[e.ch];if(!c)return;var tt=e.t+s,ang=0,q;e.o.visible=true;
  if(tt>c.len){var w=tt-c.len,R=12.5,end=c.L[c.L.length-1].p;ang=w/R;var turn=ang/(2*Math.PI);q=[end[0]+((e.ch==='a'||e.ch==='c')?1:-1)*turn*22,(end[1]+9)+R*Math.sin(ang),end[2]+R*Math.cos(ang)]}else q=chainAt(e.ch,tt);
  if(!e.cl){var g=e.o.geometry||(e.o.children[0]&&e.o.children[0].geometry);g.computeBoundingBox();var bb=g.boundingBox;e.cl=[(bb.min.x+bb.max.x)/2,(bb.min.y+bb.max.y)/2,(bb.min.z+bb.max.z)/2]}
  var th=-ang,co=Math.cos(th),si=Math.sin(th),cl=e.cl;
  if(e.a0===undefined)e.a0=chainDir(e.ch,e.t+0.01);
  var ph=chainDir(e.ch,Math.min(tt,c.len)-0.01)-e.a0,cp=Math.cos(ph),sp=Math.sin(ph);
  var rz=[cl[0]*cp-cl[1]*sp,cl[0]*sp+cl[1]*cp,cl[2]];var mc=[rz[0],rz[1]*co-rz[2]*si,rz[1]*si+rz[2]*co];
  var qw=[e.x+cl[0]+(q[0]-e.p[0])/1000,e.y+cl[1]+(q[1]-e.p[1])/1000,e.z+cl[2]+(q[2]-e.p[2])/1000];
  e.o.rotation.set(th,0,ph,'XYZ');e.o.position.set(qw[0]-mc[0],qw[1]-mc[1],qw[2]-mc[2])});
 if(N.porta_inox){var p=N.porta_inox;var TV=window.__HB3D_TRAVA,DA=TV?Math.max(0,(S.door-0.35)/0.65):S.door;p.rotation.x=DA*(window.__HB3D_DOOR_ANG||Math.PI/2*0.98);var k=1-S.attT;p.position.z=base.porta_inox+k*0.35;p.position.y=base.porta_y-k*0.0;p.visible=S.attT>0.02;
  p.traverse(function(o){if(o.material){o.material.transparent=S.attT<1;o.material.opacity=S.attT}})}
 if(N.trava_inox){var t=N.trava_inox,k2=1-S.attT;t.position.z=base.trava_inox+k2*0.35;t.visible=S.attT>0.02;t.traverse(function(o){if(o.material){o.material.transparent=S.attT<1;o.material.opacity=S.attT}})}
 ['porta2_inox','trava2_inox','travatubo_inox'].forEach(function(n){var o=N[n];if(!o)return;var k=1-S.attT;var TV=window.__HB3D_TRAVA,DA=TV?Math.max(0,(S.door-0.35)/0.65):S.door;if(n==='porta2_inox')o.rotation.x=DA*(window.__HB3D_DOOR_ANG||Math.PI/2*0.98);o.position.z=base[n]+k*0.35;o.visible=S.attT>0.02;o.traverse(function(q){if(q.material){q.material.transparent=S.attT<1;q.material.opacity=S.attT}})});if(window.__HB3D_TRAVA)['trava_inox','trava2_inox'].forEach(function(n){var o=N[n];if(o){if(base[n+'_y']===undefined)base[n+'_y']=o.position.y;o.position.y=base[n+'_y']+Math.min(1,S.door/0.35)*0.04}});var pe=scene.getObjectByName('pes_inox');if(pe)pe.visible=S.attT<0.98;var pe2=scene.getObjectByName('pes_inox_ed');if(pe2)pe2.visible=S.attT<0.98;
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
  if(/GRELHA/i.test(g.name))S.grelha=/Argentina.*Urugua|\+/i.test(g.cur)?'mix':(/Urugua/i.test(g.cur)?'uru':'arg');
  if(/ESPETO/i.test(g.name))S.esp=/Sim/i.test(g.cur);
  if(/TAMANHO/i.test(g.name))S.tam=(g.cur.match(/\d+/)||['74'])[0];});
 if(MODELS&&MODELS[S.tam]&&S.tam!==CUR){CUR=S.tam;var M=MODELS[CUR];if(M.H){H=M.H;Object.keys(H).forEach(function(k){var a=H[k][0],b=H[k][1],o=H[k][3],c=[(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2];
   mv.updateHotspot({name:'hotspot-'+k+'a',position:a.join(' ')});mv.updateHotspot({name:'hotspot-'+k+'b',position:b.join(' ')});mv.updateHotspot({name:'hotspot-'+k+'c',position:c.join(' ')});mv.updateHotspot({name:'hotspot-'+k+'m',position:[c[0]+o[0],c[1]+o[1],c[2]+o[2]].join(' ')});
   var lb=mv.querySelector('[slot="hotspot-'+k+'m"]');if(lb)lb.textContent=H[k][2]})}
  document.getElementById('hb3d-tam').textContent=/x/.test(CUR)?CUR:CUR+'x45';mv.style.opacity=0;mv.src=M.src;}
 var h='';if(S.tam!==CUR)h+='<div class="nt">3D mostrando o '+CUR+'x45 · '+S.tam+'x45 em breve</div>';
 gs.forEach(function(g,gi){h+='<div class="g"><div class="l">'+g.name+'</div><div class="o">'+g.btns.map(function(b,bi){return '<button data-g="'+gi+'" data-b="'+bi+'" class="'+(b.classList.contains('hb-selected')?'on':'')+'">'+b.textContent.trim().replace(/Uma Grelha Argentina \+ Uma Grelha Uruguaia/i,'Uma Argentina + Uma Uruguaia').replace(/Duas Grelhas Argentinas/i,'Duas Argentinas').replace(/Duas Grelhas Uruguaias/i,'Duas Uruguaias')+'</button>'}).join('')+'</div></div>'});
 var ac=Array.from(document.querySelectorAll('.acoes-produto')).find(function(a){return getComputedStyle(a).display!=='none'})||document.querySelector('.acoes-produto');if(ac){var old=ac.querySelector('.preco-promocional')||ac.querySelector('.preco-venda'),cp=ac.querySelector('.hbcp b');
  h+='<div class="pr">'+(cp&&old?'<s>'+old.textContent.trim()+'</s><b>'+cp.textContent.trim()+'</b><small>com o cupom BLACKHOTBOX</small>':(old?'<b>'+old.textContent.trim()+'</b>':''))+'</div>'}
 cfgBox.innerHTML=h;cfgBox.style.display='';
 Array.from(cfgBox.querySelectorAll('button[data-g]')).forEach(function(x){x.onclick=function(){var g=groups()[+x.dataset.g];g.btns[+x.dataset.b].click();setTimeout(sync,250);setTimeout(sync,900)}});
 apply();}
if(CFG){var PO=new MutationObserver(function(){clearTimeout(window.__hb3dP);window.__hb3dP=setTimeout(sync,120)});Array.from(document.querySelectorAll('.acoes-produto')).forEach(function(a){PO.observe(a,{attributes:true,attributeFilter:['style','class']})});
 new MutationObserver(function(){clearTimeout(window.__hb3dT);window.__hb3dT=setTimeout(sync,150)}).observe(CFG,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class']});
 br.onclick=function(){if(!pick(/PORTA/i,S.attached?'Sem porta':'Com porta')){S.attached=S.attached?0:1}};}
if(window.__HB3D_STATE){var lastK='';setInterval(function(){if(!document.getElementById('hb3d-mv'))return;var st=window.__HB3D_STATE();if(!st)return;S.grelha=st.grelha;S.esp=st.esp;S.tendal=st.tendal;
  if(MODELS&&MODELS[st.tam]&&st.tam!==CUR){S.tam=st.tam;CUR=st.tam;var M=MODELS[CUR];if(M.H){H=M.H;Object.keys(H).forEach(function(k){var a=H[k][0],b=H[k][1],o=H[k][3],c=[(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2];mv.updateHotspot({name:'hotspot-'+k+'a',position:a.join(' ')});mv.updateHotspot({name:'hotspot-'+k+'b',position:b.join(' ')});mv.updateHotspot({name:'hotspot-'+k+'c',position:c.join(' ')});mv.updateHotspot({name:'hotspot-'+k+'m',position:[c[0]+o[0],c[1]+o[1],c[2]+o[2]].join(' ')});var lb=mv.querySelector('[slot="hotspot-'+k+'m"]');if(lb)lb.textContent=H[k][2]})}document.getElementById('hb3d-tam').textContent=CUR;mv.style.opacity=0;mv.src=M.src}
  var k=JSON.stringify(st);if(k!==lastK){lastK=k;apply()}},600)}
var bm=document.getElementById('hb3d-med');
bm.onclick=function(){box.classList.toggle('hb3d-on');bm.classList.toggle('on');lines()};
function lines(){if(!box.classList.contains('hb3d-on'))return;
 Object.keys(H).forEach(function(k){var a=mv.queryHotspot('hotspot-'+k+'a'),b=mv.queryHotspot('hotspot-'+k+'b'),l=document.getElementById('hb3d-l-'+k);
  if(!a||!b||!l)return;l.setAttribute('x1',a.canvasPosition.x);l.setAttribute('y1',a.canvasPosition.y);l.setAttribute('x2',b.canvasPosition.x);l.setAttribute('y2',b.canvasPosition.y);var c=mv.queryHotspot('hotspot-'+k+'c'),m=mv.queryHotspot('hotspot-'+k+'m'),d=document.getElementById('hb3d-d-'+k);if(c&&m&&d){d.setAttribute('x1',c.canvasPosition.x);d.setAttribute('y1',c.canvasPosition.y);d.setAttribute('x2',m.canvasPosition.x);d.setAttribute('y2',m.canvasPosition.y)}});}
mv.addEventListener('camera-change',lines);
var LOADED=false;
mv.addEventListener('load',function(){
 N={};base={};ELOS=[];CH={};
 var sym=Object.getOwnPropertySymbols(mv).find(function(s){return s.description==='scene'});
 scene=mv[sym];
 ['volante_inox','volante_preto','grelha_inox','grelhaarg_inox','grelhauru_inox','grelhaarg_preto','grelhauru_preto','espetos_inox','espetos_preto','tendal_inox','correntes_inox','travinha_inox','porta_inox','trava_inox','volante2_inox','volante2_preto','grelhaarg2_inox','grelhauru2_inox','travinha2_inox','porta2_inox','trava2_inox','travatubo_inox'].forEach(function(n){var o=scene.getObjectByName(n);if(o){N[n]=o;base[n]=/^(porta|trava|travatubo)2?_inox$/.test(n)?o.position.z:o.position.y}});
 if(N.porta_inox)base.porta_y=N.porta_inox.position.y;if(N.porta2_inox)base.porta2_y=N.porta2_inox.position.y;
 scene.traverse(function(o){var m=/^elo([a-d])\d+_(-?\d+)_(-?\d+)_(-?\d+)_elo$/.exec(o.name);if(m&&!ELOS.some(function(e){return e.o===o}))ELOS.push({o:o,ch:m[1],p:[+m[2],+m[3],+m[4]],x:o.position.x,y:o.position.y,z:o.position.z})});
 ['a','b','c','d'].forEach(function(ch){var L=ELOS.filter(function(e){return e.ch===ch}).sort(function(a,b){return a.p[1]-b.p[1]});var t=0;L.forEach(function(e,i){if(i)t+=Math.hypot(e.p[0]-L[i-1].p[0],e.p[1]-L[i-1].p[1],e.p[2]-L[i-1].p[2]);e.t=t});CH[ch]={L:L,len:t}});
 for(var i=0;i<mv.model.materials.length;i++){var m=mv.model.materials[i];
  }
 ['porta_inox','trava_inox','porta2_inox','trava2_inox','travatubo_inox'].forEach(function(n){if(N[n])N[n].traverse(function(o){if(o.material)o.material=o.material.clone()})});
 ['volante_inox','volante_preto','grelha_inox','grelhaarg_inox','grelhauru_inox','grelhaarg_preto','grelhauru_preto','espetos_inox','espetos_preto','tendal_inox','correntes_inox','travinha_inox','porta_inox','trava_inox','volante2_inox','volante2_preto','grelhaarg2_inox','grelhauru2_inox','travinha2_inox','porta2_inox','trava2_inox','travatubo_inox'].forEach(function(n){var e=scene.getObjectByName(n+'_ed');if(e&&N[n]){N[n].add(e);e.position.set(0,0,0);e.rotation.set(0,0,0);e.scale.set(1,1,1)}});
 if(!LOADED)mv.addEventListener('ar-status',function(ev){var on=ev.detail.status==='session-started';scene.traverse(function(o){if(/_ed$/.test(o.name))o.visible=!on});box.classList.toggle('hb3d-ar-on',on)});
 if(!LOADED&&mv.canActivateAR){var hn=document.createElement('div');hn.className='hb3d-arhint';hn.innerHTML='<b>Novidade:</b> veja a parrilla em tamanho real no seu espaço. Toque em <b>Ver na sua casa</b> e aponte a câmera pro chão.';box.appendChild(hn);setTimeout(function(){hn.classList.add('on')},1200);var hide=function(){hn.classList.remove('on');setTimeout(function(){hn.remove()},600)};hn.onclick=hide;setTimeout(hide,9000)}
 ['hb3d-down','hb3d-up'].forEach(function(id){var b=document.getElementById(id);if(b)b.style.display=N.volante_inox?'':'none'});var bdd=document.getElementById('hb3d-door');if(bdd)bdd.style.display=N.porta_inox?'':'none';
 window.__hb3d={N:N,scene:scene,S:S};
 if(window.__HB3D_STATE){try{var st0=window.__HB3D_STATE();if(st0){S.grelha=st0.grelha;S.esp=!!st0.esp;S.tendal=!!st0.tendal}}catch(e){}} apply();requestAnimationFrame(function(){requestAnimationFrame(function(){mv.style.opacity=1})});lines();if(!LOADED){sync();requestAnimationFrame(loop)}LOADED=true;window.__hb3d.N=N;
});
})();
