let img;
let imgPixels = [];

function preload() {
  img = loadImage("turtle.jpg");
}

function setup() {
  createCanvas(800,800);
  noSmooth;
  img.resize(width,height);

  img.loadPixels();

  for (let x = 0; x < img.width; x++) {
    imgPixels[x] = [];
    for (let y = 0; y < img.height; y++) {
      imgPixels[x][y] = img.get(x, y);
    }
  }
}

function draw() {
  for (let i = 0; i < 100; i++) {
    swapPixels();
  }

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      img.set(x, y, imgPixels[x][y]);
    }
  }

  img.updatePixels();

  image(img, 0, 0, width, height);
}

function averagePixels() {
  const xOne = floor(random(img.width));
  const yOne = floor(random(img.height));
  const colorOne = imgPixels[xOne][yOne];

  const xTwo = floor(random(img.width));
  const yTwo = floor(random(img.height));
  const colorTwo = imgPixels[xTwo][yTwo];

  const averageColor = color(
    (red(colorOne) + red(colorTwo)) / 2,
    (green(colorOne) + green(colorTwo)) / 2,
    (blue(colorOne) + blue(colorTwo)) / 2
  );

  imgPixels[xOne][yOne] = averageColor;
  imgPixels[xTwo][yTwo] = averageColor;
}

function swapPixels() {
  const xOne = floor(random(img.width));
  const yOne = floor(random(img.height));
  const colorOne = imgPixels[xOne][yOne];

  const xTwo = floor(random(img.width));
  const yTwo = floor(random(img.height));
  const colorTwo = imgPixels[xTwo][yTwo];

  imgPixels[xOne][yOne] = colorTwo;
  imgPixels[xTwo][yTwo] = colorOne;
}


// Below is the code which inspired this sketch
// ref: https://happycoding.io/tutorials/p5js/images/pixel-swapper
//
// let img;

// function preload() {
//   img = loadImage('images/bee.jpg');
// }

// function setup() {
//   createCanvas(400, 400);
//   noSmooth();
//   img.resize(width, height);
// }

// function draw() {
//   img.loadPixels();
//   for (let i = 0; i < 100; i++) {
//     swapPixels();
//   }
//   img.updatePixels();

//   image(img, 0, 0, width, height);
// }

// function averagePixels() {
//   const xOne = random(img.width);
//   const yOne = random(img.height);
//   const colorOne = img.get(xOne, yOne);

//   // Uncomment to choose points closer together
//   // const xTwo = constrain(xOne + random(-20, 20), 0, img.width-1);
//   // const yTwo = constrain(yOne + random(-20, 20), 0, img.height-1);
//   const xTwo = random(img.width);
//   const yTwo = random(img.height);
//   const colorTwo = img.get(xTwo, yTwo);

//   const averageColor = color(
//     (red(colorOne) + red(colorTwo)) / 2,
//     (green(colorOne) + green(colorTwo)) / 2,
//     (blue(colorOne) + blue(colorTwo)) / 2
//   );

//   img.set(xOne, yOne, averageColor);
//   img.set(xTwo, yTwo, averageColor);
// }

// function swapPixels() {
//   const xOne = random(img.width);
//   const yOne = random(img.height);
//   const colorOne = img.get(xOne, yOne);

//   // Uncomment to choose points closer together
//   // const xTwo = constrain(xOne + random(-20, 20), 0, img.width-1);
//   // const yTwo = constrain(yOne + random(-20, 20), 0, img.height-1);
//   const xTwo = random(img.width);
//   const yTwo = random(img.height);
//   const colorTwo = img.get(xTwo, yTwo);

//   img.set(xOne, yOne, colorTwo);
//   img.set(xTwo, yTwo, colorOne);
// }