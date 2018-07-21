function spinWheel(xo, yo, r, sl, ts=12) {
  this.labels = [];
  this.x = xo;
  this.y = yo;
  this.radius = r;
  this.txtSize = ts;
  this.setN(sl); // Sets number of slices, and makes array of wheelSlice objects.
  this.ticker = new  ticker(this.x, this.y, this.radius);
  this.velocity = 0;
  this.angle = 0;
  this.current_segment = 0;
}

spinWheel.prototype.setN = function(n) {
  this.numSlices = n;
  this.slices = [];
  this.sliceWidth = 2*PI/this.numSlices;
  for (i=0; i<this.numSlices; i++) {
    this.slices.push(new wheelSlice(this.x, this.y, this.radius, i*this.sliceWidth,
                                    (i+1)*this.sliceWidth, "Segment " + (i+1), this.txtSize));
  }
}

spinWheel.prototype.show = function() {
  rotate(this.angle);
  for (slice in this.slices) {
    this.slices[slice].show();
  }
  for (slice in this.slices) {
      this.slices[slice].showText();
  }
  rotate(-this.angle);
  this.ticker.show();
  this.angle += this.velocity;
  this.angle = this.angle % (2*PI);
  this.velocity *= 0.99;
  if (this.velocity > 0 && this.velocity < 0.0005) {
    this.stoppedSpinning();
    this.velocity = 0;
  }
}

spinWheel.prototype.spin = function() {
  this.velocity = radians(random(6,50));
}

spinWheel.prototype.stoppedSpinning = function() {
  this.current_segment = floor(this.numSlices - (this.angle / this.sliceWidth));
  console.log(`Stopped spinning on segment ${this.current_segment + 1}.`);
}
