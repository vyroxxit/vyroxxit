(function(){
var V="2026-10-26",K="vx-consent",GA="G-563G8GRF5Q",CL="z2yqgsoqx4",D=document,R=D.documentElement,mem=null;
var S={
ar:{t:"قبل المتابعة: الخصوصية وشروط الخدمة",p:"لاستخدام موقع VYROXX IT Services يجب أن تطّلع على سياسة الخصوصية وشروط الخدمة وتوافق عليها. ملخص سريع:",
li:["نجمع الاسم والهاتف والبريد وتفاصيل طلبك فقط لتقديم الخدمة ومتابعتها.","لا نبيع بياناتك، ولا نحفظ كلمات المرور (الدخول عبر Google).","نسجّل عنوان IP لأغراض الأمن ومنع الإساءة.","أي هجوم أو احتيال أو انتهاك للملكية الفكرية يعرّض صاحبه للحظر والملاحقة القضائية."],
rd:"قراءة النص الكامل",an:"أوافق اختياريًا على أدوات التحليل (Google Analytics وMicrosoft Clarity) لتحسين الموقع.",ok:"أوافق وأدخل الموقع",no:"لا أوافق",
dt:"لا يمكنك دخول الموقع",dp:"الموافقة على الشروط وسياسة الخصوصية شرط لاستخدام الموقع. يمكنك مراجعتها وتغيير قرارك في أي وقت.",rv:"مراجعة الشروط",
th:"نصائح أمنية سريعة",ts:"خطوات بسيطة تحميك من أغلب الاختراقات.",
tl:[["🔑","كلمة مرور لكل حساب","استعمل كلمات طويلة وفريدة مع مدير كلمات مرور موثوق."],["🛡️","فعّل التحقق بخطوتين","يحمي حسابك حتى لو سُرّبت كلمة المرور."],["🎣","احذر التصيّد","لا تضغط روابط مجهولة، وتحقق من المرسل قبل إدخال أي بيانات."],["🔄","حدّث نظامك","ثبّت تحديثات النظام والهاتف والمتصفح فور صدورها."],["💾","نسخ احتياطي منتظم","احتفظ بنسخة خارج الجهاز قبل أي صيانة."],["🚫","تجنّب البرامج المقرصنة","حمّل من المصادر الرسمية فقط؛ فالمقرصن كثيرًا ما يحمل برمجيات خبيثة."]],
fl:["الخصوصية والشروط","إعدادات الموافقة"]},
en:{t:"Before you continue: Privacy & Terms",p:"To use VYROXX IT Services you must read and accept the Privacy Policy and Terms of Service. In short:",
li:["We collect name, phone, email and request details only to provide and follow up your service.","We never sell your data and never store passwords (sign-in is via Google).","We log IP addresses for security and abuse prevention.","Attacks, fraud or IP infringement lead to a ban and legal action."],
rd:"Read the full text",an:"Optional: I agree to analytics tools (Google Analytics and Microsoft Clarity) to improve the site.",ok:"I agree, enter the site",no:"I do not agree",
dt:"You cannot access the site",dp:"Accepting the Terms and Privacy Policy is required to use the site. You can review them and change your mind at any time.",rv:"Review the terms",
th:"Quick security tips",ts:"Simple steps that stop most account takeovers.",
tl:[["🔑","One password per account","Use long, unique passwords with a trusted password manager."],["🛡️","Turn on 2-step verification","It protects you even if a password leaks."],["🎣","Beware of phishing","Don’t click unknown links; check the sender before entering any data."],["🔄","Keep everything updated","Install system, phone and browser updates as soon as they ship."],["💾","Back up regularly","Keep a copy off the device before any repair."],["🚫","Avoid cracked software","Download from official sources only; cracks often carry malware."]],
fl:["Privacy & Terms","Consent settings"]},
fr:{t:"Avant de continuer : confidentialité et conditions",p:"Pour utiliser VYROXX IT Services, vous devez lire et accepter la politique de confidentialité et les conditions d’utilisation. En bref :",
li:["Nous collectons nom, téléphone, e-mail et détails de la demande uniquement pour fournir et suivre le service.","Nous ne vendons jamais vos données et ne stockons aucun mot de passe (connexion via Google).","Nous enregistrons l’adresse IP pour la sécurité et la prévention des abus.","Toute attaque, fraude ou atteinte à la propriété intellectuelle entraîne un bannissement et des poursuites."],
rd:"Lire le texte complet",an:"Facultatif : j’accepte les outils d’analyse (Google Analytics et Microsoft Clarity) pour améliorer le site.",ok:"J’accepte, entrer sur le site",no:"Je refuse",
dt:"Accès au site impossible",dp:"L’acceptation des conditions et de la politique de confidentialité est obligatoire. Vous pouvez les relire et changer d’avis à tout moment.",rv:"Relire les conditions",
th:"Conseils de sécurité rapides",ts:"Des gestes simples qui évitent la plupart des piratages.",
tl:[["🔑","Un mot de passe par compte","Mots de passe longs et uniques, avec un gestionnaire fiable."],["🛡️","Activez la double authentification","Elle vous protège même si un mot de passe fuit."],["🎣","Méfiez-vous du phishing","Ne cliquez pas sur des liens inconnus ; vérifiez l’expéditeur."],["🔄","Mettez tout à jour","Installez dès que possible les mises à jour système, mobile et navigateur."],["💾","Sauvegardez régulièrement","Gardez une copie hors de l’appareil avant toute réparation."],["🚫","Évitez les logiciels piratés","Téléchargez depuis les sources officielles ; les cracks cachent souvent des malwares."]],
fl:["Confidentialité et conditions","Paramètres de consentement"]},
es:{t:"Antes de continuar: privacidad y condiciones",p:"Para usar VYROXX IT Services debes leer y aceptar la política de privacidad y las condiciones del servicio. En resumen:",
li:["Recopilamos nombre, teléfono, correo y detalles de la solicitud solo para prestar y seguir el servicio.","Nunca vendemos tus datos ni guardamos contraseñas (acceso con Google).","Registramos la dirección IP por seguridad y prevención de abusos.","Ataques, fraude o infracción de propiedad intelectual implican bloqueo y acciones legales."],
rd:"Leer el texto completo",an:"Opcional: acepto las herramientas de analítica (Google Analytics y Microsoft Clarity) para mejorar el sitio.",ok:"Acepto, entrar al sitio",no:"No acepto",
dt:"No puedes acceder al sitio",dp:"Aceptar las condiciones y la política de privacidad es obligatorio para usar el sitio. Puedes revisarlas y cambiar de opinión cuando quieras.",rv:"Revisar las condiciones",
th:"Consejos rápidos de seguridad",ts:"Pasos simples que evitan la mayoría de los robos de cuenta.",
tl:[["🔑","Una contraseña por cuenta","Usa contraseñas largas y únicas con un gestor de confianza."],["🛡️","Activa la verificación en dos pasos","Te protege aunque se filtre la contraseña."],["🎣","Cuidado con el phishing","No pulses enlaces desconocidos; verifica al remitente."],["🔄","Mantén todo actualizado","Instala las actualizaciones del sistema, móvil y navegador al salir."],["💾","Copias de seguridad","Guarda una copia fuera del dispositivo antes de cualquier reparación."],["🚫","Evita software pirata","Descarga solo de fuentes oficiales; los cracks suelen traer malware."]],
fl:["Privacidad y condiciones","Ajustes de consentimiento"]}
};
function L(){var l=R.lang;if(!S[l]){try{l=localStorage.getItem("vx-lang")}catch(e){}}if(!S[l])l=(navigator.language||"ar").slice(0,2);return S[l]?l:"ar"}
function getC(){var c=null;try{c=JSON.parse(localStorage.getItem(K))}catch(e){}c=c||mem;return c&&c.v===V?c:null}
function saveC(c){mem=c;try{localStorage.setItem(K,JSON.stringify(c))}catch(e){}}
function ga(){if(window.__vxA)return;window.__vxA=1;
var s=D.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+GA;D.head.appendChild(s);
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",GA);
(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,D,"clarity","script",CL)}
var st=D.createElement("style");
st.textContent="html.vx-lock{overflow:hidden}html.vx-lock body>*:not(#vxGate){visibility:hidden!important}#vxGate{position:fixed;inset:0;z-index:2147483000;background:rgba(8,16,22,.88);display:flex;align-items:center;justify-content:center;padding:16px}#vxGate .bx{background:var(--surface,#fff);color:var(--ink,#12263A);border:1px solid var(--line,#D3DDDD);border-radius:16px;max-width:560px;width:100%;max-height:92vh;overflow:auto;padding:26px;line-height:1.8;font-size:16px}#vxGate h2{margin:0 0 8px;font-size:22px;background:none;color:inherit;-webkit-text-fill-color:currentColor}#vxGate p{margin:0 0 8px}#vxGate ul{margin:10px 0;padding-inline-start:20px;color:var(--muted,#52667A);font-size:15px}#vxGate label{display:flex;gap:10px;align-items:flex-start;font-weight:400;font-size:14.5px;margin:14px 0}#vxGate input{width:auto;margin:6px 0 0}#vxGate .ac{display:flex;gap:10px;flex-wrap:wrap}#vxGate .b{font:inherit;font-weight:500;cursor:pointer;padding:11px 22px;border-radius:8px;border:1.5px solid var(--accent,#0F8B8D);background:var(--accent,#0F8B8D);color:var(--on-accent,#fff)}#vxGate .b.n{background:transparent;color:var(--ink,#12263A);border-color:var(--line,#D3DDDD)}#vxGate a{color:var(--accent,#0F8B8D)}";
D.head.appendChild(st);
function unlock(){R.classList.remove("vx-lock");var g=D.getElementById("vxGate");if(g)g.remove()}
function gate(m){var s=S[L()],g=D.getElementById("vxGate");
if(!g){g=D.createElement("div");g.id="vxGate";g.setAttribute("role","dialog");g.setAttribute("aria-modal","true");D.body.appendChild(g)}
g.dir=L()==="ar"?"rtl":"ltr";g.setAttribute("data-m",m);R.classList.add("vx-lock");
if(m==="no"){g.innerHTML='<div class="bx"><h2>'+s.dt+'</h2><p>'+s.dp+'</p><div class="ac"><button class="b" id="vxRv" type="button">'+s.rv+'</button></div></div>';
var r=D.getElementById("vxRv");r.onclick=function(){gate("ask")};r.focus()}
else{g.innerHTML='<div class="bx"><h2>'+s.t+'</h2><p>'+s.p+'</p><ul>'+s.li.map(function(x){return"<li>"+x+"</li>"}).join("")+'</ul><p><a href="legal.html" target="_blank" rel="noopener">'+s.rd+'</a></p><label><input type="checkbox" id="vxA"><span>'+s.an+'</span></label><div class="ac"><button class="b" id="vxY" type="button">'+s.ok+'</button><button class="b n" id="vxN" type="button">'+s.no+'</button></div></div>';
var y=D.getElementById("vxY");
y.onclick=function(){var a=D.getElementById("vxA").checked;saveC({v:V,a:a?1:0,t:Date.now()});unlock();if(a)ga()};
D.getElementById("vxN").onclick=function(){gate("no")};y.focus()}}
function tips(){var e=D.getElementById("tips");if(!e)return;var s=S[L()];
e.innerHTML="<h2>"+s.th+'</h2><p class="sub">'+s.ts+'</p><div class="cards">'+s.tl.map(function(x){return'<div class="card"><h3><span>'+x[0]+"</span>"+x[1]+'</h3><p style="margin:0;color:var(--muted);font-size:15.5px">'+x[2]+"</p></div>"}).join("")+"</div>"}
function foot(){var f=D.querySelector("footer");if(!f)return;var s=S[L()],e=D.getElementById("vxFl");
if(!e){e=D.createElement("span");e.id="vxFl";f.appendChild(e)}
e.innerHTML='<a href="legal.html">'+s.fl[0]+'</a> · <a href="#" id="vxSet">'+s.fl[1]+"</a>";
D.getElementById("vxSet").onclick=function(ev){ev.preventDefault();gate("ask")}}
var c=getC();
if(!c)R.classList.add("vx-lock");else if(c.a)ga();
function init(){tips();foot();if(!getC())gate("ask")}
if(D.readyState==="loading")D.addEventListener("DOMContentLoaded",init);else init();
new MutationObserver(function(){tips();foot();var g=D.getElementById("vxGate");if(g)gate(g.getAttribute("data-m"))}).observe(R,{attributes:true,attributeFilter:["lang"]});
})();
