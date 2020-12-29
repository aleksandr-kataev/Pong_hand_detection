class Puck {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.radius = 10;
        this.xspeed = 0;
        this.yspeed = 0;
        this.reset();
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    edges() {
        if (this.y < this.radius / 2 || this.y > height - this.radius / 2) {
            this.yspeed *= -1;
        }

    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        let angle = random(-PI / 4, PI / 4);
        this.xspeed = 5 * Math.cos(angle);
        this.yspeed = 5 * Math.sin(angle);
        if (random(1) < 0.5) {
            this.xspeed *= -1;
        }
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }

    checkPaddleLeft(p) {
        if (this.x - this.radius < p.x + p.w / 2 && this.y > p.y - p.h / 2 && this.y < p.y + p.h / 2) {
            this.xspeed *= -1;
        }

        if (this.x > width) {
            p.score += 1;
            this.reset()
        }
    }
    checkPaddleRight(p) {
        if (this.x + this.radius > p.x - p.w / 2 && this.y > p.y - p.h / 2 && this.y < p.y + p.h / 2) {
            this.xspeed *= -1;
        }

        if (this.x < 0) {
            p.score += 1;
            this.reset()
        }
    }
}