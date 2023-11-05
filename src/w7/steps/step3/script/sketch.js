function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);

  //randomSeed(); << 여기 안에 있는 랜덤의 난수값 아무거나 뽑아줘
  //random() 아무것도 넣지 않는다면 0~ 1의 값
  ellipse(width / 2 + random(100, 200), height / 2, 50);
  ellipse(width / 2 + random() * 100 + 100, height / 2 + 100, 50);
}
