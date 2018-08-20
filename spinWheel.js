function spinWheel(xo, yo, r, sl, ts = 12) {
  this.labels = [];
  this.x = xo;
  this.y = yo;
  this.radius = r;
  this.txtSize = ts;
  this.setN(sl); // Sets number of slices, and makes array of wheelSlice objects.
  this.ticker = new ticker(this.x, this.y, this.radius);
  this.velocity = 0;
  this.angle = 0;
  this.current_segment = 0;
}

// Set the number of slcies to n and reset this.slices with the correct number
// of objects.
spinWheel.prototype.setN = function (n) {
  this.numSlices = n;
  this.slices = [];
  this.sliceWidth = 2 * PI / this.numSlices;
  for (i = 0; i < this.numSlices; i++) {
    this.slices.push(new wheelSlice(this.x, this.y, this.radius, i * this.sliceWidth,
      (i + 1) * this.sliceWidth, "Segment " + (i + 1), this.txtSize));
  }
}

// Draw the wheel slices, text and ticker, then increment the wheel's spin and
// stop it if necessary.
// -- Drawing components --
spinWheel.prototype.show = function () {
  rotate(this.angle);
  for (slice in this.slices) {
    this.slices[slice].show();
  }
  for (slice in this.slices) {
    this.slices[slice].showText();
  }
  rotate(-this.angle);
  this.ticker.show();
  // Increment angle
  this.angle += this.velocity;
  this.angle = this.angle % (2 * PI);
  // Simple velocity damping
  this.velocity *= 0.99;
  // Make sure the wheel's velocity is actually 0 when it is effectively stationary
  if (this.velocity > 0 && this.velocity < 0.0005) {
    this.stoppedSpinning();
    this.velocity = 0;
  }
}

// Give the wheel a random amount of spin velocity
spinWheel.prototype.spin = function () {
  this.velocity = radians(random(6, 50));
}

// Calculate which segment is under the ticker and dispaly it in the console
// ToDo: move this to a label
spinWheel.prototype.stoppedSpinning = function () {
  this.current_segment = floor(this.numSlices - (this.angle / this.sliceWidth));
  console.log(`Stopped spinning on segment ${this.current_segment + 1}.`);
}