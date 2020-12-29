let puck;
let paddlePlayer1;
let paddlePlayer2;

let video;
let poseNet;
let pose;

function setup() {
    createCanvas(960, 640);
    background(0);

    video = createCapture(VIDEO);
    video.hide();
    video.size(960, 640);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

    puck = new Puck();
    paddlePlayer1 = new Paddle(true);
    paddlePlayer2 = new Paddle(false);

}


function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log("Model loaded");
}

function drawHands() {
    fill(0, 255, 0);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 10, 10);
    fill(255, 255, 0);
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 10, 10)
}

function drawScore() {
    textSize(25)
    text(paddlePlayer1.score, width / 2 - 100, 30)
    text(paddlePlayer2.score, width / 2 + 100, 30)
}

function modelLoading() {
    console.log("cannot ")
    fill(255);
    textSize(40)
    text("Model loading...", width / 2 - 150, height / 2)
}

function draw() {
    background(0);

    if (pose) {
        drawScore();
        drawHands();

        paddlePlayer1.show();
        paddlePlayer2.show();

        paddlePlayer1.update(pose.leftWrist.y);
        paddlePlayer2.update(pose.rightWrist.y)
        puck.checkPaddleLeft(paddlePlayer1);
        puck.checkPaddleRight(paddlePlayer2);

        puck.edges();
        puck.show();
        puck.update();
    } else {
        modelLoading();
    }

}