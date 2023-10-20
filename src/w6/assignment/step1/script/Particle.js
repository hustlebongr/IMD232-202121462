class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 255;
    this.rotationAngle = random(360);
    this.rotationSpeed = radians(random(1, 10));

    // 랜덤한 HSL 색상 설정
    this.color = color(random(360), random(50, 100), random(50, 100));
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 2;
    this.rotationAngle += this.rotationSpeed;
  }

  display() {
    colorMode(HSL, 360, 100, 100); // HSL 색상 모드 설정
    fill(this.color);
    noStroke();
    push();
    translate(this.pos.x + this.rad, this.pos.y + this.rad);
    rotate(this.rotationAngle);
    rect(0, 0, this.rad * 2, this.rad * 2);
    pop();
    colorMode(RGB); // RGB 색상 모드로 복원
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
