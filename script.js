const root = document.documentElement;
const themeBtn = document.getElementById('theme');

// Theme toggle
function setTheme(t) {
  root.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? '☾' : '☀';
  try { localStorage.setItem('theme', t); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  burger.setAttribute('aria-expanded', menu.classList.toggle('open'));
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

// Floating paws and hearts
const floaters = document.getElementById('floaters');
const icons = ['🐾', '♡', '♥', '🐾', '✿'];
for (let i = 0; i < 16; i++) {
  const s = document.createElement('span');
  s.textContent = icons[i % icons.length];
  s.style.left = Math.random() * 100 + '%';
  s.style.fontSize = 14 + Math.random() * 22 + 'px';
  s.style.animationDuration = 14 + Math.random() * 16 + 's';
  s.style.animationDelay = -Math.random() * 20 + 's';
  floaters.appendChild(s);
}

// Toggles
const bio = document.getElementById('bio');
const bioBtn = document.getElementById('bioBtn');
bioBtn.addEventListener('click', () => {
  bio.hidden = !bio.hidden;
  bioBtn.textContent = bio.hidden ? 'Show Biography' : 'Hide Biography';
});
const more = document.getElementById('more');
const moreBtn = document.getElementById('moreBtn');
moreBtn.addEventListener('click', () => {
  more.hidden = !more.hidden;
  moreBtn.textContent = more.hidden ? 'Read More' : 'Read Less';
});

// Say Hi modal
const modal = document.getElementById('modal');
document.getElementById('hi').addEventListener('click', () => { modal.hidden = false; document.getElementById('close').focus(); });
document.getElementById('close').addEventListener('click', () => modal.hidden = true);
modal.addEventListener('click', e => { if (e.target === modal) modal.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.hidden = true; });

// Reveal on scroll + animate skill bars
document.querySelectorAll('section > *').forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    en.target.querySelectorAll('.bar i').forEach(b => b.style.width = b.dataset.w + '%');
    io.unobserve(en.target);
  });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
