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
    let y1 = padding;
    let x2 = width / 3;
    let y2 = height - padding;
    let x3 = 2 * width / 3;
    let y3 = padding;
    let x4 = width - padding;
    let y4 = height - padding;

    noFill();
    strokeWeight(5);
    stroke(lineColor);

    // curve with four control points in a zigzag pattern
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    // lines between the control points and the start/end points
    strokeWeight(1);
    stroke(150); // grey
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x4, y4);

    // small circles at the control points
    fill(255, 0, 0);
    circle(x2, y2, 10);
    circle(x3, y3, 10);
}
