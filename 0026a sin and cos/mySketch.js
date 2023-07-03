let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let x = 200 + 150 * cos(angle); // x-coordinate = cosine
  let y = 200 + 150 * sin(angle); // y-coordinate = sine

  fill(0);
  ellipse(x, y, 50, 50);

  angle += 0.02;
}
