
/**umjesto circle buleta na elementima liste prikažu redne brojke */
var ul = document.getElementsByTagName("ul")[0]
ol = document.createElement("ol");
ol.innerHTML = ul.innerHTML;

setTimeout(function () {
    ul.parentNode.replaceChild(ol, ul);
}, 3000);

/**div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet) */
// .info {
//     visibility: hidden;
// }


/** - saznajte margin-left izračunati stil koji je primijenjen na body elementu */
var body = document.getElementById('body')
var bodyMarginLeft = document.body.style.marginLeft = "30px"



//- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji
