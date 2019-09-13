var timer = 1;
var state = 1;
var fade = 255;


function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch');
  smooth();
  ellipseMode(CENTER);
}

function draw() {
  // if (frameCount % 60 == 0 && timer > 0) {timer ++;}
    stroke(255,2);
    strokeWeight(1);
    noFill();
    push();
    translate(width/2,height/2);
    rotate(map(sin(frameCount),-1, 1, 0, TWO_PI));
    ellipse(0,0,600,random(600));
    pop();
    timer ++;


    // fill(170,162,172);
    // // ellipse(300,300,600,600);
    
    // if (state == 1){
      // background(255,1);

      // fade = fade - 1;
      // noStroke();
      // fill(170,162,172, fade);
      // ellipse(300,300,600,600);
    // }



}
