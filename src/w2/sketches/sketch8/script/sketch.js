function setup() {
  setCanvasContainer('canvas-goes-here', 800, 300, true);
  background('#ff7733');
}

function draw() {
  background('#ff7733');
  circle(mouseX, mouseY, width * 0.1);
}
