
// *****************  Zadatak 1.
var firstName = "Davor";
var lastName = "Kosanović";

console.log(firstName + " " + lastName)


// ***************** Zadatak 2.

var x = 5;
var z = 2;
var y = "Y";

var x = z === 2 ? y : 5;
console.log("First x je = " + x)

if (z === 2) {
    console.log("If: Y.");
} else {
    console.log("If: 5.");

}

switch (z) {
    case (2):
        x = y;
        console.log("Switch: " + x);
        break;
    default:
        x = 5;
        console.log("Switch: " + x)
        break;
}

// *****************  Zadatak 3.
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Broj " + i + " je paran.")
    } else {
        console.log("Broj " + i + " je neparan.")

    }
}