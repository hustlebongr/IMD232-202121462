// let Engine = Matter.Engine,
//   Render = Matter.Render,
//   Runner = Matter.Runner,
//   Bodies = Matter.Bodies,
//   Composite = Matter.Composite;
let Engine = Matter.Engine;
let Render = Matter.Render;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;

// 필수과정 1: 엔진 만들기
let engine = Engine.create();

let elem = document.querySelector('#canvas');
console.log(elem);

// 필수과정 2: 렌더러 만들기
let render = Render.create({
  element: elem,
  engine: engine,
  options: {
    width: elem.clientWidth,
    height: (elem.clientWidth / 4) * 3,
  },
});
console.log(render);

// 옵션과정 1: 물체 만들기
let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(400, 610, 400, 20, { isStatic: true });
console.log(ground);

// 옵션과정 2: 물체를 세계에 추가하기
// Composite.add(engine.world, [boxA, boxB, ground]);
Composite.add(engine.world, boxA);
Composite.add(engine.world, boxB);
Composite.add(engine.world, ground);

// 필수과정 3: 그림그리기
Render.run(render);

// 필수과정 4: 자동으로 계속 동작하게 해주는 장치 만들기
let runner = Runner.create();

// 필수과정 5: 자동 뺑뺑이에게 엔진을 등록해서 ㄱㄱㄱ
Runner.run(runner, engine);
