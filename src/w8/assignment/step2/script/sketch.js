let emitter;
let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  gravity = createVector(0, 0.1); //중력 0.1
  background(255);
}

function draw() {
  background('beige');
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update(gravity);
    emitters[i].display();
  }
  console.log(emitters.length);
}

function mousePressed() {
  emitter = new Emitter(mouseX, mouseY);
  emitter.addParticle();
  emitters.push(emitter);
}
