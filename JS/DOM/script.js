var header = document.querySelector("#header");
var mainTitle = header.children[0];
mainTitle.classList.add("dark");

console.log(mainTitle.className);

var podnaslov = document.createElement("h2");
podnaslov.innerText = "Mijenjanje DOM strukture";
header.append(podnaslov);

var footer = document.querySelector("#footer");
var ul = footer.querySelector("ul");

console.log(ul);

var newUser = document.createElement("li");
newUser.innerText = "Mirko S. Zlikovski";
newUser.dataset.userId = 3;
ul.append(newUser);

var copyUser = newUser.cloneNode(true);
console.log(copyUser);
copyUser.innerText = "Amita";
ul.append(copyUser);

var listElements = ul.querySelectorAll("li");
console.log(listElements);

// //sve iz node liste
// listElements.forEach(function (value) {
//     // console.log(value.dataset.userId);
//     // console.log(value.innerText.includes("Mir")); //nađi innerText koji sadrži "Mir"
//     if (value.innerText.includes("Mir")) {
//         value.remove();
//     }
// });
