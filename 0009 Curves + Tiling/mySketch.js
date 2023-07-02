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
    noFill();
    strokeWeight(3);
    stroke(lineColor);

    let gridSize = random(20,100);

    for (let i = 0; i < width; i += gridSize) {
        for (let j = 0; j < height; j += gridSize) {

            let points = [
                {x: i + gridSize/2, y: j},
                {x: i + gridSize/2, y: j + gridSize/2},
                {x: i + gridSize, y: j + gridSize/2},
                {x: i, y: j + gridSize/2},
                {x: i + gridSize/2, y: j + gridSize}
            ];

            if (random() > 0.5) {
                // top left corner
                bezier(points[0].x, points[0].y, points[1].x, points[1].y, points[3].x, points[3].y, points[3].x, points[3].y);
                // bottom right corner
                bezier(points[4].x, points[4].y, points[1].x, points[1].y, points[2].x, points[2].y, points[2].x, points[3].y);
            } else {
                // top right corner
                bezier(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y, points[2].x, points[2].y);
                // bottom left corner
                bezier(points[0].y, points[0].x, points[1].y, points[1].x, points[2].y, points[2].x, points[2].y, points[2].x);
            }
        }
    }
}   