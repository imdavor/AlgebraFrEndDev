// const randomNumber = (min, max) => {
//     let randNum = Math.floor(Math.random() * max) + min;
//     return randNum;
// };
const randomNumber = (min, max) => {
    let randNum = Math.floor(Math.random() * max) + min;
    let minMax = max - min;
    return new Promise((resolve, reject) => {
        if (randNum > minMax) {
            resolve("Resolved: " + randNum);
        }
        reject("Nije dobro!");
    });
};

export default randomNumber;
