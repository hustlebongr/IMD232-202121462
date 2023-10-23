class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
    this.color = color(random(360), 100, 50, 50);
  }

  addParticle() {
    const numParticles = 60; // 파티클의 개수
    const angleIncrement = TAU / numParticles; // 파티클 간의 각도 간격
    for (let i = 0; i < numParticles; i++) {
      const angle = i * angleIncrement;
      const p = new Particle(this.pos.x, this.pos.y);
      // 파티클을 사방으로 퍼지게 하기 위해
      p.vel.set(cos(angle) * 6, sin(angle) * 6);
      this.particles.push(p);
    }
  }

  update(gravity) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}
