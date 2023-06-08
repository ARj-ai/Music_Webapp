Jojo = "";
Harry = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;


function preload(){
    Jojo_theme = loadSound("Jojo's theme.mp3");
    HarryPotter_theme = loadSound("Harry Potter theme.mp3");
}

function setup(){
canvas =  createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', got_poses);
}

function draw(){
image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
   
 if(results.length > 0){
   console.log(results);
   
   rightWristX = results[0].pose.rightWrist.x;
   rightWristY = results[0].pose.rightWrist.y;
   console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
   
   leftWristX = results[0].pose.leftWrist.x;
   leftWristY = results[0].pose.leftWrist.y;
   console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
  }
}