let panelArray = [];
let messages = [
  "ICY COLORS SUIT YOU PERFECTLY!",
  "YOUR NEUTRAL COLORS ARE: WHITE, GRAY, NAVY, AND BLACK.",
  "STICK TO PURE WHITE INSTEAD OF OFF-WHITE OR CREAM.",
  "AVOID WARM COLORS, SUCH AS ORANGES AND BROWNS.",
  "YOU ARE THE ONLY SEASON THAT CAN PULL OFF BLACK!",
  "DON'T WORRY ABOUT GROWING GRAY HAIR, IT WILL SUIT YOU.",
  "USE PINK BLUSH INSTEAD OF PEACH BLUSH.",
  "OPT FOR JEWEL TONES. THINK RUBY RED, SAPPHIRE BLUE, AND EMERALD GREEN!",
  "BLACK MASCARA IS GREAT FOR YOU! THE DARKER THE BETTER!",
  "THERE'S HIGH CONTRAST BETWEEN YOUR HAIR, SKIN AND EYE COLOR! BRIGHT COLORS ARE BETTER THAN MUTED COLORS.",
];

let winterColors = [
  [220, 230, 240], // ice white
  [70, 83, 98], // steel blue
  [49, 77, 210], // cobalt blue
  [137, 215, 254], // blue jewel
  [92, 1, 158], // grape
  [160, 32, 123], // dark amethyst
  [255, 65, 160], // magenta
  [184, 1, 49], // ruby red
  [229, 238, 1], // electric lime
  [9, 156, 108], // emerald
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
      color: winterColors[i],
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
