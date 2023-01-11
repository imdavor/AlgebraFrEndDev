const encodedParams = new URLSearchParams();
encodedParams.append("country", "<REQUIRED>");
encodedParams.append("term", "<REQUIRED>");

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'iTunesvolodimir-kudriachenkoV1.p.rapidapi.com'
    },
    body: encodedParams
};

fetch('https://itunesvolodimir-kudriachenkov1.p.rapidapi.com/searchMovies', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



const url = 'https://itunes.apple.com/search?term-queen'

const data = fetch(url)
    .then((Reposnse) = Response.json())
    .then((data) => {
        console.log(data)

    })

