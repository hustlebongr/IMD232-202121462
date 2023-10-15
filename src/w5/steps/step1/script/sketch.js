let aVariable = 20;
let anArray = [30, 60, 90];
let anotherArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log('aVariable', aVariable);
  console.log('anArray', anArray);
  //위에 있는 let anArray = [30, 60, 90];를 어떻게 가져오는지에 대한 이해
  //''안에있는 내용을 콘솔을 보기 위함이니 상관없음
  console.log('anArray[0]', anArray[0]);
  console.log('anArray[1]', anArray[1]);
  console.log('anArray[2]', anArray[2]);
  console.log('anArray.length', anArray.length);

  console.log('anotherArray', anotherArray);
  console.log('anotherArray.length', anotherArray.length);
  console.log('anotherArray[0]', anotherArray[0]);
  console.log('anotherArray[1]', anotherArray[1]);
  anotherArray.push('어레이에 넣은 첫 데이터');
  console.log('anotherArray[0]', anotherArray[0]);
  anotherArray.push(50);
  console.log('anotherArray[1]', anotherArray[1]);

  background(255);
}
function draw() {}
