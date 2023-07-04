let colors = ["#AE6B6B", "#A5DFD5", "#DFF4F4"];
let lineColors = [...colors];
let bgColor;
let lineColor;
let tileSize = 350;

function setup() {
    createCanvas(700, 700);
    bgColor = random(colors);
    lineColors = lineColors.filter(color => color !== bgColor);
    lineColor = random(lineColors);
	background(bgColor);
	noLoop();
}

function draw() {
    stroke(lineColor)
    noFill();
    strokeWeight(2);
  for(let x = 0; x < width; x += tileSize) {
    for(let y = 0; y < height; y += tileSize) {
      if ((x / tileSize) % 2 == (y / tileSize) % 2) {
        line(x, y, x + tileSize, y + tileSize);
        line(x, y + tileSize, x + tileSize, y);
      } else {
        line(x, y, x + tileSize, y + tileSize);
        line(x + tileSize, y, x, y + tileSize);
      }
    }
  }
}
