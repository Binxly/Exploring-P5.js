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

    let numberOfLines = Math.floor(random(2,7));
    let spaceBetweenLines = (height - 2 * padding) / (numberOfLines - 1);
  
    strokeWeight(5);
    stroke(lineColor);
    
    for(let i = 0; i < numberOfLines; i++) {
        let y = padding + i * spaceBetweenLines;
        line(x1, y, x2, y);
    }
}
