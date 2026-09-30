const translations = {
  lv: {
    nav_about:'Par mums', nav_capabilities:'Iespējas', nav_production:'Ražošana', nav_contact:'Kontakti',
    hero_eyebrow:'PRECIZITĀTE · MATERIĀLS · MEISTARĪBA',
    hero_title:'Idejas, kas iegūst formu kokā',
    hero_lead:'No saplākšņa un koka detaļām līdz individuāli izstrādātiem ražošanas risinājumiem — veidojam precīzi, pārdomāti un mērogojami.',
    hero_cta:'Apspriest projektu', hero_more:'Ko mēs darām <span>↘</span>', hero_note:'WOOD / PLYWOOD / CUSTOM PRODUCTION',
    about_eyebrow:'PLYCRAFT', about_title:'Ražošana ar skaidru domāšanu aiz katras detaļas',
    about_p1:'PlyCraft apvieno praktisku ražošanas pieredzi, mūsdienīgu pieeju un cieņu pret materiālu. Mēs strādājam ar uzņēmumiem, kuriem nepieciešama stabila kvalitāte, precīza izpilde un elastība nestandarta uzdevumos.',
    about_p2:'Mūsu fokuss nav tikai izgatavot detaļu. Mēs domājam par to, kā tā tiks izmantota, komplektēta, atkārtota sērijā un integrēta klienta procesā.',
    cap_eyebrow:'KO MĒS DARĀM', cap_title:'No atsevišķas detaļas līdz pilnam ražošanas risinājumam',
    cap1_title:'Saplākšņa apstrāde', cap1_text:'Griešana, urbšana, malu un virsmu apstrāde, detaļu sagatavošana turpmākai montāžai.',
    cap2_title:'Nestandarta izstrādājumi', cap2_text:'Individuāli risinājumi mēbelēm, interjeram, iepakojumam, konstrukcijām un B2B projektiem.',
    cap3_title:'Sērijveida ražošana', cap3_text:'Atkārtojama kvalitāte, stabils process un ražošanas organizācija pasūtījumiem ar apjomu.',
    cap4_title:'Ražošanas partnerība', cap4_text:'Strādājam kā elastīgs ražošanas partneris uzņēmumiem Baltijā un eksporta tirgos.',
    prod_eyebrow:'RAŽOŠANA', prod_title:'Kontrole pār procesu no materiāla līdz gatavam izstrādājumam',
    prod_text:'Ražošana Valmierā ļauj mums strādāt tuvu procesam — pārbaudīt kvalitāti, pielāgot tehnoloģiju un operatīvi reaģēt uz projekta izmaiņām. Mūsu mērķis ir vienkāršs: konsekvents rezultāts bez liekas sarežģītības.',
    stat1:'Ražošana Latvijā', stat2:'Projektu partnerība', stat3:'No idejas līdz izpildei',
    quote:'“Labs izstrādājums sākas nevis ar formu, bet ar izpratni par materiālu, procesu un to, kam tas kalpos.”',
    contact_eyebrow:'SAZINĀSIMIES', contact_title:'Pastāstiet par savu projektu',
    contact_text:'Nosūtiet īsu aprakstu, nepieciešamo apjomu vai ideju. Mēs izvērtēsim uzdevumu un sazināsimies par nākamajiem soļiem.',
    form_name:'Vārds / uzņēmums', form_email:'E-pasts', form_subject:'Projekta tēma', form_message:'Īss apraksts', form_send:'Nosūtīt pieprasījumu', form_note:'Forma sagatavos e-pastu nosūtīšanai uz info@plycraft.eu.', back_top:'Uz augšu ↑'
  },
  en: {
    nav_about:'About', nav_capabilities:'Capabilities', nav_production:'Production', nav_contact:'Contact',
    hero_eyebrow:'PRECISION · MATERIAL · CRAFT',
    hero_title:'Ideas shaped into wood',
    hero_lead:'From plywood and wood components to custom production solutions — built with precision, clear thinking and scalability in mind.',
    hero_cta:'Discuss a project', hero_more:'What we do <span>↘</span>', hero_note:'WOOD / PLYWOOD / CUSTOM PRODUCTION',
    about_eyebrow:'PLYCRAFT', about_title:'Manufacturing with clear thinking behind every detail',
    about_p1:'PlyCraft combines hands-on production experience, a modern approach and respect for the material. We work with businesses that require consistent quality, precise execution and flexibility for non-standard tasks.',
    about_p2:'Our focus goes beyond making a component. We consider how it will be used, assembled, repeated in series and integrated into the client’s process.',
    cap_eyebrow:'WHAT WE DO', cap_title:'From a single component to a complete production solution',
    cap1_title:'Plywood processing', cap1_text:'Cutting, drilling, edge and surface processing, and component preparation for further assembly.',
    cap2_title:'Custom products', cap2_text:'Tailored solutions for furniture, interiors, packaging, structures and B2B projects.',
    cap3_title:'Series production', cap3_text:'Repeatable quality, stable processes and organised production for volume orders.',
    cap4_title:'Production partnership', cap4_text:'We work as a flexible manufacturing partner for companies in the Baltics and export markets.',
    prod_eyebrow:'PRODUCTION', prod_title:'Control over the process from material to finished product',
    prod_text:'Our production in Valmiera keeps us close to the process — allowing us to verify quality, adapt technology and react quickly to project changes. The goal is simple: a consistent result without unnecessary complexity.',
    stat1:'Made in Latvia', stat2:'Project partnership', stat3:'Idea to execution',
    quote:'“A good product does not begin with shape, but with understanding the material, the process and the purpose it serves.”',
    contact_eyebrow:'LET’S TALK', contact_title:'Tell us about your project',
    contact_text:'Send us a short description, required volume or an idea. We will review the task and get in touch about the next steps.',
    form_name:'Name / company', form_email:'Email', form_subject:'Project subject', form_message:'Short description', form_send:'Send inquiry', form_note:'The form will prepare an email to info@plycraft.eu.', back_top:'Back to top ↑'
  }
};

const setLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === lang));
  localStorage.setItem('plycraft-lang', lang);
};

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('plycraft-lang') || 'lv');

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.desktop-nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const user = 'info';
const domain = 'plycraft.eu';
const emailLink = document.getElementById('emailLink');
emailLink.textContent = `${user}@${domain}`;
emailLink.href = `mailto:${user}@${domain}`;

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  if (data.get('website')) return;
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const subject = data.get('subject') || 'PlyCraft website inquiry';
  const message = data.get('message') || '';
  const body = `Name / company: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
