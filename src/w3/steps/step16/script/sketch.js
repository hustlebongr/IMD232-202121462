let pos;
let vel;
let acc;
let rad = 50;

let anInstance;
let anotherInstance;
let instanceArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  reset();
  anInstance = new Mover();
  anotherInstance = new Mover();
  for (let i = 0; i < 10; i++) {
    instanceArray.push(new Mover());
  }
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
  anInstance.update();
  anInstance.infiniteEdge();
  anInstance.display();
  anotherInstance.update();
  anotherInstance.infiniteEdge();
  anotherInstance.display();
  instanceArray.forEach((eachInstance) => {
    eachInstance.update();
    eachInstance.infiniteEdge();
    eachInstance.display();
  });
}

function reset() {
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function display() {
  ellipse(pos.x, pos.y, 2 * rad);
}
