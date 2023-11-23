let cells = [];

const colNum = 10,
  rowNum = colNum;

let w, h;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  w = width / colNum;
  h = height / rowNum;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      let state = random() < 0.5;
      cells.push(new Cell(x, y, w, h, state));
    }
  }

  background('white');
}

function draw() {
  background('white');
  cells.forEach((eachCell) => {
    eachCell.display();
  });
}
