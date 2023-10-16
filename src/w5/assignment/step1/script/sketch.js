const stripeNum = 8;
const stripeNum2 = 8;
let stripeGap = 30;
let clockHandAngles = []; // 시계 바늘의 초기 각도 배열

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);

  // 초기 각도 배열 설정
  for (let i = 0; i < stripeNum2; i++) {
    clockHandAngles.push(i % 2 === 0 ? 0 : HALF_PI);
  }
}

function draw() {
  background(255);
  noStroke();

  // 창 크기에 반응하여 stripeGap을 조절
  stripeGap = min(width, height) / 10;

  // 회전 각도 증가분 설정
  const rotationStep = radians(15);

  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      noFill();
      stroke(frameCount % 255, 100, 200);
      strokeWeight(1);

      // 회전 각도 계산
      const rotationAngle = a * rotationStep + clockHandAngles[b];

      let x = map(a, 0, stripeNum - 1, stripeGap, width - stripeGap);
      let y = map(b, 0, stripeNum2 - 1, stripeGap, height - stripeGap);

      if (a % 2 == 0) {
        ellipse(x, y, stripeGap);
        fill(255);
      } else {
        ellipse(x, y, stripeGap);
        fill(255);
      }

      let handSize = stripeGap * 0.4;
      let handX = x + cos(rotationAngle) * handSize;
      let handY = y + sin(rotationAngle) * handSize;
      line(x, y, handX, handY);

      // 바늘 끝에 같이 도는 원
      fill(0);
      noStroke();
      let circleX = x + cos(rotationAngle) * handSize;
      let circleY = y + sin(rotationAngle) * handSize;

      ellipse(circleX, circleY, stripeGap * 0.25);
    }
  }

  // 시계 바늘 각도를 증가
  for (let i = 0; i < clockHandAngles.length; i++) {
    clockHandAngles[i] += radians(0.5);
  }
}
