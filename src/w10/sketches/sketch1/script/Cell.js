class Cell {
  constructor(x, y, w, h, state) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.idx = idx;
    this.friends = [];
  }

  addFriends(cellArray) {
    this.friends = [
      cellArray[this.idx - colNum - 1], //왼위
      cellArray[this.idx - colNum], //중위
      cellArray[this.idx - colNum + 1], //오위
      cellArray[this.idx + 1], //오
      cellArray[this.idx - colNum + 1], //오아
      cellArray[this.idx - colNum], //중아
      cellArray[this.idx - colNum - 1], //왼아
      cellArray[this.idx - 1], //왼
    ];
  }
  display() {
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);
    // } else {
    //   fill(255);
    // }
    fill(this.state ? 32 : 255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
