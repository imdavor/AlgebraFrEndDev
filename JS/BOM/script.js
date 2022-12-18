console.log(window);
console.log(document);
console.log(this);

console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.href);

// napravi redirekciju
// window.location.href = "https://google.com";
// window.location.assign("https://google.com"); // zapamti u historyu?
console.log(window.location.href);

// setTimeout(function () {
//     console.log("Kasnim 2 sekunde");
// }, 2000);

var intervalID = setInterval(function () {
    console.log(" set interval ");
}, 1000);

if (intervalID) {
    clearInterval(intervalID);
}

// zadatak koristi setinterval smanji od 10 do 0
var time = 10;
var interval = setInterval(function () {
    // neka se ispiše nula
    console.log(time);
    if (time == 0) {
        clearInterval(interval);
        return;
    }
    time--;
}, 1000);
