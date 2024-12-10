let panelArray = [];
let messages = [
  "SUMMERS COLORS ARE SOFT, COOL, AND SMOKEY.",
  "SWAP OUT HARSH BLACK FOR NAVY BLUE, GREYS, AND COOL TAUPES.",
  "AVOID WARM AND BRIGHT COLORS. YOU RADIATE IN COOL AND SUBTLE COLORS.",
  "YOU HAVE COOLNESS IN YOUR SKIN AND OVERALL COLORING.",
  "YOU CAN WEAR ALL PASTEL SHADES!",
  "AVOID COLORS LIKE BRIGHT SALMON AND ORANGE! THESE COLORS DRAIN YOUR COOL COLORING, MAKING YOU APPEAR TIRED.",
  "YOU HAVE MEDIUM TO LOW CONTRAST. YOUR FEATURES APPEAR SOFT AND BLENDED.",
  "SILVER AND PLATINUM METALS COMPLEMENT YOUR SKIN BEST.",
  "CHOOSE SOFT PINK BLUSH, SHIMMERY SILVERS, AND NEUTRAL LIPSHADES.",
  "HAIR COLORS WITH COOL AND ASHY SHADES, SUCH AS ASH BROWNS OR COOLER BLONDES LOOK GREAT ON YOU!"
];

let summerColors = [
  [217, 221, 224], // gainsboro
  [193, 194, 203], // lavender gray
  [112, 127, 145], // slate gray
  [163, 170, 209], // rock blue
  [90, 139, 174], // dusty blue
  [139, 206, 240], // cornflower blue
  [128, 187, 160], // gulf stream
  [236, 232, 156], // primrose
  [226, 198, 205], // dust storm
  [233, 172, 209], // pink pearl
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
      color: summerColors[i],
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
