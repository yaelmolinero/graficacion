const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 4;

ctx.moveTo(200, 100);
ctx.quadraticCurveTo(150, 260, 300, 300);
ctx.quadraticCurveTo(450, 260, 400, 100);
ctx.quadraticCurveTo(280, 140, 300, 300);

ctx.moveTo(200, 100);
ctx.quadraticCurveTo(320, 140, 300, 300);

ctx.moveTo(240, 120);
ctx.quadraticCurveTo(240, 80, 300, 50);

ctx.moveTo(360, 120);
ctx.quadraticCurveTo(360, 80, 300, 50);
ctx.stroke();

// ctx.fillRect(290, 298, 2, 2);
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 4;

ctx.moveTo(290, 298);
ctx.lineTo(290, 500);
ctx.lineTo(310, 500);
ctx.lineTo(310, 298);

// Hoja 1
ctx.moveTo(290, 450);
ctx.lineTo(200, 350);

ctx.moveTo(290, 450);
ctx.quadraticCurveTo(200, 450, 200, 350);

ctx.moveTo(290, 450);
ctx.quadraticCurveTo(290, 350, 200, 350);

// Hoja 2
ctx.moveTo(310, 440);
ctx.lineTo(400, 340);

ctx.moveTo(310, 440);
ctx.quadraticCurveTo(400, 440, 400, 340);

ctx.moveTo(310, 440);
ctx.quadraticCurveTo(310, 340, 400, 340);

// ctx.strokeStyle = 'black';
ctx.stroke();
