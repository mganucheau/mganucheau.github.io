let timer = 1;

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch');
  smooth();
  ellipseMode(CENTER);
}

function draw() {
  if (frameCount % 60 == 0 && timer > 0) {timer ++;}

  // wait to draw
  // if (timer <= 1){
  // } else {
    stroke(255,15);
    noFill();
    push();
    translate(width/2,height/2);
    rotate(map(sin(0.001*frameCount),-1, 1, 0, TWO_PI));
    ellipse(0,0,800,random(1080));
    pop();
  // }

  if (timer >= 60){
    setup();
    timer = 1;
  }



  
}
