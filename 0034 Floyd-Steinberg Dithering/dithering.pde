// inspired by The Coding Train: Coding Challenge #90 , Floyd-Steinberg Dithering
// https://www.youtube.com/watch?v=0L2n8Tg2FwI
////////////////////////////////////////////////////////////////////////////////
// cleaned up for simplicity and converted to p5.js in the occompanying .js file

PImage turtle;

void setup() {
  size(1024, 512);
  turtle = loadImage("turtle512.jpg");
  turtle.greyscale(); // sets greyscale, uncomment for color
  image(turtle, 0, 0);
}

int pixelIndex(int x, int y) {
  return x + y * turtle.width;
}

void distributeError(int x, int y, float errR, float errG, float errB, float factor) {
  int index = pixelIndex(x, y);
  color currentColor = turtle.pixels[index];
  float r = red(currentColor) + errR * factor;
  float g = green(currentColor) + errG * factor;
  float b = blue(currentColor) + errB * factor;
  turtle.pixels[index] = color(r, g, b);
}

void draw() {
  turtle.loadPixels();

  for (int y = 0; y < turtle.height - 1; y++) {
    for (int x = 1; x < turtle.width - 1; x++) {
      color pixel = turtle.pixels[pixelIndex(x, y)];

      float oldR = red(pixel);
      float oldG = green(pixel);
      float oldB = blue(pixel);

      int factor = 1;
      int newR = round(factor * oldR / 255) * (255 / factor);
      int newG = round(factor * oldG / 255) * (255 / factor);
      int newB = round(factor * oldB / 255) * (255 / factor);

      turtle.pixels[pixelIndex(x, y)] = color(newR, newG, newB);

      float errR = oldR - newR;
      float errG = oldG - newG;
      float errB = oldB - newB;

      distributeError(x + 1, y, errR, errG, errB, 7 / 16.0);
      distributeError(x - 1, y + 1, errR, errG, errB, 3 / 16.0);
      distributeError(x, y + 1, errR, errG, errB, 5 / 16.0);
      distributeError(x + 1, y + 1, errR, errG, errB, 1 / 16.0);
    }
  }

  turtle.updatePixels();
  image(turtle, 512, 0);
}
