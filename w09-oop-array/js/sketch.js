let particles = []

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 30);
    particles.push(new Particle(x, y, r));
  }
}

function draw() {
  background(220);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if (mouseIsPressed) {
      p.move();
    }

    p.reappear();
    p.display();
  }
}

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, -1);
    this.rad = rad;

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  move() {
    // this.x += this.xSpeed;
    this.x += random(-3, 3);
    this.y += this.ySpeed;
  }
  reappear() {
    if (this.x < 0) {
      this.x = width;
    } else if (this.y > width) {
      this.x = 0;
    }
  }

  display() {
    push();
    noStroke();
    fill(this.r, this.b, this.g, 100);
    circle(this.x, this.y, this.rad * 2);
    circle(this.x, this.y, this.rad * 1.5);
    circle(this.x, this.y, this.rad * 2.2);

    pop();
  }
}