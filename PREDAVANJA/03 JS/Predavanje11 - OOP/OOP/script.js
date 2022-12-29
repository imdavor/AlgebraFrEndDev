var user = {
    name: "Pero"
};
var student = Object({name: "Ana"});
var profesor = new Object({name: "Marta"});

console.log(user, student, profesor);

function Car(model) {
    this.model = model;
}

var audi = new Car("Audi");
var opel = new Car("Opel");
console.log(audi, opel);


function Arhiver() {
    this.temp;
    this.arhiva = [];

    Object.defineProperty(this, 'temp', {
        get(){
            return temp;
        },
        set(value){
          temp = value;
          this.arhiva.push(value);
        }
    })
}

var arhiver = new Arhiver();
arhiver.temp = 10;
arhiver.temp = 12;
arhiver.temp = 8;
console.log(arhiver.temp);
var arhiver1 = new Arhiver();
var arhiver2 = new Arhiver();
console.log(arhiver1 === arhiver2);