function Particle() {
    this.pos = createVector(random(width), random(height)); // choose a random position for the particle
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxspeed = 4; // max speed of the particles
    this.prevPos = this.pos.copy();

    // Random color assignment code was broken, so nevermind not keeping that
    // plus it's not really necessary for this, and probably causes issues i'm too dumb to understand
    // is what it is 乁( ◔ ౪◔)ㄏ

    // add the acceleration to the velocity, limit the velocity to the maxspeed, add the velocity to the position, and reset the acceleration to zero
    this.update = () => {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    // get the force vector at the particle's position and apply it to the particle
    this.follow = (vectors) => {
        const x = floor(this.pos.x / scl);
        const y = floor(this.pos.y / scl);
        const index = x + y * cols;
        const force = vectors[index];
        this.applyForce(force);
    }

    // adding force to acceleration
    this.applyForce = (force) => this.acc.add(force);

    // draw the particle, a line from the previous position to the current position, and update the previous position to the current position
    this.show = () => {
        colorMode(HSL, 360, 100, 100);
        stroke(...hueValue, 0.05); // Use spread operator to unpack hueValue array
        strokeWeight(0.2);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        colorMode(RGB, 255, 255, 255);
        this.updatePrev();
    }

    // update the previous position to the current position
    this.updatePrev = () => {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    // wrap the particle around the screen if it goes off the edge
    this.edges = () => {
        if (this.pos.x > width || this.pos.x < 0) {
            this.pos.x = (this.pos.x > width) ? 0 : width;
            this.updatePrev();
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.pos.y = (this.pos.y > height) ? 0 : height;
            this.updatePrev();
        }
    }
}