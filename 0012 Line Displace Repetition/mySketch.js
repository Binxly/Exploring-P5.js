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
    let padding = width;
    let x1 = padding;
    let numberOfSegments = 15; 
    let segmentWidth = (width - 2 * padding) / numberOfSegments;
    let numberOfLines = 2000;
    let yCoords = [];
    let prevDisplacement = Array(numberOfSegments+1).fill(0);
    
    noFill();
    strokeWeight(.1);
    stroke(lineColor);
    
    for(let i = 0; i < numberOfLines; i++) {
        yCoords = [];
        for(let j = 0; j <= numberOfSegments; j++) {
            let baseY = height / 2;
            let displacement = random(-5, 5) + prevDisplacement[j];
            yCoords.push(baseY + displacement);
            prevDisplacement[j] = displacement;
        }

        beginShape();
        for(let j = 0; j <= numberOfSegments; j++) {
            curveVertex(x1 + j * segmentWidth, yCoords[j]);
        }
        endShape();
    }
}
