function preload() {
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses)


}

function modelLoaded() {
    console.log('PoseNet is Intialized');
}

function draw() {
    image(video,0,0,300,300);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function getPoses(results) {
    if (results.length > 0);
    {
        console.log(results);
        console.log("point x is="+results[0].pose.nose.x);
        console.log("point y is="+results[0].pose.nose.y);

    }

}