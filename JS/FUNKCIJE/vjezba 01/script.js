// Napravite funkciju koja uzima dva argumenta.
// Oba argumenta su cijeli brojevi a i b.
// Vrati true ako je jedan od njih 10 ili ako je njihov zbroj 10

function checkTen(a, b) {
    var x = parseInt(a);
    var y = parseInt(b);
    if (isNaN(x) || isNaN(y)) {
        return false;
    }
    if (x === 10 || y === 10 || x + y === 10) {
        return true;
    } else {
        return false;
    }
}
var result1 = checkTen(7, 1);
var result2 = checkTen(10, 5);
var result3 = checkTen(5, 10);
var result4 = checkTen(7, 3);
var result5 = checkTen("Pero", 3);
var result6 = checkTen("7", 3);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
