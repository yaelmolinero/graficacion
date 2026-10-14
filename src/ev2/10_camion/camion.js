const area = document.getElementById('area');

function crearCuadrado(width, height, x, y, color) {
  const cuadrado = document.createElement('div');
  cuadrado.style.width = width + 'px';
  cuadrado.style.height = height + 'px';
  cuadrado.style.backgroundColor = color;
  cuadrado.style.position = 'absolute';
  cuadrado.style.border = '3px solid #ccc';
  cuadrado.style.left = x + 'px';
  cuadrado.style.top = y + 'px';

  area.appendChild(cuadrado);
}

function crearCirculo(radio, x, y, color) {
  const circulo = document.createElement('div');
  circulo.style.width = radio + 'px';
  circulo.style.height = radio + 'px';
  circulo.style.borderRadius = '100%';
  circulo.style.backgroundColor = color;
  circulo.style.position = 'absolute';
  circulo.style.left = x + 'px';
  circulo.style.top = y + 'px';

  area.appendChild(circulo);
}

function crearTriangulo(width, height, x, y, color) {
  const triangulo = document.createElement('div');
  triangulo.style.width = '0px';
  triangulo.style.height = '0px';
  triangulo.style.borderLeft = `${width / 2}px solid transparent`;
  triangulo.style.borderRight = `${width / 2}px solid transparent`;
  triangulo.style.borderBottom = `${height}px solid ${color}`;
  triangulo.style.position = 'absolute';
  triangulo.style.left = x + 'px';
  triangulo.style.top = y + 'px';

  area.appendChild(triangulo);
}

crearCuadrado(300, 200, 50, 250, 'greenyellow');
crearCuadrado(200, 300, 350, 150, 'darkorange');
crearCuadrado(100, 200, 553, 250, 'darkorange');
crearCuadrado(150, 150, 375, 175, 'cyan');

crearTriangulo(280, 150, 60, 100, 'yellow');

crearCirculo(200, 100, 375, 'brown');
crearCirculo(100, 150, 425, 'yellow');

crearCirculo(200, 375, 375, 'brown');
crearCirculo(100, 425, 425, 'yellow');
