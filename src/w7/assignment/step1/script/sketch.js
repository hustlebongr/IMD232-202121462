// let xxx  << xxx 라는 변수를 만듬
let traffic;
// let infiniteOffset << infiniteOffset 라는 변수의 값을 80으로 설정
let infiniteOffset = 80;

// 기능 기본 셋업
function setup() {
  // canvas 라는 html 공간에 3대 2 크기의 대지를 그림
  setCanvasContainer('canvas', 3, 2, true);
  // 컬러모드를 HSL 로 설정함,뒤 숫자는 hsl 컬러의 값 (조정가능)
  colorMode(HSL, 360, 100, 100, 100);
  // 배경 하얀색
  background('white');
  //위에서 만든 let traffic을 새롭게 만듬
  traffic = new Traffic();
  // for 구문. 10개의 숫자가 될때 까지 Vehicle을 랜덤한 너비와 위치에 생성함
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
}
// 프레임 마다 업데이트 되는 기능을 그림
function draw() {
  //그려지는 배경을 하얀색으로해서 , 잔상이 남지 않도록함.
  background('white');
  //위에서 만든  traffic을 run() 함수로 업데이트함
  traffic.run();
}
// 마우스를 드래그할 때 생기는 기능 함수 생성
function mouseDragged() {
  //마우스의 위치 (mouseX, mouseY) 에  Vehicle을 생성시킴
  traffic.addVehicle(mouseX, mouseY);
}
