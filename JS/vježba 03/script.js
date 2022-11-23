var text = "lorem ipsum";
var ime = "   Pero   ";
var prezime = "Perić    ";

var fullName = ime.trim() + " " + prezime.trim();
console.log(fullName);

var s1 = "2 + 2";
var s2 = String("2 + 2");
var s3 = new String("2 + 2");
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s3.valueOf());

console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s3));
