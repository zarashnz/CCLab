// Variables
let x, y, dia;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  x = width / 2;
  y = height / 2;
  dia = 200;
}

function draw() {
  background(220);

  // move
  x += random(-1, 1);
  y += random(-1, 1);
  dia += random(-0.5, 0.5);

  // display
  circle(x, y, dia);
}