let img;

function preload() {
  img = loadImage("assets/colorful.jpg");
}

function setup() {
  let canvas = createCanvas(500, 281);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(220);

  // //manipulate color! RED
  tint(0, 255, 0);
  image(img, 0, 0);

  // greyscale
  // filter(GRAY);

  // inversion of existing color
  // filter(INVERT);

  // blurs
  // filter(BLUR, 2);

  // detects certain area
  filter(THRESHOLD);

  // imageMode(CENTER);
  // image(img, mouseX, mouseY, 100, 80);
}