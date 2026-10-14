const area = document.getElementById('area');

const base = document.createElement('div');
base.style.width = '350px';
base.style.height = '300px';
base.style.backgroundColor = '#fffc5d';
base.style.position = 'absolute';
base.style.top = '150px';

const techo = document.createElement('div');
techo.style.width = '0px';
techo.style.height = '0px';
techo.style.borderLeft = `${Math.round(350 / 2)}px solid transparent`;
techo.style.borderRight = `${Math.round(350 / 2)}px solid transparent`;
techo.style.borderBottom = '150px solid red';
techo.style.position = 'absolute';
techo.style.top = 0;
techo.style.left = 0;

const puerta = document.createElement('div');
puerta.style.width = '80px';
puerta.style.height = '150px';
puerta.style.backgroundColor = 'brown';
puerta.style.position = 'absolute';
puerta.style.top = '300px';
puerta.style.left = '135px';

const ventana = document.createElement('div');
ventana.style.width = '75px';
ventana.style.height = '75px';
ventana.style.backgroundColor = 'lightblue';
ventana.style.border = '3px solid black';
ventana.style.position = 'absolute';
ventana.style.top = '200px';
ventana.style.left = '25px';

const ventanaCircular = document.createElement('div');
ventanaCircular.style.width = '75px';
ventanaCircular.style.height = '75px';
ventanaCircular.style.borderRadius = '100%';
ventanaCircular.style.backgroundColor = 'lightblue';
ventanaCircular.style.border = '3px solid black';
ventanaCircular.style.position = 'absolute';
ventanaCircular.style.top = '200px';
ventanaCircular.style.left = '225px';

area.appendChild(base);
area.appendChild(techo);
area.appendChild(puerta);
area.appendChild(ventana);
area.appendChild(ventanaCircular);
