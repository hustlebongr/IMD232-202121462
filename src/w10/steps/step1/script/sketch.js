const tileCol = 20,
  tileRow = 20;

let tileW, tileH;

const tiles = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  tileW = width / tileCol;
  tileH = height / tileRow;

  randomSeed(1);
  for (let row = 0; row < tileRow; row++) {
    for (let col = 0; col < tileCol; col++) {
      const tileX = tileW * col;
      const tileY = tileH * row;
      const newTile = new StateTile(tileX, tileY, tileW, tileH);
      if (random() > 0.5) newTile.state = false;
      tiles.push(newTile);
    }
  }
}
function draw() {
  background('white');

  tiles.forEach((eachTile) => {
    eachTile.display(mouseX, mouseY);
  });
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++) {
    if (tiles[idx].changeState(mouseX, mouseY)) break;
  }
}
