const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

function circulo(x, y, radio) {
  ctx.moveTo(x + radio, y);
  return ctx.arc(x, y, radio, 0, 2 * Math.PI);
}

ctx.beginPath();
ctx.moveTo(200, 300);

// Casita
ctx.lineTo(400, 300);
ctx.lineTo(400, 500);
ctx.lineTo(200, 500);
ctx.lineTo(200, 300);

// Puerta y ventanas
ctx.moveTo(275, 500);

ctx.lineTo(275, 400);
ctx.lineTo(325, 400);
ctx.lineTo(325, 500);
circulo(285, 450, 5);

circulo(250, 350, 20);
circulo(350, 350, 20);

// Suelo
ctx.moveTo(200, 450);
ctx.lineTo(0, 450);

ctx.moveTo(400, 450);
ctx.lineTo(600, 450);

// Techo
ctx.moveTo(200, 300);
ctx.lineTo(150, 300);
ctx.lineTo(300, 150);
ctx.lineTo(450, 300);
ctx.lineTo(400, 300);

// Sol
circulo(100, 100, 40);
ctx.moveTo(130, 60);
ctx.lineTo(150, 30);

ctx.moveTo(140, 70);
ctx.lineTo(160, 60);

ctx.moveTo(145, 85);
ctx.lineTo(190, 75);

ctx.moveTo(145, 100);
ctx.lineTo(165, 105);

ctx.moveTo(140, 120);
ctx.lineTo(175, 130);

ctx.moveTo(130, 140);
ctx.lineTo(140, 150);

ctx.moveTo(115, 150);
ctx.lineTo(140, 190);

ctx.moveTo(95, 150);
ctx.lineTo(96, 175);

ctx.moveTo(80, 150);
ctx.lineTo(70, 190);

ctx.moveTo(140, 70);
ctx.lineTo(160, 60);

ctx.moveTo(140, 70);
ctx.lineTo(160, 60);

ctx.moveTo(140, 70);
ctx.lineTo(160, 60);

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();
