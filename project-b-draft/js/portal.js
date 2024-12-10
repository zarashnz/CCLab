let clickableArea;

let NUM_OF_TRAILS = 50;
let trails = [];
let portalX, portalY;
let portalWidth, portalHeight;
let time = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  clickableArea = {
    x: 0,
    y: 0,
    width: 800,
    height: 500
  };

  portalX = width / 2;
  portalY = height / 2;
  portalWidth = 200;
  portalHeight = 300;
}

function draw() {
  background(10, 20);

  time += 0.04;

  let xOscillation = sin(time) * 5;
  let yOscillation = cos(time * 1.5) * 5;

  let widthOscillation = sin(time * 1.5) * 5;
  let heightOscillation = cos(time * 1.5) * 2;

  let movePortalX = portalX + xOscillation;
  let movePortalY = portalY + yOscillation;
  let movePortalWidth = portalWidth + widthOscillation;
  let movePortalHeight = portalHeight + heightOscillation;

  drawGlow(movePortalX, movePortalY, movePortalWidth, movePortalHeight);
  fill(0);
  noStroke();
  ellipse(movePortalX, movePortalY, movePortalWidth, movePortalHeight);

  let insidePortal = mouseX > movePortalX - movePortalWidth / 2 &&
    mouseX < movePortalX + movePortalWidth / 2 &&
    mouseY > movePortalY - movePortalHeight / 2 &&
    mouseY < movePortalY + movePortalHeight / 2;

  if (insidePortal) {
    cursor(HAND);

    let textXOffset = sin(time * 0.3) * 3 + cos(time * 0.7) * 2;
    let textYOffset = cos(time * 0.5) * 4 + sin(time * 0.9) * 2;

    // text
    fill(255, 200);
    textAlign(CENTER, CENTER);
    textSize(35);
    textFont("Times New Roman");
    textStyle(ITALIC);
    text("ETERNAL HUES", movePortalX + textXOffset, movePortalY + textYOffset);


    // trails
    trails.push(new Trail(movePortalX, movePortalY));
  } else {
    cursor(ARROW);
  }

  for (let i = 0; i < trails.length; i++) {
    trails[i].move();
    trails[i].display();
  }

  while (trails.length > NUM_OF_TRAILS) {
    trails.splice(0, 1);
  }
}

function drawGlow(x, y, w, h) {
  let outerColor = color(50, 100, 200, 50);
  let innerColor = color(100, 150, 255, 80);

  let glowIntensity = map(abs(mouseX - x), 0, w / 2, 0, 1);

  for (let i = 1; i <= 5; i++) {
    let glowColor = lerpColor(innerColor, outerColor, glowIntensity);
    fill(glowColor);

    let glowWidth = w + i * 30;
    let glowHeight = h + i * 30;
    ellipse(x, y, glowWidth, glowHeight);
  }
}

class Trail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = random(TWO_PI);
    this.radius = random(10, 50);
    this.color = color(random(100, 255), random(100, 255), random(255), 150);
    this.opacity = 255;
    this.speed = random(1, 2);
    this.growth = random(0.5, 1.5);
    this.spacing = random(10, 50);
  }

  move() {
    this.radius += this.growth;
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
    this.opacity -= 0.5
  }

  display() {
    push();
    translate(
      this.x + cos(this.angle) * this.radius,
      this.y + sin(this.angle) * this.radius
    );
    rotate(this.angle);
    fill(red(this.color), green(this.color), blue(this.color), this.opacity);
    noStroke();
    ellipse(200, 0, 8, 2);
    pop();
  }
}
function mouseClicked() {
  if (isMouseInside(clickableArea)) {
    window.location.href = "circles.html";
  }
}
function isMouseInside(area) {
  return mouseX > area.x && mouseX < area.x + area.width &&
    mouseY > area.y && mouseY < area.y + area.height;
}