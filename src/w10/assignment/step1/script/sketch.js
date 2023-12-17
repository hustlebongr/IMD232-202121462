class gol {
  constructor() {
    this.cells = [];
    this.rowCount = 50;
    this.colCount = 50;

    // 셀 생성 및 배치
    for (let row = 0; row < this.rowCount; row++) {
      for (let col = 0; col < this.colCount; col++) {
        const x = (width / this.colCount) * col;
        const y = (height / this.rowCount) * row;
        const newCell = new golCell(
          x,
          y,
          width / this.colCount,
          height / this.rowCount
        );
        this.cells.push(newCell);
      }
    }

    // 이웃 셀 설정
    for (let row = 0; row < this.rowCount; row++) {
      for (let col = 0; col < this.colCount; col++) {
        const neighborsIndices = [
          this.getIndex(row - 1, col - 1),
          this.getIndex(row - 1, col),
          this.getIndex(row - 1, col + 1),
          this.getIndex(row, col + 1),
          this.getIndex(row + 1, col + 1),
          this.getIndex(row + 1, col),
          this.getIndex(row + 1, col - 1),
          this.getIndex(row, col - 1),
        ];

        // 가장자리 처리
        if (col === 0) {
          neighborsIndices[0] = -1;
          neighborsIndices[6] = -1;
          neighborsIndices[7] = -1;
        } else if (col === this.colCount - 1) {
          neighborsIndices[2] = -1;
          neighborsIndices[3] = -1;
          neighborsIndices[4] = -1;
        }

        if (row === 0) {
          neighborsIndices[0] = -1;
          neighborsIndices[1] = -1;
          neighborsIndices[2] = -1;
        } else if (row === this.rowCount - 1) {
          neighborsIndices[4] = -1;
          neighborsIndices[5] = -1;
          neighborsIndices[6] = -1;
        }

        const neighbors = [];
        neighborsIndices.forEach((eachIndex) => {
          neighbors.push(eachIndex >= 0 ? this.cells[eachIndex] : null);
        });

        const index = this.getIndex(row, col);
        this.cells[index].setNeighbors(neighbors);
      }
    }

    // 초기 상태 무작위 설정
    randomSeed(1);
    this.cells.forEach((each) => {
      const randomState = floor(random(3)); // 0: 바위, 1: 보, 2: 가위
      each.state = randomState;
    });
  }

  // 행렬 인덱스 반환
  getIndex(row, col) {
    return row * this.colCount + col;
  }

  // 그리기 함수
  draw() {
    background('lightsteelblue');

    // 다음 상태 계산
    this.cells.forEach((each) => {
      each.calculateNextState();
    });

    // 상태 업데이트
    this.cells.forEach((each) => {
      each.update();
    });

    // 화면에 표시
    this.cells.forEach((each) => {
      each.display(mouseX, mouseY);
    });
  }
}

class golCell {
  constructor(x, y, w, h, isClickable = true) {
    // 생성자
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = 0; // 0: 바위, 1: 보, 2: 가위
    this.nextState = this.state;
    this.neighbors = [];
  }

  // 이웃 셀 설정
  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  // 다음 상태 계산
  calculateNextState() {
    const winningStates = [2, 0, 1]; // 바위는 가위 이김, 가위는 보 이김, 보는 바위 이김
    const winningNeighbors = this.neighbors.filter(
      (eachNeighbor) =>
        eachNeighbor && winningStates[eachNeighbor.state] === this.state
    );

    // 이기는 이웃이 2개 이하이면 현재 상태 유지, 그 이상이면 첫 번째 이웃의 상태로 변경
    if (winningNeighbors.length <= 2) {
      this.nextState = this.state;
    } else {
      const winningNeighbor = winningNeighbors[0];
      this.nextState = winningNeighbor.state;
    }
  }

  // 상태 업데이트
  update() {
    this.state = this.nextState;
  }

  // 마우스 호버 여부 체크
  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  // 상태 토글
  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = (this.state + 1) % 3; // 바위, 보, 가위 순환
    return true;
  }

  // 화면에 표시
  display(mx, my) {
    push();
    translate(this.x, this.y);
    stroke(this.isHover(mx, my) ? 'red' : 'black');

    // 바위, 보, 가위 색상 변경
    fill(
      this.state === 0
        ? color('#8B4513') // 바위 (갈색)
        : this.state === 1
        ? color('#228B22') // 보 (녹색)
        : color('#4682B4') // 가위 (청색)
    );

    rect(0, 0, this.w, this.h);
    pop();
  }
}

let golGame;
function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  golGame = new gol();
}
function draw() {
  golGame.draw();
}
function mouseClicked() {
  for (let idx = 0; idx < golGame.cells.length; idx++)
    if (golGame.cells[idx].toggleState(mouseX, mouseY)) break;
}
