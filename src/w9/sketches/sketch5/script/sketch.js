//매터 쓰기 위한 기본 변수
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Events = Matter.Events,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// 엔진 만들기
var engine = Engine.create(),
  world = engine.world;

// 러너 만들고 실행하기
var runner = Runner.create();
Runner.run(runner, engine);

// draw에서도 쓸 수 있게 변수 선언만 여기서
let ground;
let rocks = [];
let elastic;
let pyramid;
let ground2;
let pyramid2;

let m;
let mc;

const originalWidth = 800;
const originalHeight = 600;

let released = false;

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // 바디 만들기
  // 변수에 할당은 여기서
  ground = Bodies.rectangle(395, 600, 815, 50, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });
  let aNewRock = Bodies.polygon(170, 450, 8, 20, { density: 0.004 });
  rocks.push(aNewRock);
  elastic = Constraint.create({
    pointA: { x: 170, y: 450 },
    bodyB: aNewRock,
    length: 0.01,
    damping: 0.01,
    stiffness: 0.05,
  });
  pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });
  ground2 = Bodies.rectangle(610, 250, 200, 20, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });
  pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });

  // 만든 바디를 세계에 추가
  Composite.add(engine.world, [
    ground,
    pyramid,
    ground2,
    pyramid2,
    aNewRock,
    elastic,
  ]);

  //   m = Mouse.create(document.querySelector("#defaultCanvas0"));
  m = Mouse.create(document.querySelector('.p5Canvas'));
  //   m.pixelRatio = pixelDensity();
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);

  console.log('ground', ground);
  console.log('pyramid', pyramid);
  console.log('ground2', ground2);
  console.log('pyramid2', pyramid2);
  console.log('rock', aNewRock);
  console.log('elastic', elastic);

  background('white');
}

function draw() {
  m.pixelRatio = (pixelDensity() * width) / originalWidth;

  if (released) {
    if (
      rocks[rocks.length - 1].position.x > 190 ||
      rocks[rocks.length - 1].position.y < 430
    ) {
      if (Body.getSpeed(rocks[rocks.length - 1]) > 45) {
        Body.setSpeed(rocks[rocks.length - 1], 45);
      }

      // Release current rock and add a new one.

      let aNewRock = Bodies.polygon(170, 450, 7, 20, { density: 0.004 });
      rocks.push(aNewRock);
      Composite.add(engine.world, aNewRock);
      elastic.bodyB = aNewRock;
      released = false;
    }
  }

  background('white');
  fill(127);
  beginShape();
  ground.vertices.forEach((each) => {
    vertex(
      (each.x / originalWidth) * width,
      (each.y / originalHeight) * height
    );
  });
  endShape(CLOSE);
  beginShape();
  ground2.vertices.forEach((each) => {
    vertex(
      (each.x / originalWidth) * width,
      (each.y / originalHeight) * height
    );
  });
  endShape(CLOSE);

  line(
    (elastic.pointA.x / originalWidth) * width,
    (elastic.pointA.y / originalHeight) * height,
    (elastic.bodyB.position.x / originalWidth) * width,
    (elastic.bodyB.position.y / originalHeight) * height
  );

  rocks.forEach((eachRock) => {
    beginShape();
    eachRock.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  pyramid.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });
  pyramid2.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });
}

function mouseReleased() {
  released = true;
}
