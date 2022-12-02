var names = ['John', 'Jane', 'Bob', , 'Mike', ,];

console.log("Ispis cijelog niza: ")
for (i = 0; i < names.length; i++) {
    console.log(names[i])

}

names.push("Davor")
console.log("Ispis niza sa mojim imenom: " + names)


console.log("")

console.log("Našao sam Jane!")
for (i = 0; i < names.length; i++) {
    if (names[i] == "Jane") {
        console.log(names[i])
        break;
    } else {
        console.log(names[i]);
    }
}

console.log("")
console.log("Ispis cijelog niza bez undefined: ")
for (i = 0; i < names.length; i++) {
    if (names[i] === undefined) {
        delete names[i] === undefined;
    } else {
        console.log(names[i]);
    }
}
