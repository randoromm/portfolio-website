var scl = 20;
var snake;
var food;

function setup() {
  var cnv = createCanvas(scl * 25, scl * 25);
  cnv.parent('sketch-holder');

  snake = new Snake();
  food = new Food();
  frameRate(10);
}

function draw() {
  background(100);

  snake.eat(food);
  snake.move();
  food.draw();
  snake.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === 87) {
    snake.dir(0, -1);
  }
  else if (keyCode === DOWN_ARROW || keyCode === 83) {
    snake.dir(0, 1);
  }
  else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    snake.dir(1, 0);
  }
  else if (keyCode === LEFT_ARROW || keyCode === 65) {
    snake.dir(-1, 0);
  }
}

function rows() {
  return floor(height / scl);
}

function cols() {
  return floor(width / scl);
}

function randomVector() {
  var vec = createVector(floor(random(cols())), floor(random(rows())));
  return vec.mult(scl);
}
