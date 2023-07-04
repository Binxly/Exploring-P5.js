let numSegments = 6;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  for (let i = 0; i < numSegments; i++) {
    push();
    rotate(i * (360 / numSegments));
    drawSegment();
    scale(1, -1);
    drawSegment();
    pop();
  }
}

function drawSegment() {
  stroke(255);
  line(0, 0, mouseX - width / 2, mouseY - height / 2);
}
