let center;
let mouse;
let centerToMouse;
//노멀라이즈 벡터 < 벡터의 값을 방향을 유지하되 , 0~1사이의 값을 만듬 (정규화)
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
  center = createVector(width / 2, height / 2);
  //fuction draw에 넣으려면 빈깡통이라도 만들어야함
  mouse = createVector();
  centerToMouse = createVector();
}
function draw() {
  background('orange');
  mouse.set(mouseX, mouseY);
  //이게 뭘까요
  centerToMouse = p5.Vector.sub(mouse, center);
  strokeWeight(2);
  stroke('white');
  translate(center.x, center.y);
  line(0, 0, centerToMouse.x, centerToMouse.y);

  //노멀라이즈 벡터 < 벡터의 값을 방향을 유지하되 , 0~1사이의 값을 만듬 (정규화)
  //위의 let centerToMouse;를 가지고 .normalize 해서 정규화 시킴
  centerToMouse.normalize();
  //위의 let centerToMouse;를 가지고 .mult해서 곱해줌
  centerToMouse.mult(80);
  strokeWeight(10);
  stroke('black');
  line(0, 0, centerToMouse.x, centerToMouse.y);
  //centerToMouse.mult(80);에 대해서 얼만큼의 크기인지 확인하는 콘솔
  console.log(centerToMouse.mag());
}
