let pos;
let vel;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  //위의 pos에 관련하여 벡터를 만듬(랜덤,랜덤)으로 해서 벡터의 포지션을 랜덤으로 함
  //random(min,max)
  //아래의 랜덤은 너비와 높이에 관해서 그 미만의 랜덤된 숫자가 나오게 됨
  //   vel = createVector(random(-5, 5), random(-5, 5));
  pos = createVector(random(width), random(height));
  // //   일정속도 방법1
  //   vel = createVector(1, 0);
  //   2파이에 해당하는 TAU
  //   vel.rotate(random(TAU));
  //   vel.mult(5);

  // random2D() 랜덤한 방향으로 움직이는 벡터를 만들어줌
  vel = p5.Vector.random2D();
  vel.mult(10);
  //  console.log('pos', pos); 앞의 'pos'는 무엇인지 알 수 있는 이름
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('mag', vel.mag());
}

function draw() {
  //이하의 여러가지 함수들을 이름을 지어서 직접 만든다. 간소화 해서 작성
  background('orange');
  update();
  checkEdges();
  display();
}
//function update 함수의 이름을 짓고 , 함수가 할 것을 만든다.
function update() {
  pos.add(vel);
}

//function checkEdges 모듈화 해나가는중
function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);
}
