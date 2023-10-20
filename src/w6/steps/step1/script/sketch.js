let particle;
//중력에 해당하는 변수
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //위에 있는 파티클을 넣는것. Particle(width / 2, 20)>> 너비 중간 , 20 쯤에 생성
  particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  //   console.log(particle.isDead());
  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
  }
  particle.applyForce(gravity);
  particle.update();
  background(255);
  particle.display();
}
