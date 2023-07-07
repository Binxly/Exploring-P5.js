/**
 * Made by Binx
 * Threads: @binx.ly
 * Twitter: @BinxNet
 * Instagram: @binx.ly
 *
 * Uses p5.grain:
 * {@link https://github.com/meezwhite/p5.grain}
 *
 * granulateFuzzify() function by meezwhite:
 * Twitter: @meezwhite
 * Website: https://meezwhite.xyz
 */

let points = [];
let colors = ['#030505', '#dc451a', '#5fa37b', '#d98808', '#10554d']; // updated to soft and harmonious pastel colors
let bgColor = "#030505";  // updated to a dark grey
let trColors = ["#F7F0F5", "#DECBB7", "#3E000C"];  // updated to soft and harmonious pastel colors

function setup() {
    createCanvas(1200, 1500);  // rescaled size
    noLoop();
}

function granulateFuzzify(amount, fuzziness, alpha) {
    amount = round(Number(amount));
    fuzziness = round(Number(fuzziness)) || 2;
    alpha = Boolean(alpha);
    const modN = (4 * width * pixelDensity()) + (4 * fuzziness);
    tinkerPixels((i) => {
        const iN = i + modN;
        if (pixels[iN]) {
            pixels[i] = round((pixels[i] + pixels[iN])/2);
            pixels[i+1] = round((pixels[i+1] + pixels[iN+1])/2);
            pixels[i+2] = round((pixels[i+2] + pixels[iN+2])/2);
            if (alpha) {
                pixels[i+3] = round((pixels[i+3] + pixels[iN+3])/2);
            }
        }
    });
    granulateChannels(amount, alpha);
}

function draw() {
    background(bgColor);
    points = []; 

    drawSquares();
    granulateFuzzify(10, 4, true);
    //applyGrain();
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

    let ranColor = random(colors);  // using random() to select a random color from the colors array
    
    fill('#421702');
    rect(x1, y1, squareSize1, squareSize1);  
    strokeWeight(10 * scaleFactor);  // increased stroke weight
    stroke('#0d1e27');  // made the stroke color consistent with overall color scheme
    rect(x2, y2, squareSize2, squareSize2); 

    let cellSize = squareSize2 / 6;  

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            let x = x2 + i * cellSize;
            let y = y2 + j * cellSize;
            
            stroke(0, 0, 0, 125);  // made the stroke color consistent with overall color scheme
            strokeWeight(5);
            fill(random(colors));  // using random() to select a random color from the colors array
            ellipse(x + cellSize / 2, y + cellSize / 2, cellSize / 3); // made the ellipses smaller for a more balanced look
        }
    }
    stroke(0, 0, 0 , 125);
    strokeWeight(4);
    fill(random(colors));

    rect(x3, y3, squareSize3, squareSize3);
    let cCellSize = squareSize3 / 3;

    let trColor = random(colors);
    for (let i2 = 0; i2 < 3; i2++) {
        for (let j2 = 0; j2 < 3; j2++) {
    
            let x = x3 + i2 * cCellSize;
            let y = y3 + j2 * cCellSize;
            

            stroke(random(colors));
            strokeWeight(0.01)
            fill(trColor);  // using random() to select a random color from the trColors array
            triangle(x, y, x + cCellSize, y, x + cCellSize / 2, y + cCellSize / 2);  // top triangle
            
            fill(trColor);
            triangle(x, y + cCellSize, x + cCellSize, y + cCellSize, x + cCellSize / 2, y + cCellSize / 2);  // bottom triangle
        }
    }
    
}

// function applyGrain() {
//     loadPixels();
//     for (let i = 0; i < pixels.length; i += 4) {
//       let grain = random(-10, 10);  // reduced the grain for a subtler effect
//       pixels[i] = constrain(pixels[i] + grain, 0, 255);     
//       pixels[i + 1] = constrain(pixels[i + 1] + grain, 0, 255); 
//       pixels[i + 2] = constrain(pixels[i + 2] + grain, 0, 255);
//     }
//     updatePixels();
// }
