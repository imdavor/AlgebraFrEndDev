// // // easy FETCH
// // const data = fetch("https://catfact.ninja/fact");
// // console.log(data);

// // data.then((response) => response.json())
// //     .then((data) => console.log(data))
// //     .catch((error) => console.error(error));

// /// malo kompliciraniji FETCH

// const getCurrencyList = async (endpoint, method = "GET", data = {}) => {
//     const response = await fetch(endpoint, {
//         method: method,
//         mode: "cors",
//         headers: {
//             "Content-Type": "applicaition/json",
//         },
//         body: method != "GET" ? json.stringify(data) : null,
//     });
//     if (response.ok) {
//         return response.json();
//     }
//     return response;
// };
// getCurrencyList("https://catfact.ninja/fact");
// /// kako vidjeti kaj smo dobili
// const data = getCurrencyList("https://catfact.ninja/fact");
// // console.log(data);

// data.then((data) => console.log(data)).catch((error) =>
//     console.error(error.message)
// );

// function fetchKantoPokemon() {
//     fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
//         .then((response) => response.json())
//         .then((allpokemon) => console.log(allpokemon));
// }

const data = fetch("https://pokeapi.co/api/v2/pokemon-color/yellow");

data.then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.error(error));

const showData = (data) => {
    const tbody = document.querySelector("tbody");
    let html = "";
    data.pokemon_species.map((pokemon, index) => {
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${pokemon.name}</td>
        </tr>
        `;
    });

    tbody.innerHTML = html;
};
