let noiseXA = 0;
let noiseXB = 0;
let noiseXAVel = 0.005;
let noiseXBVel = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);

  // ellipse(width / 2 + random(100, 200), height / 2, 50);
  // ellipse(width / 2 + random() * 100 + 100, height / 2 + 100, 50);
  // 노이즈는 랜덤과 달리 0,1의 값만 나옵니다. 랜덤은 최솟값 , 최댓값
  ellipse(width / 2 + noise(noiseXA) * 100 + 100, height / 2, 50);
  ellipse(width / 2 + noise(noiseXB) * 100 + 100, height / 2 + 100, 50);
  noiseXA += noiseXAVel;
  noiseXB += noiseXBVel;
}
