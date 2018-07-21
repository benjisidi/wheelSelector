function ticker(x_, y_, wheelRadius_, c=[0, 0, 0]) {
  this.x = x_;
  this.y = y_;
  this.wheelRadius = wheelRadius_;
  this.fillColour = c;
}

// Ticker is an isoceles triangle with 75* angles and a height of 15% of the
// wheel radius.
ticker.prototype.show = function() {
  let tickerLength = this.wheelRadius*.15;
  let angle = radians(75);
  let pad = 10;
  point1x = this.x + this.wheelRadius - pad;
  point1y = this.y;
  point2x = this.x + this.wheelRadius + tickerLength;
  point2y = this.y - tickerLength/tan(angle);
  point3x = this.x + this.wheelRadius + tickerLength;
  point3y = this.y + tickerLength/tan(angle);
  fill(this.fillColour);
  triangle(point1x, point1y, point2x, point2y, point3x, point3y);
}
