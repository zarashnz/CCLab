let creature;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  creature = new MoonCreature(width / 2, height / 2);
}

function draw() {
  background(220);

  creature.draw();
}

class MoonCreature {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rad = 100;
  }
  draw() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.rad * 2);
    this.drawEyes();
    this.drawNose();

    let sinValue = sin(frameCount * 0.05) * 0.5;

    this.drawArm(90, 0, PI * 0.25 + sinValue);
    this.drawArm(-90, 0, PI * 0.75 - sinValue);
    pop();
  }
  drawEyes() {
    fill(255);
    circle(-50, -20, 10);
    circle(50, -20, 10);
  }
  drawNose() {
    triangle(0, -50, -20, -30, 20, 30);
  }
  drawArm(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    ellipse(40, 0, 100, 20);

    fill(255, 0, 0);
    circle(0, 0, 5); // anchor
    pop();
  }
}