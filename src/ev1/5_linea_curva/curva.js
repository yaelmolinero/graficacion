const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(300, 100);

// curva 1 - arriba -> derecha
ctx.quadraticCurveTo(500, 100, 500, 250);
// curva 2
ctx.quadraticCurveTo(500, 400, 300, 400);
// curva 3
ctx.quadraticCurveTo(100, 400, 100, 250);
// curva 4
ctx.quadraticCurveTo(100, 100, 300, 100);

ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.stroke();
