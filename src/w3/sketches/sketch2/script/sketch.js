let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  // setCanvasContainer ('엘리먼트 아이디',가로비율 , 세로비율 , 늘었다 줄었다)
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  // background(255);
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  pos.add(vel);

  //if (pos.x < 0) {
  //  vel.x *= -1;
  //} else if (pos.x > width) {
  //  vel.x *= -1;
  //}
  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }

  ellipse(pos.x, pos.y, 2 * radius);
}
