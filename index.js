let puck;

function setup() {
    createCanvas(740, 500);
    background(0);
    puck = new Puck();
}

function draw() {
    background(0);
    puck.edges();
    puck.show();
    puck.update();
}