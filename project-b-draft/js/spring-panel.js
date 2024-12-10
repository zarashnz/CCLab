let panelArray = [];
let messages = [
  "OFF-WHITE OR IVORY LOOKS BETTER ON YOU RATHER THAN STARK WHITE.",
  "YOUR NEUTRAL COLORS ARE BROWN, TAUPE, AND CREAM.",
  "AVOID COOL AND MUTED COLORS, SUCH AS BURGUNDY AND GREY.",
  "HAIR COLORS THAT SUIT YOU ARE COPPER, STRAWBERRY BLONDE, OR GOLDEN BROWN!",
  "YOU OFTEN TAN EASILY IN THE SUN.",
  "SPRING COLORS ARE WARM AND BRIGHT!",
  "WARMTH, LIKE GOLDEN AND HONEY TONES, DOMINATES YOUR OVERALL COLORING.",
  "GOLD JEWELRY IS BEST FOR YOU!",
  "FOR MAKEUP, OPT FOR BRONZER RATHER THAN BLUSH!",
  "YOUR FEATURES CONTRAST EACH OTHER RATHER THAN BLEND TOGETHER."
];

let springColors = [
  [223, 221, 197], // ecru
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

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  let panelWidth = width / 10;

  for (let i = 0; i < 10; i++) {
    panelArray.push({
      x: i * panelWidth,
      y: 0,
      width: panelWidth,
      height: height,
      color: springColors[i],
      message: messages[i],
    });
  }
}

function draw() {
  background(240);

  for (let panel of panelArray) {
    if (
      mouseX > panel.x &&
      mouseX < panel.x + panel.width &&
      mouseY > panel.y &&
      mouseY < panel.y + panel.height
    ) {
      fill(panel.color[0], panel.color[1], panel.color[2], 200);
      noStroke();
      rect(panel.x, panel.y, panel.width, panel.height);

      push();
      noFill();
      stroke(panel.color[0], panel.color[1], panel.color[2], 255);
      strokeWeight(4);
      rect(
        panel.x + 2,
        panel.y + 2,
        panel.width - 4,
        panel.height - 4
      );
      pop();

      push();
      textFont('Times New Roman');
      textStyle(ITALIC);
      textSize(16);
      fill(255);
      textAlign(CENTER, CENTER);

      let words = panel.message.split(" ");
      let lineHeight = 20;
      let startY = panel.y + panel.height / 2 - (words.length * lineHeight) / 2;

      for (let i = 0; i < words.length; i++) {
        text(words[i], panel.x + panel.width / 2, startY + i * lineHeight);
      }
      pop();
    } else {
      fill(panel.color);
      noStroke();
      rect(panel.x, panel.y, panel.width, panel.height);
    }
  }

  let arrowX = width / 2 - 15;
  let arrowY = height - 30;
  let arrowWidth = 30;
  let arrowHeight = 30;

  if (
    mouseX > arrowX &&
    mouseX < arrowX + arrowWidth &&
    mouseY > arrowY - arrowHeight &&
    mouseY < arrowY + arrowHeight
  ) {

    cursor(HAND);
    push();
    textFont('Times New Roman');
    textSize(35);
    fill(255);
    textAlign(CENTER, CENTER);
    text("🪞", arrowX + arrowWidth / 2, arrowY - 35);
    pop();

    if (mouseIsPressed) {
      window.location.href = "mirror.html";
    }
  } else {
    cursor(ARROW);
  }

  push();
  textFont('Times New Roman');
  textStyle(ITALIC);
  textSize(15);
  fill(255);
  textSize(30);
  text("→", arrowX, arrowY);
  pop();

}
