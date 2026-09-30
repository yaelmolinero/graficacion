const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

const x1 = 100;
const y1 = 100;

const x2 = 300;
const y2 = 200;

ctx.fillRect(x1, y1, 5, 5); // dibujar el primer punto
ctx.fillText('P1', x1 + 10, y1); // escribe la etiqueta P1

ctx.fillRect(x2, y2, 5, 5); // dibujar el segundo punto
ctx.fillText('P2', x2 + 10, y2); // escribe la etiqueta P2

// Iniciar una nueva linea
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
