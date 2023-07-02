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
    strokeWeight(.2);

    let gridSize = random([350, 175]);

    // iterate over grid
    for (let gridX = 0; gridX < width; gridX += gridSize) {
        for (let gridY = 0; gridY < height; gridY += gridSize) {

            let midX = gridX + gridSize / 2;
            let midY = gridY + gridSize / 2;
            
            pickStrokeColor();
            
            drawWavyCircle(midX, midY, gridSize / 4);
        }
    }
}

function drawWavyCircle(midX, midY, radius) {
    const numSegments = 50;
    const maxDisplacement = 1.5;
    const numberOfCircles = 20;
    let prevDisplacement = Array(numSegments+1).fill(0);

    for(let i = 0; i < numberOfCircles; i++) {
        let points = [];
        // calculate points
        for (let j = 0; j <= numSegments; j++) {
            let angle = map(j, 0, numSegments, 0, TWO_PI);
            let displacement = random(-maxDisplacement, maxDisplacement) + prevDisplacement[j];
            let displacedRadius = radius + displacement;
            let x = midX + displacedRadius * cos(angle);
            let y = midY + displacedRadius * sin(angle);

            points.push({x, y});
            prevDisplacement[j] = displacement;
        }

        // add first two points at end of array to close shape
        points.push(points[0], points[1]);

        // draw curves
        drawCurve(points);
    }
}

function drawCurve(points) {
    beginShape();
    curveVertex(points[0].x, points[0].y); // extra point at beginning
    for (let point of points) {
        curveVertex(point.x, point.y);
    }
    endShape();
}

function pickStrokeColor() {
    let rand = random();
    if (rand > 0.66) {
        stroke(lineColor);
    } else {
        stroke(0, 0, 0);
    }
}