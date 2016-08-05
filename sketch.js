  var Red = 255;
  var Green = 70;
  var Blue = 60;

function circle(x, y, radius){
  ellipse(x, y, radius, radius);
}
var value = 0;
function setup() {
  createCanvas(640, 640);
  
  background (0);
  var Red = 255;
  var Green = 160;
  var Blue = 50;
}

function draw() {

  noStroke();
 
}
function mouseMoved(){
 
  fill(Red, Green, Blue);
 circle (mouseX, mouseY, 10);
 Blue = Blue + 1;
 Green = Green - 1;
 Red = Red - 1;
 if (Blue == 255){
   Blue = 0;
 }
 if (Green === 0){
   Green = 255;
 }
 if (Red === 0){
   Red = 255;
 }
 
 
}

function keyTyped() {
  if (key === 'c') {
    background (0);
  } 

  // uncomment to prevent any default behavior
  // return false;
}

function mouseDragged() {

    fill (0);
   circle (mouseX, mouseY, 15);
}

