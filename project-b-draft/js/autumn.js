let panelArray = [];
let messages = [

  "Avoid cool and bright colors such as white and black.  Opt for cream and brown instead!",
  "You radiate lots of warmth in your coloring.  Additonally, you have low contrast.",
  "Autumns are the only season that can wear every shade of brown and orange in their entirety!",
  "If you have naturally dark hair, try going lighter.  Copper and auburn hair colors work too!",
  "You can rock leopard print!",
  "Like the changing autumn leaves, deep greens, oranges, and browns are harmonious in your coloring",
  "Gold jewelry looks better on you than silver jewelry.",
  "Embrace cozy and rustic tones to highlight your natural beauty!",
  "Go for a peach colored blush, and try out brown mascara as opposed to black!",
  "Your palette loves earthy colors.  Incorporate these colors in your makeup and wardrobe!",
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
