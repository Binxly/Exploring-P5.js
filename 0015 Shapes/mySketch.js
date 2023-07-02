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
    let gridSize = Math.floor(random(10, 40));
    let cellWidth = width / gridSize;
    let cellHeight = height / gridSize;

    noFill();
    strokeWeight(2);
    stroke(lineColor);
    rectMode(CENTER);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let cellX = i * cellWidth + cellWidth / 2; 
            let cellY = j * cellHeight + cellHeight / 2;
            if (random() > 0.5) {
                rect(cellX, cellY - cellHeight / 4, cellWidth / 2, cellHeight / 2);
                rect(cellX, cellY, cellWidth / 2, cellHeight / 2);
                rect(cellX, cellY + cellHeight / 4, cellWidth / 2, cellHeight / 2);
            } else {
                rect(cellX - cellWidth / 4, cellY, cellWidth / 2, cellHeight / 2);
                rect(cellX, cellY, cellWidth / 2, cellHeight / 2);
                rect(cellX + cellWidth / 4, cellY, cellWidth / 2, cellHeight / 2);
            }
        }
    }
}