//deklaracija varijable
var ime; // undefined

console.log(ime);

//inicijalizacija varijable
ime = "Ana";
console.log(ime);

//deklaracija i inicijalizacija
var prezime = "Anić";
console.log(ime + " " + prezime);

// kada ne koristimo zagrade(blok)
if (5 > 3) console.log("radi");
console.log("i ovo radi");

// MORAMO koristiti zagrade
if (5 > 3) {
    console.log("radi");
    console.log("i ovo radi");
}

var PascalCase; // imenovanje klasa
var camelCase; // Varijable, Funkcije i Metode
var snake_case; // properties / svojstava objekta
var UPPER_SNAKE_CASE; // konstante
