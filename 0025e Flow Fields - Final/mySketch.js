    /////////////////////////////////////////////////
   // Inspired by: Code Train 24                  //
  // Perlin Noise Flow Field                     //
 // https://www.youtube.com/watch?v=BjoM9oKOAKY //
/////////////////////////////////////////////////

// Note: lots of comments. kinda crammed for a couple hours, so I wanted to make sure I could understand it later

let inc = 0.1; // increment for noise = speed of flow field
let scl = 20; // size of each square of grid in pixels
let cols, rows;
let zoff = 0;
let fr;
let particles = [];
let flowfield;
let hueValue;

function setup() {
    createCanvas(1024, 1280);
    
    // columns and rows based on the scale
    cols = floor(width / scl);
    rows = floor(height / scl);
    
    fr = createP('');
    flowfield = new Array(cols * rows);

    // array of particles. length = number of particles.
    particles = Array.from({ length: 20000 }, () => new Particle());

    setHueValue();
    colorMode(RGB, 255, 255, 255); // mode back to RGB

    background(0);
    // Stop the animation after 20 seconds.
    setTimeout(noLoop, 20000);
}

function setHueValue() {
    // switching the color mode to HSL
    colorMode(HSL, 360, 100, 100);

    // 10% chance of white, 90% chance of random color
    if (random() < 0.1) {
        hueValue = [0, 0, 100];  // HSL for white
    } else {
        hueValue = [floor(random() * 360), 100, 50];  // Random hue
    }
}

function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            const index = x + y * cols;
            const angle = noise(xoff, yoff, zoff) * TWO_PI * 1.2; // * # -> higher, more variance. lower, less variation, more straight lines.
            const v = p5.Vector.fromAngle(angle);
            v.setMag(1); // higher faster, lower slower. changes how fast particles move across vectors by changing the magnitude (length) of the vectors)
            flowfield[index] = v;
            xoff += inc;
            // Optional flow field vector lines rendering code commented
        }
        yoff += inc;
        zoff += 0.0003; // 0.0003 = faster, 0.0001 = slower (default is 0.0003, changes how fast the flow field vectors move (change direction) across the screen)
    }

    particles.forEach(particle => {
        particle.follow(flowfield);
        particle.update();
        particle.edges();
        particle.show();
    });

    fr.html(floor(frameRate())); // display frame rate
}

function keyPressed() {
    if (keyCode === 32) saveCanvas('myCanvas', 'png'); // press spacebar to save canvas as png
}