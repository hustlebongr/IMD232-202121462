let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}
function draw() {
  background('orange');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();
  //mag (매그니튜드)는 항상 양수로 움직인다
  //벡터가 가진 길이감을 보여주는 함수이다
  console.log(mag);
  noStroke();
  fill('slateblue');
  rect(10, 10, mag, 20);

  strokeWeight(2);
  stroke('white');
  //translate << 중앙으로 옮기는
  //위에 mag를 그리고 중앙으로 원점을 옮겨서 라인을 만듬 (순서가 어떻게 되냐에 따라서 그려지는게 다름)
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
