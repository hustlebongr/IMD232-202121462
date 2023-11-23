class StateTile {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = true;
  }

  isHover(mx, my) {
    return (
      mx >= this.x &&
      mx < this.x + this.w &&
      my >= this.y &&
      my < this.y + this.h
    );
  }

  changeState(mx, my) {
    if (!this.isHover(mx, my)) return false;
    this.state = !this.state;
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);

    // // 방법1
    // if (this.state) {
    //   fill(64);
    // } else {
    //   fill(255);
    // }

    // // 방법2
    // let fillColor;
    // if (this.state) {
    //   fillColor = 64;
    // } else {
    //   fillColor = 255;
    // }
    // fill(fillColor);

    // // 방법3
    // const fillColor = this.state ? 64 : 255;
    // fill(fillColor);

    // 방법4
    fill(this.state ? 64 : 255);

    strokeWeight(this.isHover(mx, my) ? 4 : 1);
    stroke(this.isHover(mx, my) ? 'red' : 'black');

    rect(0, 0, this.w, this.h);
    pop();
  }
}
