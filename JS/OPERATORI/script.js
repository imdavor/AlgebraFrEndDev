var a = 0;
var b = 3;

console.log("b/a= " + b / a);
console.log("a%b= " + (a % b));
console.log("a==b " + (a == b));

console.log("!a " + !a);
console.log("!b-3 = " + (!b - 3));
console.log("!(b-3) = " + !(b - 3));

c = b++;
console.log("c = b++ = " + c);
console.log("b = " + b);

b = 3;
c = ++b;
console.log("c = ++b = " + c);
console.log("b = " + b);
