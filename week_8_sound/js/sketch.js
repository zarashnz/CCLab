let sound;
let amp;

function preload() {
  sound = loadSound("assets/song.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // amp = new p5.Amplitude();
  mic = new p5.AudioIn();
  // mic.start();

}

function draw() {
  background(220, 10);
  // let volume = amp.getLevel();
  let volume = mic.getLevel();
  let dia = map(volume, 0.0, 1.0, 1, 500);

  // let volValue = map(mouseY, 0, height, 1.0, 0.0, true);

  noStroke();
  fill(255, 0, 255);
  circle(width / 2, height / 2, dia);

  text(volume, 10, 20);
  // sound.setVolume(volValue);

  // let panValue = map(mouseX, 0, width, 1, -1);
  // sound.pan(panValue);

  // let rateValue = map(mouseY, 0, height, 0.1, 2.0, true);
  // sound.rate(rateValue)
}

function mousePressed() {
  if (sound.isPlaying() == false) {
    // sound.play();
    sound.loop();
    sound.setVolume(0.1);
  } else {
    sound.pause();
    // sound.stop();
  }

}
