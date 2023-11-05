class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    // const headingAngle = atan2(this.vel.y, this.vel.x);
    const headingAngle = this.vel.heading(); //위의 머리를 돌리게 해주는 p5 함수
    push();
    translate(this.pos.x, this.pos.y);
    rotate(headingAngle); //고개를 돌리게 하는 것
    fill(0);
    noStroke();
    beginShape(); //동그란 아이가 아니라 뾰족하게 방향성을 넣기 위함
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    noFill();
    stroke('red');
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    const desiredVelocity = p5.Vector.sub(target, this.pos);
    desiredVelocity.setMag(this.speedMx);
    const steer = p5.Vector.sub(desiredVelocity, this.vel); //고개를 돌리게 만드는 변수 선언
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }
}
