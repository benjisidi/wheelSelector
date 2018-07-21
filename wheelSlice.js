function wheelSlice(xo, yo, rad, startA, endA, l = "", ts = 12, c = [255, 255, 255], tc = [0, 0, 0]) {
  this.x = xo;
  this.y = yo;
  this.radius = rad;
  this.startAngle = startA;
  this.endAngle = endA;
  this.label = l;
  this.colour = c;
  this.textcolour = tc;
  this.txtSize = ts;
  // We want to place the text 50% of the radius out.
  this.txtPos = this.radius * .4;
}

// Draws slice in appropiate location and colour
wheelSlice.prototype.show = function () {
  fill(this.colour);
  arc(this.x, this.y, this.radius, this.radius, this.startAngle, this.endAngle, PIE);
}

// Draws text in appropiate location and colour
wheelSlice.prototype.showText = function () {
  fill(this.textcolour);
  // We want to center the text vertically
  // The vertical space we have available is the length of the chord
  let sliceAngle = this.endAngle - this.startAngle;
  let chord = 2 * this.txtPos * sin(sliceAngle / 2);
  if (this.txtSize > chord) {
    this.txtSize = chord;
  }

  // Now we adjust the text size till we can fit the label in the box
  let oldTextSize = textSize();
  textSize(this.txtSize);
  while (textWidth(this.label) + 10 > this.radius - this.txtPos) {
    this.txtSize -= 1;
    textSize(this.txtSize);
  }

  // This finds the placement of the BL corner of the text
  let textX = this.x + this.txtPos * cos(this.endAngle);
  let textY = this.y + this.txtPos * sin(this.endAngle);

  // We have to deal with the special case of only 2 segments
  if (this.startAngle == PI && sliceAngle == PI) {
    textY = -this.txtPos / 2;
  }
  if (this.startAngle == 0 && sliceAngle == PI) {
    textY = this.txtPos / 2;
  }

  // Set text size, translate origin to BL of text, rotate, draw text
  translate(textX, textY);
  rotate(this.startAngle + sliceAngle / 2);
  textAlign(CENTER, CENTER);
  noStroke();
  text(this.label, 0, -chord, this.radius - this.txtPos, chord);

  // // Debug: Draw the text box
  // noFill();
  // stroke(200, 200, 200);
  // rect(0, -chord,  this.radius - this.txtPos, chord);

  // Undo text size, translation, rotation
  rotate(-(this.startAngle + sliceAngle / 2));
  translate(-textX, -textY);
  textSize(oldTextSize);
}