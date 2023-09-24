class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector();
  }

  update() {
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.5);
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(this.vel);
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x += width;
    } else if (this.pos.x >= width) {
      this.pos.x -= width;
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
    } else if (this.pos.y >= height) {
      this.pos.y -= height;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * rad);
  }
}
