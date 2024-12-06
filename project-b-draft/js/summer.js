let panelArray = [];
let messages = [
  "Summers colors are soft, cool, and smokey.",
  "Swap out harsh black for navy blue, greys, and cool taupes.",
  "Avoid warm and bright colors.  You radiate in cool and subtle colors.",
  "You have coolness in your skin and overall coloring.",
  "You can wear all pastel shades!",
  "Avoid colors like bright salmon and orange!  These colors drain your cool coloring, making you appear tired.",
  "You have medium to low contrast.  Your features appear soft and blended.",
  "Silver and platinum metals complement your skin best.",
  "Choose soft pink blush, shimmery silvers, and neutral lipshades.",
  "Hair colors with cool and ashy shades, such as ash browns or cooler blondes look great on you!",
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
