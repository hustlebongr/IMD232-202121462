class Particle {
  constructor(x, y, mass, lifeSpan) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** 0.5 * 5;
    this.lifeSpan = lifeSpan;
    this.life = this.lifeSpan;
  }

  applyForce(force) {
    //div(force, this.mass) 힘을 질량으로 나누어줌
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life--;
  }

  display() {
    const normalizedLife = constrain(this.life / this.lifeSpan, 0, 1);
    stroke(0, 255 * normalizedLife);
    fill(127, 255 * normalizedLife);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.life < 0;
  }
}
