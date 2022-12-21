// dohvati body students
// loop elemente
// redak > gurni element nutra

/*** hard kodirano START */
// var tableBody = document.querySelector("#students tbody");

// for (var i = 0; i < students.length; i++) {
//     var student = students[i];

//     var tr = document.createElement("tr");

//     var rbrID = document.createElement("td");
//     rbrID.innerText = i + 1 + ".";
//     tr.append(rbrID);

//     var imeID = document.createElement("td");
//     imeID.innerText = student.firstName;
//     tr.append(imeID);

//     var prezimeID = document.createElement("td");
//     prezimeID.innerText = student.lastName;
//     tr.append(prezimeID);

//     var jmbagID = document.createElement("td");
//     jmbagID.innerText = student.jmbag;
//     tr.append(jmbagID);

//     tableBody.append(tr);
// }
// /*** hard kodirano END */

/** API */
bindData(students, "#studenti", "div");
//bindData(students, "#students tbody", "tr");

function bindData(data, root, element) {
    var rootElement = document.querySelector(root);
    data.map(function (value, index) {
        rootElement.append(createElemntAndBindData(value, index, element));
    });
}

function createElemntAndBindData(data, index, element) {
    var row = document.createElement(element);
    var cell = row.cloneNode(true);
    cell.innerText = index + 1;
    row.append(cell);

    for (var key in data) {
        var element = data[key];
        var dataCell = row.cloneNode(true);
        dataCell.innerText = element;
        row.append(dataCell);
    }

    return row;
}
