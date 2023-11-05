class Particle {
  constructor() {
    this.pos = createVector(random(width), -100);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 255;
    this.rotationAngle = random(360);
    this.rotationSpeed = radians(random(1, 10));
    this.color = color(random(360), 100, 50, 50);

    // 랜덤한 HSL 색상 설정
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
    noStroke();
    fill(this.color);
    push();
    translate(this.pos.x + this.rad, this.pos.y + this.rad);
    rotate(this.rotationAngle);
    rect(-this.rad, -this.rad, this.rad * 2, this.rad * 2);
    pop();
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
