let points = [];
let colors = ["#F7F0F5", "#DECBB7", "#8F857D", "#8D6346"]; // updated to soft and harmonious pastel colors
let bgColor = "#212121";  // updated to a dark grey

function setup() {
    createCanvas(1200, 1500);  // rescaled size
    noLoop();
}

function draw() {
    background(bgColor);
    points = []; 

    drawSquares();
    applyGrain();
}

function drawSquares() {
    let scaleFactor = 0.83333;  // new width divided by old width

    let squareSize1 = 1250 * scaleFactor;  
    let squareSize2 = squareSize1 - (50 * scaleFactor);  
    let squareSize3 = squareSize2 / 3; 

    let x1 = (width - squareSize1) / 2;
    let y1 = (height - squareSize1) / 2;

    let x2 = (width - squareSize2) / 2;
    let y2 = (height - squareSize2) / 2;

    let x3 = width / 2 - squareSize3 / 2;
    let y3 = height / 2 - squareSize3 / 2;

    fill(colors[0]);
    rect(x1, y1, squareSize1, squareSize1);  
    strokeWeight(10 * scaleFactor);  // increased stroke weight
    stroke(colors[1]);  // made the stroke color consistent with overall color scheme
    rect(x2, y2, squareSize2, squareSize2); 

    let cellSize = squareSize2 / 6;  

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            let x = x2 + i * cellSize;
            let y = y2 + j * cellSize;
            
            noStroke();
            fill(colors[i % colors.length]);  // cycle through the color array for a more vibrant look
            ellipse(x + cellSize / 2, y + cellSize / 2, cellSize / 3); // made the ellipses smaller for a more balanced look
        }
    }
    stroke(0, 0, 0 , 125);
    strokeWeight(3);
    fill("#8D6346");
    rect(x3, y3, squareSize3, squareSize3);
}

function applyGrain() {
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
      let grain = random(-10, 10);  // reduced the grain for a subtler effect
      pixels[i] = constrain(pixels[i] + grain, 0, 255);     
      pixels[i + 1] = constrain(pixels[i + 1] + grain, 0, 255); 
      pixels[i + 2] = constrain(pixels[i + 2] + grain, 0, 255);
    }
    updatePixels();
}
