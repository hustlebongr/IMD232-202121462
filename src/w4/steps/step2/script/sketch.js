let mover;
//중력의 개념 추가
let gravity;
//wind를 추가
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50);
  //
  gravity = createVector(0, 0.1);
  //오른쪽으로 뻗은 벡터를 적용
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  mover.addAcc(gravity);
  //마우스를 클릭했을 때만 들어오는 함수
  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.addAcc(wind);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
