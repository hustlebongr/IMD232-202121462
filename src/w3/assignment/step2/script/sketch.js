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
  vel = createVector(0, 0);
  acc = createVector(0, 0);
}

function draw() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //원의 중심점으로부터 마우스로 향하는 벡터
  let mouseVector = createVector(mouseX - pos.x, mouseY - pos.y);
  acc = mouseVector.copy();

  //벡터 노말라이즈
  acc.normalize();
  // 가속도 크기 조절
  acc.mult(0.1);
  //속도에 마우스를 향하는 가속도 더하기
  vel.add(acc);
  //위치는 위에 업데이트 된 속도를 더함 (업데이트)
  pos.add(vel);

  //더이상 안벗어나게 해도 된다infiniteEdge();

  fill(0);
  noStroke();
  ellipse(pos.x, pos.y, radius * 2);
  strokeWeight(2);

  stroke(0);
  line(pos.x, pos.y, mouseX, mouseY);

  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
