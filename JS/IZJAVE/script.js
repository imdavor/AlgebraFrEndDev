var a = 5;
var b = 10;

if (a > 10) {
    console.log("a je veći od 10");
}

if (b > 10) {
    console.log("b je veći od 10");
}

if (a <= 10) {
    console.log("a je manji ili jednak od 10");
} else {
    console.log("a je veći od 10");
}

if (a < 10) {
    console.log("a je manji od 10");
} else if (a == 10) {
    console.log("a je jednak  10");
} else {
    console.log("a je veći od 10");
}

if (a < 10) {
    if (a === 5) {
        console.log("a je jednak 10");
    }
}
if (a < 10 && a === 5) {
    console.log("a je jednak 10");
}

var num = 3;
switch (num) {
    case 1:
        console.log("Zlato");
        break;
    case 2:
        console.log("Srebro");
        break;
    case 3:
        console.log("Bronca");
        break;
    default:
        console.log("Dođite opet.");
        break;
}

a = 5;
b = 2;
c = 1;

if ((a < b && b > c) || (a > b && b > c)) {
    console.log("b je između a i c");
} else {
    console.log("b nije između a i c");
}
