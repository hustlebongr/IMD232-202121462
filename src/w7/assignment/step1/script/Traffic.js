// Traffic이라는 클래스를 생성
class Traffic {
  // constructor() << 초기 설정을 위한 생성자
  constructor() {
    // vehicles 이라는 배열 (array = []) 생성
    this.vehicles = [];
  }
  // 앞의 sketch.js 26번째 줄 function set up 안에 있는 run()함수를 말하는 구문
  run() {
    // vehicles 이라는 것을 forEach 각각에 대해 계산을 적용함
    this.vehicles.forEach((eachVehicle) => {
      // const >> 변수를 선언할 때 사용되는 키워드
      // 아래의 구문은 separate 라는 변수(힘)는 각각의 vehicles에 대해서 퍼트린다는 내용을 담은 선언
      const separate = eachVehicle.separate(this.vehicles);
      //separate에 1을 곱한다. (힘의 크기 조절 가능)
      separate.mult(1);
      // eachVehicle 에 separate 라는 힘을 적용
      eachVehicle.applyForce(separate);
      // const >> 변수를 선언할 때 사용되는 키워드
      // 아래의 구문은 align 한다는 것은 각각의 vehicles에 대해서 정렬한다는 내용
      const align = eachVehicle.align(this.vehicles);
      // align 이라는 것에 0.5 를 곱한다 (크기 조절 가능)
      align.mult(0.5);
      // eachVehicle 에 align 라는 힘을 적용
      eachVehicle.applyForce(align);
      // const >> 변수를 선언할 때 사용되는 키워드
      // 아래의 구문은 cohesion 한다는 것은 각각의 vehicles에 cohesion한다는 내용
      const cohesion = eachVehicle.cohesion(this.vehicles);
      // cohesion 이라는 것에 0.5 를 곱한다 (크기 조절 가능)
      cohesion.mult(0.5);
      // eachVehicle 에 cohesion 이라는 힘을 적용
      eachVehicle.applyForce(cohesion);
      // eachVehicle을 update함
      eachVehicle.update();
      // eachVehicle에 borderInfinite 라는 것을 적용함 (Vehicle.js 96번줄 참고)
      eachVehicle.borderInfinite();
      // eachVehicle에 display 라는 것을 적용함 (Vehicle.js 109번줄 참고)
      eachVehicle.display();
    });
  }
  //addVehicle(x, y)x와y의 초기 위치 생성
  addVehicle(x, y) {
    // 질량을 1로 설정함
    const mass = 1;
    // vehicles에 객체를 추가하는 작업 실행
    this.vehicles.push(
      // 새로 추가되는 아이들에 대한 값
      // Vehicle.js 2번째 줄의 constructor(x, y, mass, rad, speedMx, forceMx, color) 에 각각 해당하는 값을 집어넣음.
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}
