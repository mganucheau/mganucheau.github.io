let timer = 1;
let noiseY = .05;
let noiseX = .1;

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch');
  smooth();
  ellipseMode(CENTER);
}

function draw() {
  // background (255,10);
	translate(800,00); 
  rotate(radians(90));
  for (var i=0; i<width; i++) {
    stroke(255*noise((0.05*noiseY)*frameCount,i*(0.05*noiseX)));
    line(i,0,i,height);
  }

}
