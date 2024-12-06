let NUM_OF_PARTICLES = 10;

let colors = [
  [245, 244, 222], // ecru
  [200, 187, 166], // coral reef
  [175, 110, 77], // clay brown
  [31, 68, 119], // chatams blue
  [0, 162, 139], // mint
  [76, 187, 22], // kelly green
  [181, 192, 79], // avocado green
  [255, 191, 1], // mikado yellow
  [254, 161, 119], // vivid tangerine
  [255, 90, 84], // sunset orange
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



