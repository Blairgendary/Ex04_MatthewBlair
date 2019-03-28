var x, y, z;
var deviceWidth;
var deviceHeight;

if (window.DeviceOrientationEvent) { 
    window.addEventListener("deviceorientation", handleOrientation);
} else { 
    alert("Sorry, your browser does NOT support device orientation");
}

deviceWidth = (window.innerWidth);
deviceHeight = (window.innerHeight);

function handleOrientation(event) { 
    z = event.alpha;
    x = event.beta;
    y = event.gamma;
    $("#alpha").html(z);
    $("#beta").html(x);
    $("#gamma").html(y);
}

function setup() { 
var cnv = createCanvas(displayWidth,displayHeight, WEBGL);
cnv.parent("myCanvas");
    
_text = createGraphics(200,200);
    
_text.fill(0);
_text.textAlign(CENTER);
_text.textSize(50);
_text.text('Seven',100,100);
    
boxSize = 120;
}

function draw() {
resizeCanvas(deviceWidth-16,deviceHeight-16, WEBGL);
background(0);
noStroke();

    
push();
fill(0,0,0);
pointLight(255,255,255,deviceWidth/2,deviceHeight,50);
ambientMaterial(250);
rotateX(x/7);
rotateY(y/7);
torus(boxSize+45,20);
pop(); 
    
push();
pointLight(255,255,255,deviceWidth/2,deviceHeight,50);
ambientMaterial(250);
fill(255,0,0);
rotateX(x/14);
rotateY(y/14);
torus(boxSize,20);
pop();
    
push();
pointLight(255,255,255,deviceWidth/2,deviceHeight,50);
ambientMaterial(250);
fill(0,255,0);
rotateX(x/21);
rotateY(y/21); 
torus(boxSize-42,18);
pop();
    
push();
pointLight(255,255,255,deviceWidth/2,deviceHeight,50);
ambientMaterial(250);
fill(0,0,255);
rotateX(x/28);
rotateY(y/28); 
torus(boxSize-84,15);
pop();
    
push();
pointLight(255,255,255,deviceWidth/2,deviceHeight,50);
ambientMaterial(250);
fill(255);
rotateX(x/35);
rotateY(y/35); 
sphere(boxSize-110);
text('p5.js', 0, 0);
pop();
    
fill(255);
texture(_text);
plane(200,200,1);
}
