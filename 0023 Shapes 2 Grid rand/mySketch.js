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
    let midX = width / 2;
    let midY = height / 2;
    let quarterX = midX / 2;
    let quarterY = midY / 2;

    if (random() < 0.33) {
        gridOn();
    }
  
    stroke(0, 0, 0);
    strokeWeight(5);
    fill(lineColor);

    // square, diamond, or circle in the first quadrant
    if (random() < 0.33) {
        rect(quarterX / 2, quarterY / 2, quarterX, quarterY);
    } else if (random() < 0.5) {
        quad(quarterX, quarterY/2, quarterX/2, quarterY, quarterX, quarterY*1.5, quarterX*1.5, quarterY);
    } else {
        circle(quarterX, quarterY, quarterX);
    }

    // circle, triangle, or diamond randomly drawn in the second quadrant
    if (random() < 0.25) {
        triangle(midX+quarterX/2, quarterY/2, midX+quarterX/2, midY - quarterY/2, midX+quarterX*1.5, midY - quarterY/2);
    } else if (random() < 0.50) {
        quad(midX+quarterX, quarterY/2, midX+quarterX/2, quarterY, midX + quarterX, quarterY*1.5, midX + quarterX*1.5, quarterY);
    } else if (random() < 0.75) {
        circle(midX+quarterX, quarterY, quarterX);
    } else { 
        triangle(midX+quarterX/2, quarterY/2, midX+quarterX*1.5, quarterY/2, midX+quarterX*1.5, midY - quarterY/2);
    }

    // triangle, circle, or diamond randomly drawn in the third quadrant
    if (random() < 0.25) {
        triangle(quarterX/2, midY+quarterY/2, quarterX / 2, midY + quarterY*1.5, quarterX*1.5, midY + quarterY*1.5);
    } else if (random() < 0.50) {
        circle(quarterX, midY+quarterY, quarterX);
    } else if (random() < 0.75) {
        quad(quarterX/2, midY+quarterY/2, quarterX / 2, midY + quarterY*1.5, quarterX*1.5, midY + quarterY*1.5, quarterX*1.5, midY + quarterY/2);
    } else {
        triangle(quarterX/2, midY+quarterY/2, quarterX*1.5, midY + quarterY/2, quarterX*1.5, midY + quarterY*1.5);
    }

    //square, diamond, or circle randomly drawn in the fourth quadrant
    if (random() < 0.33) {
        rect(midX+quarterX / 2, midY + quarterY / 2, quarterX, quarterY);
    } else if (random() < 0.5) {
        quad(midX+quarterX, midY + quarterY/2, midX+quarterX/2, midY + quarterY, midX + quarterX, midY + quarterY*1.5, midX + quarterX*1.5, midY + quarterY);
    } else {
        circle(midX+quarterX, midY + quarterY, quarterX);
    }

}

function gridOn() {
    let midX = width / 2;
    let midY = height / 2;
    let quarterX = midX / 2;
    let quarterY = midY / 2;

    stroke(0, 0, 0);
    strokeWeight(5);
    fill(lineColor);

    // horizontal lines, top to bottom
    line(0, quarterY, width, quarterY);
    line(0, midY, width, midY);
    line(0, midY + quarterY, width, midY + quarterY);

    // vertical lines, left to right
    line(quarterX, 0, quarterX, height);
    line(midX, 0, midX, height);
    line(midX + quarterX, 0, midX + quarterX, height);
}