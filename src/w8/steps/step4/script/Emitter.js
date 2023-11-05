class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }

  addParticle() {
    this.particles.push(
      //뒤에 random(180, 300) 은 라이프 스팬
      new Particle(this.pos.x, this.pos.y, random(1, 16), random(180, 300))
    );
  }

  applyGravity(gravity) {
    for (let eachParticle of this.particles) {
      const force = p5.Vector.mult(gravity, eachParticle.mass);
      eachParticle.applyForce(force);
    }
  }

  applyRepeller(repeller) {
    this.particles.forEach((eachParticle, idx) => {
      const force = repeller.repel(eachParticle);
      eachParticle.applyForce(force);
    });
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    // for (let i = 0; i < this.particles.length; i++) {
    //   this.particles[i].display();
    // }
    this.particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  }
}
