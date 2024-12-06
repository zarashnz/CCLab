let panelArray = [];
let messages = [
  "Off-white or ivory looks better on you rather than stark white.",
  "Your neutral colors are brown, taupe, and cream.",
  "Avoid cool and muted colors, such as burgundy and grey.",
  "Hair colors that suit you are copper, strawberry blonde, or golden brown!",
  "You often tan easily in the sun.",
  "Spring colors are warm and bright!",
  "Warmth, like golden and honey tones, dominates your overall coloring.",
  "Gold jewelry is best for you!",
  "For makeup, opt for bronzer rather than blush!",
  "Your features contrast each other rather than blend together.",
];

let springColors = [
  [245, 244, 222], // ecru
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

      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);

      let words = panel.message.split(" ");
      let lineHeight = 20;
      let startY = panel.y + panel.height / 2 - (words.length * lineHeight) / 2;

      for (let i = 0; i < words.length; i++) {
        text(words[i], panel.x + panel.width / 2, startY + i * lineHeight);
      }
    } else {
      fill(panel.color);
      noStroke();
      rect(panel.x, panel.y, panel.width, panel.height);
    }
  }
}
