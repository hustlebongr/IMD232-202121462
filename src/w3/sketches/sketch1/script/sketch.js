let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  // setCanvasContainer ('엘리먼트 아이디',가로비율 , 세로비율 , 늘었다 줄었다)
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);

  //계산하는 것을 그리는 것보다 먼저 해야함
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
  // posX = posX +1;
  // posX += 1;
}
