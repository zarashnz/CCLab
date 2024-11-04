/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new ZaraDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ZaraDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.angleArm = 0;
    this.angleArmDirection = 1;
    this.tutuSway = 0;

    this.spots = [];
    for (let i = 0; i < 6; i++) {
      let spotX = random(-20, 20);
      let spotY = random(-40, 30);
      let spotSize = random(2, 5);
      this.spots.push({ x: spotX, y: spotY, size: spotSize })
    }

    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    this.angle += 0.02;

    if (this.angleArm >= PI) {
      this.angleArm = PI;
      this.angleArmDirection = -1;
    } else if (this.angleArm <= 0) {
      this.angleArm = 0;
      this.angleArmDirection = 1;
    }
    this.angleArm += 0.03 * this.angleArmDirection;

    this.tutuSway = sin(this.angle) * 4;
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    let sinValue = sin(this.angle) * 0.5;

    translate(this.x, this.y + sinValue * 80);

    let armMove = this.angleArm;

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    this.drawBody();

    this.drawFace();

    this.drawArm(35, 0, armMove + radians(90));
    this.drawArm(-35, 0, + radians(180));

    this.drawTutu(0, 40);

    this.drawLeg(15, 60, 0);
    this.drawLeg(-15, 60, radians(90) - sinValue * 2.5);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }

  drawArm(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(2);
    stroke("#8b623a");
    line(0, 0, 35, 0);
    pop();
  }
  drawFace(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(2);
    stroke("#896746");
    noFill()
    arc(-15, -5, 10, 15, PI, TWO_PI);
    arc(15, -5, 10, 15, PI, TWO_PI);
    // smile
    arc(0, 8, 10, 15, 0, PI);
    pop();

  }
  drawBody() {
    push();
    noStroke();
    fill(222, 184, 135);
    ellipse(0, 0, 70, 100);

    fill(139, 69, 19, 90);
    stroke(89, 49, 8, 80);
    strokeWeight(0.2);
    for (let i = 0; i < this.spots.length; i++) {
      let spot = this.spots[i];
      ellipse(spot.x, spot.y, spot.size, spot.size);
    }

    pop();
  }
  drawTutu(x, y) {
    push();
    translate(x, y);
    noStroke();
    fill(255, 182, 193, 150);
    beginShape();
    curveVertex(-50 + this.tutuSway, 20);
    curveVertex(-40, 0);
    curveVertex(-20 + this.tutuSway, -15);
    curveVertex(20, -15);
    curveVertex(40, 0);
    curveVertex(50 + this.tutuSway, 20);
    endShape(CLOSE);
    pop();
  }
  drawLeg(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(2)
    stroke("#8b623a")
    line(0, 0, 0, 30);

    // shoes
    fill(255, 182, 193);
    noStroke();
    ellipse(0, 30, 10, 15);
    // bow
    stroke(231, 197, 216);
    noFill();
    ellipse(-5, 30, 4, 8);
    ellipse(5, 30, 4, 8);
    rect(-2, 30, 4, 5);

    pop();
  }

  // // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/