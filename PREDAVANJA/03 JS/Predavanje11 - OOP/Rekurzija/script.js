// Rekurzivna funkcija
function rekurzija(x) {
    // Bazni slučaj
    if (x <= 0) {
        return;
    }

    // Obavljanje zadaće
    console.log(x);

    // Korak rekurzije
    rekurzija(--x);
}

rekurzija(5);

var a = 10450;
// Faktorijeli s petljom
console.time("petlja");
var sum = 1;
for(var i = a; i > 0; i--){
    sum *= i
}
console.timeEnd("petlja");
console.log(sum);
// Faktorijeli s rekurzijom
function factorial(x){
    if (x == 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

console.time("rekurzija");
console.log(factorial(a));
console.timeEnd("rekurzija");
