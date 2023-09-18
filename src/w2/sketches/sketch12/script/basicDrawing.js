function setup() {
  setCanvasContainer('p5-canvas', 1200, 1200, true);
  background('white');
}

function draw() {
  colorMode(RGB);
  fill(180);
  noStroke();
  rectMode(CORNER);
  background(140);
  //맨위
  fill(200);
  rect(0, 0, width, height / 30);
  //벽 background
  //바닥
  rect(0, (height * 5) / 6, width, height / 2);
  //조명
  fill(255, 255, 255, 20);
  circle(width / 2, (height * 58) / 120, width / 15, width / 15);
  fill(255, 255, 255, 30);
  circle(width / 2, (height * 58) / 120, width / 15 - 10, width / 15 - 10);
  fill(255, 255, 255, 50);
  circle(width / 2, (height * 58) / 120, width / 15 - 20, width / 15 - 20);
  fill(255, 255, 255, 70);
  circle(width / 2, (height * 58) / 120, width / 15 - 30, width / 15 - 30);
  fill(255, 255, 255, 90);
  circle(width / 2, (height * 58) / 120, width / 15 - 40, width / 15 - 40);

  //조명 선
  fill(60);
  rect(width / 2, 0, width / 200, (height * 58) / 120);
  //조명 갓
  rectMode(CENTER);
  fill(60);
  rect(width / 2, (height * 55) / 120, width / 10, height / 20);
  //바닥걸레받이
  rectMode(CORNER);
  fill(80);
  rect(0, (height * 5) / 6, width, 10);

  //왼쪽 창문
  fill('#636464');
  rect(0, height / 6, (width * 18) / 120, (height * 67) / 120);
  //창문 내부
  fill('#5AC5FA');
  rect(0, (height * 225) / 1200, (width * 160) / 1200, (height * 180) / 1200);
  //창문 들판
  fill('#5CBB69');
  rect(0, height / 2, (width * 160) / 1200, (height * 200) / 1200);
  //집지붕
  fill('#5A5A5F');
  rect(0, (height * 400) / 1200, (width * 160) / 1200, (height * 80) / 1200);
  //집앞면
  fill('#C8C8E8');
  rect(0, (height * 475) / 1200, (width * 160) / 1200, (height * 125) / 1200);
  //집옆면1
  fill('#DCDCFC');
  rect(0, (height * 475) / 1200, (width * 80) / 1200, (height * 125) / 1200);
  //집 옆면
  fill('#DCDCFC');
  triangle(
    0,
    (height * 400) / 1200,
    0,
    (height * 475) / 1200,
    (width * 80) / 1200,
    (height * 475) / 1200
  );
  //굴뚝
  fill(60);
  rect(
    (width * 40) / 1200,
    (height * 380) / 1200,
    (width * 30) / 1200,
    (height * 20) / 1200
  );
  //집 창문
  fill('#BE85D2');
  rect(0, (height * 480) / 1200, (width * 15) / 1200, (height * 40) / 1200);

  //창문 가로지르기
  fill('#636464');
  rect(0, (height * 520) / 1200, (width * 160) / 1200, (height * 20) / 1200);

  //창문 받이
  fill('#787878');
  rect(0, (height * 800) / 1200, (width * 200) / 1200, (height * 20) / 1200);
  //창문받이 그림자
  fill(60);
  rect(0, (height * 820) / 1200, (width * 18) / 120, (height * 20) / 1200);
  //커튼 봉
  fill(60);
  rect(0, (height * 220) / 1200, (width * 220) / 1200, (height * 10) / 1200);
  //커튼 봉 동그리
  fill(60);
  circle(
    (width * 220) / 1200,
    (height * 220) / 1200 + (height * 5) / 1200,
    (width * 20) / 1200,
    (width * 20) / 1200
  );
  //오른쪽 액자 테두리
  fill('#C7C7C7');
  rect(820, 240, 170, 190);
  //오른쪽 액자
  fill('#FFBA00');
  rect(830, 250, 150, 170);
  //쥐구멍
  fill(40);
  rect(900, 530, 30, 30, 20, 20, 0, 0);
  //탁자
  fill('#B4B4B4');
  rect(280, 450, 450, 10);
  rect(300, 450, 410, 40);
  rect(300, 450, 30, 150);
  rect(680, 450, 30, 150);
  fill(120);
  rect(300, 460, 410, 5);
  //쥬스병
  fill('#D1D1D1');
  rect(330, 370, 50, 80);
  rect(630, 370, 50, 80);
  //쥬스
  fill('#A04E4B');
  rect(335, 390, 40, 50);
  rect(635, 420, 40, 20);
  //귤back
  fill('#B78E2F');
  circle(450, 410, 70, 70);
  circle(510, 410, 70, 70);
  circle(560, 420, 50, 50);
  //귤front
  fill('#C19832');
  circle(480, 410, 70, 70);
  //귤 꼭지
  fill('#54942A');
  circle(480, 390, 7, 7);
  circle(435, 395, 7, 7);
  circle(570, 405, 5, 5);

  //바구니
  fill('#3376DF');
  rect(405, 420, 200, 5);
  fill('#4294F8');
  rect(410, 425, 190, 25, 0, 0, 300, 300);

  //탁자 발
  fill(70);
  rect(305, 600, 20, 5);
  rect(685, 600, 20, 5);
  //의자
  fill('#FF286D');
  rect(230, 500, 350, 10);
  fill('#C7C8C8');
  rect(230, 510, 350, 10);
  rect(250, 510, 20, 100);
  rect(540, 510, 20, 100);
  //의자발
  fill(90);
  rect(255, 610, 12.5, 3);
  rect(545, 610, 12.5, 3);
  //의자2
  fill('#FF286D');
  rect(670, 500, 200, 10);
  fill('#C7C8C8');
  rect(670, 510, 200, 10);
  rect(670, 510, 20, 100);
  rect(850, 510, 20, 100);
  //의자발2
  fill(90);
  rect(675, 610, 12.5, 3);
  rect(855, 610, 12.5, 3);
  //커튼
  fill(255, 255, 255, 90);
  rect(90, 170, 70, 300);
}
