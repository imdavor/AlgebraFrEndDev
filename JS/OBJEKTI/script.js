var user = {
    firstName: "Pero",
    lastName: "Perić",
};

console.log(user.firstName + " " + user.lastName);
user.firstName = "Marko";
console.log(user.firstName + " " + user.lastName);

Object.defineProperty(user, "oib", { value: 123456789, writable: false });
console.log(user.firstName, user.lastName, user.oib);
user.oib = 987654321; // vidi -> writable: false
console.log(user.firstName, user.lastName, user.oib);

//

var arhiver = {
    temp: null,
    archive: [],
    setTemp: function (tmp) {
        arhiver.temp = tmp;
        arhiver.archive.push({
            date: new Date(),
            temp: tmp,
        });
    },
};

arhiver.setTemp(12);
arhiver.setTemp(11);
arhiver.setTemp(5);

console.log(arhiver);
