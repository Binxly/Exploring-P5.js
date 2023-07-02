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
    let padding = width / 15;
    let x1 = padding;
    let x2 = width - padding;
    let y1 = padding;
    let y2 = height - padding;
    
    fill(lineColor);
    strokeWeight(5);
    stroke(lineColor);

    if (random() > 0.5) {
        triangle(x1, y1, x1, y1 + (y2 - y1) / 2, x1 + (x2 - x1) / 2, y1);
    }
    else {
        triangle(x1, y1, x1, y1 + (y2 - y1) / 2, x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2);
    }
    
    if (random() > 0.5) {
        triangle(x2, y2, x2, y2 - (y2 - y1) / 2, x2 - (x2 - x1) / 2, y2);
    }
    else {
        triangle(x2, y2, x2, y2 - (y2 - y1) / 2, x2 - (x2 - x1) / 2, y2 - (y2 - y1) / 2);
    }


    if (random() > 0.5) {
        circle(525, 175, (x2 - x1) / 4);
    }else {
        square(450, 100, (x2 - x1) / 4);
    }

    if (random() > 0.5) {
        circle(200, 500, (x2 - x1) / 4);
    }else {
        square(125, 425, (x2 - x1) / 4);
    }
    
}