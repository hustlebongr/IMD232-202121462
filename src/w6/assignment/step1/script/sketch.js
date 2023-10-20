// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  //위에 있는 파티클을 넣는것. Particle(width / 2, 20)>> 너비 중간 , 20 쯤에 생성
  //particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  if (random(1) < 0.9) {
    // 일정 확률로 파티클 생성
    particleArray.push(new Particle(random(width), -100)); // 높이를 0으로 설정하여 맨 위에서 생성
  }

  background('beige');
  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display();
  }
  //사라진 애들은 죽이고 계산하지 않는 내용
  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      //스플라이스의 기능 (드러내고 , 당겨오는 것)
      particleArray.splice(a, 1);
    }
  }

  console.log(particleArray.length);
}
