//getUserMedia()

let capture;
const gridSize = 10;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  let constraints = {
    video: {
      width: { exact: 50 },
      height: { exact: 50 },
      frameRate: {
        ideal: 30,
        min: 10,
      },
    },
    audio: false,
  };
  capture = createCapture(constraints);

  console.log(capture);
  capture.hide();
}

function draw() {
  //   background('white');
  image(capture, 0, 0, width, height);
  loadPixels();
  background('white');
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      const idx = (width * y + x) * 4;
      const norm = pixels[idx] / 255;
      fill(0);
      noStroke();
      ellipse(x, y, gridSize * 1.5 * (1 - norm));
    }
  }
}
