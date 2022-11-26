// var iterator = 0;

// while (iterator < 10) {
//     console.log(iterator);
//     iterator++;
// }

// do {
//     console.log(iterator);
//     iterator++;
// } while (iterator < 10);

// for (var i = 0; i < 10; i++) {
//     if (i === 3) {
//         continue;
//     }
//     if (i === 4) {
//         break;
//     }ssss
//     console.log(i);
// }

// 2d array
// for (var i = 1; i <= 4; i++) {
//     for (var j = 1; j <= 4; j++) console.log(i + "/" + j);
// }

// var number = prompt("Unesi neki broj:");
// console.log(number);

var number, isNumber;

do {
    // number = prompt("Unesi neki brojaa:");
    number = parseInt(prompt("Unesi neki broj:"));

    if (isNaN(number)) {
        alert("Nije broj!");
        isNumber = true;
    } else {
        console.log(number);
        isNumber = false;
    }

    // console.log(typeof number);
} while (isNumber);
