function circle(x, y, radius){
  ellipse(x, y, radius, radius);
}
var value = 0;
function setup() {
  createCanvas(640, 640);
  background (0);
}

function draw() {
 
  noStroke();

 fill (255, (value -155), (value +155));
 circle (50, 50, 60);
 fill (255, 255, 255);
 circle (50, 50, 30);
 fill (255, (value+160), (value-160));
 circle (50, 50, 10);
 


 
}
function mousePressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}
function mouseMoved(){
 
  fill(255, 160, 160, 50);
 circle (mouseX, mouseY, 10);
}