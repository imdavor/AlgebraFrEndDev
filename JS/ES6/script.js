"use strict";

//x = 10; // u strict  modu ne možemo inicijalizirati varijablu bez deklaracije
let x = 10;

//delete x; // u strict  modu ne možemo brisati varijable i funkcije

if (3 < 5) {
    let x = 5;
    console.log(x);
}
console.log(x);

const PI = 3.14;
// PI=3.15 noije moguće minjenjati vrijednost konstante

// SPREAD i REST operator

let users = [
    { name: "Ivana", age: "25" },
    { name: "Pero", age: "32" },
];

let user = { name: "Milan", age: "15" };

console.time("unshift");
users.unshift(user);

console.log(users);
console.timeEnd("unshift");
/********* */
console.time("spread");
users = [user, ...users];

console.log(users);
console.timeEnd("spread");

// rest operator
function student(name, ...info) {
    console.log(name, info);
}
//kod resta je parametar je u funkciji
student("Pero", 24, "Programsko inženjerstvo", 2);
student("Ana", 34, "Programsko inženjerstvo", 2, "mirovanje");

// destrukcija objekta i niza
let profesorica = { name: "Živka", age: 28 };
//normalna inicijalizacija varijabli iz objekta
// let name = profesorica.name;
// let age = profesorica.age;

// lakši način - destrukcija
let { name, age } = profesorica;

console.log(`Profesorica se zove ${name} i ima ${age} godina.`);

let numbers = [1, 2];
let [prvi, drugi] = numbers;
console.log(`Ovo je ${prvi} a ovo je ${drugi}.`);

// ARROW funkcija
function classicFunc() {
    return this; // kada je uključen use strict "this" se odnosi samo unutar bracketa
}
console.log(classicFunc());
