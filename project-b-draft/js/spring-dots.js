let VIDEO_SCALE = 280;
let VIDEO_WIDTH = 4 * VIDEO_SCALE;
let VIDEO_HEIGHT = 3 * VIDEO_SCALE; // 4:3

let NUM_OF_PARTICLES = 10;
let cam;
let shape;
let webCam;

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
  backgroundColor = color(200);
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");


  cam = createCapture(VIDEO);
  //cam.size(640, 480); // 4:3
  cam.size(VIDEO_WIDTH, VIDEO_HEIGHT);
  cam.hide();

  // create a mask layer
  maskLayer = createGraphics(VIDEO_WIDTH, VIDEO_HEIGHT);


  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    let colorName = colors[i];
    particles.push(new Particle(width / 2, height / 2, colorName));
  }
}

function draw() {
  background(backgroundColor);

  // loads the current pixel data of the webcam
  cam.loadPixels();
  // update the pixel array
  cam.updatePixels();

  maskLayer.clear();
  maskLayer.ellipse(VIDEO_WIDTH / 2, VIDEO_HEIGHT / 2, VIDEO_HEIGHT * 0.5, VIDEO_HEIGHT * 0.8);

  // create a blank new image
  let newImg = createImage(VIDEO_WIDTH, VIDEO_HEIGHT);
  // copy the webcam feed into the blank image
  newImg.copy(cam, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
  // apply the elliptical mask to the copied webcam image
  newImg.mask(maskLayer);


  push();
  translate(width / 2, height / 2); // to Center!
  translate(-VIDEO_WIDTH / 2, -VIDEO_HEIGHT / 2);

  push();
  translate(VIDEO_WIDTH, 0);
  scale(-1, 1); // flip webcam
  image(newImg, 0, 0);
  pop();
  // image(cam, 0, 0);

  pop();

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
  }

  push();
  textFont('Times New Roman');
  textStyle(ITALIC);
  textSize(18);
  fill(255);
  text('CATCH A COLOR TO TEST IT AGAINST YOUR SKIN', 10, 30);
  pop();

  let arrowX = width - 50;
  let arrowY = height - 30;

  push();
  textFont('Times New Roman');
  textSize(30);
  fill(255);
  textAlign(CENTER, CENTER);
  text("→", arrowX, arrowY);
  pop();

  if (
    mouseX > arrowX - 15 && mouseX < arrowX + 15 &&
    mouseY > arrowY - 15 && mouseY < arrowY + 15
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  let arrowX = width - 50;
  let arrowY = height - 30;

  if (
    mouseX > arrowX - 15 && mouseX < arrowX + 15 &&
    mouseY > arrowY - 15 && mouseY < arrowY + 15
  ) {
    window.location.href = 'spring-panel.html';
  }


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
    this.dia = 50;
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
    noStroke();
    let r = red(this.color);
    let g = green(this.color);
    let b = blue(this.color);
    fill(r, g, b, 100);
    circle(this.x, this.y, this.dia);
    circle(this.x, this.y, this.dia * 0.90);
    fill(this.color);
    circle(this.x, this.y, this.dia * 0.65);
    pop();
  }

  isClicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < this.dia / 2;
  }
}
