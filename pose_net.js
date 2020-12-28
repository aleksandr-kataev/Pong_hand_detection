let video;
let poseNet;
let pose;
let skeleton;

let brain;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

    networkOptions = {

    }

    brain = ml5.neuralNetwork();
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
        //pose.keypoints.forEach((point) => {
        //   let x = point.position.x;
        //    let y = point.position.y;
        //   fill(0, 255, 0);
        //   ellipse(x, y, 10, 10)
        //})

        //skeleton.forEach((point) => {
        //    let a = point[0];
        //    let b = point[1];
        //    strokeWeight(2);
        //    stroke(255, 0, 0);
        //    line(a.position.x, a.position.y, b.position.x, b.position.y);
        //})
        fill(0, 255, 0);
        ellipse(pose.leftWrist.x, pose.leftWrist.y, 10, 10)
        fill(255, 255, 0);
        ellipse(pose.rightWrist.x, pose.rightWrist.y, 10, 10)

        console.log(pose.leftWrist.y)

        if (pose.leftWrist.y > pose.leftShoulder.y) {
            stroke(255, 255, 0);
            //console.log("left hand is up")
        } else {
            stroke(255, 0, 0);
            //console.log("left hand is down")
        }
    }

}

//https://www.youtube.com/watch?v=3EMxBkqC4z0&t=3102s
// either a game like that you can controll with your hands 
// or a workout thing 
// plan a workout lets say 10 squats and train a network to recognised squats and count it 