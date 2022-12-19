// selekt
var algebraLink = document.querySelector(".algebra");
var finaLink = document.querySelector(".fina");

//dodajem evenlistenere
algebraLink.addEventListener("click", handleLinkClick);
finaLink.addEventListener("click", handleLinkClick);

// listener funkcija
function handleLinkClick(event) {
    // sprječi defaultu akciju
    event.preventDefault();
    event.stopPropagation();
    // console.log(event);

    if (confirm("Are you sure?")) {
        // console.log(event);
        window.location.assign(event.target.href); // dohvatiš href iz dokumenta
    }
}

var body = document.querySelector("body");
body.addEventListener("click", function (e) {
    console.log("Kliknuo si body element");
});
