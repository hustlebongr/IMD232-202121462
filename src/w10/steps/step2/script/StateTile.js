class StateTile {
  constructor(x, y, w, h, idx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = true;
    this.nextState;
    this.idx = idx;
    this.neighbors = [];
  }

  setNeighbors(tiles) {
    const neighborsIdx = [
      this.idx - tileCol - 1,
      this.idx - tileCol,
      this.idx - tileCol + 1,
      this.idx + 1,
      this.idx + tileCol + 1,
      this.idx + tileCol,
      this.idx + tileCol - 1,
      this.idx - 1,
    ];
    const myCol = this.idx % tileCol;
    const myRow = floor(this.idx / tileCol);
    if (myCol === 0) {
      neighborsIdx[0] = -1;
      neighborsIdx[7] = -1;
      neighborsIdx[6] = -1;
    } else if (myCol === tileCol - 1) {
      neighborsIdx[2] = -1;
      neighborsIdx[3] = -1;
      neighborsIdx[4] = -1;
    }
    if (myRow === 0) {
      neighborsIdx[0] = -1;
      neighborsIdx[1] = -1;
      neighborsIdx[2] = -1;
    } else if (myRow === tileRow - 1) {
      neighborsIdx[6] = -1;
      neighborsIdx[5] = -1;
      neighborsIdx[4] = -1;
    }

    neighborsIdx.forEach((eachIdx) => {
      this.neighbors.push(eachIdx > -1 ? tiles[eachIdx] : null);
    });
  }

  calcNextState() {
    let sum = 0;
    this.neighbors.forEach((eachNeighbor) => {
      if (eachNeighbor !== null) {
        if (eachNeighbor.state) sum++;
      }
    });
    if (this.state) {
      if (sum < 2 || sum > 3) {
        this.nextState = false;
      } else {
        this.nextState = this.state;
      }
    } else {
      if (sum === 3) {
        this.nextState = true;
      } else {
        this.nextState = this.state;
      }
    }
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      mx >= this.x &&
      mx < this.x + this.w &&
      my >= this.y &&
      my < this.y + this.h
    );
  }

  changeState(mx, my) {
    if (!this.isHover(mx, my)) return false;
    this.state = !this.state;
    // console.log('this.idx', this.idx);
    console.log('this.neighbors', this.neighbors);
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);

    fill(this.state ? 64 : 255);

    strokeWeight(this.isHover(mx, my) ? 4 : 1);
    stroke(this.isHover(mx, my) ? 'red' : 'black');

    rect(0, 0, this.w, this.h);
    pop();
  }
}
