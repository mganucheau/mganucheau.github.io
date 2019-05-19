let timer = 1;
let speed = 5;
let n = 60;
let rad = 0;
let t=1;
let numgenerations = [];
let angle = [];
let max_xmargin = [];
let max_ymargin = [];
let prev = [];
let pos = [];

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch');
  smooth();

  background(0,0);
  for (var i = 0; i < n; i++) {
    angle.push(map(i, 0, n, 0, TWO_PI));
    numgenerations.push(int(random(3200, 7800)));    
    max_xmargin.push(random(120, 240));
    max_ymargin.push(random(120, 240));
    pos.push(createVector(0, 0));
    prev.push(createVector(0, 0));
  }
}

function draw() {
  if (frameCount % 60 == 0 && timer > 0) {timer ++;}

  // if (timer >= 5){
  // } 


  translate(width/2, height/2);


  for (var i = 0; i < n; i++) {
    for (var s = 0; s < speed; s++) {
      t = map(speed * frameCount + s, 0, numgenerations[i], 0, 1);
      if (t > 1.0) continue; 
      rad = lerp(0, 400, t);
      pos[i].x = rad * cos(angle[i]) + lerp(0, max_xmargin[i], t) * (noise(15*i+0.001*(frameCount*speed+s)) - 0.5);
      pos[i].y = rad * sin(angle[i]) + lerp(0, max_ymargin[i], t) * (noise(25*i+0.001*(frameCount*speed+s)) - 0.5);
      // stroke(220, lerp(4, 2, t));    
      stroke(200, 2);      
  
      strokeWeight(lerp(10, 0, t));
      // stroke(200, lerp(20, 0, t));      
      strokeWeight(lerp(15, 0, t));
      line(prev[i].x, prev[i].y, pos[i].x, pos[i].y);
      prev[i].x = pos[i].x;
      prev[i].y = pos[i].y;
    }
  }
//   ellipseMode(CENTER); // Set ellipseMode to CENTER
// fill(0,1); // Set fill to gray
// ellipse(0, 0, 50, 50); // Draw gray ellipse using CENTER mode


  
}

