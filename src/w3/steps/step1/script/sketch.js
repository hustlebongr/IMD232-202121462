let x;
let y;
let velocityX = 3;
let velocityY = 5;
//숫자와 양수 음수에 따라서 움직이는 방향과 속도가 다르다

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  x = width / 2.0;
  y = height / 2.0;
  // set up 위에 let x; let y; 를 설정하고 x와 y의 위치를 설정해서 아래의 ellipse를 나타낼 수 있도록 함.
}
function draw() {
  background('white');
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  //   if (x < 0) {
  //     velocityX *= -1;
  //   } else if (x > width) {
  //     velocityX *= -1;
  //   }
  if (x < 0 || x > width) {
    velocityX *= -1;
  }
  // || < or 이라는 의미 (else if)

  //   if (y < 0) {
  //     velocityY *= -1;
  //   } else if (y > height) {
  //     velocityY *= -1;
  //   }
  if (y < 0 || y > height) {
    velocityY *= -1;
  }
}
