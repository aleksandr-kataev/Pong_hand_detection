class Puck {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.xspeed = random(2) > 1 ? random(-3, -2) : random(2, 3);
        this.yspeed = random(2) > 1 ? random(-2, -1.5) : random(1.5, 2);
    }

    update() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    edges() {
        if (this.y < 0 || this.y > height) {
            this.yspeed *= -1;
        }

        if (this.x > width) {
            //player1 scores
            this.reset()
        }

        if (this.x < 0) {
            //player2 scores
            this.reset();
        }
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.xspeed = random(2) > 1 ? random(-3, -1) : random(1, 3);
        this.yspeed = random(2) > 1 ? random(-3, -1) : random(1, 3);
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 24, 24);
    }
}