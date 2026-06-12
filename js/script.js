/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const EXPERT = [
  {i:'🐘',n:'PHP 8'},{i:'🔷',n:'Laravel'},{i:'🗄️',n:'MySQL'},
  {i:'🔌',n:'RESTful API Design'},{i:'⚡',n:'Redis'},{i:'🏗️',n:'SOLID Principles'},
];
const ADVANCED = [
  {i:'🧩',n:'CodeIgniter'},{i:'✅',n:'PHPUnit'},{i:'⚙️',n:'GitHub Actions'},
  {i:'🔐',n:'OAuth 2.0'},{i:'🪝',n:'Webhooks'},{i:'📜',n:'JavaScript ES6+'},
  {i:'🔄',n:'AJAX'},{i:'📊',n:'Query Optimisation'},{i:'🏛️',n:'Schema Design'},
];
const PROFICIENT = [
  {i:'🟢',n:'Node.js'},{i:'🐳',n:'Docker'},{i:'🍃',n:'MongoDB'},
  {i:'📋',n:'jQuery'},{i:'🏠',n:'MVC Architecture'},{i:'⚡',n:'Event-Driven Design'},
];
const CLOUD = [
  {n:'PHP',c:'#777BB4'},{n:'Laravel',c:'#FF2D20'},{n:'MySQL',c:'#4479A1'},
  {n:'Redis',c:'#DC382D'},{n:'Docker',c:'#2496ED'},{n:'Node.js',c:'#339933'},
  {n:'GitHub Actions',c:'#2088FF'},{n:'REST APIs',c:'#6366F1'},{n:'CodeIgniter',c:'#EE4323'},
  {n:'MongoDB',c:'#47A248'},{n:'PHPUnit',c:'#7b79d4'},{n:'OAuth 2.0',c:'#06B6D4'},
];
const CHIP_GROUPS = [
  {cat:'Backend', hi:['PHP 8','Laravel'], chips:['PHP 8','Laravel','Eloquent ORM','Queues & Horizon','CodeIgniter','Node.js','OOP / SOLID']},
  {cat:'Databases', hi:['MySQL','Redis'], chips:['MySQL','Redis','MongoDB','Query Optimisation','Composite Indexing','Partitioning','Schema Design']},
  {cat:'APIs', hi:['RESTful'], chips:['RESTful API Design','API Versioning','OAuth 2.0','Webhooks','3rd-party Integrations']},
  {cat:'Frontend', hi:[], chips:['HTML5','CSS3','JavaScript ES6+','jQuery','AJAX','JSON / XML']},
  {cat:'DevOps', hi:[], chips:['Git / Bitbucket','Docker','GitHub Actions','CI/CD Pipelines','PHPUnit','Jira / Agile']},
  {cat:'Architecture', hi:[], chips:['MVC','Repository Pattern','Service Layer','Event-Driven Design','DB Normalisation']},
];
const MQ = ['PHP 8','Laravel','MySQL','Redis','REST API','OAuth 2.0','Docker','PHPUnit','GitHub Actions','CodeIgniter','Node.js','MongoDB','SOLID','MVC','Webhooks','jQuery','AJAX','Agile/Scrum'];

/* ═══════════════════════════════════════════════════
   TERMINAL
═══════════════════════════════════════════════════ */
const TLINES = [
  {h:'<span class="tc-d">HTTP/1.1 <span class="tc-ok">200 OK</span></span>'},
  {h:'<span class="tc-d">X-Response-Time: <span class="tc-b">298ms</span></span>'},
  {h:''},
  {h:'{'},
  {h:'  <span class="tc-k">"name"</span>: <span class="tc-s">"Neha Joshi"</span>,'},
  {h:'  <span class="tc-k">"role"</span>: <span class="tc-s">"Senior PHP Developer"</span>,'},
  {h:'  <span class="tc-k">"stack"</span>: [<span class="tc-s">"PHP 8"</span>,<span class="tc-s">"Laravel"</span>,<span class="tc-s">"MySQL"</span>],'},
  {h:'  <span class="tc-k">"uptime"</span>: <span class="tc-s">"99.9%"</span>,'},
  {h:'  <span class="tc-k">"open_to_work"</span>: <span class="tc-b">true</span>'},
  {h:'}'},
];
const termEl = document.getElementById('term-out');
let tli = 0;
function termNext(){
  if(tli >= TLINES.length){ const c=document.createElement('span');c.className='tc-cur';termEl.appendChild(c);return; }
  const d=document.createElement('div');
  d.innerHTML = TLINES[tli].h || '&nbsp;';
  termEl.appendChild(d); tli++;
  setTimeout(termNext, tli<3?110:68);
}
setTimeout(termNext, 900);

/* ═══════════════════════════════════════════════════
   BUILD SKILL TIERS
═══════════════════════════════════════════════════ */
function buildTier(id, data, cls){
  const el = document.getElementById(id);
  if(!el) return;
  data.forEach(s=>{
    const d = document.createElement('div');
    d.className = 'sk-chip' + (cls?' '+cls:'');
    d.innerHTML = `<span class="sk-ico">${s.i}</span>${s.n}`;
    el.appendChild(d);
  });
}
buildTier('exp-row', EXPERT, 'ex');
buildTier('adv-row', ADVANCED, '');
buildTier('pro-row', PROFICIENT, '');

/* ═══════════════════════════════════════════════════
   TECH CLOUD
═══════════════════════════════════════════════════ */
const cloudEl = document.getElementById('tech-cloud');
CLOUD.forEach((t,i)=>{
  const d = document.createElement('div');
  d.className = 'tc-b';
  d.style.setProperty('--dur', (2.4+(i%4)*.65).toFixed(1)+'s');
  d.style.setProperty('--dly', ((i*.28)%2).toFixed(2)+'s');
  d.innerHTML = `<span class="tc-dot" style="background:${t.c}"></span>${t.n}`;
  cloudEl.appendChild(d);
});

/* ═══════════════════════════════════════════════════
   SKILL CHIPS (FULL TAXONOMY)
═══════════════════════════════════════════════════ */
const sklGrid = document.getElementById('skl-grid');
CHIP_GROUPS.forEach(g=>{
  const div = document.createElement('div');
  div.className = 'skl-g rv rv-u';
  let inner = `<div class="sg-hd">${g.cat}</div><div class="cw">`;
  g.chips.forEach(c=>{
    const hi = g.hi.some(h=>c.startsWith(h));
    inner += `<span class="chip${hi?' hi':''}">${c}</span>`;
  });
  inner += '</div>';
  div.innerHTML = inner;
  sklGrid.appendChild(div);
});

/* ═══════════════════════════════════════════════════
   MARQUEE
═══════════════════════════════════════════════════ */
const mq = document.getElementById('mq-track');
[...MQ,...MQ].forEach(t=>{
  const s = document.createElement('span');
  s.className = 'mq-item';
  s.innerHTML = `<span class="mq-sep"></span>${t}`;
  mq.appendChild(s);
});

/* ═══════════════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════════════ */
function runCounter(el){
  if(el.dataset.run) return;
  el.dataset.run='1';
  const target = parseFloat(el.dataset.target);
  const pre = el.dataset.prefix||'';
  const suf = el.dataset.suffix||(Number.isInteger(target)?'+':'%');
  const isF = !Number.isInteger(target);
  const steps=60, dur=1600; let step=0;
  const t = setInterval(()=>{
    step++;
    const v = Math.min((target/steps)*step, target);
    el.textContent = pre+(isF?v.toFixed(1):Math.floor(v))+suf;
    if(step>=steps) clearInterval(t);
  }, dur/steps);
}

/* ═══════════════════════════════════════════════════
   INTERSECTION OBSERVERS
═══════════════════════════════════════════════════ */
// General scroll reveal
const rvObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>rvObs.observe(el));

// Achievement counters
const achObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    document.querySelectorAll('.ach-num[data-target]').forEach(runCounter);
  });
},{threshold:.3});
const achEl = document.getElementById('achievements');
if(achEl) achObs.observe(achEl);

// Chip stagger
const chipObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    e.target.querySelectorAll('.chip').forEach((c,i)=>setTimeout(()=>c.classList.add('in'),i*35));
    chipObs.unobserve(e.target);
  });
},{threshold:.1});
document.querySelectorAll('.skl-g').forEach(g=>chipObs.observe(g));

// Timeline
const tlObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const f = document.getElementById('tl-fill');
    if(f) f.classList.add('drawn');
    ['dot-0','dot-1','dot-2'].forEach((id,i)=>{
      setTimeout(()=>{ const d=document.getElementById(id); if(d) d.classList.add('pop'); }, i*320+450);
    });
    tlObs.unobserve(e.target);
  });
},{threshold:.04});
const tlWrap = document.querySelector('.tl-wrap');
if(tlWrap) tlObs.observe(tlWrap);

/* ═══════════════════════════════════════════════════
   3D TILT — PROJECT CARDS
═══════════════════════════════════════════════════ */
['pc1','pc2'].forEach(id=>{
  const c = document.getElementById(id);
  if(!c) return;
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)/(r.width/2);
    const y=(e.clientY-r.top-r.height/2)/(r.height/2);
    c.style.transform=`perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateZ(12px)`;
    c.style.transition='transform .08s ease';
    c.style.boxShadow=`${-x*14}px ${y*14}px 40px rgba(99,102,241,.22)`;
  });
  c.addEventListener('mouseleave',()=>{
    c.style.transform='';
    c.style.transition='transform .5s ease,box-shadow .5s ease';
    c.style.boxShadow='';
  });
});

/* ═══════════════════════════════════════════════════
   STICKY CV BUTTON
═══════════════════════════════════════════════════ */
const sCV = document.getElementById('sticky-cv');
window.addEventListener('scroll',()=>sCV.classList.toggle('show',window.scrollY>400),{passive:true});

/* ═══════════════════════════════════════════════════
   ACTIVE NAV LINKS
═══════════════════════════════════════════════════ */
const secs=[...document.querySelectorAll('section[id]')];
const nLinks=[...document.querySelectorAll('.nav-links a')];
window.addEventListener('scroll',()=>{
  const y=window.scrollY+80; let cur='';
  secs.forEach(s=>{ if(y>=s.offsetTop) cur=s.id; });
  nLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});
