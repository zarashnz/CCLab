let panelArray = [];
let messages = [
  "Icy colors suit you perfectly!",
  "Your neutral colors are: white, gray, navy, and black.",
  "Stick to pure white instead of off-white or cream.",
  "Avoid warm colors, such as oranges and browns.",
  "You are the only season that can pull off black!",
  "Don't worry about growing gray hair, it will suit you.",
  "Use pink blush instead of peach blush.",
  "Opt for jewel tones.  Think ruby red, sapphire blue, and emerald green!",
  "Black mascara is great for you!  The darker the better!",
  "There's high contrast between your hair, skin and eye color!  Bright colors are better than muted colors.",
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
