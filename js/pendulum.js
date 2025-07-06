const canvas = document.getElementById('pendulumCanvas');
const ctx = canvas.getContext('2d');

let angle = Math.PI / 4;
let length = 200;
let origin = { x: 300, y: 50 };
let gravity = 0.01;
let aVel = 0;
let aAcc = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  aAcc = (-1 * gravity / length) * Math.sin(angle);
  aVel += aAcc;
  angle += aVel;
  aVel *= 0.99;

  const bob = {
    x: origin.x + length * Math.sin(angle),
    y: origin.y + length * Math.cos(angle)
  };

  ctx.beginPath();
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(bob.x, bob.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(bob.x, bob.y, 20, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();