class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // 파티클 질량을 10으로 설정
    this.mass = 10;
    this.vel = createVector(1, 0);
    // 초기 속도를 19에서 20 사이의 랜덤값으로 설정
    this.vel.rotate((TAU / 360) * random(19, 20));
    this.acc = createVector(0, 0);
    this.rad = 10;
    this.lifeSpan = 60;
    this.color = color(random(360), random(10, 200), 50);
    this.previousPos = this.pos.copy();
  }
  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 1;
  }

  display() {
    noStroke();
    fill(this.color, this.lifeSpan);
    let transparency = map(this.lifeSpan, 0, 60, 0, 255);
    fill(red(this.color), green(this.color), blue(this.color), transparency);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
