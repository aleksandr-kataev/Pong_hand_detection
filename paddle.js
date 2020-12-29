class Paddle {
    constructor(left) {
        this.gap = 10;
        this.x = left === true ? this.gap : width - this.gap;
        this.y = height / 2;
        this.w = 10;
        this.h = 200;
        this.vel = 10;
        this.score = 0;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }

    update(y) {
        //console.log(this.y);
        if (y > this.h / 2 - this.gap && y < height - this.h / 2 + this.gap) {
            if (y < this.y - 10 || y > this.y + 10) {
                if (y < this.y) {
                    this.y -= this.vel;
                } else if (y > this.y) {
                    this.y += this.vel;
                }
            }
        }
    }
}