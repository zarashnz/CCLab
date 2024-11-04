let b;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  b = new Ball();
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    b.move();
    b.changeSize();
  }

  b.draw();

  // text(b.x, 10, 20);
  // text(b.y, 10, 40);
  // text(b.dia, 10, 60);
}

// CLASS: Ball

class Ball {
  constructor() {
    // properties (variables)
    this.x = width / 2;
    this.y = height / 2;
    this.dia = 220;
  }
  // behaviors, actions: Methods (functions)
  draw() {
    circle(this.x, this.y, this.dia);
  }
  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  changeSize() {
    this.dia += random(-2, 2);
  }
}