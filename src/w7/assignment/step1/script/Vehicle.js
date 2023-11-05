// 앞서 적은 Vehicle 이라는 클래스를 어떻게 표현할 것인지에 대한 구문
class Vehicle {
  // constructor 클래스의 생성자 메서드를 정의
  // Vehicle 이라는 것의 생성자 (x, y, mass, rad, speedMx, forceMx, color) 로 이루어짐
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // constructor 와 const의 차이
    // constructor  = 객체가 생성될 때 실행되는 코드 블록
    // const = 불변성을 필요로 하는 상수값을 나타내는 데 사용

    // pos 라는 위치를 나타내는 벡터의 생성
    this.pos = createVector(x, y);
    // vel 에 p5.Vector를 이용하여 random2D();의 값으로 속력을 넣어줌 (무작위 방향의 속도 벡터)
    this.vel = p5.Vector.random2D();
    // 가속도 벡터 초기화
    this.acc = createVector();
    // 질량 값
    this.mass = mass;
    // 반지름 값
    this.rad = rad;
    // 최고 속도 설정
    this.speedMx = speedMx;
    // 최고 힘 설정
    this.forceMx = forceMx;
    // 생성되는 주변 Vehicle의 rad 값을 50으로 설정
    this.neighborhooodRad = 50;
    // 색상 설정
    this.color = color;
  }

  // cohesion이라는 메서드 설정 (Traffic.js 28번줄 참고)
  cohesion(others) {
    // 생성되는 주변 Vehicle 카운트 초기화
    let cnt = 0;
    // 방향 벡터 초기화
    const steer = createVector(0, 0);
    // 자신을 제외한 각 이웃 Vehicle에 대해 반복
    others.forEach((each) => {
      if (each !== this) {
        // 자신과 이웃 Vehicle에 대한 제곱 계산
        const distSq =
          // 이웃 Vehicle에 대한 반경 계산. (위치x - 각각의 위치x)제곱 + (위치y - 각각의 위치y)
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        //위에 계산한 반경이 this.neighborhooodRad ** 2 보다 작다면 , steer에 each.pos를 더한다.
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          // 이웃 Vehicle 수량 증가
          cnt++;
        }
      }
    });
    // 이웃 Vehicle 수량이 0개 이상인 경우
    if (cnt > 0) {
      // 방향 벡터를 이웃 차량의 평균 위치로 설정 (steer를 cnt로 나눔)
      steer.div(cnt);
      // 방향 벡터를 현재 위치에서 빼기 (steer에 this.pos를 뺌)
      steer.sub(this.pos);
      // 방향 벡터의 크기를 최대 속도로 설정
      steer.setMag(this.speedMx);
      // 방향 벡터에서 현재 속도를 빼기
      steer.sub(this.vel);
      // 방향 벡터의 크기를 최대 힘으로 제한
      steer.limit(this.forceMx);
    }
    // 계산된 방향 벡터 반환
    return steer;
  }
  // align 이라는 메서드 설정 (Traffic.js 21번줄 참고)
  align(others) {
    // 생성되는 주변 Vehicle 카운트 초기화
    let cnt = 0;
    // steer 라는 값 초기화
    const steer = createVector(0, 0);
    others.forEach((each) => {
      //!== << 비동등 연산자
      //(each !== this) each와 this 가 같으면?
      if (each !== this) {
        // distSq라는 것에 대한 설명 - 거리 제곱 계산
        const distSq =
          // 이웃 Vehicle에 대한 반경 계산. (위치x - 각각의 위치x)제곱 + (위치y - 각각의 위치y)
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 계산한  distSq 가 생성되는 주변 Vehicle의 rad 값을 50(Vehicle.js 25번째 줄 참고)보다 작을 시 ,
        if (distSq < this.neighborhooodRad ** 2) {
          // steer에 each.vel(각각의 속력)을 더함
          steer.add(each.vel);
          // 이웃 Vehicle 수량 증가
          cnt++;
        }
      }
    });
    // 만약  이웃 Vehicle이 0보다 크면?
    if (cnt > 0) {
      // 방향 벡터를 이웃 차량의 평균 속도로 설정 (steer를 cnt로 나눔)
      steer.div(cnt);
      // 방향 벡터의 크기를 최대 속도로 설정
      steer.setMag(this.speedMx);
      // 방향 벡터에서 현재 속도를 빼기
      steer.sub(this.vel);
      // 방향 벡터의 크기를 forceMx으로 제한
      steer.limit(this.forceMx);
    }
    // 계산된 방향 벡터 반환
    return steer;
  }
  //  separate 이라는 메서드 설정 (Traffic.js 14번줄 참고)
  separate(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      //!== << 비동등 연산자
      //(each !== this) each와 this 가 같으면
      if (each !== this) {
        // dist  두 점 또는 두 위치 사이의 유클리드 거리(직선 거리)를 계산하는 데 사용
        // this.pos.dist(each.pos); 현재의 pos와 생성된 vehicle에 대한 거리 계산
        const dist = this.pos.dist(each.pos);
        // &&는 "논리 AND", 두 개의 조건이 모두 true일 때만 전체 조건이 true가 되고, 그렇지 않으면 false
        // 이웃 vehicle 과의 거리가 유효하고 충돌 가능한 경우
        if (dist > 0 && this.rad + each.rad > dist) {
          // 거리의 정규화 계산
          const distNormal = dist / (this.rad + each.rad);
          // 나를 향하는 벡터 계산  this.pos에 each.pos를 뺌
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // 방향 벡터의 크기를 정규화된 거리로 설정
          towardMeVec.setMag(1 / distNormal);
          // 방향 벡터에 이웃 Vehicle으로부터의 힘 추가
          steer.add(towardMeVec);
          // 이웃 Vehicle 수량 증가
          cnt++;
        }
      }
    });
    // 만약 이웃 Vehicle이 0보다 큰 경우.
    if (cnt > 0) {
      // 방향 벡터를 이웃 차량의 평균 방향으로 설정
      steer.div(cnt);
      // 방향 벡터의 크기를 최대 속도로 설정
      steer.setMag(this.speedMx);
      // 방향 벡터에서 현재 속도를 뺌
      steer.sub(this.vel);
      // 방향 벡터의 크기를 최대 힘으로 제한
      steer.limit(this.forceMx);
    }
    // 계산된 방향 벡터 반환

    return steer;
  }
  // applyForce 는 force라는 힘 적용
  applyForce(force) {
    //forceDivedByMass 질량에 나눠진 힘 설정
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 가속도에는 질량에 나눠진 힘들 더함 (관성 설정)
    this.acc.add(forceDivedByMass);
  }
  // 보여지는 개체들을 업데이트함 아래구문은 어떻게 업데이틀 할것인지
  update() {
    // 기본이 되는 설정임.
    // 속력에 가속도를 더한다
    this.vel.add(this.acc);
    // 속력에 가속도가 더해지면 겉잡을 수 없이 빨라지니까 최고 속도를 제한 함.
    this.vel.limit(this.speedMx);
    // 위치에 속력을 더함
    this.pos.add(this.vel);
    // 가속도에 0을 곱함 (초기화)
    this.acc.mult(0);
  }
  // borderInfinite 애들 튕겨 나가는 것을 없게 하기 위함.
  borderInfinite() {
    // 만약 위치 x가 infiniteOffset * -1 한것 보다 작으면?
    if (this.pos.x < -infiniteOffset) {
      // 위치 x = 너비 + infiniteOffset (튕김이 자연스럽게 하기 위함)
      this.pos.x = width + infiniteOffset;
      // else if << if의 반대를 말하는 구문
      //만약  위치 x가 너비 + infiniteOffset 한것 보다 크면?
    } else if (this.pos.x > width + infiniteOffset) {
      // 위치 x는 * -1 을 한것이다.
      this.pos.x = -infiniteOffset;
    }
    //위 x는 너비 , 아래 y는 높이로 치환한 구문
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }
  // 어떻게 보여줄 것 인가?
  display() {
    // 그래픽 상태를 저장 pop와 짝꿍
    push();
    // 현재 위치로 이동 (변환 중심점을 이동)
    translate(this.pos.x, this.pos.y);
    // 현재 속도 방향으로 회전
    rotate(this.vel.heading());
    // 아웃라인 없음
    noStroke();
    // 앞서 설정한 color로 표현할 것임
    fill(this.color);
    // vertex 그림을 그리기위한 점의 시작
    beginShape();
    // vertex 반지름 꼭지점 추가
    vertex(this.rad, 0);
    //호도법으로 모양만들기
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    // vertex 점 추가
    vertex(0, 0);
    //호도법으로 모양만들기
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    //beginShape로 그리기 시작한 부분을 닫음
    endShape(CLOSE);
    // 그래픽 상태를 복원 push와 짝꿍
    pop();
  }
}
