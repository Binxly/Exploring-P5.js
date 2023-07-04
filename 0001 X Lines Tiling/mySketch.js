let colors = ["#AE6B6B", "#A5DFD5", "#DFF4F4"];
let lineColors = [...colors];
let bgColor;
let sqColor;

function setup() {
    createCanvas(700, 700);
    bgColor = random(colors);
    lineColors = lineColors.filter(color => color !== bgColor);
    sqColor = random(lineColors);
    lineColors = lineColors.filter(color => color !== sqColor);
    lineColor = random(lineColors);
	background(bgColor);

    offScreen = createGraphics(700, 700);
    offScreen.noFill();
    offScreen.stroke(sqColor);
    offScreen.strokeWeight(2);
    for (let i = 0; i < 100; i++) {
        let x = offScreen.random(width);
        let y = offScreen.random(height);
        let size = offScreen.random(5, 10);
        offScreen.rect(x, y, size, size);
    }

	noLoop();
}

function draw() {
    image(offScreen, 0, 0);
    filter(BLUR, 15);
    let canvasSize = 700;
    let squareSize = 675;
    let offset = (canvasSize - squareSize) / 2;
    let cellSize = squareSize / floor(squareSize / 10);
    let numCells = floor(squareSize / cellSize);
    strokeWeight(2);
    stroke(lineColor);
    for (let i = 0; i < numCells; i++) {
        for (let j = 0; j < numCells; j++) {
            let x1 = offset + i * cellSize;
            let y1 = offset + j * cellSize;
            let x2 = x1 + cellSize;
            let y2 = y1 + cellSize;
            let randomValue = random();
            if(randomValue < 0.33) {
                line(x1, y1, x2, y2);
            } else if (randomValue < 0.66) {
                line(x1, y2, x2, y1);
            } else {
                line(x1, y1, x2, y2);
                line(x1, y2, x2, y1);
            }
        }
    }
}
