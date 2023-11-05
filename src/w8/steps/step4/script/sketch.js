let emitters = [];
let gravity = 0;
let repeller;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  for (let i = 0; i < 5; i++) {
    emitters.push(new Emitter((width / 6) * (i + 1), 20));
  }

  gravity = createVector(0, 0.05);

  repeller = new Repeller(width / 2, height / 2, 5000);

  background(255);
}

function draw() {
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background(255);
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].applyGravity(gravity);
    emitters[i].applyRepeller(repeller);
    emitters[i].update();
    emitters[i].display();
  }

  repeller.display();
}

function mouseMoved() {
  repeller.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  repeller.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  repeller.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  repeller.mouseReleased();
}
