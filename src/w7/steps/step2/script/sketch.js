// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //위에 있는 파티클을 넣는것. Particle(width / 2, 20)>> 너비 중간 , 20 쯤에 생성
  //particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  //위에 setup에서 파티클을 생성하지 않고 여기에서 어레이 , 푸시로 생성
  particleArray.push(new Particle(width / 2, 20));
  //   console.log(particle.isDead());

  background(255);
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
