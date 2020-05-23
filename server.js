var express = require('express');
var app = express();
const path = require('path');
const port = 8080;

app.use(express.static(__dirname + '/'));
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.status(200);
    res.render('index.ejs');
}).get('/new', (req, res) => {
    res.status(200)
    res.render('insert.ejs');
}).get('/update/:id', (req, res) => {
    res.status(200);
    res.render('update.ejs', {
        "index": req.params.id
    });
}).get('/inserer', (req, res) => {
    res.status(200)
    res.sendFile(__dirname + "/views/inserer2.html");
})

//Ajouter router
const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', minute:'numeric', second:'numeric' };

app.listen(port, () => {
     console.log(`Le serveur est à l'écoute sur le port ${port}`)
     console.log(new Date().toLocaleDateString('fr-FR', options));
})