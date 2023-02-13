// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedno je također objekt. Svaka funkcija mora primati argumente i vracati neku vrijednost.

// 2. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)

var auto = {
    boja: "Crvena",
    brand: {
        tip: "Volvo",
        model: "V40"
    },
    maxBrzina: 240,
    trenutnaBrzina: 0,
    ubrzanje: 9,
    // ubrzaj: function(brojSekundi) {
    //     // Moramo koristiti async funkcije
    //     // var counter = brojSekundi;

    //     // var intId = setInterval(function(){
    //     //     if (counter <= 0) {
    //     //         clearInterval(intId);
    //     //     }
    //     //     auto.trenutnaBrzina += auto.ubrzanje;
    //     //     counter--;

    //     // }, 1000);

    //     // setTimeout(function () {
    //     //     return auto.trenutnaBrzina;
    //     // }, brojSekundi);

    //     // 1. Rješenje
    //     // auto.trenutnaBrzina = (brojSekundi * auto.ubrzanje) >= auto.maxBrzina ? auto.maxBrzina : (brojSekundi * auto.ubrzanje);
    //     // return auto.trenutnaBrzina;

    //     // 2. rješenje
    //     while (brojSekundi > 0 && auto.trenutnaBrzina < auto.maxBrzina) {
    //         auto.trenutnaBrzina += auto.ubrzanje;

    //         if (auto.trenutnaBrzina > auto.maxBrzina) {
    //             auto.trenutnaBrzina = auto.maxBrzina;
    //             break;
    //         }

    //         brojSekundi--;
    //     }

    //     return auto.trenutnaBrzina;
    // },
    uspori: function(brojSekundi){
        while (brojSekundi > 0 && auto.trenutnaBrzina > 0) {
            auto.trenutnaBrzina -= auto.ubrzanje;

            if (auto.trenutnaBrzina < 0) {
                auto.trenutnaBrzina = 0;
                break;
            }

            brojSekundi--;
        }

        return auto.trenutnaBrzina;
    },
    promjeniBoju: function(boja) {
        auto.boja = boja;

        return auto.boja;
    }
};

Object.defineProperty(auto, "ubrzaj", {
    value: function(brojSekundi) {
        // Moramo koristiti async funkcije
        // var counter = brojSekundi;

        // var intId = setInterval(function(){
        //     if (counter <= 0) {
        //         clearInterval(intId);
        //     }
        //     auto.trenutnaBrzina += auto.ubrzanje;
        //     counter--;

        // }, 1000);

        // setTimeout(function () {
        //     return auto.trenutnaBrzina;
        // }, brojSekundi);

        // 1. Rješenje
        // auto.trenutnaBrzina = (brojSekundi * auto.ubrzanje) >= auto.maxBrzina ? auto.maxBrzina : (brojSekundi * auto.ubrzanje);
        // return auto.trenutnaBrzina;

        // 2. rješenje
        while (brojSekundi > 0 && auto.trenutnaBrzina < auto.maxBrzina) {
            auto.trenutnaBrzina += auto.ubrzanje;

            if (auto.trenutnaBrzina > auto.maxBrzina) {
                auto.trenutnaBrzina = auto.maxBrzina;
                break;
            }

            brojSekundi--;
        }

        return auto.trenutnaBrzina;
    },
    enumerable: false
});

auto.ubrzaj(1000);
console.log(auto);
auto.uspori(500);
console.log(auto);
auto.promjeniBoju("Plava");
console.log(auto);

for (var key in auto) {
    console.log(auto.propertyIsEnumerable(key));
}

var serializeObject = JSON.stringify(auto);
console.log(serializeObject);


function vratiNizProstihBrojeva(broj) {
    var niz = [];

    for(var i = 2; i <= broj; i++){
        var isPrime = true;

        for(var j = 2; j < i - 1; j++){
            if (i % j === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            niz.push(i);
        }

    }

    return niz;
}

console.log(vratiNizProstihBrojeva(23));
