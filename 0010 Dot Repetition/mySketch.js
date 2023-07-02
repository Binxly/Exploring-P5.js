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
    let y = height / 2;
    let numberOfDots = 75;
  
    strokeWeight(5);
    stroke(lineColor);
    
    for (let i = 0; i < numberOfDots; i++) {
        let x = map(i, 0, numberOfDots - 1, x1, x2);
        line(x, y, x, y);
    }
}

