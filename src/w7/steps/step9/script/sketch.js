const tileSize = 40;
let columnNum;
let rowNum;
let noiseCoordMult = 0.05;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  columnNum = floor(width / tileSize);
  rowNum = floor(height / tileSize);

  background(255);

  noiseSeed(5);
}

function draw() {
  background(255);

  for (let row = 0; row < rowNum; row++) {
    for (let column = 0; column < columnNum; column++) {
      const idx = column + row * columnNum;
      // fill(random() * 255);
      // fill(noise(row * noiseCoordMult, column * noiseCoordMult) * 255);
      // rect(column * tileSize, row * tileSize, tileSize);
      push();
      translate(
        column * tileSize + tileSize * 0.5,
        row * tileSize + tileSize * 0.5
      );
      //선분을 회전시키기 위함
      rotate(
        radians(noise(row * noiseCoordMult, column * noiseCoordMult) * 360)
      );
      // ellipse(0, 0, tileSize);
      line(-tileSize * 0.3, 0, tileSize * 0.3, 0);
      pop();
    }
  }
}
