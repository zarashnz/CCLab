let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(0);

  // create particles
  for (let i = 0; i < 300; i++) {
    let x = width / 2;
    let y = height / 2;
    let r = random(2, 5);
    particles.push(new Particle(x, y, r));
  }
}

function draw() {
  background(0);

  // iterate, update and display particles
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.reappear();
    p.display();
  }
}

/////

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
    this.rad = rad;
    // color
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  reappear() {
    // reappear at the center of the canvas
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = width / 2;
      this.y = height / 2;
    }
  }
  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b, 150);
    circle(this.x, this.y, this.rad * 2);
    circle(this.x, this.y, this.rad * 1.5);
    circle(this.x, this.y, this.rad * 1.2);
    pop();
  }
}