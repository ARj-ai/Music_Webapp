Jojo = "";
Harry = "";

function preload(){
    Jojo_theme = loadSound("Jojo's theme.mp3");
    HarryPotter_theme = loadSound("Harry Potter theme.mp3");
}

function setup(){
canvas =  createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0, 0, 600, 500);
}
