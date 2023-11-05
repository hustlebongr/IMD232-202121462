let vehicle;
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // constructor(x, y, mass, rad, speedMx, forceMx)
  vehicle = new Vehicle(width / 2, height / 2, 1, 20, 10, 0.1);

  mVec = createVector(); //마우스 쫒아오는 벡터 만들기

  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY); //마우스 쫒아오는 벡터 만들기

  vehicle.seek(mVec);
  vehicle.update();
  background(255);
  vehicle.display();
}
