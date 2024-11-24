let sound;
let particles = [];

function preload() {
  sound = loadSound("assets/beat.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(width);
    let dia = random(30, 60);
    particles.push(new Particle(x, y, dia, sound));
  }

  // for (let y = 0; y <= height; y += 80) {
  //   for (let x = 0; x <= width; x += 80) {
  //     particles.push(new Particle(x, y, 35, sound));
  //   }
  // }
}


function draw() {
  background(220);

  // update, compare and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.checkMouse();
    p.display();
  }

  // remove particle once done * NEED IN FINAL PROJ *
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i]; // each element
    if (p.isDone == true) {
      particles.splice(i, 1); //(index, one time)

    }

  }

  // limit the total number * NEED IN FINAL PROJ *
  while (particles.length > 500) {
    particles.splice(0, 1); // (index, howMany)
  }
}

class Particle {
  constructor(x, y, rad, snd) {
    this.snd = snd;
    this.sndRate = random(0.50, 2.00);

    this.x = x;
    this.y = y;
    this.rad = rad;

    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.isDone = false;
  }

  checkMouse() {
    // mouseX, mouseY
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // in is yellow
      this.r = 255;
      this.g = 255;
      this.b = 0;

      if (mouseIsPressed) {
        // mouse is pressed is red
        this.r = 255;
        this.g = 0;
        this.b = 0;

        this.isDone = true;

        // // mouse is pressed is change size
        // this.rad -= 3;

        // mouse is pressed is play sound
        if (this.snd.isPlaying() == false) {
          this.snd.rate(this.sndRate);
          this.snd.play();
        }
      }
    } else {
      // out is white
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    fill(this.r, this.g, this.b);
    circle(0, 0, this.rad * 2);

    pop();
  }
}

