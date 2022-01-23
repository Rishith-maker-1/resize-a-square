noseX=0;
noseY=0;
leftwX=0;
rightwX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#08c284');
    document.getElementById("status").innerHTML="width and height of a square will be = "+difference+" px";
    fill('#3a8da6');
    stroke('White');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('posenet is initialised');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX+" nose y = "+noseY);
        leftwX=results[0].pose.leftWrist.x;
        rightwX=results[0].pose.rightWrist.x;
        difference=floor(leftwX-rightwX);
        console.log("left wrist x = "+leftwX+" right wrist x = "+rightwX+" difference = "+difference);
    }
}