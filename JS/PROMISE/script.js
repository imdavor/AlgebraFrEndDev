import getNumber from "./getNumber.js";
import calc from "./calc.js";
import randomNumber from "./randomNumber.js";

// randomNumber > max-min= resolve

console.log(randomNumber(1, 5));

// const promise = new Promise((resolve, reject) => {
//     let isTrue = getNumber();
//     // console.log(isTrue);
//     if (isTrue) {
//         resolve();
//     }
//     reject();
// });

// // koristimo call back funk  ()=>
// promise.then(() => console.log("Prolaz")).catch(() => console.log("Pad"));

// // sinkroni način rada
// // const mul = () => {
// //     for (let i = 0; i < 50; i++) {
// //         console.log(calc(Math.random(), Math.random()));
// //     }
// // };

// // sinkroni
// // const mul = () => {
// //     for (let i = 0; i < 50; i++) {
// //         let promise = calc(Math.random(), Math.random());
// //         promise
// //             .then((res) => console.log(res))
// //             .catch((err) => console.log(err));
// //     }
// // };
// // asinkroni
// const mul = async () => {
//     for (let i = 0; i < 50; i++) {
//         try {
//             let result = await calc(Math.random(), Math.random());
//             console.log(result);
//         } catch (err) {
//             console.log(err);
//         }
//     }
// };

// mul();

// console.log(promise);
