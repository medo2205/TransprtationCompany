class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

class Car extends Vehicle{
  constructor(name, manufacturer, id, type){
    super();
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
    this.type = type;
  }
}

class Plane extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super();
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
    this.type = type;
  }
}

class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super();
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
    this.licenseID = licenseID;
  }
}

class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super();
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
    this.licenseID = licenseID;
  }
}

class Reservation {
  constructor(reservationDate, employeeId, vehicleId, reservationId) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationId = reservationId;
  }
}

let car1 = new Car("Mustang Shelby GT500", "Ford", 1, "Gas");//creating objects
let car2 = new Car("Chaser", "Toyota", 2, "gas");
let car3 = new Car("M3", "BMW", 3, "Gas");

let plane1 = new Plane("757", "Boeing", 4, "Commercial");
let plane2 = new Plane("A380", "Airbus", 5, "Private");

let drivers = [new Driver("Mohammed Alamri", 419, "2002/2/17", 44321),
  new Driver("Mohammed Almeteri", 420, "2000/12/7", 37321),
  new Driver("Ahmed Alharbi", 421, "1988/5/1", 19321)]  
  
let pilots = [new Pilot("Saleh Mohammed", 119, "1997/8/13", 14321),
  new Pilot("Mohammed Abdulaziz", 120, "1993/6/22", 17321),
  new Pilot("Raid Alharbi", 121, "1988/5/1", 99321)];

let vehicles = [car1, car2, car3, plane1, plane2];

let reservations = [];

function checkAndReserve(employeeId, vehicleId) {// reserve
  let employee = null;
  let vehicle = null;

  for (let d of drivers) {
    if (d.id === employeeId) {
      employee = d;
      break;
    }
  }

  for (let p of pilots) {
    if (p.id === employeeId) {
      employee = p;
      break;
    }
  }

  for (let v of vehicles) {
    if (v.id === vehicleId) {
      vehicle = v;
      break;
    }
  }

  if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log("The vehicle is a car and the employee is a pilot");
  } else if (employee instanceof Driver && vehicle instanceof Plane) {
    console.log("The vehicle is a plane and the employee is a driver");
  } else {
    let reservationId = reservations.length + 1;
    let reservation = new Reservation(
      "2023/11/20",
      employeeId,
      vehicleId,
      reservationId
    );
    reservations.push(reservation);
  }
}


checkAndReserve(419, 1);
checkAndReserve(420, 4);

reservations.map((reservation) => console.log(reservation));