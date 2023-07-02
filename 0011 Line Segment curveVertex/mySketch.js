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
    let padding = width / 5;
    let x1 = padding;
    let x2 = width - padding;
    let numberOfSegments = 15; 
    let segmentWidth = (width - 2 * padding) / numberOfSegments;
    
    noFill();
    strokeWeight(5);
    stroke(lineColor);
    
    let yCoords = [];
    
    for(let j = 0; j <= numberOfSegments; j++) {
        let baseY = height / 2;
        let displacement = random(-20, 20);
        yCoords.push(baseY + displacement);
    }
    
    beginShape();
    for(let j = 0; j <= numberOfSegments; j++) {
        curveVertex(x1 + j * segmentWidth, yCoords[j]);
    }
    endShape();
}