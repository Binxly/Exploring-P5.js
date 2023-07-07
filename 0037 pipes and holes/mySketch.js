let points = [];
let colors = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"];

function setup() {
    createCanvas(1290, 1531);
    noLoop();
}

function draw() {
    background("#020506");
    points = []; 

    const gridSpacing = 125;
    const gridWidth = Math.floor(width / gridSpacing) * gridSpacing;
    const gridHeight = Math.floor(height / gridSpacing) * gridSpacing;
    const offsetX = (width - gridWidth) / 2 + gridSpacing / 2;
    const offsetY = (height - gridHeight) / 2 + gridSpacing / 2;

    for (let x = 0; x <= gridWidth; x += gridSpacing) {
        for (let y = 0; y <= gridHeight; y += gridSpacing) {
            drawCircleAndLine(x, y, gridSpacing, offsetX, offsetY);
        }
    }
    applyGrain();
}

function drawCircleAndLine(x, y, gridSpacing, offsetX, offsetY) {
    const colorChoice = random(colors);

    stroke(colorChoice);
    strokeWeight(5);
    noFill();
    circle(x + offsetX, y + offsetY, gridSpacing / 2);

    points.push({x: x + offsetX, y: y + offsetY, color: colorChoice});

    if (random([true, true, true, true, true, true, true, true, true, false])) {
        const direction = random(['up', 'down', 'left', 'right']);
        const [lineStartX, lineStartY, lineEndX, lineEndY] = lineOffset(x, y, direction, gridSpacing, offsetX, offsetY);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
    }
}

function lineOffset(x, y, direction, gridSpacing, offsetX, offsetY) {
    let lineStartX = x + offsetX;
    let lineStartY = y + offsetY;
    let lineEndX = x + offsetX;
    let lineEndY = y + offsetY;
    switch (direction) {
        case 'up':
            lineStartY += gridSpacing / 4;
            lineEndY -= gridSpacing / 4;
            break;
        case 'down':
            lineStartY -= gridSpacing / 4;
            lineEndY += gridSpacing / 4;
            break;
        case 'left':
            lineStartX += gridSpacing / 4;
            lineEndX -= gridSpacing / 4;
            break;
        case 'right':
            lineStartX -= gridSpacing / 4;
            lineEndX += gridSpacing / 4;
            break;
    }
    return [lineStartX, lineStartY, lineEndX, lineEndY];
}

function applyGrain() {
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
      let grain = random(-25, 25);
      pixels[i] = constrain(pixels[i] + grain, 0, 255);     // R
      pixels[i + 1] = constrain(pixels[i + 1] + grain, 0, 255); // G
      pixels[i + 2] = constrain(pixels[i + 2] + grain, 0, 255); // B
    }
    updatePixels();
  }
  