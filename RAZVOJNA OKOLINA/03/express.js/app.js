const express = require('express');
// kreiaraj app
const app = express();
const port = 3000;

//4.
const users = [
    { name: 'Ana', age: 25 },
    { name: 'Mirko', age: 35 },
];


//3. dođe zahtjev na port 3000 i ovo je root servera
// jedan je request korisnika, res je response 
app.get('/', (req, res) => {
    res.send('Ovo server odgovara...')
})

//4.1. daj sve korsinike
app.get('/users', (req, res) => {
    res.send(JSON.stringify(users));
})

//2.  digni server na portu i čekaj request
// u gitbash opali node app.je i pokazuje App on port...
app.listen(port, () => {
    console.log(`App on port ${port}`);
});
