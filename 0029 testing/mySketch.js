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

	noLoop();
}

function draw() {
    // draw a straight line that is either horizontal or vertical and centered on the canvas
    stroke(lineColors)
    noFill();
    strokeWeight(5);
    // horizontal and vertical line
    
}
