function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  //루프로 인해서 적용한 설정이 넘어오는것을 막기 위함
  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  rect(100, 100, 50, 50);
  ellipse(100, 100, 50, 50);
  rect(200, 100, 25, 50);
  ellipse(200, 100, 50, 25);

  rectMode(CENTER);
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  rect(400, 100, 50, 25);
  ellipse(400, 100, 25, 50);

  fill(255, 127, 0);
  ellipse(100, 200, 50);

  fill('#00EE40');
  circle(200, 200, 50);

  colorMode(HSL);
  fill(240, 100, 70);
  rect(300, 200, 50);
  noStroke();
  square(400, 200, 50);

  rect(100, 300, 50, 50, 20);
  rect(200, 300, 50, 50, 5, 10, 15, 20);

  stroke(0);
  line(100, 400, 150, 450);

  stroke('royalblue');
  line(200, 400, 300, 400);
  stroke('salmon');
  strokeWeight(5);
  line(200, 400, 250, 450);

  stroke(50, 100, 10);
  strokeWeight(2);
  point(300, 400);
  point(310, 400);
  point(320, 400);
  point(330, 400);
  point(340, 400);
  point(350, 400);

  stroke(50, 100, 30);
  strokeWeight(3);
  point(300, 410);
  point(310, 410);
  point(320, 410);
  point(330, 410);
  point(340, 410);
  point(350, 410);

  stroke(50, 100, 50);
  strokeWeight(4);
  point(300, 420);
  point(310, 420);
  point(320, 420);
  point(330, 420);
  point(340, 420);
  point(350, 420);

  stroke(50, 100, 70);
  strokeWeight(6);
  point(300, 430);
  point(310, 430);
  point(320, 430);
  point(330, 430);
  point(340, 430);
  point(350, 430);
}
