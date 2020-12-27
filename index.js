let video;
let poseNet;
let pose;
let skeleton;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
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

function draw() {
    image(video, 0, 0)
    if (pose) {
        fill(255, 0, 0)
        pose.keypoints.forEach((point) => {
            let x = point.position.x;
            let y = point.position.y;
            fill(0, 255, 0);
            ellipse(x, y, 10, 10)
        })

        skeleton.forEach((point) => {
            let a = point[0];
            let b = point[1];
            strokeWeight(2);
            stroke(255, 0, 0);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        })
    }

}