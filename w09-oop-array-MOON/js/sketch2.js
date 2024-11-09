let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // create particles
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 30);
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
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  reappear() {
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }
  }
  display() {
    push();
    circle(this.x, this.y, this.rad * 2);
    pop();
  }
}