function Food() {
  this.vec = randomVector();

  this.x = function() {
    return this.vec.x;
  }

  this.y = function() {
    return this.vec.y;
  }

  this.draw = function() {
    fill(255, 229, 0);
    ellipseMode(CORNER);
    ellipse(this.x(), this.y(), scl, scl);
  }

  this.newLocation = function() {
    this.vec = randomVector();
  }
}
