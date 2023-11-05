let dataPoint = [];
let noiseX = 0;
//뭉근한 값을 넣으려면 이 숫자를 조정해야함
let noiseXAdd = 0.05;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(5);

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
  }

  background(255);
}

function draw() {
  // dataPoint[dataPoint.length - 1] = random();
  dataPoint[dataPoint.length - 1] = noise(noiseX);
  background(255);
  noStroke();
  fill(0);
  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    ellipse(x, y, 10);
  }
  stroke(0);
  noFill();
  beginShape();
  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    vertex(x, y);
  }
  endShape();
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
  }
  //많이 움직이지 않게 하는 구문
  noiseX += noiseXAdd;
}
