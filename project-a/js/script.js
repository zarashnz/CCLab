// color #1 "ocean light"
let color1R = 52;
let color1G = 113;
let color1B = 226;
// color #2 "ocean deep"
let color2R = 0;
let color2G = 0;
let color2B = 0;

let wave = 2;
let yPosition = 0;
let noiseX = 0;
let noiseY = 0;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
}

function draw() {
    r = map(mouseX, 0, width, color1R, color2R);
    g = map(mouseX, 0, width, color1G, color2G);
    b = map(mouseX, 0, width, color1B, color2B);
    background(r, g, b, 60);

    // blooming and hiding of Jeliflora
    if (mouseX < 540) {
        drawOpenJeliflora();
        if (mouseIsPressed) {
            // wave = 1000;
            yPosition--;
            // translate(0, yPosition);
        } else if (yPosition < 0) {
            // wave = 2;
            yPosition++;
        }
    } else {
        if (mouseIsPressed) {
            noiseX = random(-0.5, 1);
            noiseY = random(-0.5, 0.5);
        } else {
            noiseX = 0;
            noiseY = 0;
        }
        drawClosedJeliflora();
    }
}

function drawOpenJeliflora() {
    push();
    translate(50, yPosition); // center position

    let tentacleMovement1B = sin(frameCount * 0.03) * -2;
    let tentacleMovement2B = sin(frameCount * 0.05 + PI / 4) * -1.5;

    let petalMovement1B = sin(frameCount * 0.03) * 4;
    let petalMovement2B = sin(frameCount * 0.02) * 3;

    // open Jeliflora tentacles
    beginShape();

    fill("#c6ace9");
    stroke("#a798f3");

    // TENTACLES 1 OPEN
    curveVertex(307 + tentacleMovement1B, 222);
    curveVertex(307, 222 + tentacleMovement1B);
    curveVertex(263 + tentacleMovement1B, 321);
    curveVertex(261, 355 + tentacleMovement1B);
    curveVertex(260 + tentacleMovement1B, 422);
    curveVertex(264, 375 + tentacleMovement1B);
    curveVertex(275 + tentacleMovement1B, 331);
    curveVertex(307, 222 + tentacleMovement1B);
    curveVertex(307 + tentacleMovement1B, 222);

    // TENTACLES 2 OPEN
    curveVertex(309 + tentacleMovement2B, 227);
    curveVertex(309, 227 + tentacleMovement2B);
    curveVertex(334 + tentacleMovement2B, 302);
    curveVertex(352 + tentacleMovement1B, 342 + tentacleMovement2B);
    curveVertex(361 + tentacleMovement2B, 375);
    curveVertex(358 + tentacleMovement2B, 425);
    curveVertex(346 + tentacleMovement2B, 384);
    curveVertex(337 + tentacleMovement2B, 364);
    curveVertex(333 + tentacleMovement2B, 344);
    curveVertex(316 + tentacleMovement2B, 306);
    curveVertex(309 + tentacleMovement2B, 227);
    curveVertex(309 + tentacleMovement2B, 227);

    endShape();

    // open Jeliflora petals
    beginShape();
    fill("#f2acf2");
    stroke("#ee82cd");

    // PETAL 1 OPEN
    curveVertex(309 + petalMovement1B, 226);
    curveVertex(309 + petalMovement2B, 226);
    curveVertex(288 + petalMovement1B, 172);
    curveVertex(323 + petalMovement2B, 97);
    curveVertex(355 + petalMovement1B, 160);
    curveVertex(309 + petalMovement2B, 226);
    curveVertex(309 + petalMovement1B, 226);

    // PETAL 2 OPEN
    curveVertex(309, 224 + petalMovement1B);
    curveVertex(309, 224 + petalMovement2B);
    curveVertex(380, 200 + petalMovement1B);
    curveVertex(432, 228 + petalMovement2B);
    curveVertex(369, 259 + petalMovement1B);
    curveVertex(309, 224 + petalMovement2B);
    curveVertex(309, 224 + petalMovement1B);

    // PETAL 3 OPEN
    curveVertex(306 + petalMovement1B, 224);
    curveVertex(306 + petalMovement2B, 224);
    curveVertex(248 + petalMovement1B, 186);
    curveVertex(193 + petalMovement2B, 210);
    curveVertex(260, 246 + petalMovement2B);
    curveVertex(306, 224 + petalMovement2B);
    curveVertex(306, 224 + petalMovement2B);

    // PETAL 4 OPEN
    curveVertex(304 + petalMovement1B, 224);
    curveVertex(304, 224 + petalMovement2B);
    curveVertex(231 + petalMovement1B, 273);
    curveVertex(218, 336 + petalMovement2B);
    curveVertex(290 + petalMovement1B, 298);
    curveVertex(304, 224 + petalMovement2B);
    curveVertex(304 + petalMovement1B, 224);

    // PETAL 5 OPEN
    curveVertex(308 + petalMovement2B, 224);
    curveVertex(308 + petalMovement2B, 224);
    curveVertex(392 + petalMovement2B, 278);
    curveVertex(405 + petalMovement2B, 323);
    curveVertex(340 + petalMovement2B, 299);
    curveVertex(308 + petalMovement2B, 224);
    curveVertex(308 + petalMovement2B, 224);

    endShape();

    // open Jeliflora face
    fill("#f2acf2");
    stroke("#ee82cd");
    circle(307, 235, 40);

    pop();
}

function drawClosedJeliflora() {
    push();
    translate(50 + noiseX, noiseY);

    let tentacleMovement1C = sin(frameCount * 0.02 + PI / 4) * 1;
    let tentacleMovement2C = sin(frameCount * 0.02) * -1.5;

    let petalMovement1C = sin(frameCount * 0.01) * 2;
    let petalMovement2C = sin(frameCount * 0.02) * 1;

    // closed Jeliflora tentacles
    beginShape();
    fill("#c6ace9");
    stroke("#a798f3");

    // TENTACLES 1 CLOSED
    curveVertex(307 + tentacleMovement1C, 222 + tentacleMovement2C);
    curveVertex(307 + tentacleMovement1C, 222);
    curveVertex(300 + tentacleMovement1C, 240 + tentacleMovement2C);
    curveVertex(305 + tentacleMovement1C, 250);
    curveVertex(308 + tentacleMovement1C, 265);
    curveVertex(307, 222 + tentacleMovement2C);
    curveVertex(307 + tentacleMovement1C, 222);

    // TENTACLES 2 CLOSED
    curveVertex(309 + tentacleMovement2C, 227 + tentacleMovement1C);
    curveVertex(309 + tentacleMovement2C, 227 + tentacleMovement1C);
    curveVertex(320, 240 + tentacleMovement1C);
    curveVertex(326 + tentacleMovement2C, 255);
    curveVertex(330 + tentacleMovement2C, 270 + tentacleMovement1C);
    curveVertex(309 + tentacleMovement2C, 227 + tentacleMovement1C);
    curveVertex(309 + tentacleMovement2C, 227 + tentacleMovement1C);
    endShape();

    // closed Jeliflora petals
    beginShape();
    fill("#f2acf2");
    stroke("#ee82cd");

    // PETAL 1 CLOSED
    curveVertex(309 + petalMovement1C, 226 + petalMovement2C);
    curveVertex(309 + petalMovement1C, 226 + petalMovement2C);
    curveVertex(305 + petalMovement1C, 210 + petalMovement2C);
    curveVertex(308 + petalMovement1C, 190 + petalMovement2C);
    curveVertex(315 + petalMovement1C, 205 + petalMovement2C);
    curveVertex(309 + petalMovement1C, 226 + petalMovement2C);
    curveVertex(309 + petalMovement1C, 226 + petalMovement2C);

    // PETAL 2 CLOSED
    curveVertex(309, 224 + petalMovement1C);
    curveVertex(309, 224);
    curveVertex(320 + petalMovement1C, 215);
    curveVertex(325, 200);
    curveVertex(330, 220 + petalMovement1C);
    curveVertex(309 + petalMovement1C, 224);
    curveVertex(309, 224 + petalMovement1C);

    // PETAL 3 CLOSED
    curveVertex(306 + petalMovement2C, 224 + petalMovement1C);
    curveVertex(306 + petalMovement2C, 224 + petalMovement1C);
    curveVertex(298 + petalMovement2C, 210 + petalMovement1C);
    curveVertex(295 + petalMovement2C, 195 + petalMovement1C);
    curveVertex(302 + petalMovement2C, 220 + petalMovement1C);
    curveVertex(306 + petalMovement2C, 224 + petalMovement1C);
    curveVertex(306 + petalMovement2C, 224 + petalMovement1C);

    // PETAL 4 CLOSED
    curveVertex(304 + petalMovement1C, 224);
    curveVertex(304 + petalMovement2C, 224);
    curveVertex(295 + petalMovement2C, 230 + petalMovement1C);
    curveVertex(290 + petalMovement1C, 240);
    curveVertex(300 + petalMovement2C, 235 + petalMovement1C);
    curveVertex(304 + petalMovement1C, 224);
    curveVertex(304 + petalMovement2C, 224 + petalMovement1C);

    // PETAL 5 CLOSED
    curveVertex(308 + petalMovement1C, 224 + petalMovement2C);
    curveVertex(308 + petalMovement1C, 224 + petalMovement2C);
    curveVertex(320 + petalMovement1C, 230);
    curveVertex(330 + petalMovement1C, 240 + petalMovement2C);
    curveVertex(318 + petalMovement1C, 235 + petalMovement2C);
    curveVertex(308 + petalMovement1C, 224 + petalMovement2C);
    curveVertex(308 + petalMovement1C, 224 + petalMovement2C);

    endShape();

    // closed Jeliflora face
    fill("#f2acf2");
    stroke("#ee82cd");
    circle(310, 224, 20);

    pop();
}



// incorporation of sin bubbles -- dissapear when black

// dance and twirl or pulsing 

// seabed and greens

// constant glimmering pattern

// mouse track
// noStroke();
// fill(255, 0, 0);
// text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
