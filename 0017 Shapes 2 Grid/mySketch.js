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

    fill(lineColor);
    strokeWeight(5);
    stroke(0, 0, 0);

    // horizontal lines, top to bottom
    line(0, quarterY, width, quarterY);
    line(0, midY, width, midY);
    line(0, midY + quarterY, width, midY + quarterY);

    // vertical lines, left to right
    line(quarterX, 0, quarterX, height);
    line(midX, 0, midX, height);
    line(midX + quarterX, 0, midX + quarterX, height);
  
    stroke(0, 0, 255);
    fill(0, 0, 255);

    // square in the first quadrant
    rect(quarterX / 2, quarterY / 2, quarterX, quarterY);

    // circle in the second quadrant
    circle(midX+quarterX, quarterY, quarterX);

    // triangle in the bottom left quadrant
    triangle(quarterX/2, midY+quarterY/2, quarterX / 2, midY + quarterY*1.5, quarterX*1.5, midY + quarterY*1.5);

    // diamond in the bottom right quadrant
    quad(midX+quarterX, midY + quarterY/2, midX+quarterX/2, midY + quarterY, midX + quarterX, midY + quarterY*1.5, midX + quarterX*1.5, midY + quarterY);
}