// import {sum, multiply} from "./calc.js"
 import {Calc} from "./calc.js"
const calc = new Calc()

// console.log("4 + 6 =", sum(4,6))
// console.log("4 X 6 =", multiply(4,6))

console.log("4 + 10 =", calc.sum(4,10))
console.log("4 X 10 =", calc.multiply(4,10))