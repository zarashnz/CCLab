let img;
let brushSize = 30;


function preload() {
  img = loadImage("assets/sprite.png");
}


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(0);
}


function draw() {
  //background(0, 10);


  blendMode(ADD);


  tint(10, 120, 180, 50);
  imageMode(CENTER);
  image(img, mouseX, mouseY, brushSize, brushSize);
}
