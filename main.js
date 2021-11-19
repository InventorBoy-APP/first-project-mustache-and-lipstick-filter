noseX=0;
noseY=0;



function gohome(){
    window.location="main_page.html"
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}


function take_snapshot(){
    save("mustachefilter.png");
}


function modelLoaded(){
    console.log("PoseNet Initialized");

}



function draw(){
    image(video,0 ,0, 300, 300);
    image(mustachefilter, noseX, noseY, 40, 40);  
    
}


function preload(){
    mustachefilter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}


function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-28;
        noseY=results[0].pose.nose.y-6;
        console.log("Mustache X -- "+noseX);
        console.log("Mustache Y -- "+noseY);
   
    }
   }