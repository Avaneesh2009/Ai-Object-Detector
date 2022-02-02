status1="";
value1="";



function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    value1= document.getElementById("object_name").value;
    console.log(value1);
}

function modelLoaded(){
    console.log("Model Loaded!🌈🌈");
    status1= true;
}