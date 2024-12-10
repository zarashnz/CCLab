let seasons = [
  {
    x: 275,
    y: 150,
    label: "WINTER",
    colors: [
      [220, 230, 240], // grey
      [18, 0, 205], // blue
      [102, 21, 178], // purple
      [255, 105, 176], // fuschia
      [228, 2, 48], // red
    ],
    link: "winter.html",
  },
  {
    x: 525,
    y: 150,
    label: "SPRING",
    colors: [
      [245, 244, 222], // custard
      [1, 182, 235], // blue
      [153, 102, 206], // purple
      [0, 162, 139], // green
      [255, 100, 73], // orange
    ],
    link: "spring.html",
  },
  {
    x: 275,
    y: 350,
    label: "SUMMER",
    colors: [
      [193, 194, 203], // grey
      [163, 170, 209], // purple
      [139, 206, 240], // sky blue
      [236, 232, 156], // yellow
      [232, 146, 184], // pink
    ],
    link: "summer.html",
  },
  {
    x: 525,
    y: 350,
    label: "AUTUMN",
    colors: [
      [245, 244, 222], // ecru
      [212, 172, 138], // beige
      [140, 68, 17], // chocolate
      [123, 122, 59], // olive
      [220, 192, 26], // mustard
    ],
    link: "autumn.html",
  },
];

function setup() {
  let canvas = createCanvas(800, 700);
  canvas.parent("p5-canvas-container");
  textAlign(CENTER, CENTER);
  textSize(16);
  textFont("monospace");
}

function draw() {
  scale(1);
  background(0);
  translate(40, 120);

  // outer ellipse

  for (let season of seasons) {
    let glowSize = 20;
    let colorStep = season.colors.length / glowSize;

    for (let i = 0; i < glowSize; i++) {
      let alpha = 200 - i * 12 + sin(frameCount * 0.05) * 50;
      let size = 100 + i * 10 + cos(frameCount * 0.03) * 5;

      let colorIndex = floor(i * colorStep);
      colorIndex = min(colorIndex, season.colors.length - 1);

      stroke(
        season.colors[colorIndex][0],
        season.colors[colorIndex][1],
        season.colors[colorIndex][2],
        constrain(alpha, 0, 255)
      );
      strokeWeight(2);
      noFill();
      ellipse(season.x, season.y, size, size);
    }

    // main circle
    noStroke();
    fill(255);
    ellipse(season.x, season.y, 100);

    fill(20);
    text(season.label, season.x, season.y);

    let clickableArea = {
      x: season.x - 50 + 40,
      y: season.y - 50 + 120,
      width: 100,
      height: 100,
    };


    if (mouseX > clickableArea.x && mouseX < clickableArea.x + clickableArea.width &&
      mouseY > clickableArea.y && mouseY < clickableArea.y + clickableArea.height) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }

  // arrows
  push();
  stroke(255);
  strokeWeight(2);
  fill(255);

  // cool - warm arrow
  line(130, 5, 630, 5);
  triangle(630, 0, 650, 5, 630, 10);

  // bright - muted arrow
  line(100, 100, 100, 420);
  triangle(95, 400, 100, 420, 105, 400);

  textFont("Times New Roman");
  textStyle(ITALIC);
  textSize(15);
  noStroke();
  text("COOL", 150, -20);
  text("WARM", 630, -20);
  text("BRIGHT", 50, 100);
  text("MUTED", 50, 410);
  pop();
}

function mouseClicked() {

  let adjustedMouseX = mouseX - 40;
  let adjustedMouseY = mouseY - 120;

  for (let season of seasons) {
    let distance = dist(adjustedMouseX, adjustedMouseY, season.x, season.y);
    if (distance < 50) {
      window.location.href = season.link;
    }
  }
}

function isMouseInside(area) {
  return (
    mouseX > area.x &&
    mouseX < area.x + area.width &&
    mouseY > area.y &&
    mouseY < area.y + area.height
  );
}
