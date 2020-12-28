class Paddle {
    constructor(left) {
        this.x = left === true ? 10 : width - 10;
        this.y = height / 2;
        this.w = 10;
        this.h = 80;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }

    update(y) {
        if (y > this.h / 2 && y < height - this.h / 2) {
            if (y < this.y - 10 || y > this.y + 10) {
                this.y = y;
            }
        }
    }
}