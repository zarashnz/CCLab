function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(10, 20);

  let portalX = width / 2;
  let portalY = height / 2;
  let portalWidth = 200;
  let portalHeight = 300;

  drawGlow(portalX, portalY, portalWidth, portalHeight);

  fill(0);
  noStroke();
  ellipse(portalX, portalY, portalWidth, portalHeight);
}

function drawGlow(x, y, w, h) {
  let outerColor = color(50, 100, 200, 50);
  let innerColor = color(100, 150, 255, 80);

  let glowIntensity = map(abs(mouseX - x), 0, w / 2, 0, 1);

  for (let i = 1; i <= 5; i++) {
    let glowColor = lerpColor(
      innerColor,
      outerColor,
      glowIntensity
    );
    fill(glowColor);

    let glowWidth = w + i * 30;
    let glowHeight = h + i * 30;
    ellipse(x, y, glowWidth, glowHeight);
  }
}