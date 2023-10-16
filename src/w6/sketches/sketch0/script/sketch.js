class Emitter {
  constructor() {
    this.emittingPos;
    this.balls = [];
  }

  createBall() {
    this.balls.push(
      new ball(
        this.emittingPos.x,
        this.emittingPos.y,
        ramdom(1, 5),
        random(360),
        100,
        50
      )
    );
  }

  update() {
    // this.balls.forEach((each) => {
    //   each.update();
    // });
    for (let index = this.balls.length - 1; index >= 0; index--) {
      this.balls[index].update();
      if (this.balls[index].isDead()) {
        this.balls.splice(index, 1);
      }
    }
  }

  display() {
    this.balls.forEach((each) => {
      each.update();
    });
  }
}

class Ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  isDead() {
    return (
      (this.pos.x < -this.rad && this.pos.x > width + this.rad) ||
      this.pos.y < -this.rad ||
      this.pos.y > heught + this.rad
    );
  }
}
//여러개 만드려면 =[];을 붙힘
let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);
  //colormode는 HSL 로 해야한다.

  for (let n = 0; n < 10; n++) {
    balls.push(new ball(random(width), 0, random(360), 100, 50));
  }

  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);
  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = p5.Vector.mult(gravity, each.mass);
    each.applyForce(scaledG);
    each.applyForce(wind);
    each.update();
    each.display();
  });
}

function mousePressed() {
  for (let n = 0; n < balls.length; n++) {
    balls[n] = new ball(random(width), 0, random(1, 20), random(360), 100, 50);
  }
}

//교수님이 수업 끝에 보여준 코드 ball을 활용 constructor에다가 앵글과 힘을 활용해서 터트림
// 올려준거의 위치와 각도를 수정하면 될듯 함 폭죽 new ball << 여기
