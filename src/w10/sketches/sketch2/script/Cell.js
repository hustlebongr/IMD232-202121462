class Cell {
  constructor(x, y, w, h, state, idx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.nextState = state;
    this.idx = idx;
    this.friends = [];
  }

  addFriends(cellArray) {
    const idxList = [
      this.idx - colNum - 1, //왼위
      this.idx - colNum, //중위
      this.idx - colNum + 1, //오위
      this.idx + 1, //오
      this.idx + colNum + 1, //오아
      this.idx + colNum, //중아
      this.idx + colNum - 1, //왼아
      this.idx - 1, //왼
    ];

    const myCol = this.idx % colNum;
    const myRow = floor(this.idx / colNum);
    //왼쪽 귀퉁이
    if (myCol === 0) {
      idxList[0] = -1;
      idxList[6] = -1;
      idxList[7] = -1;
    }
    //오른쪽 귀퉁이
    else if (myCol === colNum - 1) {
      idxList[2] = -1;
      idxList[3] = -1;
      idxList[4] = -1;
    }
    //위쪽 귀퉁이
    if (myRow === 0) {
      idxList[0] = -1;
      idxList[1] = -1;
      idxList[2] = -1;
    }
    //아래쪽 귀퉁이
    else if (myRow === rowNum - 1) {
      idxList[4] = -1;
      idxList[5] = -1;
      idxList[6] = -1;
    }

    idxList.forEach((eachIdx) => {
      this.friends.push(cells[eachIdx]);
    });
  }

  calcNextState() {
    let cnt = 0;
    this.friends.forEach((eachFriend) => {
      if (eachFriend?.state) {
        cnt++;
      }
    });

    if (this.state) {
      if (cnt < 2 || cnt > 3) {
        this.nextState = false;
      } else {
        this.nextState = this.state;
      }
    } else {
      if (cnt === 3) {
        this.nextState = true;
      } else {
        this.nextState = this.state;
      }
    }
  }

  updateState() {
    this.state = this.nextState;
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
