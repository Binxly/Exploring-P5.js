    /////////////////////////////////////////////////
   // Inspired by: Code Train 24                  //
  // Perlin Noise Flow Field                     //
 // https://www.youtube.com/watch?v=BjoM9oKOAKY //
/////////////////////////////////////////////////

// Note: lots of comments. kinda crammed for a couple hours, so I wanted to make sure I could understand it later

let inc = 0.1;
let scl = 20;
let cols, rows;
let zoff = 0;
let fr;
let particles = [];
let flowfield;
let hueValue;

function setup() {
    createCanvas(1024, 1280);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');

    flowfield = new Array(cols * rows);
    particles = Array.from({ length: 15000 }, () => new Particle()); // length = number of particles

    colorMode(HSL, 360, 100, 100);
    hueValue = floor(random() * 360); //randomize hue value
    colorMode(RGB, 255, 255, 255);

    background(0); // black background
    setTimeout(() => noLoop(), 20000); // how long to wait before pausing animation, in milliseconds (20000 = 20 seconds)
}

function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            const index = x + y * cols;
            const angle = noise(xoff, yoff, zoff) * TWO_PI * 3; // * 2 = more variation. 1 = less variation, more straight lines.
            const v = p5.Vector.fromAngle(angle);
            v.setMag(1); // 0.8 = faster, 0.2 = slower (default is 1, changes how fast particles move across vectors by changing the magnitude (length) of the vectors)
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