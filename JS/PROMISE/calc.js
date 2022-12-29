// sinkrono
// const calc = (num1, num2) => {
//     if (num1 > num2) {
//         return num1 * num2;
//     }
//     return "Fail!!!";
// };

const calc = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 > num2) {
            resolve(num1 * num2);
        }
        reject("Fail!!!");
    });
};

export default calc;
