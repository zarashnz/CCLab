// color #1 "ocean light"
let color1R = 52;
let color1G = 113;
let color1B = 226;
// color #2 "ocean deep"
let color2R = 0;
let color2G = 0;
let color2B = 0;

let yPosition = 0;
let noiseX = 0;
let noiseY = 0;

// bubbles
let bubbles = [];
let maxBubbles = 100;
let minBubbles = 0;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");

    // bubbles array
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let size = random(2, 17);
        let speed = map(mouseX, 0, width, 0.8, 0.1);
        bubbles.push({ x: x, y: y, size: size, speed: speed });
    }
}

function drawBubbles() {
    let bubbleCount = map(mouseX, 0, width, maxBubbles, minBubbles);
    for (let i = 0; i < bubbleCount; i++) {
        let bubble = bubbles[i];

        //stroke(255);
        if (mouseX < 200) {
            stroke(255, random(10, 222));
            // stroke((255), random(178), (252), random(500));
        } else {
            stroke(255, random(80));
        }

        noFill();
        // fill(255, 255, 255, 150);
        ellipse(bubble.x, bubble.y, bubble.size);

        bubble.y -= 1;
        if (bubble.y < -bubble.size) {
            bubble.y = height + bubble.size;
        }
    }
}

function drawPetalLines(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);

    let weakPink = color(205, 144, 196, 80);
    let strongPink = color(244, 57, 218, 200);

    let lerpedColor1 = lerpColor(
        strongPink,
        weakPink,
        map(mouseX, 0, width, 0, 1)
    );

    let weakAqua = color(171, 196, 200, 100);
    let strongAqua = color(179, 241, 255, 200);

    let lerpedColor4 = lerpColor(
        strongAqua,
        weakAqua,
        map(mouseX, 0, width, 0, 1)
    );

    stroke(lerpedColor1);
    strokeWeight(2);

    // lines on petals
    let length = 70;
    let angleOffset = map(mouseX, 0, width, 10, 45);

    for (let i = -1; i <= 1; i++) {
        let angleOffsetForLine = i * angleOffset; // spread lines
        let xOffset = length * cos(radians(angleOffsetForLine));
        let yOffset = length * sin(radians(angleOffsetForLine));

        line(0, 0, xOffset, yOffset);

        // circles on lines
        push();
        stroke("#119992");
        strokeWeight(0.3);
        fill(lerpedColor4);
        ellipse(xOffset, yOffset, 8);
        pop();
    }

    pop();
}

function drawJeliflora(x, y) {
    // updating properties based on interaction

    let activeAmount = map(mouseX, 0, width * 0.6, 4, 0);

    let scl = 1.0;

    if (mouseX < 500) {
        scl = map(mouseX, 0, 500, 1.15, 0.85);
    } else {
        scl = map(mouseX, 500, 800, 0.7, 0.35);
    }

    let angle = sin(frameCount * 0.05) * 0.1;
    angle = constrain(angle, -PI / 4, PI / 4);

    let yFluctuate = sin(frameCount * 0.03) * 20;

    let tentacleMovement1B = sin(frameCount * 0.03) * -2 * activeAmount;
    let tentacleMovement2B =
        sin(frameCount * 0.05 + PI / 4) * -1.5 * activeAmount;

    let petalMovement1B = sin(frameCount * 0.03) * 4 * activeAmount;
    let petalMovement2B = sin(frameCount * 0.02) * 3 * activeAmount;

    // DISPLAY

    push();

    translate(x, y + yPosition + yFluctuate); // center position
    scale(scl);
    rotate(angle);

    translate(-310, -240); // quick fix to draw the ceature on x and y (anchor of the transformation functions)

    // Jeliflora tentacles

    let brightPurple = color(147, 116, 237);
    let dullPurple = color(182, 159, 211);
    let lerpedColor3 = lerpColor(
        brightPurple,
        dullPurple,
        map(mouseX, 0, width, 0, 1)
    );

    fill(lerpedColor3);
    stroke("#8045cb");
    strokeWeight(0.5);

    beginShape();

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

    // Jeliflora petals
    let brightPink = color(241, 129, 241);
    let dullPink = color(228, 183, 228);
    let lerpedColor2 = lerpColor(
        brightPink,
        dullPink,
        map(mouseX, 0, width, 0, 1)
    );

    //fill(lerpedColor2);

    let fluctAmount = map(mouseX, 0, width, 50, 0);

    let rFluct = sin(frameCount * 0.03) * fluctAmount;
    let gFluct = 0;
    let bFluct = 0;

    let rFluct2 = sin(frameCount * 0.02) * fluctAmount;
    let gFluct2 = 0;
    let bFluct2 = 0;

    fill(
        red(lerpedColor2) + rFluct,
        green(lerpedColor2) + gFluct,
        blue(lerpedColor2) + bFluct
    );
    stroke("#D55DAF");
    strokeWeight(1);
    let close = 0;
    if (mouseX > width / 2) {
        close = (mouseX - width / 2) / 29;
    }
    // PETAL 1
    beginShape();
    curveVertex(309 + petalMovement1B, 226 + close * 3);
    curveVertex(309 + petalMovement2B, 226 + close * 2);
    curveVertex(288 + petalMovement1B + close, 172 + close * 2);
    curveVertex(323 + petalMovement2B, 97 + close * 2);
    curveVertex(355 + petalMovement1B - close, 160 + close * 2);
    curveVertex(309 + petalMovement2B, 226 + close * 2);
    curveVertex(309 + petalMovement1B, 226 + close * 2);
    endShape();
    // drawPetalLines(309, 226, radians(-90));

    // PETAL 2
    beginShape();
    curveVertex(309, 224 + petalMovement1B + close);
    curveVertex(309, 224 + petalMovement2B);
    curveVertex(380, 200 + petalMovement1B + close * 3);
    curveVertex(432, 228 + petalMovement2B + close * 3);
    curveVertex(369, 259 + petalMovement1B);
    curveVertex(309, 224 + petalMovement2B + close * 3);
    curveVertex(309, 224 + petalMovement1B + close * 3);
    endShape();
    // drawPetalLines(309, 224, radians(10));

    // PETAL 3
    beginShape();
    curveVertex(306 + petalMovement1B, 224 + close * 3);
    curveVertex(306 + petalMovement2B, 224 + close * 3);
    curveVertex(248 + petalMovement1B, 186 + close * 3);
    curveVertex(193 + petalMovement2B, 210 + close * 3);
    curveVertex(260 - close, 246 + petalMovement2B);
    curveVertex(306 - close, 224 + petalMovement2B);
    curveVertex(306 - close, 224 + petalMovement2B);
    endShape();
    // drawPetalLines(306, 224, radians(180));

    // PETAL 4 OPEN
    beginShape();
    curveVertex(304 + petalMovement1B, 224 + close * 3);
    curveVertex(304 - close, 224 + petalMovement2B);
    curveVertex(231 + petalMovement1B - close, 273 + close * 3);
    curveVertex(218 - close, 336 + petalMovement2B);
    curveVertex(290 + petalMovement1B - close * 3, 298 + close * 3);
    curveVertex(304 - close, 224 + petalMovement2B);
    curveVertex(304 + petalMovement1B, 224);
    endShape();
    // circle(290 + petalMovement1B-close, 298+close*3,10);
    // drawPetalLines(304, 224, radians(135));

    // PETAL 5 OPEN
    beginShape();
    curveVertex(308 + petalMovement2B - close, 224);
    curveVertex(308 + petalMovement2B - close, 224 + close * 3);
    curveVertex(392 + petalMovement2B, 278 + close * 3);
    curveVertex(405 + petalMovement2B, 323 + close * 3);
    curveVertex(340 + petalMovement2B - close, 299);
    curveVertex(308 + petalMovement2B - close, 224);
    curveVertex(308 + petalMovement2B, 224);
    endShape();
    // drawPetalLines(308, 224, radians(45));
    push();
    // -310, -240
    translate(width / 2 - 92, height / 2 - 15);
    rotate(PI / 2);
    // let angleMin = 0;
    let angleMax = map(mouseX, 0, width, 2.2 * PI, PI / 3);
    // petalAngle = map(0, width, angleMin, angleMax);
    for (let i = 0; i < 2; i++) {
        drawPetalLines(0, 0, (angleMax / 5) * (i + 1));
    }
    for (let i = 0; i < 3; i++) {
        drawPetalLines(0, 0, -(angleMax / 5) * i);
    }
    pop();
    // JELIFLORA DECORATIONS
    // fill(255);
    // noStroke();
    // circle(230 + petalMovement1B, 298, 10);
    // circle(308 + petalMovement2B, 298, 10);

    // JELIFLORA FACE
    fill(lerpedColor2);
    stroke("#D55DAF");
    circle(307, 235, 40);

    pop();
}

function draw() {
    // mousetrack
    // noStroke();
    // fill(255, 0, 0);
    // text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

    r = map(mouseX, 0, width, color1R, color2R);
    g = map(mouseX, 0, width, color1G, color2G);
    b = map(mouseX, 0, width, color1B, color2B);
    background(r, g, b, 200);

    // ENVIRONMENTAL ELEMENTS
    // BUBBLES
    drawBubbles();

    // BLOOMING AND HIDING OF JELIFLORA
    if (mouseX < 540) {
        if (mouseIsPressed) {
            yPosition--;
            // translate(0, yPosition);
        } else if (yPosition < 0) {
            yPosition++;
        }
    } else {
        if (mouseIsPressed) {
            noiseX = random(-1, 1);
            noiseY = random(0, 0);
        } else {
            noiseX = 0;
            noiseY = 0;
        }
    }

    drawJeliflora(width / 2, height / 2 + noiseX, noiseY);
}
