let inc = 0.5;
let scl = 10;
let cols, rows;
let zoff = 0;
let flowfield;

function setup() {
  createCanvas(500, 500);

  cols = Math.ceil(width / scl);
  rows = Math.ceil(height / scl);

  flowfield = new Array(cols * rows);

  background(0);
}

function draw() {
  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff - 1, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);

      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
    }

    yoff += inc;
    zoff += 0.0005;
  }

  // Draw dots with changing size based on noise map
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let pos = createVector(x * scl, y * scl);
      let dotSize = map(noise(x * inc, y * inc, zoff), 0, 1, 0, 10);

      fill(255);
      ellipse(pos.x + 5, pos.y + 5, dotSize, dotSize);
    }
  }
}
