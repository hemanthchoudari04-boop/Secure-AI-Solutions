const serviceDetails = {
  audit: { index: '01', icon: 'radar', title: 'See what others miss.', text: 'Our website security audits give you a clear, prioritized view of your risk. No jargon. No fear tactics. Just a practical plan to protect the digital front door of your business.', items: ['Vulnerability and configuration review', 'Plain-language executive report', 'Prioritized remediation roadmap'] },
  cctv: { index: '02', icon: 'camera', title: 'Connect every point of view.', text: 'We design CCTV and Wi-Fi security around how your spaces really work, bringing visibility, resilience, and control together in one calmer system.', items: ['Coverage and blind-spot review', 'Network and access hardening', 'Monitoring recommendations'] },
  training: { index: '03', icon: 'graduation-cap', title: 'Make good habits automatic.', text: 'Our employee training is clear, relevant, and built around real-world behavior. Give your team the confidence to spot risk before it becomes an incident.', items: ['Role-based security learning', 'Phishing awareness exercises', 'Progress and risk reporting'] },
  support: { index: '04', icon: 'messages-square', title: 'Be there at the right moment.', text: 'AI-powered customer support automation helps your team respond with speed and consistency while keeping the empathy and judgment customers remember.', items: ['Knowledge-base assistant setup', 'Human handoff workflows', 'Conversation quality insights'] }
};

if (window.lucide) window.lucide.createIcons();

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const detail = serviceDetails[card.dataset.service];
    if (!detail) return;
    document.querySelectorAll('.service-card').forEach(item => item.classList.remove('active'));
    card.classList.add('active');
    document.querySelector('.detail-index').innerHTML = `SERVICE <span>${detail.index}</span>`;
    document.querySelector('.detail-icon').innerHTML = `<i data-lucide="${detail.icon}"></i>`;
    document.querySelector('.service-detail h3').textContent = detail.title;
    document.querySelector('.service-detail p').textContent = detail.text;
    document.querySelector('.service-detail ul').innerHTML = detail.items.map(item => `<li>${item}</li>`).join('');
    if (window.lucide) window.lucide.createIcons();
  });
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelector('.contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  form.querySelector('.form-success').hidden = false;
  form.querySelector('.button').textContent = 'Inquiry received';
  form.querySelector('.button').disabled = true;
});
