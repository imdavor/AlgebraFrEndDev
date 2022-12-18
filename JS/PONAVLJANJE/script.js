// kreiraj objekt kojireprezentira specifični auto, sa bar 8 svojstava od kojih su 3 funkcije(ubrza zakoči)  ajedno je također objekt. Svaka funkcija će primati i vraćati vrijednosti

var auto = {
    boja: "crveni",
    brand: {
        tip: "Volvo",
        model: "v40",
    },
    maxBrzina: 240,
    trenutnaBrzina: 0,
    ubrzanje: 10,
    ubrzaj: function (brojSekundi) {
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
    uspori: function (brojSekundi) {
        while (brojSekundi > 0 && auto.trenutnaBrzina > 0) {
            auto.trenutnaBrzina -= auto.ubrzanje;
            if (auto.trenutnaBrzina < 0) {
                break;
            }
            brojSekundi++;
        }
        return auto.trenutnaBrzina;
    },
    promijeniBoju: function (boja) {
        auto.boja = boja;
        return auto.boja;
    },
};

Object.defineProperty(auto, "ubrzaj", {
    value: function (brojSekundi) {
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
    enumerable: false,
});

auto.ubrzaj(10);
console.log(auto);
auto.uspori(9);
console.log(auto);

for (var key in auto) {
    console.log(auto.propertyIsEnumerable(key));
}

var serializeObject = JSON.stringify(auto);
console.log(serializeObject);

function vartiNizProstihBrojeva(broj) {
    var niz = [];
    for (i = 2; i <= broj; i++) {
        var isPrime = true;

        for (var j = 2; j <= i - 1; j++) {
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
console.log(vartiNizProstihBrojeva(23));
