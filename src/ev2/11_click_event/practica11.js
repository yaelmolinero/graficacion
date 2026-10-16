const area = document.getElementById('area');
const coordenadas = document.getElementById('coordenadas');

area.addEventListener('click', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  const punto = document.createElement('div');
  punto.style.position = 'absolute';
  punto.style.left = x + 'px';
  punto.style.top = y + 'px';

  punto.style.width = '5px';
  punto.style.height = '5px';
  punto.style.borderRadius = '100%';
  punto.style.backgroundColor = 'red';

  area.appendChild(punto);

  coordenadas.innerText = `x:${x} y:${y}`;
});
