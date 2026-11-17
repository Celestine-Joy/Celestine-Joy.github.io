// Typing effect
const lines = ["Student at UC3M, Madrid", "Exploring Machine Learning & AI", "Ex Test Engineer @ EY GDS", "Always learning something new 🚀"];
const el = document.getElementById('typed');
let li = 0, ci = 0, deleting = false;
function tick() {
  const line = lines[li];
  el.textContent = line.slice(0, ci);
  if (!deleting && ci < line.length) { ci++; setTimeout(tick, 70); }
  else if (!deleting) { deleting = true; setTimeout(tick, 1600); }
  else if (ci > 0) { ci--; setTimeout(tick, 35); }
  else { deleting = false; li = (li + 1) % lines.length; setTimeout(tick, 300); }
}
tick();

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(r => io.observe(r));

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();
