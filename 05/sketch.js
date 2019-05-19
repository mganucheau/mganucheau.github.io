let timer = 1;
let noiseFactor = 0.003;

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch');
  background(255,20);
  stroke(225, 10);
  noFill();
}

function draw() {
  if (frameCount % 60 == 0 && timer > 0) {timer ++;}
  if (timer >= 25){
    clear();
    timer = 0;
    background(255,10);
  } 

  var x1 = width * noise(noiseFactor * frameCount, 15);
  var x2 = width * noise(noiseFactor * frameCount, 25);
  var x3 = width * noise(noiseFactor * frameCount, 35);
  var x4 = width * noise(noiseFactor * frameCount, 45);
  var y1 = height * noise(noiseFactor * frameCount, 55);
  var y2 = height * noise(noiseFactor * frameCount, 65);
  var y3 = height * noise(noiseFactor * frameCount, 75);
  var y4 = height * noise(noiseFactor * frameCount, 85);
  
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}