let noiseY = .001;
let noiseX =  .015;

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch');
  // smooth();
  ellipseMode(CENTER);
}

function draw() {
	translate(800,00); 
  rotate(radians(90));
  for (var i=0; i<800; i++) {
    stroke(255*noise((noiseY)*(frameCount),i*(noiseX)));
    line(i,0,i,height);
  }
  // filter(BLUR, 1);
  frameRate(30);

}
