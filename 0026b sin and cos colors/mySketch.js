let angle = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);

  // Calculate color values using sin function
  let r = map(sin(angle), -1, 1, 0, 255);
  let g = map(sin(angle + PI / 2), -1, 1, 0, 255);
  let b = map(sin(angle + PI), -1, 1, 0, 255);

  fill(r, g, b);
  ellipse(width / 2, height / 2, 400, 400);

  // increment angle for color transition
  angle += 0.02;
}
