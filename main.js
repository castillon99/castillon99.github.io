/* ══════════════════════════════════════════════════════
   ADBR · main.js
   ══════════════════════════════════════════════════════ */

// ── NAV scroll behavior ───────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Hamburger menu ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ── Tabs (Cómo trabajamos) ────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

// ── Fade-in on scroll ─────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 120);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Cargar asesores desde JSON ────────────────────────
async function cargarAsesores() {
  const grid = document.getElementById('asesores-grid');
  if (!grid) return;
  try {
    const res  = await fetch('asesores.json');
    const data = await res.json();
    grid.innerHTML = '';
    data.forEach(a => {
      const iniciales = a.nombre.split(' ').map(w => w[0]).slice(0,2).join('');
      const msg       = encodeURIComponent(a.mensaje || 'Hola, me contacto desde la página de ADBR.');
      const url       = `https://wa.me/${a.whatsapp}?text=${msg}`;
      const card      = document.createElement('div');
      card.className  = 'asesor-card';
      card.innerHTML  = `
        <div class="asesor-avatar-placeholder" id="av-${a.whatsapp}">${iniciales}</div>
        <div class="asesor-nombre">${a.nombre}</div>
        <a href="${url}" target="_blank" class="asesor-wa">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </a>`;
      grid.appendChild(card);
      if (a.foto) {
        const img = new Image();
        img.onload = () => {
          const ph = document.getElementById(`av-${a.whatsapp}`);
          if (ph) {
            const realImg = document.createElement('img');
            realImg.src = a.foto;
            realImg.alt = a.nombre;
            realImg.className = 'asesor-avatar';
            ph.replaceWith(realImg);
          }
        };
        img.src = a.foto;
      }
    });
  } catch(e) {
    grid.innerHTML = '<p style="color:var(--gris-txt);text-align:center;padding:2rem">No se pudo cargar el directorio.</p>';
  }
}
cargarAsesores();

// ── Toggle tipo de contacto ───────────────────────────
document.querySelectorAll('.ftog').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ftog').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tipo = btn.dataset.tipo;
    document.getElementById('tipo_contacto').value = tipo;
    document.getElementById('campo-asesor').style.display = tipo === 'asesor' ? 'block' : 'none';
  });
});
