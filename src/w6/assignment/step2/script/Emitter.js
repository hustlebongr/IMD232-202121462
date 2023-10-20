class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }

  addParticle() {
    const numParticles = 60; // 파티클의 개수
    const angleIncrement = TAU / numParticles; // 파티클 간의 각도 간격
    for (let i = 0; i < numParticles; i++) {
      const angle = i * angleIncrement;
      const p = new Particle(this.pos.x, this.pos.y);
      // 파티클을 사방으로 퍼지게 하기 위해 초기 속도 설정
      p.vel.set(cos(angle) * 5, sin(angle) * 5); // 5는 초기 속도
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
