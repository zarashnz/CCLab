let VIDEO_WIDTH = 640;
let VIDEO_HEIGHT = 480;

let cam;
let currentSeason = null;
let shape;
let webCam;

let seasonColors = {
  WINTER: [
    [160, 32, 123], // dark amethyst
    [255, 65, 160], // magenta
    [92, 1, 158], // grape
    [188, 30, 78], // ruby
    [49, 77, 210], // cobalt blue
    [137, 215, 254], // blue jewel
    [113, 40, 217], // purple
    [25, 189, 245], // avatar blue
    [220, 230, 240], // ice white
    [70, 83, 98], // steel blue
  ],
  SPRING: [
    [254, 161, 119], // vivid tangerine
    [254, 135, 101], // peachy
    [175, 110, 77], // clay brown
    [173, 136, 233], // purple
    [0, 162, 139], // mint
    [76, 187, 22], // kelly green
    [181, 192, 79], // avocado green
    [255, 191, 1], // mikado yellow
    [245, 244, 222], // ecru
    [255, 90, 84], // sunset orange
  ],
  SUMMER: [
    [236, 232, 156], // primrose
    [186, 184, 220], // dusty purple
    [233, 172, 209], // pink pearl
    [226, 198, 205], // dust storm
    [186, 213, 231], // cornflower blue
    [222, 209, 243], // purple
    [217, 221, 224], // gainsboro
    [219, 213, 205], // mushroom
    [233, 172, 209], // pink pearl
    [163, 170, 209], // rock blue
    [248, 253, 209], // yellow
  ],
  AUTUMN: [
    [75, 83, 30], // army green
    [75, 47, 39], // cafe noir
    [9, 120, 137], // deep aqua
    [103, 95, 79], // soy bean
    [181, 80, 8], // fiery orange
    [219, 166, 33], // orange gold
    [137, 154, 92], // asparagus
    [124, 9, 3], // dark burgundy
    [34, 71, 99], // dark blue grey
    [224, 201, 147], // pavlova
  ],
};

let backgroundColor
let maskLayer;

let seasonButtons = [];
let buttonSize = 80;
let buttonSpacing = 30;

function setup() {
  backgroundColor = color(20);
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  cam = createCapture(VIDEO);
  cam.size(VIDEO_WIDTH, VIDEO_HEIGHT);
  cam.hide();

  maskLayer = createGraphics(VIDEO_WIDTH, VIDEO_HEIGHT);

  createSeasonButtons();
}

function createSeasonButtons() {
  seasonButtons = [];
  let leftButtons = ["WINTER", "SUMMER"];
  let rightButtons = ["SPRING", "AUTUMN"];
  let centerOffset = 150;

  for (let i = 0; i < leftButtons.length; i++) {
    let season = leftButtons[i];
    let button = {
      x: buttonSpacing + buttonSize / 2 + centerOffset,
      y: height / 2 - buttonSize + i * (buttonSize + buttonSpacing),
      radius: buttonSize / 2,
      season: season,
      color: color(220),
    };
    seasonButtons.push(button);
  }

  for (let i = 0; i < rightButtons.length; i++) {
    let season = rightButtons[i];
    let button = {
      x: width - (buttonSpacing + buttonSize / 2) - centerOffset,
      y: height / 2 - buttonSize + i * (buttonSize + buttonSpacing),
      radius: buttonSize / 2,
      season: season,
      color: color(220),
    };
    seasonButtons.push(button);
  }
}

function draw() {
  background(backgroundColor);

  if (cam.width > 0) {
    cam.loadPixels();

    if (currentSeason) {
      transformPixels();
    }

    cam.updatePixels();
    createEllipticalMask();
    displayMirroredWebcam();
  }

  drawSeasonButtons();

  fill(220);
  textAlign(CENTER, BOTTOM);
  textFont('Times New Roman');
  textStyle(ITALIC);
  textSize(15);
  text("CLICK ON DIFFERENT SEASONS AND WATCH YOUR APPEARANCE CHANGE! (SPACE BAR TO RESET)", width / 2, height - 20);

  push();
  textAlign(LEFT, BOTTOM);
  textStyle(ITALIC);
  textSize(15);
  text("HOME", 20, height - 10);


  textAlign(RIGHT, BOTTOM);
  text("EXPLORE", width - 20, height - 10);
  pop();

  if (
    mouseX > 20 &&
    mouseX < 20 + textWidth("HOME") &&
    mouseY > height - 30 &&
    mouseY < height - 10
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  if (
    mouseX > width - 20 - textWidth("EXPLORE") &&
    mouseX < width - 20 &&
    mouseY > height - 30 &&
    mouseY < height - 10
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  for (let i = 0; i < seasonButtons.length; i++) {
    let button = seasonButtons[i];
    if (
      mouseX > button.x - button.radius &&
      mouseX < button.x + button.radius &&
      mouseY > button.y - button.radius &&
      mouseY < button.y + button.radius
    ) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
}

function transformPixels() {
  if (currentSeason) {
    let selectedColors = seasonColors[currentSeason];
    for (let y = 0; y < cam.height; y++) {
      for (let x = 0; x < cam.width; x++) {
        let index = (x + y * cam.width) * 4;
        let r = cam.pixels[index + 0];
        let g = cam.pixels[index + 1];
        let b = cam.pixels[index + 2];

        let avg = (r + g + b) / 3;
        let colorIndex = floor(map(avg, 0, 255, 0, selectedColors.length - 1));

        let selectedColor = selectedColors[colorIndex];
        cam.pixels[index + 0] = selectedColor[0];
        cam.pixels[index + 1] = selectedColor[1];
        cam.pixels[index + 2] = selectedColor[2];
      }
    }
  }
}

function createEllipticalMask() {
  maskLayer.clear();
  maskLayer.noStroke();
  maskLayer.fill(255);
  maskLayer.ellipse(
    VIDEO_WIDTH / 2,
    VIDEO_HEIGHT / 2,
    VIDEO_HEIGHT * 0.5,
    VIDEO_HEIGHT * 0.8
  );
}

function displayMirroredWebcam() {
  let newImg = createImage(VIDEO_WIDTH, VIDEO_HEIGHT);
  newImg.copy(
    cam,
    0,
    0,
    VIDEO_WIDTH,
    VIDEO_HEIGHT,
    0,
    0,
    VIDEO_WIDTH,
    VIDEO_HEIGHT
  );
  newImg.mask(maskLayer);

  push();
  translate(width / 2, height / 2);
  scale(1.75);
  translate(-VIDEO_WIDTH / 2, -VIDEO_HEIGHT / 2);

  push();
  translate(VIDEO_WIDTH, 0);
  scale(-1, 1);
  image(newImg, 0, 0);

  pop();
  pop();
}

function drawSeasonButtons() {
  seasonButtons.forEach((button) => {
    fill(button.color);
    stroke(0);
    ellipse(button.x, button.y, button.radius * 2, button.radius * 2);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(
      button.season,
      button.x,
      button.y
    );
  });
}

function mousePressed() {

  if (
    mouseX > 20 &&
    mouseX < 20 + textWidth("HOME") &&
    mouseY > height - 30 &&
    mouseY < height - 10
  ) {
    window.location.href = "index.html";
  }

  if (
    mouseX > width - 20 - textWidth("EXPLORE") &&
    mouseX < width - 20 &&
    mouseY > height - 30 &&
    mouseY < height - 10
  ) {
    window.location.href = "circles.html";
  }

  for (let i = 0; i < seasonButtons.length; i++) {
    let button = seasonButtons[i];
    if (
      mouseX > button.x - button.radius &&
      mouseX < button.x + button.radius &&
      mouseY > button.y - button.radius &&
      mouseY < button.y + button.radius
    ) {
      currentSeason = button.season;
    }
  }
}
function keyPressed() {
  if (key === " ") {
    currentSeason = null;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createSeasonButtons();
}
