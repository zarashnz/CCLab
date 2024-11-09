let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(255);

  // generate
  for (let i = 0; i < 10; i++) {
    //
  }
}

function draw() {
  background(255);

  // generate particles
  for (let i = 0; i < 3; i++) {
    let x = mouseX;
    let y = mouseY;
    let dia = random(3, 15);
    let p = new Particle(x, y, dia);
    particles.push(p);
  }


  // update and display the particles
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.speedUp();
    p.display();
  }

  // limit
  while (particles.length > 500) {
    particles.splice(0, 1); // (index, number of Elements)
  }

  // display the number of particles
  text(particles.length, 10, 20);
}

class Particle {
  constructor(tempX, tempY, tempDia) {
    this.x = tempX;
    this.y = tempY;
    this.dia = tempDia;

    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);

    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  speedUp() {
    this.xSpeed = this.xSpeed * 1.02;
    this.ySpeed = this.ySpeed * 1.02;
  }
  display() {
    push();
    translate(this.x, this.y);

    noStroke();
    fill(this.r, this.g, this.b, 180);
    circle(0, 0, this.dia);

    pop();
  }
}