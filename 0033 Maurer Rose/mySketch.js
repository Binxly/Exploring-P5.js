//https://en.wikipedia.org/wiki/Maurer_rose
//https://www.youtube.com/watch?v=4uU9lZ-HSqA - Maurer Rose

let n = 6;
let d = 71;

function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
	background(0);
	
}

function draw() {
    translate(width / 2, height / 2);
    stroke(255);

    noFill();
    beginShape();
    for (let i = 0; i < 361; i++) {
        let k = i*d;
        let r = 300 * sin(n*k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x,y);
    }
    endShape(CLOSE);
}