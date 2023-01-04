const data = fetch("https://pokeapi.co/api/v2/pokemon-color/yellow");

data
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.error(error));

const showData = (data) => {
    const tbody = document.querySelector("tbody");

    let html = '';

    data.pokemon_species.map((pokemon, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${pokemon.name}</td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}