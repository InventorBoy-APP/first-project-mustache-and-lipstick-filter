noseX=0;
noseY=0;


function tohome(){
    window.location="main_page.html"
}


function preload(){
lipstickfilter = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
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



function modelLoaded(){
    console.log("PoseNet Initialized");

}


function take_snapshot_two(){
    save("lipstickfilter.png");
}


function draw(){
    image(video,0 ,0, 300, 300);  
    image(lipstickfilter, noseX, noseY, 40, 40);  
}


function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-26;
        noseY=results[0].pose.nose.y-2;
        console.log("Lipstick X -- "+noseX);
        console.log("Lipstick Y -- "+noseY);
   
    }
   }


