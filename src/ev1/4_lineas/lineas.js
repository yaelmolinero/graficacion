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

function dibujarLineas(array, hideLabel = false) {
  array.forEach(({ x, y, nombre }, index) => {
    ctx.moveTo(x, y);
    if (!hideLabel) {
      ctx.fillRect(x, y, 5, 5);
      ctx.fillText(nombre, x + 10, y + 5); // Escribe la etiqueta del punto
    }

    const nextIndex = array.length - 1 === index ? 0 : index + 1;
    const { x: x2, y: y2 } = array[nextIndex];
    ctx.lineTo(x2, y2);
  });
}

dibujarLineas(puntos);
dibujarLineas(
  puntos.filter((_, index) => (index + 1) % 2 === 0),
  true,
);

ctx.stroke();
