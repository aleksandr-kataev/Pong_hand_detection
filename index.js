let puck;
let paddlePlayer1;
let paddlePlayer2;

let video;
let poseNet;
let pose;
let skeleton

function setup() {
    let canvas = createCanvas(960, 640);
    background(0);
    canvas.center('horizontal');

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


function drawScore() {
    fill(255, 255, 255);
    textSize(25)
    text(paddlePlayer1.score, width / 2 - 100, 30)
    text(paddlePlayer2.score, width / 2 + 100, 30)
}

function modelLoading() {
    fill(255);
    textSize(40)
    text("Model loading...", width / 2 - 150, height / 2)
}


function drawArms() {
    for (let i = 0; i < skeleton.length; i++) {
        let a = skeleton[i][0];
        let b = skeleton[i][1];
        strokeWeight(2);
        stroke(255);
        line(width - a.position.x, a.position.y, width - b.position.x, b.position.y);
    }
    fill(0, 255, 0);
    ellipse(width - pose.leftWrist.x, pose.leftWrist.y, 16, 16)
    ellipse(width - pose.rightWrist.x, pose.rightWrist.y, 16, 16)
}

function draw() {
    background(0);

    if (pose) {

        drawArms();
        drawScore();

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