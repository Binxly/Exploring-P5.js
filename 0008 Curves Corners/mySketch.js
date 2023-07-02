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

    noFill();
    strokeWeight(5);
    stroke(lineColor);
    // define control points
    let points = [
        {x: 350, y: 0},
        {x: 350, y: 350},
        {x: 700, y: 350},
        {x: 700, y: 350}
    ];

    // draw a curve in the top right corner
    bezier(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);

    // draw a curve in the bottom left corner
    bezier(points[0].y, points[0].x, points[1].y, points[1].x, points[2].y, points[2].x, points[3].y, points[3].x);
}


