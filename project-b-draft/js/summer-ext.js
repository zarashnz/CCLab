let NUM_OF_PARTICLES = 10;

let colors = [
  [217, 221, 224], // gainsboro
  [193, 194, 203], // lavender gray
  [112, 127, 145], // slate gray
  [163, 170, 209], // rock blue
  [90, 139, 174], // dusty blue
  [139, 206, 240], // cornflower blue
  [128, 187, 160], // gulf stream
  [236, 232, 156], // primrose
  [226, 198, 205], // dust storm
  [233, 172, 209], // pink pearl
];
let particles = [];
let backgroundColor;

function setup() {
  backgroundColor = color(220);
  createCanvas(800, 500);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    let colorName = colors[i];
    particles.push(new Particle(width / 2, height / 2, colorName));
  }
}

function draw() {
  background(backgroundColor);
  noFill();
  stroke(0);
  ellipse(width / 2, height / 2, 250, 400);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
  }
}

function mousePressed() {
  for (let p of particles) {
    if (p.isClicked()) {
      //  background to be changed to the clicked particle's color
      backgroundColor = color(p.color[0], p.color[1], p.color[2]);
    }
  }
}


class Particle {
  constructor(x, y, clr) {
    // oval properties
    this.centerX = x;
    this.centerY = y;
    this.ovalWidth = 250;
    this.ovalHeight = 400;

    let angle = random(TWO_PI);
    let outerRadius = max(this.ovalWidth, this.ovalHeight) / 2;

    // particle properties
    this.x = this.centerX + cos(angle) * outerRadius;
    this.y = this.centerY + sin(angle) * outerRadius;
    this.xSpd = random(-0.2, 0.2);
    this.ySpd = random(-0.2, 0.2);
    this.dia = 30;
    this.color = clr;
  }
  // methods
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;

    this.x = constrain(this.x, this.dia / 2, width - this.dia / 2);
    this.y = constrain(this.y, this.dia / 2, height - this.dia / 2);

  }

  display() {
    push();
    fill(this.color);
    circle(this.x, this.y, this.dia);
    pop();
  }

  isClicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < this.dia / 2;
  }
}



