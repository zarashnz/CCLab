let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(0);

  // create particles
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(2, 5);
    particles.push(new Particle(x, y, r));
  }
}

function draw() {
  let alpha = map(mouseX, 0, width, 50, 0);
  background(0, alpha); // add transparency

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
    this.xSpeed = random(-3, -1);
    this.ySpeed = random(1, 3);
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
    noStroke();
    fill(this.r, this.g, this.b, 150);
    circle(this.x, this.y, this.rad * 2);
    circle(this.x, this.y, this.rad * 1.5);
    circle(this.x, this.y, this.rad * 1.2);
    pop();
  }
}