const area = document.getElementById('area');

function crearCirculo(x, y, size) {
  const circulo = document.createElement('div');
  circulo.style.width = size + 'px';
  circulo.style.height = size + 'px';
  circulo.style.backgroundColor = 'red';
  circulo.style.borderRadius = '100%';
  circulo.style.position = 'absolute';
  circulo.style.left = x + 'px';
  circulo.style.top = y + 'px';

  area.appendChild(circulo);
}

function crearCuadrado(x, y, size) {
  const cuadrado = document.createElement('div');
  cuadrado.style.width = size + 'px';
  cuadrado.style.height = size + 'px';
  cuadrado.style.backgroundColor = 'blue';
  cuadrado.style.position = 'absolute';
  cuadrado.style.left = x + 'px';
  cuadrado.style.top = y + 'px';

  area.appendChild(cuadrado);
}

function crearTriangulo(x, y, size) {
  const triangulo = document.createElement('div');
  triangulo.style.width = '0px';
  triangulo.style.height = '0px';
  triangulo.style.borderLeft = `${Math.round(size / 2)}px solid transparent`;
  triangulo.style.borderRight = `${Math.round(size / 2)}px solid transparent`;
  triangulo.style.borderBottom = `${size}px solid purple`;
  triangulo.style.position = 'relative';
  triangulo.style.left = x + 'px';
  triangulo.style.top = y + 'px';

  area.appendChild(triangulo);
}
