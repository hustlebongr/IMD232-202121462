let moverA;
let gravity;
let drag = false;
let offset;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);

  if (drag) {
    let mVec = createVector(mouseX, mouseY);
    let pMVec = createVector(pmouseX, pmouseY);
    let offset = p5.Vector.sub(mVec, pMVec);
    moverA.pos.add(offset);
  }

  if (mouseIsPressed && isMouseInsideCanvas()) {
    if (dist(mouseX, mouseY, moverA.pos.x, moverA.pos.y) < moverA.radius) {
      drag = true; // 클릭 시 드래그 활성화
      moverA.vel.mult(0); // 클릭 시 속력을 0.
    }
  } else {
    drag = false;
  }

  if (moverA.contactEdge()) {
    //마찰계수 μ는 0~1의 값이다.
    let c = 0.01;
    //마찰은 무버의 속력을 카피한 값이다 가고있던 진행방향의 힘 (그래서 카피를 함)
    let friction = moverA.vel.copy();
    //거기에 반대되는 힘 (-1)을 곱해줌
    friction.mult(-1);
    //그 힘의 값을 또 곱해줌 그러면 서서히 멈출 수 있음 >> 마찰력을 표현하기 위한 공식
    friction.mult(c);
    moverA.applyForce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();
}
