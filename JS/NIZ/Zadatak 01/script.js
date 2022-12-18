var a = [1, 5, 7, 8, 12, 3, 9];
//var b = [[1, 5], [7, 8], [12, 3], [9]];
var b = [];

for (var i = 0; i < a.length; i += 2) {
    b.push(a.slice(i, i + 2));
}
console.log(b);
