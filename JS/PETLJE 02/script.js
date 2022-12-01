var number, isNumber, isPrime;

do {
    // number = prompt("Unesi neki broja:");
    number = parseInt(prompt("Unesi neki broj:"));

    if (isNaN(number)) {
        alert("Nije broj!");
        isNumber = true;
    } else {
        if (number > 1) {
            for (var i = 2; i < number; i++) {
                if (number % i != 0) {
                    isPrime = true;
                } else {
                    isPrime = false;
                }
            }
            if (isPrime) {
                console.log("Prime");
            } else {
                console.log("Not Prime");
            }
        }
        // isRepeat = false;
    }

    // console.log(typeof number);
} while (isNumber);
