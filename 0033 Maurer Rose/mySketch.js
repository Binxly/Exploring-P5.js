//https://en.wikipedia.org/wiki/Maurer_rose
//https://www.youtube.com/watch?v=4uU9lZ-HSqA - Maurer Rose

let n = 2;
let d = 29;
let dSlider;

function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
    //dSlider = createSlider(1, 180, 1);
	
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    stroke(255);

    //d = dSlider.value();

    noFill();
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < 361; i++) {
        let k = i * d;
        let r = 300 * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x,y);
    }
    endShape(CLOSE);

    noFill();
    stroke(255,0,0, 100);
    strokeWeight(4);
    beginShape();
    for (let i = 0; i < 361; i++) {
        let k = i;
        let r = 300 * sin(n*k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x,y);
    }
    endShape(CLOSE);
    
    // n += 0.001;
    // d += 0.0118333333;
    // if (n > 6) {
    //     n = 6;
    // }
    // if (d > 71) {
    //     d = 71;
    // }
}