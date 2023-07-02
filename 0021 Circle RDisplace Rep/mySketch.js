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
    strokeWeight(4);
    let rand = random();
    if (rand > 0.66) {
        stroke(0, 0, 0);
    } else if (rand > 0.33) {
        stroke(255, 255, 255);
    } else {
        stroke(bgColor);
    }

    // horizontal lines, top to bottom
    line(0, quarterY, width, quarterY);
    line(0, midY, width, midY);
    line(0, midY + quarterY, width, midY + quarterY);

    // vertical lines, left to right
    line(quarterX, 0, quarterX, height);
    line(midX, 0, midX, height);
    line(midX + quarterX, 0, midX + quarterX, height);

    noFill();
    strokeWeight(.1);
    if (rand > 0.66) {
        stroke(lineColor);
    } else {
        stroke(0, 0, 0);
    }
    
    // number of segments and radius of circle
    let numSegments = 50;
    let radius = midX / 2;
    // array to hold points
    let points = [];

    // define maximum displacement
    let maxDisplacement = 3;

    let numberOfCircles = 500;
    let prevDisplacement = Array(numSegments+1).fill(0);

    for(let i = 0; i < numberOfCircles; i++) {
        points = [];
        // calculate points
        for (let j = 0; j <= numSegments; j++) {
            let angle = map(j, 0, numSegments, 0, TWO_PI);
            let displacement = random(-maxDisplacement, maxDisplacement) + prevDisplacement[j];
            let displacedRadius = radius + displacement;
            let x = midX + displacedRadius * cos(angle);
            let y = midY + displacedRadius * sin(angle);

            points.push({x, y});
            prevDisplacement[j] = displacement;
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
}