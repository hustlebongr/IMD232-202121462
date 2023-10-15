let angle = 0;
// let angleVel = (TAU / 360) * 1;
let angleVel;
let angleAcc;
const maxAngleVel = 0.01; // 최대 각 속도

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  //   angleVel = (TAU / 360) * 1;
  angleVel = 0;
  angleAcc = (TAU / 360) * 0.01;

  background(255);
}

function draw() {
  angleVel += angleAcc;
  angleVel = constrain(angleVel, -1, 0.01);
  angle += angleVel;

  background(255);

  translate(width / 2, height / 2);
  rotate(angle);
  line(30, 0, 0, 0);
  ellipse(30, 0, 10);
  // color(random(360), 100, 50, 50);
}
