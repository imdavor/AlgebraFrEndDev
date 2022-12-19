// hoisting
console.log(a);
var a;

sum();
function sum() {
    return 1 + 1;
}

// Opseg (SCOPE)
var x = 10; // Global scope
function localScope() {
    x = 7;
    var x = 5; // lokalni scope jer ima var
    console.log(x);
}
localScope();

// ključna riječ this
console.log(this);
function getName() {
    console.log(this);
}
getName();

var korisnik = {
    name: "Pero",
    getName: function () {
        return this.name; // this SE ODNOSI NA OBJEKT > sam na sebe: korisnik
    },
};
console.log(korisnik.getName());

// funkcija kao varijabla
var getName = function () {
    console.log(this);
};
getName();

// funkcija kao argument drugoj funkciji aka CALL BACK fumction
function calculate(x = 1, func) {
    return func(x);
}

function divWithTwo(y) {
    return y / 2;
}
function multipleTwo(y) {
    return y * 2;
}

console.log(calculate(10, divWithTwo));
console.log(calculate(10, multipleTwo));

// funkcija kao vraćena vrijednost
function HOF(a) {
    var y = 15;
    var x = 20;
    return function (z) {
        if (z === undefined) {
            return a * y;
        }
        return a * x;
    };
}

var createHOF = HOF(10);
console.log(createHOF(true));

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Closure
function makeCounter() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        incriment() {
            changeBy(1);
        },
        decrement() {
            changeBy(-1);
        },
        getCounter() {
            return privateCounter;
        },
    };
}
var counter1 = makeCounter();
console.log(counter1);
counter1.incriment();

console.log(counter1.getCounter());
var counter2 = makeCounter();
console.log(counter2);
