// Code Train 24 - Perlin Noise Flow Field
// https://www.youtube.com/watch?v=BjoM9oKOAKY

var inc = 0.1
var scl = 20;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
    createCanvas(512, 512);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');

    flowfield = new Array(cols * rows);

    for (var i = 0; i < 200; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    background(255);
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(5);
            flowfield[index] = v;
            xoff += inc;
            stroke(0, 50);
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            strokeWeight(1);
            line(0, 0, scl, 0);

            pop();
        }
        
        yoff += inc;
        zoff += 0.0003;
        }

        for (var i = 0; i < particles.length; i++) {
            particles[i].follow(flowfield);
            particles[i].update();
            particles[i].show();
            particles[i].edges();
        }
        

        fr.html(floor(frameRate()));
    }