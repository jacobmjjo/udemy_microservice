class Vehicle {

  constructor(public color: string) {
    this.color = color
  }

  protected honk(): void {
    console.log('beep');
  }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);


  }
  private  drive() : void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const cars = new Car(4, 'red');
cars.startDrivingProcess();
