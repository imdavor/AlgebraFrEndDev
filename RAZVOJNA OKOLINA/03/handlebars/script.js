const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon-color/yellow";

// 2. async i await dodamo da getData ima vremena pokupit promise i sve podtake sa APIJA
const getData = async (api) => {
    const response = await fetch(api);

    //1. vraćamo u js objekt
    return response.json();
}

//4. 
const getTemplate = (selector) => { //8.
    const template = document.querySelector(selector); // 8.1
    if (!template) {
        throw "Nepostojeći template";
    }
    return template.innerHTML;
}

//5. 
const bindData = (data) => { // 7.
    //9.
    try {
        //11. da vidimo kaj je u dati
        console.log(data);
        const templateSource = getTemplate("#pokemons"); //7.1 uzeli smo template
        // 10.
        const template = Handlebars.compile(templateSource); // 7.2 uzmi template od Hadlebarsa
        const context = {
            tableClass: "table-striped",
            items: data.pokemon_species
        }
        // 15. dekonstrukcija objekta
        const { tableClass, items } = context;
        // console.log(items);
        const html = template(context); //12. uguramo template u html
        document.querySelector("#root").innerHTML = html; //13. u root uguramo html

    } catch (error) {
        console.log(error)
    }
}

// 3.
getData(API_ENDPOINT)
    .then((data) => bindData(data)) // 3.CALLBACK; //6. bindData umjesto console.loga
    .catch((error) => console.log(error));