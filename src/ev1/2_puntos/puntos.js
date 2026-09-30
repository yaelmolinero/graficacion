const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

const puntos = [
  { x: 50, y: 200, nombre: 'P1' },
  { x: 150, y: 150, nombre: 'P2' },
  { x: 250, y: 80, nombre: 'P3' },
  { x: 350, y: 150, nombre: 'P4' },
  { x: 450, y: 200, nombre: 'P5' },
  { x: 350, y: 250, nombre: 'P6' },
  { x: 250, y: 330, nombre: 'P7' },
  { x: 150, y: 250, nombre: 'P8' },
];

ctx.font = '16px Arial';
ctx.beginPath();

puntos.forEach(({ x, y, nombre }, index) => {
  ctx.moveTo(x, y);
  ctx.fillRect(x, y, 5, 5);
  ctx.fillText(nombre, x + 10, y + 5); // Escribe la etiqueta del punto
});

ctx.stroke();
