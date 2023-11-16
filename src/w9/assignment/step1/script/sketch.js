const oWidth = 800;
const oHeight = 600;

// 기본 변수 선언
const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Common,
  Vertices,
} = Matter;

//decomp 사용
Common.setDecomp(decomp);

// create engine
const engine = Engine.create(),
  world = engine.world;

// create runner
const runner = Runner.create();
Runner.run(runner, engine);
const walls = [];

let group;
let ropeA;
let ropeB;
let ropeC;

let mouse;

function setup() {
  setCanvasContainer('canvas', oHeight, oHeight, true);

  //도형 설정
  const concave1 = (vertices = [
    { x: -28, y: 0 },
    { x: -10, y: -18 },
    { x: 28, y: -6 },
    { x: 4, y: 12 },
    { x: 0, y: 44 },
    { x: -24, y: 23 },
  ]);
  concave2 = vertices = [
    { x: 33.33, y: 0 },
    { x: 23.33, y: 16.67 },
    { x: 33.33, y: 33.33 },
    { x: -8.67, y: 33.33 },
    { x: 0, y: 16.67 },
    { x: -8.67, y: 0 },
  ];
  concave3 = vertices = [
    { x: 20, y: 0 },
    { x: 20, y: 10 },
    { x: 50, y: 10 },
    { x: 50, y: 40 },
    { x: 20, y: 40 },
    { x: 20, y: 50 },
    { x: 0, y: 25 },
  ];

  //다각형 분해
  const Body = decomp.quickDecomp(concave1);
  const Body2 = decomp.quickDecomp(concave2);
  const Body3 = decomp.quickDecomp(concave3);

  group = Matter.Body.nextGroup(true);

  ropeA = Matter.Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x, y, concave1, {
      collisionFilter: { group: group },
    });
  });
  Matter.Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Matter.Composite.add(
    ropeA,
    Matter.Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeB = Matter.Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x - 20, y, concave2, {
      collisionFilter: { group: group },
    });
  });

  Matter.Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Matter.Composite.add(
    ropeB,
    Matter.Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeC = Matter.Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x - 20, y, concave3, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Matter.Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Matter.Composite.add(
    ropeC,
    Matter.Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //요소를 세계에 추가하기
  Matter.Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Matter.Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  // add mouse control
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  // change background color
  background('#3F3A4A');
  // run the engine
  Runner.run(runner, engine);

  // 확인
  console.log('group', group);
  console.log('ropeA', ropeA);
  console.log('ropeB', ropeB);
  console.log('ropeC', ropeC);
  console.log('Bodies', Bodies);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;

  // change background color
  background('salmon');
  colorMode(HSL);

  // draw concave1
  stroke(54, 90, 80);
  fill(54, 90, 80);
  drawParts(ropeA);

  // draw concave2
  stroke(100, 90, 80);
  fill(100, 90, 80);
  drawParts(ropeB);

  // draw concave3
  stroke(250, 90, 80);
  fill(250, 90, 80);
  drawParts(ropeC);

  console.log('length', ropeC.bodies[1].parts.length); // 4
}

// helper function to draw concave parts
function drawParts(rope) {
  rope.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
