let dataPoint = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(10);

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
  }

  background(255);
  randomSeed(50);
}

function draw() {
  // dataPoint[dataPoint.length - 1] = map(mouseY, 0, height, 1, 0);
  // randomSeed(0);
  dataPoint[dataPoint.length - 1] = random();
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
  // beginShape(); endShape(); 선분연결
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
}
