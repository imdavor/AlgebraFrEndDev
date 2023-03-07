# AlgebraFDEV - Front End Developer, HTML, CSS, JS, ReactJS

Repozitorij za potrebe Algebrinog tečaja za Front End Developera
Prebačen na G:disk

1. elementi u htmlu su po defultu:
   display: block;
   width:100%
2. flex-box se fokusira na 2 stvari
   a. container koji drži sve elemente(items)

# Može biti na završnom ispitu

što komponente vraćaju  - jsx 
čemu služe {}?

props?props - life cycle
Props - slanje podataka (Parent prema childu) između komponenata - možemo odrediti default propse -

tipovi komponenata stateless i statfull
state kao podatak? tip objekt -stanje je pohranjeni podaci koji se nalaze trenutno u aplikaciji
Kako radi STATE

pohrana - lokalno - nema obavijsti kada se podatak promijeni - dijelovi appa ne znaju za promjenu
state ima obavijest - setState mijenja podatak react obaviještava komponente i pokreće se render - faza ciklusa je update

životni ciklusi 
1.init - postavljaju se state i props
2.mounting - prvo opokazivanje korisniku
3.update  - ažuriranje - pronjena state i propsa
4.unmoutnig

komunikacija obrnuta od childa do parenta
pomoću eventa - poziva call back funk iz childa u parent kroz props/call back/event listener

stateless - prikazivanje podatka iz statea

scaledrone app
super() - pozovi konstruktor od naslijeđene klase

funkcije
kako rade parametri

objekti
literali{}, ime i vrijednosti, funkc, nizovi

mijenjanje propertia - writable+2

kako zaključiti da je tip podatka objekt > var varijabla = {} ; pero.id
window.pageoYffset
element scroll top

promise

Virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root')); stvara virt DOM i povezuje sa rootom

npm install kada skinemo paket



JS
...objekt
spread operator(rstavlja ih u parametre)  ili
rest operator(dodaje arg u niz)

dekonstrukcija objekta - u props objektu traži svojstvo (vehicles) i izvuče vrijednost i dodijeli konstanti > const {vehicles} = props;
                                                                                                     kasnije: <td> vehicles: {vehicles} </td>

odi po api > stavi u state > prikaži preko propsa


#napredni koncepti
hoc
context



Ako Radi Ne Diraj










