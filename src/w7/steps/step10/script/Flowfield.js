class Flowfiled {
  constructor(resolution, noiseVel) {
    this.resolution = resolution;
    this.columnNum = ceil(width / this.resolution);
    this.rowNum = ceil(height / this.resolution);
    this.field = new Array(this.columnNum);
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      this.field[colIdx] = new Array(this.rowNum);
    }
    // this.filed = [this.columnNum][this.rowNum];
    this.noiseVel = noiseVel;
    this.init();
  }

  init() {
    noiseSeed(random(1000));
    let noiseX = 0;
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      let noiseY = 0;
      for (let rowIdx = 0; rowIdx < this.rowNum; rowIdx++) {
        // const angle = map(noise(noiseX, noiseY), 0, 1, 0, TAU);
        // const vector = createVector(1, 0);
        // vector.rotate(angle);
        // this.field[colIdx][rowIdx] = vector;
        const angle = map(noise(noiseX, noiseY), 0, 1, 0, TAU);
        this.field[colIdx][rowIdx] = p5.Vector.fromAngle(angle);
        noiseY += this.noiseVel;
      }
      noiseX += this.noiseVel;
    }
  }

  display() {
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      for (let rowIdx = 0; rowIdx < this.rowNum; rowIdx++) {
        const vector = this.field[colIdx][rowIdx];
        const s = this.resolution;
        const x = s * colIdx + s * 0.5;
        const y = s * rowIdx + s * 0.5;
        const angle = vector.heading();
        push();
        translate(x, y);
        rotate(angle);
        noFill();
        stroke(0);
        line(-this.resolution * 0.4, 0, this.resolution * 0.4, 0);
        pop();
      }
    }
  }

  lookup(pos) {
    const colIdx = constrain(
      floor(pos.x / this.resolution),
      0,
      this.columnNum - 1
    );
    const rowIdx = constrain(
      floor(pos.y / this.resolution),
      0,
      this.rowNum - 1
    );
    return this.field[colIdx][rowIdx];
  }
}
