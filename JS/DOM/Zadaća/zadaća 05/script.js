// 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.

// 2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- h1 element sadrži tekst "Karlovac"
// 	- span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka" 
// 	- div s klasom "info" sadrži text "Peta rijeka je piva."
// 	- lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima

// 3. Imate zadane vrijednosti:
// 	- pageOffsetY elementa je 1300px
// 	- scrollTop je 200px
// 	- visina korisničkog ekrana je 730px
// 	- visina elementa je 300px

// 	Da li je element vidljiv na ekranu? 
// 	U slučaju da nije, koliko mu piksela fali i u kojem smjeru?


//2.
var h1 = document.querySelector('h1');
h1.innerHTML = "Karlovac";
console.log(h1);

var old_element = document.querySelector('span');
var new_element = document.createElement('h3');
new_element.innerHTML = '5 rijeka';
old_element.replaceWith(new_element);

var divInfo = document.querySelector('.info');
divInfo.innerHTML = 'Peta rijeka je piva.';



var rivers = ['Korana', 'Kupa', 'Mrežnica', 'Dobra', 'Žuja'];
// var footer = document.querySelector("#footer");
// var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

for (var i = 0; i <= li.length; i++) {
    var liEmpty = li[i];
    // console.log(liEmpty);
    for (var j = 0; j < rivers.length; j++) {
        if (i == j) {
            liEmpty.innerText = rivers[j]
        }
    }
}

// for (i = 0; i < rivers.length; i++) {
//     var li = document.createElement('li')
//     var city = li.textContent = rivers[i];
//     // console.log(city)
//     ul.appendChild(li);
// }
