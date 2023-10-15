let bodies = [];
let G = 0.03;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  bodies = [];
  let numBodies = 20 + random(40); // 최소 20개의 물체를 생성 + 랜덤하게 좀 더 더하기
  for (let i = 0; i < numBodies; i++) {
    // 질량을 16에서 100 사이의 임의 값으로 설정
    let mass = random(16, 100);
    // 반지름을 질량의 제곱근에 비례하여 20에서 50 사이의 값을 설정
    let radius = mass ** 0.5 * random(20, 50);
    bodies.push(new Body(random(width), random(height), mass, radius));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
