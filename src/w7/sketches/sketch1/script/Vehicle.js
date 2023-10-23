class Vehicle {
  constructor(x, y, rad) {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();
    //질량은 꼭 넣을 필요는 없지만..
    this.mass = 1;
    this.rad = rad;
    this.speedMx = speedMx;
    this.color = color;
  }

  borderInfinite() {
    if (this.pos.x < -20) {
      this.pos.x = width + 20;
    } else if (this.pos.x > width + 20) {
      this.pos.x = -20;
    }
    if (this.pos.y < -20) {
      this.pos.y = height + 20;
    } else if (this.pos.y > height + 20) {
      this.pos.y = -20;
    }
  }

  seek(target) {
    //target.sub(this.pos);
    //향하는 값만 가져와야하기 때문에 아래의 연산을 사용한다.
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.speedMx);
  }

  applyForce(force) {
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    pop();
  }
}
