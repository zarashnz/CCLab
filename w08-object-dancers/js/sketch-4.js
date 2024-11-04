let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let dia = random(10, 50);
    balls[i] = new Ball(x, y, dia);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.scare();
    b.draw();
  }
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