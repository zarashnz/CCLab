let particles = []

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(0);

  for (let i = 0; i < 80; i++) {
    let x = width / 2;
    let y = height / 2;
    let r = random(20, 50);
    particles.push(new Particle(x, y, r));
  }
}

function draw() {
  background(0, 20);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
  }
}

function mousePressed() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.x = mouseX;
    p.y = mouseY;
    let angle = random(TWO_PI);
    let speed = random(1, 3);
    p.xSpeed = cos(angle) * speed;
    p.ySpeed = sin(angle) * speed;
  }
}

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    this.rad = rad;

    this.r = random(200, 255);
    this.g = random(150, 255);
    this.b = random(150, 255);

    this.words = ["ILY", "BE MINE", "MY LOVE", "XOXO", "HUGS", "FOREVER", "KISS ME"];
    this.word = random(this.words);
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }


  display() {
    push();
    stroke(255);
    fill(this.r, this.b, this.g, 222);

    beginShape();
    vertex(this.x, this.y);
    bezierVertex(this.x - this.rad / 2, this.y - this.rad / 2, this.x - this.rad, this.y + this.rad / 3, this.x, this.y + this.rad);
    bezierVertex(this.x + this.rad, this.y + this.rad / 3, this.x + this.rad / 2, this.y - this.rad / 2, this.x, this.y);
    endShape(CLOSE);
    pop();

    push();
    noStroke();
    fill(255, 20, 147);
    textAlign(CENTER, CENTER);
    textFont("Comic Sans MS");
    textSize(this.rad * 0.2);
    text(this.word, this.x, this.y + this.rad / 3);
    pop();
  }
}

