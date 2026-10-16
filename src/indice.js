const PRACTICAS = [
  { href: './ev1/1_punto', label: 'Punto' },
  { href: './ev1/2_puntos', label: 'Puntos (8 puntos)' },
  { href: './ev1/3_linea', label: 'Línea' },
  { href: './ev1/4_lineas', label: 'Líneas (unión de 8 puntos con línea)' },
  { href: './ev1/5_linea_curva', label: 'Línea curva' },
  { href: './ev1/6_casita', label: 'Casita' },
  { href: './ev1/7_flor', label: 'Flor' },
  { href: './ev2/8_figura', label: 'Figuras (cuadrado, circulo, triangulo)' },
  { href: './ev2/9_casita', label: 'Casita' },
  { href: './ev2/10_camion', label: 'Camion' },
  { href: './ev2/11_click_event', label: 'Clic event' },
  { href: './ev2/12_cuadriculas', label: 'Cuadriculas' },
];

const app = document.getElementById('app');
app.appendChild(document.createElement('ol'));

PRACTICAS.forEach(({ href, label }) => {
  const element = document.createElement('li');
  element.innerHTML = `<a href="${href}/index.html">${label}</a>`;
  app.firstElementChild.appendChild(element);
});
