function ispisiText() {
    console.log("Ispisujem tekst!");
}
ispisiText();

function zbrojiDvaBroja(x = 0, y = 0) {
    // nule su default ako nema argumenata
    return x + y;
}
var zbroj = zbrojiDvaBroja(5, 6);
console.log(zbroj);
