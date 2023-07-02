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

    fill(lineColor);
    strokeWeight(5);
    stroke(0, 0, 0);

    // number of segments and radius of circle
    let numSegments = 50;
    let radius = midX / 2;
    // array to hold points
    let points = [];

    // define maximum displacement
    let maxDisplacement = 15;

    // calculate points
    for (let i = 0; i <= numSegments; i++) {
        let angle = map(i, 0, numSegments, 0, TWO_PI);
        let x = midX + radius * cos(angle) + random(-maxDisplacement, maxDisplacement);
        let y = midY + radius * sin(angle) + random(-maxDisplacement, maxDisplacement);

        points.push({x, y});
    }

    // add first two points at end of array to close shape
    points.push(points[0]);
    points.push(points[1]);

    // draw curves
    beginShape();
    curveVertex(points[0].x, points[0].y); // extra point at beginning
    for (let point of points) {
        curveVertex(point.x, point.y);
    }
    endShape();
}
