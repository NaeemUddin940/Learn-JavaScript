// Imporved Version

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cricketer extends Player {
  constructor(name, age, centuries) {
    super(name, age);
    this.centuries = centuries
  }
  getPlayerDetails() {
    return `${this.name} is ${this.age} years old and Centuries ${this.centuries}.`;
  }
}

class Footboller extends Player {
  constructor(name, age, goals) {
    super(name, age);
    this.goals = goals
  }
  getPlayerDetails() {
    return `${this.name} is ${this.age} years old and and Goals ${this.goals}`;
  }
}

let sakib = new Cricketer("Sakib", 34, 12);
console.log(sakib.getPlayerDetails());
let Messi = new Footboller("Mssi", 35, 200);
console.log(Messi.getPlayerDetails());
