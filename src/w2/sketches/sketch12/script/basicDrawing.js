function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}
function draw() {
  let canvasWidth = width; // 캔버스 가로 크기
  let canvasHeight = height; // 캔버스 세로 크기
  noStroke();

  // 바닥 그리기
  fill(128, 128, 128); // 회색 바닥
  rect(0, canvasHeight - 50, canvasWidth, 50); // 바닥 영역

  // 벽 그리기
  fill(200, 200, 200); // 회색 벽
  rect(0, 0, canvasWidth, canvasHeight - 50); // 벽

  // 그림 크기 설정
  let pictureWidth = canvasWidth * 0.6; // 그림 가로 크기를 캔버스 가로 크기의 60%로 설정
  let pictureHeight = pictureWidth * 0.6; // 그림 세로 크기를 가로 크기의 60%로 설정

  // 그림 위치 설정 (가운데로 이동)
  let pictureX = (canvasWidth - pictureWidth) / 2;
  let pictureY = (canvasHeight - pictureHeight) / 2;

  // 맨 위
  fill(200);
  rect(0, 0, canvasWidth, 30);

  // 조명
  let lightX = canvasWidth / 2;
  let lightY = canvasHeight * 0.4;
  let lightRadius = canvasWidth * 0.2;

  for (let i = 1; i <= 5; i++) {
    let alpha = 20 + i * 20;
    fill(255, 255, 255, alpha);
    circle(lightX, lightY, lightRadius - (i - 1) * 10);
  }

  // 조명 선
  fill(60);
  rect(lightX, 0, 5, lightY - lightRadius);

  // 조명 갓
  fill(60);
  rectMode(CENTER);
  rect(lightX, lightY - lightRadius / 2, canvasWidth * 0.3, 70, 10);

  // 바닥 걸레받이
  fill(80);
  rect(0, canvasHeight * 0.92, canvasWidth, 10);

  // 왼쪽 창문
  fill('#636464');
  rect(0, canvasHeight * 0.25, canvasWidth * 0.18, canvasHeight * 0.5);

  // 창문 내부
  fill('#5AC5FA');
  rect(0, canvasHeight * 0.27, canvasWidth * 0.16, canvasHeight * 0.45);

  // 집 부분
  fill('#C8C8E8');
  rect(
    canvasWidth * 0.05,
    canvasHeight * 0.35,
    canvasWidth * 0.1,
    canvasHeight * 0.1
  );

  // 집 옆면
  fill('#DCDCFC');
  beginShape();
  vertex(0, canvasHeight * 0.25);
  vertex(0, canvasHeight * 0.35);
  vertex(canvasWidth * 0.05, canvasHeight * 0.35);
  endShape(CLOSE);

  // 굴뚝
  fill(60);
  rect(
    canvasWidth * 0.04,
    canvasHeight * 0.2,
    canvasWidth * 0.03,
    canvasHeight * 0.05
  );

  // 집 창문
  fill('#BE85D2');
  rect(0, canvasHeight * 0.275, canvasWidth * 0.018, canvasHeight * 0.045);

  // 창문 가로지르기
  fill('#636464');
  rect(0, canvasHeight * 0.28, canvasWidth * 0.18, canvasHeight * 0.006);

  // 창문 받이
  fill('#787878');
  rect(0, canvasHeight * 0.37, canvasWidth * 0.2, canvasHeight * 0.007);

  // 커튼 봉
  fill(60);
  rect(0, canvasHeight * 0.27, canvasWidth * 0.18, canvasHeight * 0.003);

  // 커튼 봉 동그리
  fill(60);
  circle(canvasWidth * 0.19, canvasHeight * 0.27, canvasWidth * 0.005);

  // 오른쪽 액자 테두리
  fill('#C7C7C7');
  rect(
    canvasWidth * 0.875,
    canvasHeight * 0.4,
    canvasWidth * 0.2125,
    canvasHeight * 0.3175
  );

  // 오른쪽 액자
  fill('#FFBA00');
  rect(
    canvasWidth * 0.8875,
    canvasHeight * 0.4167,
    canvasWidth * 0.2,
    canvasHeight * 0.2833
  );

  // 쥐구멍
  fill(40);
  rect(
    canvasWidth * 0.9375,
    canvasHeight * 0.8833,
    canvasWidth * 0.0375,
    canvasHeight * 0.05,
    20,
    20,
    0,
    0
  );

  // 탁자
  fill('#B4B4B4');
  let tableTopWidth = canvasWidth * 0.5625;
  let tableTopHeight = canvasHeight * 0.0167;
  rect(canvasWidth * 0.35, canvasHeight * 0.75, tableTopWidth, tableTopHeight);

  let legWidth = canvasWidth * 0.01875;
  let legHeight = canvasHeight * 0.25;
  rect(canvasWidth * 0.35, canvasHeight * 0.7667, legWidth, legHeight);
  rect(canvasWidth * 0.8875, canvasHeight * 0.7667, legWidth, legHeight);

  // 쥬스병
  fill('#D1D1D1');
  rect(
    canvasWidth * 0.4125,
    canvasHeight * 0.6167,
    canvasWidth * 0.0375,
    canvasHeight * 0.1333
  );
  rect(
    canvasWidth * 0.7125,
    canvasHeight * 0.6167,
    canvasWidth * 0.0375,
    canvasHeight * 0.1333
  );

  // 쥬스
  fill('#A04E4B');
  rect(
    canvasWidth * 0.41875,
    canvasHeight * 0.65,
    canvasWidth * 0.03,
    canvasHeight * 0.0833
  );
  rect(
    canvasWidth * 0.71875,
    canvasHeight * 0.65,
    canvasWidth * 0.03,
    canvasHeight * 0.0333
  );

  // 귤back
  fill('#B78E2F');
  circle(canvasWidth * 0.525, canvasHeight * 0.6833, canvasWidth * 0.0583);
  circle(canvasWidth * 0.5625, canvasHeight * 0.6833, canvasWidth * 0.0583);
  circle(canvasWidth * 0.60625, canvasHeight * 0.7, canvasWidth * 0.0417);

  // 귤front
  fill('#C19832');
  circle(canvasWidth * 0.5625, canvasHeight * 0.6833, canvasWidth * 0.0583);

  // 귤 꼭지
  fill('#54942A');
  circle(canvasWidth * 0.5625, canvasHeight * 0.6667, canvasWidth * 0.007);
  circle(canvasWidth * 0.525, canvasHeight * 0.67, canvasWidth * 0.007);
  circle(canvasWidth * 0.60625, canvasHeight * 0.6833, canvasWidth * 0.0042);

  // 바구니
  fill('#3376DF');
  rect(
    canvasWidth * 0.50625,
    canvasHeight * 0.7,
    canvasWidth * 0.25,
    canvasHeight * 0.0083
  );
  fill('#4294F8');
  rect(
    canvasWidth * 0.5125,
    canvasHeight * 0.7083,
    canvasWidth * 0.2375,
    canvasHeight * 0.0417,
    0,
    0,
    canvasWidth * 0.125,
    canvasWidth * 0.125
  );

  // 탁자 발
  fill(70);
  rect(
    canvasWidth * 0.38125,
    canvasHeight * 0.9333,
    canvasWidth * 0.025,
    canvasHeight * 0.0083
  );
  rect(
    canvasWidth * 0.85625,
    canvasHeight * 0.9333,
    canvasWidth * 0.025,
    canvasHeight * 0.0083
  );

  // 의자
  let chairWidth = canvasWidth * 0.4375;
  let chairHeight = canvasHeight * 0.0833;
  fill('#FF286D');
  rect(canvasWidth * 0.2875, canvasHeight * 0.8333, chairWidth, chairHeight);
  fill('#C7C8C8');
  rect(canvasWidth * 0.2875, canvasHeight * 0.8417, chairWidth, chairHeight);
  rect(
    canvasWidth * 0.3125,
    canvasHeight * 0.8417,
    canvasWidth * 0.0417,
    canvasHeight * 0.4167
  );
  rect(
    canvasWidth * 0.6458,
    canvasHeight * 0.8417,
    canvasWidth * 0.0417,
    canvasHeight * 0.4167
  );

  // 의자발
  fill(90);
  rect(
    canvasWidth * 0.3229,
    canvasHeight * 0.9417,
    canvasWidth * 0.015625,
    canvasHeight * 0.025
  );
  rect(
    canvasWidth * 0.6573,
    canvasHeight * 0.9417,
    canvasWidth * 0.015625,
    canvasHeight * 0.025
  );

  // 의자2
  fill('#FF286D');
  rect(
    canvasWidth * 0.80625,
    canvasHeight * 0.8333,
    canvasWidth * 0.2083,
    chairHeight
  );
  fill('#C7C8C8');
  rect(
    canvasWidth * 0.80625,
    canvasHeight * 0.8417,
    canvasWidth * 0.2083,
    chairHeight
  );
  rect(
    canvasWidth * 0.80625,
    canvasHeight * 0.8417,
    canvasWidth * 0.0417,
    canvasHeight * 0.4167
  );
  rect(
    canvasWidth * 0.9875,
    canvasHeight * 0.8417,
    canvasWidth * 0.0417,
    canvasHeight * 0.4167
  );

  // 의자발2
  fill(90);
  rect(
    canvasWidth * 0.8229,
    canvasHeight * 0.9417,
    canvasWidth * 0.015625,
    canvasHeight * 0.025
  );
  rect(
    canvasWidth * 0.9875,
    canvasHeight * 0.9417,
    canvasWidth * 0.015625,
    canvasHeight * 0.025
  );

  // 커튼
  fill(255, 255, 255, 90);
  rect(
    canvasWidth * 0.1125,
    canvasHeight * 0.2833,
    canvasWidth * 0.0875,
    canvasHeight * 0.5
  );
}
