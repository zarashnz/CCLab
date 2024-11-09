let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // create particles
  for (let i = 0; i < 100; i++) {
    let x = width / 2;
    let y = height / 2;
    let size = random(5, 30);
    particles.push(new Particle(x, y, size));
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

function mousePressed() {
  // when the mouse is pressed, move all particles to the mouse position
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.x = mouseX;
    p.y = mouseY;
  }
}

class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
    this.size = size;

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
    fill(this.r, this.b, this.g, 150);
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text("Hello!", this.x, this.y);
    pop();
  }
}