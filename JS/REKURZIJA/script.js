// rekurzivna funkcija
function rekurzija(x) {
    // bazni slučaj
    if (x <= 0) {
        return;
    }
    // obavi zadaću
    console.log(x);

    // korak rekurzije
    rekurzija(--x);
}
rekurzija(5);

var a = 10463;
// faktorijeli s petljom
console.time("petlja");
var sum = 1;
for (var i = a; i > 0; i--) {
    sum *= i;
}
console.timeEnd("petlja");

console.log(sum);
// faktorijeli s rekurzijom
function faktorijal(x) {
    if (x == 0) {
        return 1;
    }
    return x * faktorijal(x - 1);
}
console.time("rekurzija");
console.log(faktorijal(a));
console.timeEnd("rekurzija");
