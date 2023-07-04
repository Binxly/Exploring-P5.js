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
    // Loop through the width and height of the canvas, incrementing by the tile size
  for(let x = 0; x < width; x += tileSize) {
    for(let y = 0; y < height; y += tileSize) {
      // Draw two lines to form the 'V' shape of the herringbone pattern
      if ((x / tileSize) % 2 == (y / tileSize) % 2) {  // Check if the tile is even or odd
        line(x, y, x + tileSize, y + tileSize);  // Draw the line from the top left to bottom right of the tile
        line(x, y + tileSize, x + tileSize, y);  // Draw the line from the bottom left to top right of the tile
      } else {
        line(x, y, x + tileSize, y + tileSize);  // Draw the line from the top left to bottom right of the tile
        line(x + tileSize, y, x, y + tileSize);  // Draw the line from the top right to bottom left of the tile
      }
    }
  }
}
