let pendulums = [];
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  // 세 개의 진자
  for (let i = 0; i < 2; i++) {
    pendulums.push(
      new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 25)
    );
  }

  gravity = createVector(0, 0.5);
  background(255);
}

function draw() {
  background(255);

  // 중첩된 for 루프
  for (let i = 0; i < pendulums.length - 1; i++) {
    pendulums[i].applyGravity(gravity);
    pendulums[i].update();
    pendulums[i].display();

    let nextPendulum = pendulums[i + 1];
    nextPendulum.pos.x = pendulums[i].ballPos.x;
    nextPendulum.pos.y = pendulums[i].ballPos.y;
  }

  pendulums[pendulums.length - 1].applyGravity(gravity);
  pendulums[pendulums.length - 1].update();
  pendulums[pendulums.length - 1].display();
}

function mouseMoved() {
  for (let pendulum of pendulums) {
    pendulum.mouseMoved(mouseX, mouseY);
  }
}

function mousePressed() {
  for (let pendulum of pendulums) {
    pendulum.mousePressed(mouseX, mouseY);
  }
}

function mouseDragged() {
  for (let pendulum of pendulums) {
    pendulum.mouseDragged(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let pendulum of pendulums) {
    pendulum.mouseReleased();
  }
}
