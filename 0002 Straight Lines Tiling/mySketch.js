let colors = ["#AE6B6B", "#A5DFD5", "#DFF4F4"];
let lineColors = [...colors];
let bgColor;
let lineColor;

function setup() {
    createCanvas(700, 700);
    bgColor = random(colors);
    lineColors = lineColors.filter(color => color !== bgColor);
    lineColor = random(lineColors);
	background(bgColor);
	noLoop();
}

function draw() {
    let cellSize = random(5,50);
    let padding = 25;
    let cellsAcross = floor((width - 2 * padding - cellSize) / cellSize);
    let cellsDown = floor((height - 2 * padding - cellSize) / cellSize);
    let startX = (width - cellsAcross * cellSize) / 2;
    let startY = (height - cellsDown * cellSize) / 2;

    strokeWeight(2);
    stroke(lineColor);

    for (let i = 0; i < cellsAcross; i++) {
        for (let j = 0; j < cellsDown; j++) {
            let x = startX + i * cellSize;
            let y = startY + j * cellSize;
            if (random() < 0.5) {
                line(x, y + cellSize / 2, x + cellSize, y + cellSize / 2);
            } else {
                line(x + cellSize / 2, y, x + cellSize / 2, y + cellSize);
            }
        }
    }
}
