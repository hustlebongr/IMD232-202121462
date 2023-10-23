class Traffic {
  constructor() {
    this.vehicles = [];
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      eachVehicle.update();
      eachVehicle.display();
      eachVehicle.borderInfinite();
    });
  }
  addVehicle(x, y) {
    this.vehicles.push;
    new Vehicle(x, y, 0, 5, 0.1, color(random(360), 100, 50));
  }
}
