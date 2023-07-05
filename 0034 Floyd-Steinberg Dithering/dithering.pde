PImage turtle;

void setup() {
    size(1024,512);
    turtle = loadImage("turtle512.jpg");
    //turtle.filter(GRAY);
    image(turtle, 0, 0);
}

void draw() {
    turtle.loadPixels();

    for (int x = 0; x < turtle.width; x++) {
        for (int y = 0; y < turtle.height; y++) {
            int index = x + y * turtle.width;
            color pixel = turtle.pixels[index];
            
            float r = red(pixel);
            float g = green(pixel);
            float b = blue(pixel);

            int factor = 4;

            int newR = round(factor * r / 255) * (255/4);
            int newG = round(factor * g / 255) * (255/4);
            int newB = round(factor * b / 255) * (255/4);

            float errR = r - newR;
            float errG = g - newG;
            float errB = b - newB;

            turtle.pixels[index] = color(newR, newG, newB);
      }
    }
    turtle.updatePixels();
    image(turtle, 512, 0);
}