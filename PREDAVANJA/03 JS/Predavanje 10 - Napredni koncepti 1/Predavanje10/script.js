// Hoisting
console.log(a);
var a;

sum();
function sum() {
    return 1 + 1;
}

// Opseg (Scope)
var x = 10; // Globalni opseg
function localScope(){
    x = 7;
    var x = 5; // Lokalni opseg

    console.log(x);
}
localScope();

// Ključna rječ this
console.log(this);
function getName(){
    console.log(this);
}
getName();

var korisnik = {
    name: "Pero",
    getName: function(){
        return this.name;
    }
}

console.log(korisnik.getName());

// funkcija kao vraijabla
var getName = function(){
    console.log(this);
}

getName();

// Funkcija kao argument drugoj funkciji (callback)
function calculate(x, func){
    return func(x);
}

function divWithTwo(y) {
    return y / 2
}

function mulWithTwo(y) {
    return y * 2
}

console.log(calculate(10, divWithTwo));
console.log(calculate(15, mulWithTwo));


// Funkcija kao vraćena vrijednost
function HOF(a){
    var y = 15;
    var x = 20;


    return function(z) {
        if (z === undefined) {
            return a * y;
        }

        return a * x;
    }
}

var createHOF = HOF(10);
console.log(createHOF(true));


// Closure 
function makeCounter(){
    var privateCounter = 0;

    function changeBy(val){
        privateCounter += val;
    }

    return {
        increment(){
            changeBy(1);
        },
        decrement(){
            changeBy(-1)
        },
        getCounter(){
            return privateCounter;
        }
    }
}

(function(){
    var counter1 = makeCounter();
    counter1.increment();
    console.log(counter1.privateCounter);
    console.log(counter1.getCounter());

    var counter2 = makeCounter();
    console.log(counter2.getCounter());
})();