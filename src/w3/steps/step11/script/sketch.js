let pos;
let vel;
//가속도 변수
let acc;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
  pos = createVector(random(width), random(height));
  //속도라는게 없기 때문에 가만히 있게 됨
  vel = createVector(0, 0);
  //acc라는 함수에 랜덤한 방향으로 1움직이는 벡터 생성
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('acc', acc);
  console.log('velMag', vel.mag());
  console.log('accMag', acc.mag());
}

function draw() {
  background('slateblue');
  update();
  checkEdges();
  display();
  console.log('velMag', vel.mag());
  console.log('accMag', acc.mag());
}

function update() {
  //속도에다가 가속을 더함
  vel.add(acc);
  //가속이 너무 빨라서 , 속도에 제한을 두는 함수 30까지만 제한
  vel.limit(30);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);
}
