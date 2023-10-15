function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  noStroke();
  fill('salmon');
  rect(0, 0, 200, 100);

  fill('coral');
  rect(width / 2, height / 2, 300, 200);

  rotate((TAU / 360) * 45);

  fill('cornflowerblue');
  rect(0, 0, 300, 200);

  fill('slateblue');
  rect(width / 2, height / 2, 200, 100);
}

function draw() {}
