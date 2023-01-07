// 1. U prilogu us html, css i js datoteke kao pocetna tocka.
// 2. Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:
//         - umjesto circle buleta na elementima liste prikažu redne brojke
//         - div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
//         - saznajte margin-left izračunati stil koji je primijenjen na body elementu
//         - animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

var footer = document.querySelector('footer')
var ul = document.querySelector('ul')
var ol = document.createElement('ol')
// console.log(ol)
// footer.replaceChild(ol, ul)

ul.replaceWith(ol)

console.log(footer.outerHTML);

