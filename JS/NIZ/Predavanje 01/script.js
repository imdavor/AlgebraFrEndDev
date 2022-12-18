// var countries = ["Hrvatska", "Belgija", "Maroko", "Kanada"];
// console.log(countries);

// for (var i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }
// // countries[5] = "Italija";
// // console.log(countries);

// // //dodavanje NA KRAJ niza
// // countries.push("Austrija");
// // console.log(countries);
// // //dodavanje NA POČETAK niza
// // countries.unshift("Fracuska");
// // console.log(countries);

// // micanje iz niza
// //sa kraja
// // countries.pop();
// // console.log(countries);
// // // micanje iz niza
// // //na početak niza
// // countries.shift();
// // console.log(countries);

// // brisanje elemenata iz niza
// // delete countries[1];
// // console.log(countries);
// countries.sort();
// console.log(countries);

var numbers = [
    [1, 3, 5],
    [2, 4, 6],
];
var flatNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers[i].length; j++) {
        flatNumbers.push(numbers[i][j]);
    }
    flatNumbers.sort();
    console.log(flatNumbers);
}
