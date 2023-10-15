class MoverNoMass {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r;
  }
  //위치 업데이트
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  //통통 튀기는 효과
  //제대로 된 튕김 효과를 위한 곱셈과 +1 -1 이라고 이해하면 쉬움
  //기존의 계산 방식과 다른 점
  checkEdges() {
    if (this.pos.x < 0) {
      //   // 0보다 얼마나 뚫고 갔는가?
      //   let delta = this.pos.x - 0;
      // 뚫고 지나간 동그라미에 대한 대칭 (반대를 위해 델타에 -1을 곱해줌)
      //   delta *= -1;
      //   // 0을 기준으로 뒤집힌 거리를 더해준다.
      //   this.pos.x = 0 + delta;

      //pos.x에 0을 빼줌
      this.pos.x -= 0;
      //기준이 되는 좌표를 -1을 곱해 반대로 보냄
      this.pos.x *= -1;
      //여기에 0을 더해주면 위에 있던 0에 작용하여 그 위치로 감
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      //끝부분의 픽셀 (-1)을 하고
      this.pos.x -= width - 1;
      //그 위치에 대한 너비값에 음수를 곱해 뒤집고
      this.pos.x *= -1;
      //픽셀을 다시 더해주고
      this.pos.x += width - 1;
      //반대로 튕기게 함
      this.vel.x *= -1;
    }
    //width와 다름 , y라서 위 일련의 과정을 height로 함
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }
  //화면에 표현
  display() {
    noStroke();
    fill('salmon');
    //ellipse(x위치표현,y위치표현,크기)
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
