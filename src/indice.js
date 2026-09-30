const PRACTICAS = [
  { href: './ev1/1_punto', label: 'Punto' },
  { href: './ev1/2_puntos', label: 'Puntos (8 puntos)' },
  { href: './ev1/3_linea', label: 'Línea' },
  { href: './ev1/4_lineas', label: 'Líneas (unión de 8 puntos con línea)' },
  { href: './ev1/5_linea_curva', label: 'Línea curva' },
  { href: './ev1/6_casita', label: 'Casita' },
];

const app = document.getElementById('app');
app.appendChild(document.createElement('ol'));

PRACTICAS.forEach(({ href, label }) => {
  const element = document.createElement('li');
  element.innerHTML = `<a href="${href}/index.html">${label}</a>`;
  app.firstElementChild.appendChild(element);
});
