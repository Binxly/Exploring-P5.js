let img;
let imgPixels = [];

function preload() {
  img = loadImage("turtle.jpg");
}

function setup() {
  createCanvas(512, 512);
  img.resize(100, 100);
  noSmooth();

  img.loadPixels();

  // Convert image pixels to 2D array for faster access
  for (let x = 0; x < img.width; x++) {
    imgPixels[x] = [];
    for (let y = 0; y < img.height; y++) {
      imgPixels[x][y] = img.get(x, y);
    }
  }
}

function draw() {
  // Loop 100 times to speed up the animation.
  for (let i = 0; i < 100; i++) {
    sortPixels();
  }

  // Apply sorted pixels back to image
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      img.set(x, y, imgPixels[x][y]);
    }
  }

  img.updatePixels();

  image(img, 0, 0, width, height);
}

function sortPixels() {
  const x = floor(random(img.width));
  const y = floor(random(img.height - 1));

  const colorOne = imgPixels[x][y];
  const colorTwo = imgPixels[x][y + 1];

  const totalOne = red(colorOne) + green(colorOne) + blue(colorTwo);
  const totalTwo = red(colorTwo) + green(colorTwo) + blue(colorTwo);

  if (totalOne < totalTwo) {
    imgPixels[x][y] = colorTwo;
    imgPixels[x][y + 1] = colorOne;
  }
}



// Below is the code which inspired this sketch
// ref: https://happycoding.io/tutorials/p5js/images/pixel-sorter

// main changes are using 2D array to store pixels and applying them back to the image once per frame.
// no img.get() twice per pixel per frame.
// might try to mess with the sorting to see if I can get it to perform better, as well. go algorithmic.
// sometime in the future ofc.

////////////////////////////////////////////////////////////

// let img;

// function preload() {
//   img = loadImage("turtle.jpg");
// }

// function setup() {
//   createCanvas(768, 960);

//   // Resize the image so it fits on the screen.
//   // We make it 100x100 so we can see individual pixels.
//   img.resize(768, 960);

//   noSmooth();
// }

// function draw() {
//   img.loadPixels();

//   // Loop 100 times to speed up the animation.
//   for (let i = 0; i < 100; i++) {
//     sortPixels();
//   }

//   img.updatePixels();

//   image(img, 0, 0, width, height);
// }

// function sortPixels() {
//   // Get a random pixel.
//   const x = random(img.width);
//   const y = random(img.height - 1);

//   // Get the color of the pixel.
//   const colorOne = img.get(x, y);

//   // Get the color of the pixel below the first one.
//   const colorTwo = img.get(x, y + 1);

//   // Get the total R+G+B of both colors.
//   const totalOne = red(colorOne) + green(colorOne) + blue(colorTwo);
//   const totalTwo = red(colorTwo) + green(colorTwo) + blue(colorTwo);

//   // If the first total is less than the second total, swap the pixels.
//   // This causes darker colors to fall to the bottom,
//   // and light pixels to rise to the top.
//   if (totalOne < totalTwo) {
//     img.set(x, y, colorTwo);
//     img.set(x, y + 1, colorOne);
//   }
// }