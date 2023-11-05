let traffic;
let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  traffic = new Traffic();

  for (let n = 0; n < 20; n++) {
    traffic.addVehicle(random(width), random(height));
  }

  background(0, 100, 100);
}

function draw() {
  background(0, 100, 100);
  traffic.run();
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
