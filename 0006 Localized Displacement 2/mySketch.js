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
    let numberOfLines = Math.floor(random(3,7));
    let numberOfSegments = 50; 
    let spaceBetweenLines = (height - 2 * padding) / (numberOfLines - 1);
    let segmentWidth = (width - 2 * padding) / numberOfSegments;
    
    strokeWeight(2);

    stroke(lineColor);
    
    for(let i = 0; i < numberOfLines; i++) {
        let yCoords = [];
        for(let j = 0; j <= numberOfSegments; j++) {
            let baseY = padding + i * spaceBetweenLines;
            let displacement = random(-50, 50);
            // Scaling the displacement based on the position of the segment along the line
            displacement *= (j / numberOfSegments);
            // scaling the displacement based on the line's position from top to bottom
            displacement *= (i / (numberOfLines - 1));
            yCoords.push(baseY + displacement);
        }
        // Drawing the line segment by segment using the yCoords array as a reference 
        for(let j = 0; j < numberOfSegments; j++) {
            line(x1 + j * segmentWidth, yCoords[j], x1 + (j+1) * segmentWidth, yCoords[j+1]);
        }
    }
}