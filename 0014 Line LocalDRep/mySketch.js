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
    let padding = width / 10;
    let x1 = padding;
    let numberOfSegments = 25;
    let segmentWidth = (width - 2 * padding) / numberOfSegments;
    let linesPerLine = 10;
    let numberOfLines = Math.floor(random(6,14));
    let spaceBetweenLines = (height - 2 * padding) / (numberOfLines - 1);
  
    noFill();
    strokeWeight(1);
    stroke(lineColor);

    let prevDisplacement = Array(numberOfLines).fill().map(() => Array(numberOfSegments + 1).fill(0)); // 2D array

    for(let i = 0; i < numberOfLines; i++) {
        let baseY = padding + i * spaceBetweenLines;
        
        for(let line = 0; line < linesPerLine; line++) {
            let yCoords = [];
            for(let j = 0; j <= numberOfSegments; j++) {
                let displacement = (random(-10, 10) + prevDisplacement[i][j]) * Math.pow((j / numberOfSegments), 0.5) * Math.pow((i / (numberOfLines - 1)), 0.5); // Increase displacement scaling
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