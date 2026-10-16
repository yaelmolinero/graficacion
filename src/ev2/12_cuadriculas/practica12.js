const areas = document.querySelectorAll('canvas');

const coordenadasCanvas = {
  0: { tieneInicio: false, x: 0, y: 0 },
  1: { tieneInicio: false, x: 0, y: 0 },
  2: { tieneInicio: false, x: 0, y: 0 },
  3: { tieneInicio: false, x: 0, y: 0 },
  4: { tieneInicio: false, x: 0, y: 0 },
  5: { tieneInicio: false, x: 0, y: 0 },
};

areas.forEach((canva, index) => {
  canva.addEventListener('click', (e) => {
    const clicX = e.offsetX;
    const clicY = e.offsetY;
    const { tieneInicio, x, y } = coordenadasCanvas[index];

    if (!tieneInicio) {
      coordenadasCanvas[index].x = clicX;
      coordenadasCanvas[index].y = clicY;
      coordenadasCanvas[index].tieneInicio = true;
      return;
    }

    const ctx = canva.getContext('2d');
    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(clicX, clicY);

    ctx.stroke();

    coordenadasCanvas[index].tieneInicio = false;
  });
});
