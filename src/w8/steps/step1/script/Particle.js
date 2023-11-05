class Particle {
  constructor(x, y) {
    //위치 createVector(초깃값)
    this.pos = createVector(x, y);
    //createVector(1, 0); >>0도의 방향으로 길이 1의 벡터
    this.vel = createVector(1, 0);
    //위의 속도를 곱하는 방법, 컴퓨터 좌표에 따른 각도 계산법
    this.vel.rotate((TAU / 360) * random(-150, -30));
    // 가속도는 필요가 없음
    this.acc = createVector(0, 0);
    this.rad = 8;
    //생기는 애들에 대한 수명에 대한 조건
    this.lifeSpan = 255;
  }

  applyForce(force) {
    //그냥 값을 넣는 것
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    //가속도 초기화 , 너무 빠르지 않게 함
    this.acc.mult(0);
    this.lifeSpan -= 2;
  }

  display() {
    // 투명도에 해당하는 부분에 lifeSpan 을 넣으면 투명도로서 사용되어 사라진다.
    stroke(0, this.lifeSpan);
    fill(127, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
