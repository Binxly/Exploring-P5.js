// converted from Processing to p5.js

let img;
let grayscale = true;  // Convert image to grayscale
let levels = 1;  // Number of color levels

function preload() {
  img = loadImage("data\\turtle512.jpg");
}

function setup() {
  createCanvas(1024, 512);
}

function draw() {
  image(img, 0, 0);
  let ditheredImg = ditherImage(img.get());
  image(ditheredImg, 512, 0);
  noLoop();
}

function ditherImage(img) {
  img.loadPixels();

  if (grayscale) {
    for (let i = 0; i < img.pixels.length; i += 4) {
      let avg = (img.pixels[i] + img.pixels[i + 1] + img.pixels[i + 2]) / 3;
      img.pixels[i] = avg; // R
      img.pixels[i + 1] = avg; // G
      img.pixels[i + 2] = avg; // B
    }
  }

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let oldColor = getColorAt(img, x, y);
      let newColor = closestColor(oldColor);
      setColorAt(img, x, y, newColor);

      let error = p5.Vector.sub(oldColor, newColor);

      distributeError(img, x + 1, y, error, 7 / 16);
      distributeError(img, x - 1, y + 1, error, 3 / 16);
      distributeError(img, x, y + 1, error, 5 / 16);
      distributeError(img, x + 1, y + 1, error, 1 / 16);
    }
  }

  img.updatePixels();
  return img;
}

function getColorAt(img, x, y) {
  let idx = 4 * (x + y * img.width);
  return createVector(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2]);
}

function setColorAt(img, x, y, c) {
  let idx = 4 * (x + y * img.width);
  img.pixels[idx] = constrain(c.x, 0, 255);
  img.pixels[idx + 1] = constrain(c.y, 0, 255);
  img.pixels[idx + 2] = constrain(c.z, 0, 255);
}

function distributeError(img, x, y, error, factor) {
  if (x < 0 || x >= img.width || y < 0 || y >= img.height) return;
  let c = getColorAt(img, x, y);
  c.add(p5.Vector.mult(error, factor));
  setColorAt(img, x, y, c);
}

function closestColor(c) {
    let newR = round(levels * c.x / 255) * (255 / levels);
    let newG = round(levels * c.y / 255) * (255 / levels);
    let newB = round(levels * c.z / 255) * (255 / levels);
    return createVector(newR, newG, newB);
  }