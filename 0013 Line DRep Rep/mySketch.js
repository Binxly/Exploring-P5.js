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
    let numberOfSegments = 25;
    let segmentWidth = (width - 2 * padding) / numberOfSegments;
    let linesPerLine = 2000;
    let numberOfLines = Math.floor(random(2,7));
    let spaceBetweenLines = (height - 2 * padding) / (numberOfLines - 1);
  
    noFill();
    strokeWeight(.05);
    stroke(lineColor);

    let prevDisplacement = Array(numberOfLines).fill().map(() => Array(numberOfSegments + 1).fill(0)); // 2D array

    for(let i = 0; i < numberOfLines; i++) {
        let baseY = padding + i * spaceBetweenLines;
        
        for(let line = 0; line < linesPerLine; line++) { // multi lines
            let yCoords = [];
            for(let j = 0; j <= numberOfSegments; j++) {
                let displacement = random(-1, 1) + prevDisplacement[i][j]; // displacement of previous line on the same y coordinate
                yCoords.push(baseY + displacement);
                prevDisplacement[i][j] = displacement;
            }
    
            beginShape();
            for(let j = 0; j <= numberOfSegments; j++) {
                curveVertex(x1 + j * segmentWidth, yCoords[j]);
            }
            endShape();
        }
    }
}

