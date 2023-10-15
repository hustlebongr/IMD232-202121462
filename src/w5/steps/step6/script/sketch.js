function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  line(200, 0, 200, height);
  line(0, 100, width, 100);

  push();
  translate(width / 2, height / 2);
  rotate((TAU / 360) * 25);
  noStroke();
  fill('salmon');
  rect(0, 0, 50);
  stroke('salmon');
  line(200, 0, 200, height);
  line(0, 100, width, 100);
  pop();

  //   rotate((TAU / 360) * -25);
  //   translate(-width / 2, -height / 2);

  //좌표를 다시 지정하는 것
  translate(200, 100);
  rotate((TAU / 360) * -15);
  noStroke();
  fill('slateblue');
  rect(0, 0, 50);
  rect(100, 100, 50);
}

function draw() {}
