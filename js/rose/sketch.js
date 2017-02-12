var sliderN, sliderD, sliderO;
var n, d, offset;
function setup() {
  var cnv = createCanvas(300, 300);
  sliderN = createSlider(1, 20, 2, 1);
  sliderD = createSlider(1, 20, 7, 1);
  sliderO = createSlider(0, 200, 0);
  cnv.parent('sketch-holder');
  sliderN.parent('sliderN');
  sliderD.parent('sliderD');
  sliderO.parent('sliderO');
}

function draw() {
  background(50);
  n = sliderN.value();
  d = sliderD.value();
  offset = sliderO.value();

  translate(width/2, height/2);
  stroke(80, 255, 0);
  noFill();
  drawRose();
}

function drawRose() {
  // "SOHCAHTOA"
  beginShape();
  for (var alpha = 0; alpha < TWO_PI * d; alpha += 0.1) {
    var r = 100 * cos(n / d * alpha) + offset;
    var x = cos(alpha) * r;
    var y = sin(alpha) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
