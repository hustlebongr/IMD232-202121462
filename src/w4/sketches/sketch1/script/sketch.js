let ball;
let ball2;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ball = new Mover(width / 2, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0);
}

function draw() {
  let g = p5.Vector.mult(gravity, ball.mass);
  ball.applyForce(g);
  let g2 = p5.Vector.mult(gravity, ball2.mass);
  ball2.applyForce(g2);
  if (mouseIsPressed) {
    ball.applyForce(wind);
    ball2.applyForce(wind);
  }
  ball.update();
  ball2.update();
  ball.edgaBounce();
  ball2.edgaBounce();
  background('salmon');
  fill('white');
  ball.display();
  ball2.display();
}
