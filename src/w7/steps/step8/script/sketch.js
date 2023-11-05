// 얼마나 촘촘하게 할 것 인가?
const tileSize = 40;
//너비/1 높이/1 이름 설정
let columnNum;
let rowNum;
// 이 숫자를 통해서 크기 설정 가능
let noiseCoordMult = 0.1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  //너비/1
  columnNum = floor(width / tileSize);
  //높이/1
  rowNum = floor(height / tileSize);

  background(255);

  noiseSeed(5);
}

function draw() {
  // randomSeed(100);
  background(255);
  noStroke();
  for (let row = 0; row < rowNum; row++) {
    for (let column = 0; column < columnNum; column++) {
      const idx = column + row * columnNum;
      // fill(random() * 255);
      fill(noise(row * noiseCoordMult, column * noiseCoordMult) * 255);
      rect(column * tileSize, row * tileSize, tileSize);
    }
  }
}
