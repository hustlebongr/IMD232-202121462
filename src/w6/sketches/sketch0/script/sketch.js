class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.balls = [];
  }

  createBall() {
    this.balls.push(
      new Ball(
        this.emittingPos.x,
        this.emittingPos.y,
        random(1, 5),
        random(360),
        100,
        50
      )
    );
  }

  applyGravity(gravity) {
    this.balls.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  applyForce(force) {
    this.balls.forEach((each) => {
      each.applyForce(force);
    });
  }

  update() {
    this.balls.forEach((each) => {
      each.update();
    });
  }

  display() {
    this.balls.forEach((each) => {
      each.display();
    });
  }
}

class Ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    // this.acc.setMag(0);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let emitter;
let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvasGoesHere', 2, 1, true);

  colorMode(HSL, 360, 100, 100);

  emitter = new Emitter(width / 2, 0);

  for (let n = 0; n < 10; n++) {
    balls.push(new Ball(random(width), 0, random(1, 20), random(360), 100, 50));
  }

  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);

  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = p5.Vector.mult(gravity, each.mass);
    each.applyForce(scaledG);
    each.applyForce(wind);
    each.update();
    each.display();
  });
  emitter.createBall();
  emitter.applyGravity(gravity);
  emitter.applyForce(wind);
  emitter.update();
  emitter.display();
}

function mousePressed() {
  for (let n = 0; n < balls.length; n++) {
    balls[n] = new Ball(random(width), 0, random(1, 20), random(360), 100, 50);
  }
}
