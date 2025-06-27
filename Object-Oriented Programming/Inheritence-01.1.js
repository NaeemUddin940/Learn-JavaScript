// Imporved Version

class Player {
  constructor(name, age, centuries = 0, goals = 0) {
    this.name = name;
    this.age = age;
    this.centuries = centuries;
    this.goals = goals;
  }
  getPlayerDetails() {
    return `${this.name} is ${this.age} years old and centuries ${this.centuries} and Goals ${this.goals}`;
  }
}

class Cricketer extends Player {
  constructor(name, age, centuries) {
    super(name, age, centuries);
  }
}

class Footboller extends Player {
  constructor(name, age, goals) {
    super(name, age, goals);
  }
}

let sakib = new Cricketer("Sakib", 34, 12);
console.log(sakib.getPlayerDetails());
let Messi = new Footboller("Mssi", 35, 200);
console.log(Messi.getPlayerDetails());
