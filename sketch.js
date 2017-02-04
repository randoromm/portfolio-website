function setup() {
  var cnv = createCanvas(500, 500);
  cnv.parent('sketch-holder');
  background(112, 112, 112);
}

function draw() {
  ellipseMode(CENTER);
  rectMode(CENTER);

  // Body
  fill(255, 0, 100);
  stroke(0, 0, 0);
  rect(240, 145, 20, 100);

  // Head
  ellipse(240, 115, 60, 60);

  // Eyes
  fill(0, 255, 100);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  // Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}
