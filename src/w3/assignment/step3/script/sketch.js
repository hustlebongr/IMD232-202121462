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
  vel.limit(5);
}

function draw() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //원의 중심점으로부터 마우스로 향하는 벡터
  let mouseVector = createVector(mouseX - pos.x, mouseY - pos.y);

  if (mouseIsPressed) {
    followingMouse = false; // 마우스 클릭 시 원이 멀어지도록 설정
  } else {
    followingMouse = true; // 클릭하지 않으면 원이 마우스를 따라오도록 설정
  }

  if (followingMouse) {
    // 클릭하지 않으면 원이 마우스를 따라감
    acc = mouseVector.copy();
    acc.normalize();
    acc.mult(0.5);
  } else {
    // 클릭 시 가속도를 0으로 설정하여 멀어짐
    acc.mult(0);
  }

  vel.add(acc);
  vel.limit(20);
  console.log('vel', vel);
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
