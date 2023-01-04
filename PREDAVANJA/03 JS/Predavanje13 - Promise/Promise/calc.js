const calc = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 > num2) {
            resolve(num1 * num2);
        }
    
        reject("Nisam uspio!!")
    });
}

export default calc;