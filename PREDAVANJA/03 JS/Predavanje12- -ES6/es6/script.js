"use strict"

let x = 10; // U strict modu ne možemo inicijalizirati varijablu bez deklaracije
// delete x; U strict modu nije moguće brisati varijable i funkcije

if (3 < 5) {
    let x = 5;
    console.log(x);
}

console.log(x);


const PI = 3.14;
// PI = 3.15; Nije moguće mjenjati vrijednost konstantama

// Spread i Rest operator
let users = [
    { name: "Ivana", age: 25 },
    { name: "Ivan", age: 30 }
];

let user = { name: "Iva", age: 45 };

console.time("unshift");
users.unshift(user);
console.log(users);
console.timeEnd("unshift");

console.time("spread");
users = [user, ...users];
console.log(users);
console.timeEnd("spread");


function student(name, ...info) {
    console.log(name, info);
}

student("Pero", 24, "Programsko inžinjerstvo", 2);
student("Ana", 34, "Programsko inžinjerstvo", 2, "mirovanje");

// Destrukcija objekta i niza
let profesorica = { name: "Mirta", age: 28 };
// Normalna inicijakizacija varijabli iz objekta
//let name = profesorica.name;
//let age = profesorica.age;

let { name, age } = profesorica;

console.log(`Profesorica ${name} ima ${age} godina.`);

let numbers = [1, 2];
let [prvi, drugi] = numbers;

console.log(prvi, drugi);

// Arrow funkcije
function classicFunc() {
    return this;
}
console.log(classicFunc());

const arrowFunc = () => this;
console.log(arrowFunc());

// Promjena konteksta this ključne rječi unutar objekta
let runner = {
    name: "Runner",
    run: function (speed) {
        console.log(`${this.name} runs at ${speed} km/h`);
    }
}

let flyer = {
    name: "Flyer",
    fly: function (speed) {
        console.log(`${this.name} flies at ${speed} km/h`);
    }
}

runner.run(20);
flyer.fly(300);

let runnerFlies = flyer.fly.bind(runner);
runnerFlies(200);

// Klase
class Car
{
    color;

    constructor(color)
    {
        this.color = color;
    }

    getColor = () =>
    {
        return console.log(this.color);
    }

    setEvent()
    {
        window.addEventListener("resize", this.getColor);
    }
}

let car = new Car("blue");
car.setEvent();


class Volvo extends Car
{
    model;

    constructor(color, model)
    {
        super(color);
        this.model = model;
    }
}

let volvo = new Volvo("red", "S40");
console.log(volvo);