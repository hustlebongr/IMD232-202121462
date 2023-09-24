//가운데 벡터
let cv;
//마우스로 향하는 벡터
let mv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  //벡터생성 createVector
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}
function draw() {
  background('salmon');
  strokeWeight(5);
  stroke('cornflowerblue');
  //캔버스의 기본좌표 0,0에서 시작하는 벡터의 시각화된 라인
  //라인의 문법 line(x1, y1, x2, y2)
  // x1 숫자: 1번째 점의 x좌표값
  // y1 숫자: 1번째 점의 y좌표값
  // x2 숫자: 2번째 점의 y좌표값
  // y2 숫자: 1번째 점의 z좌표값
  line(0, 0, cv.x, cv.y);

  //마우스로 뻗어가는 것을 보여주는 벡터
  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  //0,0 에서 시작하는 마우스를 따라가는 빨간 선
  line(0, 0, mv.x, mv.y);

  //마우스벡터에 cv를 빼서 그를 이어주는 방향과 힘을 가진 벡터
  mv.sub(cv);
  //원점(중앙점을 옮겨주는 변수)
  translate(cv.x, cv.y);
  stroke('green');
  line(0, 0, mv.x, mv.y);
}
