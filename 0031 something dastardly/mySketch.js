let angle = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);

  rotateX(angle);
  rotateY(angle);


  stroke(255);
  noFill();

  for (let i = 0; i < 3; i++) {
    box(200 + i * 25);
  }

  fill(255);
  stroke(0);
  rotateX(-angle*1.25);
  rotateY(-angle*1.25);
  box(50);

  angle += 0.01;
}
