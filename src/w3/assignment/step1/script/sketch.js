//위치
let pos;
//속도
let vel;
//가속도
let acc;
// 원의 반지름
let radius = 20;
// 원의 중심벡터
let posToAcc;

function setup() {
  //캔버스 만들기
  setCanvasContainer('canvas', 3, 2, true);
  //캔버스 잘 만들었나 확인
  background('white');

  //pos = createVector(random(width), random(height));
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  //매 프레임 마다 , 무작위 방향으로 가속도 생성
  acc = createVector(0, 0);
  //이 가속도를 속도에 더한 후(가속도 크기 조절)
  //acc.mult(0.1);
  posToAcc = createVector(0, 0);
}

function draw() {
  background('white');
  let mouseRandom = p5.Vector.random2D();
  mouseRandom.mult(5);
  acc.add(mouseRandom);

  //1
  update();
  //2
  infiniteEdge();
  // //속도 업데이트
  // vel.add(acc);
  // //위치 업데이트
  // pos.add(vel);
}

//1
function update() {
  vel.add(acc);
  vel.limit(1);
  pos.add(vel);
  let mouseRandom = createVector(mouseX - pos.x, mouseY - pos.y);
  // ellipse(pos.x, pos.y, 50);
  // 가속도 벡터 시각화
  // stroke('salmon');
  // line(pos.x, pos.y, pos.x + acc.x * 10, pos.y + acc.y * 10);
  strokeWeight(2);

  // 가속도 벡터 (파란색)
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 100, pos.y + vel.y * 100);

  // 원 중심에서 마우스 (검은색)
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);
  // 원 그리기
  fill(0);
  noStroke();
  ellipse(pos.x, pos.y, radius * 2);

  //빨간색 라인
  posToAcc = p5.Vector.sub(vel, pos);
  posToAcc.mult(0.3);
  translate(pos.x, pos.y);
  stroke('red');
  line(0, 0, pos.x, pos.y);
}

//2
function infiniteEdge() {
  //
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}
