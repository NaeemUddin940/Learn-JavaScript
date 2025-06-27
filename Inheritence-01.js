// Here some Duplicate Code so, you have to remove duplication using Inheritence

class Cricketer {
    constructor(name, age, centuries){
        this.name = name
        this.age = age
        this.centuries = centuries
    }
    getPlayerDetails(){
        return (`${this.name} is ${this.age} years old and his centuries is ${this.centuries} times.`);
    }
}


class Footboller{
    constructor(name, age, goals){
        this.name = name
        this.age = age
        this.goals = goals
    }
    getPlayerDetails(){
        return (`${this.name} is ${this.age} years old and his Goals is ${this.goals} times.`)
    }
}

let sakib = new Cricketer("Sakib", 34, 12)
console.log(sakib.getPlayerDetails());
let Messi = new Footboller("Mssi", 35, 200)
console.log(Messi.getPlayerDetails());