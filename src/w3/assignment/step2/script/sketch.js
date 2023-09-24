//위치
let pos;
//속도
let vel;
//가속도
let acc;
// 원의 반지름
let radius = 25;

function setup() {
  //캔버스 만들기
  setCanvasContainer('canvas', 3, 2, true);
  //캔버스 잘 만들었나 확인
  background('white');

  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  acc = createVector(0, 0);
}

function draw() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //원의 중심점으로부터 마우스로 향하는 벡터
  let targetVector = createVector(mouseX - pos.x, mouseY - pos.y);
  vel = targetVector.copy();
  //벡터 노말라이즈
  vel.normalize();
  // 가속도 크기 조절
  vel.mult(5);
  pos.add(vel);

  //벡터를 가속도 삼는다
  acc.add(targetVector);
  //더이상 안벗어나게 해도 된다infiniteEdge();
  fill(0);
  noStroke();
  ellipse(pos.x, pos.y, radius * 2);

  stroke(0);
  line(pos.x, pos.y, mouseX, mouseY);
}
