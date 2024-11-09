let names = ["moon", "angelica", "linyi", "gloria"];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // to add more elements to the array, using array.push( element );
  names.push("zara");
  names.push("florence");

  // to remove elements from the array, using array.splice( index, quantity );
  names.splice(2, 1);

  let index = names.length - 1; // the last element
  let name = names[index];
  console.log(name);
}

function draw() {
  background(220);

  for (let i = 0; i < names.length; i++) {
    let n = names[i];
    text(n, 10, 20 + i * 20);
  }
}