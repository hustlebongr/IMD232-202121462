class MatterRect {
  constructor(x, y, w, h, options) {
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, this.w, this.h, options);
    Composite.add(matterEngine.world, this.body);
  }

  display() {
    beginShape();
    this.body.vertices.forEach((each) => {
      vertex(each.x, each.y);
    });
    endShape(CLOSE);
  }

  isDead() {
    return this.body.position.y > height + 100;
  }

  remove() {
    Composite.remove(matterEngine.world, this.body);
  }
}
