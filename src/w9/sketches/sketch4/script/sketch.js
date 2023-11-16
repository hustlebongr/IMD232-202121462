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

// create engine
var engine = Engine.create(),
  world = engine.world;

// create runner
var runner = Runner.create();

let rock;

function setup() {
  setCanvasContainer('canvas', 800, 600, true);

  // add bodies
  var ground = Bodies.rectangle(395, 600, 815, 50, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });
  rock = Bodies.polygon(170, 450, 8, 20, { density: 0.004 });
  var anchor = { x: 170, y: 450 };
  var elastic = Constraint.create({
    pointA: anchor,
    bodyB: rock,
    length: 0.01,
    damping: 0.01,
    stiffness: 0.05,
  });
  var pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });
  var ground2 = Bodies.rectangle(610, 250, 200, 20, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });
  var pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });

  Composite.add(engine.world, [
    ground,
    pyramid,
    ground2,
    pyramid2,
    rock,
    elastic,
  ]);

  // add mouse control
  var mouse = Mouse.create(document.querySelector('.p5Canvas'));
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });
  Composite.add(world, mouseConstraint);

  Runner.run(runner, engine);
  background('white');
}

function draw() {
  background('white');

  beginShape();
  rock.vertices.forEach((each) => {
    vertex(each.x, each.y);
  });
  endShape(CLOSE);
}

// create renderer
// const elem = document.querySelector('#canvas');
// var render = Render.create({
//   element: elem,
//   engine: engine,
//   options: {
//     width: 800,
//     height: 600,
//     showAngleIndicator: true,
//   },
// });
// Render.run(render);

// Events.on(engine, 'afterUpdate', function () {
//   if (
//     mouseConstraint.mouse.button === -1 &&
//     (rock.position.x > 190 || rock.position.y < 430)
//   ) {
//     // Limit maximum speed of current rock.
//     if (Body.getSpeed(rock) > 45) {
//       Body.setSpeed(rock, 45);
//     }

//     // Release current rock and add a new one.
//     rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
//     Composite.add(engine.world, rock);
//     elastic.bodyB = rock;
//   }
// });

// keep the mouse in sync with rendering
// render.mouse = mouse;

// fit the render viewport to the scene
// Render.lookAt(render, {
//   min: { x: 0, y: 0 },
//   max: { x: 800, y: 600 },
// });
