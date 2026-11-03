document.querySelector('.dh').classList.add('dh-js');
/* ===== Icons ===== */
const I={
heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
"file-check":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
scale:'<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
siren:'<path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/>',
box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
coins:'<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
book:'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
cap:'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
basket:'<path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>',
wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
key:'<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>',
fridge:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14"/><path d="M9 5v2"/><path d="M9 13v3"/>',
"hand-heart":'<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
sprout:'<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
handshake:'<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="2" y="6" width="20" height="14" rx="2"/>',
star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
door:'<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/>',
lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
receipt:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
pie:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
chart:'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
"check-circle":'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
award:'<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>',
menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',
send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>'
};
const svg=n=>`<svg class="dh-ico" viewBox="0 0 24 24" aria-hidden="true">${I[n]||''}</svg>`;
/* Quick donate list */
document.getElementById('qp').innerHTML='<option value="'+DH.donate+'">التبرع العام — حيث الحاجة أشد</option>'+DH.projects.map(p=>`<option value="${p[1]}">${p[0]}</option>`).join('');
/* Interactive background patterns */
const root=document.documentElement;let raf=0;
addEventListener('pointermove',e=>{if(raf)return;raf=requestAnimationFrame(()=>{root.style.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));root.style.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3));raf=0})},{passive:true});
addEventListener('scroll',()=>root.style.setProperty('--sy',(scrollY*-.04).toFixed(1)+'px'),{passive:true});

document.querySelectorAll('[data-i]').forEach(e=>{e.outerHTML=svg(e.dataset.i)});
/* Governance data */
const GOV={
  board:[
    {n:"سويلم علي عمار الذيابي",r:"رئيس مجلس الإدارة"},
    {n:"أحمد سعود دغيليب العتيبي",r:"نائب رئيس مجلس الإدارة"},
    {n:"سمير ضيف الله عمار الذيابي",r:"عضو مجلس الإدارة"},
    {n:"سليم مقبل سفر العتيبي",r:"عضو مجلس الإدارة"},
    {n:"راشد عيد عتيق العتيبي",r:"عضو مجلس الإدارة"}
  ],
  boardTerm:{start:"",end:"",years:"",membersTerm:""},
  executive:"",
  committees:[],
  gaMembers:[],
  tabs:[
    {i:"award",t:"التأسيس",d:"وثائق تأسيس الجمعية وتسجيلها الرسمي.",docs:[
      {t:"شهادة تسجيل الجمعية",s:"ترخيص رقم 1000742100"},
      {t:"شهادة ترخيص قناة التبرع الإلكترونية",s:"رقم 26200125 — سارية حتى 31-12-2026",url:"#lic"},
      {t:"اللائحة الأساسية المعتمدة",s:"دون عرض هويات الأعضاء"},
      {t:"قرار تشكيل مجلس الإدارة",s:""},
      {t:"محضر الاجتماع التأسيسي",s:""}]},
    {i:"file-check",t:"اللوائح والسياسات",d:"اللوائح والسياسات المعتمدة التي تنظم أعمال الجمعية.",docs:[
      {t:"لائحة الصلاحيات",s:""},{t:"لائحة الموارد البشرية",s:""},{t:"لائحة الخدمات ومعايير الاستحقاق",s:""},
      {t:"سياسة تعارض المصالح",s:""},{t:"سياسة الإبلاغ عن المخالفات وحماية مقدميها",s:""},{t:"سياسة الخصوصية وحماية البيانات",s:""},
      {t:"سياسة جمع التبرعات",s:""},{t:"سياسة الاحتفاظ بالوثائق وإتلافها",s:""},{t:"سياسة تنظيم العلاقة مع المستفيدين",s:""},{t:"سياسة التطوع",s:""}]},
    {i:"coins",t:"القوائم المالية",d:"التقارير المالية المدققة والمعتمدة للجمعية.",docs:[
      {t:"التقرير المالي المدقق والمعتمد",s:"السنة المالية الأولى"}]},
    {i:"users",t:"الجمعية العمومية العادية",d:"محاضر اجتماعات الجمعية العمومية العادية وأسماء أعضائها.",docs:[
      {t:"محاضر اجتماعات الجمعية العمومية العادية",s:""}],x:"ga"},
    {i:"users",t:"الجمعية العمومية غير العادية",d:"محاضر اجتماعات الجمعية العمومية غير العادية.",docs:[
      {t:"محاضر اجتماعات الجمعية العمومية غير العادية",s:""}]},
    {i:"book",t:"التقارير السنوية",d:"تقارير الجمعية السنوية وتقارير برامجها وأنشطتها.",docs:[
      {t:"التقرير السنوي",s:""},{t:"تقارير البرامج والأنشطة",s:""}]},
    {i:"chart",t:"الأثر الاجتماعي",d:"إحصائيات الخدمات المقدمة وتقارير قياس الأثر.",docs:[
      {t:"إحصائيات الخدمات المقدمة",s:""},{t:"تقرير قياس الأثر الاجتماعي",s:""}],x:"stats"},
    {i:"target",t:"الخطط التشغيلية",d:"الأهداف الاستراتيجية والخطط التشغيلية للجمعية.",docs:[
      {t:"الخطة الاستراتيجية",s:""},{t:"الخطة التشغيلية",s:""}],x:"goals"},
    {i:"shield-check",t:"الإفصاحات",d:"الإفصاح عن مجلس الإدارة واللجان والإدارة التنفيذية.",docs:[],x:"disc"}
  ]
};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pending='<span class="dh-soon">قيد النشر</span>';
const docHTML=d=>`<div class="dh-doc"><span class="dh-fi">${svg('file')}</span><span class="dh-doc-t"><b>${esc(d.t)}</b>${d.s?`<small>${esc(d.s)}</small>`:''}</span>${d.url?`<a class="dh-dl" href="${d.url}" target="_blank" rel="noopener">عرض${svg('arrow-left')}</a>`:pending}</div>`;
const val=v=>v?`<b>${esc(v)}</b>`:pending;
const extras={
  ga:()=>`<div class="dh-disc"><div class="dh-disc-box"><h4>${svg('users')}أعضاء الجمعية العمومية</h4>${GOV.gaMembers.length?`<div class="dh-chips">${GOV.gaMembers.map(m=>`<span class="dh-chip">${esc(m)}</span>`).join('')}</div>`:`<p class="dh-empty">قيد النشر</p>`}</div></div>`,
  stats:()=>`<div class="dh-disc"><div class="dh-mini-stats"><div><b>+300</b><span>مستفيد</span></div><div><b>6</b><span>مشاريع قائمة</span></div><div><b>15</b><span>فرصة تبرع</span></div></div></div>`,
  goals:()=>`<div class="dh-disc"><div class="dh-disc-box"><h4>${svg('target')}الأهداف الاستراتيجية</h4><div class="dh-goal-list">
    ${[["نوفّر الأساسيات","المساهمة في توفير الاحتياجات الضرورية للمستفيدين."],["نُحسّن المعيشة","تحسين المستوى المعيشي للفئات المستفيدة."],["نُغيث","تقديم المساعدات الطارئة في أوقات الكوارث والأزمات."],["نُعين عينيًا","تقديم المساعدات العينية لكافة الفئات المحتاجة."],["نُعين ماليًا","تقديم المساعدات المالية لكافة الفئات المحتاجة."]].map(g=>`<div class="dh-goal"><b>${g[0]}</b><small>${g[1]}</small></div>`).join('')}</div></div></div>`,
  disc:()=>{const T=GOV.boardTerm;return `<div class="dh-disc" style="margin-top:0">
    <div class="dh-disc-box"><h4>${svg('users')}مجلس الإدارة</h4><div class="dh-rows">${GOV.board.map(b=>`<div class="dh-row"><span>${b.r}</span><b>${b.n}</b></div>`).join('')}</div></div>
    <div class="dh-disc-box"><h4>${svg('calendar')}دورة المجلس</h4><div class="dh-rows">
      <div class="dh-row"><span>مدة دورة المجلس</span>${val(T.years)}</div>
      <div class="dh-row"><span>بداية الدورة</span>${val(T.start)}</div>
      <div class="dh-row"><span>نهاية الدورة</span>${val(T.end)}</div>
      <div class="dh-row"><span>المدة المتاحة للأعضاء</span>${val(T.membersTerm)}</div></div></div>
    <div class="dh-disc-box"><h4>${svg('briefcase')}المسؤول التنفيذي</h4><div class="dh-rows"><div class="dh-row"><span>المدير التنفيذي</span>${val(GOV.executive)}</div></div></div>
    <div class="dh-disc-box"><h4>${svg('handshake')}اللجان</h4>${GOV.committees.length?`<div class="dh-rows">${GOV.committees.map(c=>`<div class="dh-row"><span><b style="color:var(--ink)">${esc(c.n)}</b><br>${esc(c.task)}</span><b>${c.members.map(esc).join('، ')}</b></div>`).join('')}</div>`:`<p class="dh-empty">قيد النشر</p>`}</div>
  </div>`}
};
GOV.tabs.forEach(x=>x.docs.forEach(d=>{if(d.url==='#lic')d.url=DH.lic}));
const tabsEl=document.getElementById('govTabs'),panel=document.getElementById('govPanel');
tabsEl.innerHTML=GOV.tabs.map((x,i)=>`<button class="dh-gov-tab${i?'':' dh-on'}" role="tab" data-k="${i}">${svg(x.i)}${x.t}</button>`).join('');
function showGov(i){const x=GOV.tabs[i];
  tabsEl.querySelectorAll('.dh-gov-tab').forEach((b,j)=>{b.classList.toggle('dh-on',j==i);b.setAttribute('aria-selected',j==i)});
  panel.style.animation='none';panel.offsetHeight;panel.style.animation='';
  panel.innerHTML=`<h3><span class="dh-icon-c">${svg(x.i)}</span>${x.t}</h3><p>${x.d}</p>${x.docs.length?`<div class="dh-docs">${x.docs.map(docHTML).join('')}</div>`:''}${x.x?extras[x.x]():''}`;}
tabsEl.onclick=e=>{const b=e.target.closest('.dh-gov-tab');if(b)showGov(+b.dataset.k)};
showGov(0);

/* Inquiry form */
const inq=document.getElementById('inq');
inq.onsubmit=e=>{e.preventDefault();
  const via=(e.submitter&&e.submitter.dataset.via)||'wa';
  const f=['iname','iphone','imsg'].map(id=>document.getElementById(id));let ok=true;
  f.forEach(el=>{const bad=!el.value.trim()||(el.id==='iphone'&&!/^[+0-9\s]{9,15}$/.test(el.value.trim()));el.classList.toggle('dh-err',bad);if(bad)ok=false});
  if(!ok){f.find(el=>el.classList.contains('dh-err')).focus();return}
  const type=document.getElementById('itype').value;
  const body=`الاسم: ${f[0].value.trim()}\nالجوال: ${f[1].value.trim()}\nنوع الاستفسار: ${type}\n\n${f[2].value.trim()}`;
  const url=via==='mail'?`mailto:Thefafhad@gmail.com?subject=${encodeURIComponent('استفسار: '+type)}&body=${encodeURIComponent(body)}`:`${DH.wa}?text=${encodeURIComponent(body)}`;
  window.open(url,via==='mail'?'_self':'_blank','noopener');
};

document.querySelectorAll('.dh-copy').forEach(b=>b.onclick=async()=>{const h=b.innerHTML;try{await navigator.clipboard.writeText(b.dataset.v)}catch(e){const x=document.createElement('textarea');x.value=b.dataset.v;document.body.appendChild(x);x.select();document.execCommand('copy');x.remove()}
  b.classList.add('dh-done');b.innerHTML=svg('check-circle')+'تم النسخ';setTimeout(()=>{b.classList.remove('dh-done');b.innerHTML=h},1800)});
/* Quick donate */
document.getElementById('quick').onsubmit=e=>{e.preventDefault();location.href=document.getElementById('qp').value};

/* Reveal + counters */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('dh-in');io.unobserve(en.target)}}),{threshold:.12});
document.querySelectorAll('.dh-rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
const co=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,t=+el.dataset.count,s=performance.now();
  const f=n=>{const p=Math.min((n-s)/1600,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f);co.unobserve(el)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));