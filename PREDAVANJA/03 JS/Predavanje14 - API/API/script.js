
//const data = fetch("https://api.github.com/users/facebook");

// data
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));


const getCurrencyList = async (endpoint, method = 'GET', data = {}) => {
    const response = await fetch(endpoint, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: method != 'GET' ? JSON.stringify(data) : null
    });

    if (response.ok) {
        return response.json();
    }

    return response;
}



getCurrencyList("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((data) => showData(data))
    .catch((error) => console.error(error.message))

const showData = (data) => {
    const body = document.querySelector("body");
    const html = `
        <h1>${data.name}</h1>
    `;

    body.innerHTML = html;
}