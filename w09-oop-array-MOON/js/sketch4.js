let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // create particles
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
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
    this.xSpeed = 0;
    this.ySpeed = random(1, 3);
    this.rad = rad;
  }
  move() {
    // update x speed based on mouseX

    this.xSpeed = map(mouseX, 0, width, -5, 5);

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
    fill(255, 150);
    circle(this.x, this.y, this.rad * 2);
    circle(this.x, this.y, this.rad * 1.5);
    circle(this.x, this.y, this.rad * 1.2);
    pop();
  }
}