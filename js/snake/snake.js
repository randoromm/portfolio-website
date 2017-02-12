function Snake() {
  this.x = floor(cols() / 2) * scl;
  this.y = floor(rows() / 2) * scl;
  this.xSpeed = 0;
  this.ySpeed = -1;
  this.score = 0;
  this.tail = [];

  this.dir = function(x, y) {
    // Avoid turning back into itself.
    if (x != 0 && this.xSpeed != x * -1 || y != 0 && this.ySpeed != y * -1) {
      this.xSpeed = x;
      this.ySpeed = y;
    }
  }

  this.eat = function(food) {
    if (this.x === food.x() && this.y === food.y()) {
      food.newLocation();
      this.score++;
      this.tail.push(createVector(this.x, this.y));
      console.log("Score: " + this.score);
    }
  }

  this.move = function() {
    // Move last square of tail to the front.
    if (this.tail.length > 0) {
      var lastOfTail = this.tail.pop();
      lastOfTail.x = this.x;
      lastOfTail.y = this.y;
      this.tail.unshift(lastOfTail);
    }

    // Move snake head.
    this.x += this.xSpeed * scl;
    this.y += this.ySpeed * scl;

    // Wrap bottom and right edge.
    this.x %= width;
    this.y %= height;

    // Wrap top and left edge.
    if (this.x < 0) {
      this.x = width - scl;
    }
    if (this.y < 0) {
      this.y = height - scl;
    }
  }

  this.draw = function() {
    fill(255, 167, 25);
    stroke(255, 144, 25);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}
