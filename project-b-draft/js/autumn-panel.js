let panelArray = [];
let messages = [
  "AVOID COOL AND BRIGHT COLORS SUCH AS WHITE AND BLACK. OPT FOR CREAM AND BROWN INSTEAD!",
  "YOU RADIATE LOTS OF WARMTH IN YOUR COLORING. ADDITIONALLY, YOU HAVE LOW CONTRAST.",
  "AUTUMNS ARE THE ONLY SEASON THAT CAN WEAR EVERY SHADE OF BROWN AND ORANGE IN THEIR ENTIRETY!",
  "IF YOU HAVE NATURALLY DARK HAIR, TRY GOING LIGHTER. COPPER AND AUBURN HAIR COLORS WORK TOO!",
  "YOU CAN ROCK LEOPARD PRINT!",
  "LIKE THE CHANGING AUTUMN LEAVES, DEEP GREENS, ORANGES, AND BROWNS ARE HARMONIOUS IN YOUR COLORING.",
  "GOLD JEWELRY LOOKS BETTER ON YOU THAN SILVER JEWELRY.",
  "EMBRACE COZY AND RUSTIC TONES TO HIGHLIGHT YOUR NATURAL BEAUTY!",
  "GO FOR A PEACH COLORED BLUSH, AND TRY OUT BROWN MASCARA AS OPPOSED TO BLACK!",
  "YOUR PALETTE LOVES EARTHY COLORS. INCORPORATE THESE COLORS IN YOUR MAKEUP AND WARDROBE!"
];

let autumnColors = [
  [224, 201, 147], // pavlova
  [103, 95, 79], // soy bean
  [75, 47, 39], // cafe noir
  [34, 71, 99], // dark blue grey
  [9, 120, 137,], // deep aqua
  [75, 83, 30], // army green
  [137, 154, 92], // asparagus
  [219, 166, 33], // orange gold
  [181, 80, 8], // fiery orange
  [124, 9, 3], // dark burgundy
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
      color: autumnColors[i],
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
