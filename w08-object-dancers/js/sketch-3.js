let b, b1;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  b = new Ball(150, 200, 50);
  b1 = new Ball(350, 200, 100);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    b.scare();
    b1.scare();
  }

  b.draw();
  b1.draw();

  // text(b.x, 10, 20);
  // text(b.y, 10, 40);
  // text(b.dia, 10, 60);
}

// CLASS: Ball

class Ball {
  constructor(tempX, tempY, tempDia) {
    // properties (variables)
    this.x = tempX;
    this.y = tempY;
    this.dia = tempDia;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  // behaviors, actions: Methods (functions)
  draw() {
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    pop();
  }
  scare() {
    this.move();
    this.changeSize();
  }
  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  changeSize() {
    this.dia += random(-2, 2);
  }
}