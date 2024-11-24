function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("p5-canvas-container");
  background(255, 255, 0);
}

function draw() {
  circle(random(height), random(width), 30);
}