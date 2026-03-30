/* ── CANVAS BINTANG ── */
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  buildStars();
}

function buildStars() {
  stars = [];
  const n = Math.floor((canvas.width * canvas.height) / 3000);
  for (let i = 0; i < n; i++) {
    stars.push({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 1.4 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
      phase: Math.random() * Math.PI * 2,
    });
  }
}

function drawStars(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const s of stars) {
    const a = 0.3 + 0.7 * Math.abs(Math.sin(s.phase + t * s.speed));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${a})`;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resize);
resize();
requestAnimationFrame(drawStars);

/* ── SHOOTING STAR ACAK ── */
function launchStar() {
  const el = document.createElement('div');
  el.className = 'shooting-star';
  el.style.left = Math.random() * window.innerWidth * 0.6 + 'px';
  el.style.top  = Math.random() * window.innerHeight * 0.5 + 'px';
  el.style.transformOrigin = 'left center';
  el.style.rotate = (Math.random() * 30 + 15) + 'deg';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

launchStar();
setInterval(launchStar, 3500 + Math.random() * 2000);
