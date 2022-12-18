// 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
// 2. Uključite script.js u html dokument.
// 2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- se na početak doda h1 element
// 	- ispod diva sa klasom "description" se umetne novi div sa klasom "info"
// 	- lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata

var target = document.querySelector('.description');

var h1 = document.createElement('h1');
var divInfo = document.createElement('div');
divInfo.className = "info";

// test tekst
h1.innerHTML = "Ovo je h1 element";
divInfo.innerHTML = "Ovo je div INFO";

document.body.insertBefore(h1, target)
target.after(divInfo)

var footer = document.querySelector("#footer");
var ul = footer.querySelector("ul");
for (i = 0; i < 3; i++) {
    var newLi = document.createElement("li");
    ul.append(newLi);
}
