let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  //위에 let 해놓고 여기에서 createVector를 해야함
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}
function draw() {
  background('slateblue');
  strokeWeight(2);
  stroke('white');
  //라인의 문법 line(x1, y1, x2, y2)
  // x1 숫자: 1번째 점의 x좌표값
  // y1 숫자: 1번째 점의 y좌표값
  // x2 숫자: 2번째 점의 y좌표값
  // y2 숫자: 1번째 점의 z좌표값
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  //중앙에서 마우스로 향하는 벡터
  line(0, 0, mv.x, mv.y);

  //p5.Vector가 기능하는게 뭔지 모르겠음
  cvToMv = p5.Vector.sub(mv, cv);
  stroke('lime');
  //원점 옮기기
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  //mult 곱셈
  cvToMv.mult(0.5);
  //벡터의 길이감을 절반 줄이는
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);
}
