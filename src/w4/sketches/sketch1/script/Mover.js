class Mover {
  //생성자
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    //this는 여기에서 사용되어야만 하는 문법
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2); // 제곱근
  }
  applyForce(force) {
    force.div(this.mass);
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }

  //class에는 function이 필요없음

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius); // 선대칭에 대한 구문
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1 - this.radius) {
      let delta = this.pos.x - (width - 1 - this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.x *= -1;
    }
  }
  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
