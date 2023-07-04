let angle = 0;
let maxDiameter = 250; // maximum diameter of the spiral
let spiralDensity = 1; // controls the density of the spiral. smaller value = more dense

function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  
  rotateX(angle * 0.3);
  rotateY(angle * 0.5);

  for (let i = 0; i <= 360; i += spiralDensity) {
    let radius = map(i, 0, 360, 0, maxDiameter);
    let x = radius * cos(i);
    let y = radius * sin(i);
    let z = map(i, 0, 360, -maxDiameter / 2, maxDiameter / 2);
    point(x, y, z);
  }

  angle += 5;
}
