const tileCol = 20,
  tileRow = 20;

let tileW, tileH;

const tiles = [];

let run = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  tileW = width / tileCol;
  tileH = height / tileRow;

  randomSeed(4);
  for (let row = 0; row < tileRow; row++) {
    for (let col = 0; col < tileCol; col++) {
      const tileX = tileW * col;
      const tileY = tileH * row;
      const idx = tileCol * row + col;
      const newTile = new StateTile(tileX, tileY, tileW, tileH, idx);
      // if (random() > 0.5) newTile.state = false;
      newTile.state = false;
      tiles.push(newTile);
    }
  }

  tiles.forEach((eachTile) => {
    eachTile.setNeighbors(tiles);
  });

  frameRate(15);
  background('white');
  tiles.forEach((eachTile) => {
    eachTile.display(mouseX, mouseY);
  });
}
function draw() {
  background('white');

  if (run) {
    tiles.forEach((eachTile) => {
      eachTile.calcNextState();
    });
    tiles.forEach((eachTile) => {
      eachTile.update();
    });
  }

  tiles.forEach((eachTile) => {
    eachTile.display(mouseX, mouseY);
  });
}

function keyPressed() {
  run = !run;
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++) {
    if (tiles[idx].changeState(mouseX, mouseY)) break;
  }
}
