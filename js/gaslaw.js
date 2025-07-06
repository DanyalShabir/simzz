const gcanvas = document.getElementById('gasCanvas');
const gctx = gcanvas.getContext('2d');

let particles = [];
for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * gcanvas.width,
    y: Math.random() * gcanvas.height,
    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4
  });
}

function animateGas() {
  gctx.clearRect(0, 0, gcanvas.width, gcanvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > gcanvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > gcanvas.height) p.vy *= -1;

    gctx.beginPath();
    gctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    gctx.fill();
  });
  requestAnimationFrame(animateGas);
}

animateGas();