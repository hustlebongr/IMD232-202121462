const canvasWidth = 800;
const canvasHeight = 600;

// 기본 변수 선언
const {
  Engine,
  Render,
  Runner,
  Body: MatterBody,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Common,
  Vertices,
} = Matter;

// decomp 사용
Common.setDecomp(decomp);

// 엔진 생성
const engine = Engine.create(),
  world = engine.world;

// 러너 생성
const runner = Runner.create();
Runner.run(runner, engine);
const walls = [];

let group;
let rope1;
let rope2;
let rope3;

let mouse;

function setup() {
  setCanvasContainer('canvas', canvasWidth, canvasHeight, true);

  // 도형 설정
  const concave1 = [
    { x: -28, y: 0 },
    { x: -10, y: -18 },
    { x: 28, y: -6 },
    { x: 4, y: 12 },
    { x: 0, y: 44 },
    { x: -24, y: 23 },
  ];
  const concave2 = [
    { x: 33.33, y: 0 },
    { x: 23.33, y: 16.67 },
    { x: 33.33, y: 33.33 },
    { x: -8.67, y: 33.33 },
    { x: 0, y: 16.67 },
    { x: -8.67, y: 0 },
  ];
  const concave3 = [
    { x: 20, y: 0 },
    { x: 20, y: 10 },
    { x: 50, y: 10 },
    { x: 50, y: 40 },
    { x: 20, y: 40 },
    { x: 20, y: 50 },
    { x: 0, y: 25 },
  ];

  // 랜덤하게 정점을 조절하는 함수
  const getRandomVertices = (vertices) => {
    return vertices.map((vertex) => ({
      x: vertex.x + Math.random() * 10 - 5,
      y: vertex.y + Math.random() * 10 - 5,
    }));
  };

  // 다각형 분해
  const Body1 = decomp.quickDecomp(concave1);
  const Body2 = decomp.quickDecomp(concave2);
  const Body3 = decomp.quickDecomp(concave3);

  group = MatterBody.nextGroup(true);

  rope1 = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, getRandomVertices(concave1), {
      collisionFilter: { group: group },
    });
  });
  Composites.chain(rope1, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    rope1,
    Constraint.create({
      bodyB: rope1.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: rope1.bodies[0].position.x, y: rope1.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = MatterBody.nextGroup(true);

  rope2 = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x - 20, y, getRandomVertices(concave2), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(rope2, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    rope2,
    Constraint.create({
      bodyB: rope2.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: rope2.bodies[0].position.x, y: rope2.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = MatterBody.nextGroup(true);

  rope3 = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x - 20, y, getRandomVertices(concave3), {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(rope3, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Composite.add(
    rope3,
    Constraint.create({
      bodyB: rope3.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: rope3.bodies[0].position.x, y: rope3.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  // 요소를 세계에 추가하기
  Composite.add(world, [
    rope1,
    rope2,
    rope3,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  // 마우스 컨트롤 추가하기
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / canvasWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  background('beige');

  Runner.run(runner, engine);

  // 확인
  console.log('group', group);
  console.log('rope1', rope1);
  console.log('rope2', rope2);
  console.log('rope3', rope3);
  console.log('Bodies', Bodies);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / canvasWidth;

  background('beige');
  colorMode(HSL);

  // concave1 그리기
  stroke(200, 80, 70);
  fill(200, 80, 70);
  drawParts(rope1);

  // concave2 그리기
  stroke(50, 80, 70);
  fill(50, 80, 70);
  drawParts(rope2);

  // concave3 그리기
  stroke(0, 80, 70);
  fill(0, 80, 70);
  drawParts(rope3);

  console.log('length', rope3.bodies[1].parts.length); // 4
}

// 도움 함수: 다각형 부분 그리기
function drawParts(rope) {
  rope.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / canvasWidth) * width,
          (eachVertex.y / canvasHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
