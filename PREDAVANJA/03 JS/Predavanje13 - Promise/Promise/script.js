import getNumber from './getNumber.js';
import calc from './calc.js';

const promise = new Promise((resolve, reject) => {
    let isTrue = getNumber();
    console.log(isTrue);
    if (isTrue) {
        resolve();
    }

    reject();
});

promise
    .then(() => console.log("Prolaz"))
    .catch(() => console.log("Pad"))


const mul = async () => {
    for (let i = 0; i < 50; i++) {
        try {
            let result = await calc(Math.random(), Math.random());
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}

mul();
