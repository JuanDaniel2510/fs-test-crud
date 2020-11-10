const express = require('express');
const app = express();
app.use(express.json());

const moviesDB = [];

app.post('/movie',(req,res)=>{
    //{name categoría}
    let movie = req.body;
    movie.id = Math.random();
    moviesDB.push(movie);
    res.json(movie);
});

app.put('/movie/:id',(req,res)=>{
    //{name categoría}
    let id = Number(req.params.id);
    let movieEditIndex = moviesDB.findIndex(movie => movie.id === id)
    moviesDB[movieEditIndex].name = req.body.name;
    res.json(moviesDB[movieEditIndex]);
});

app.get('/movie/:id',(req,res)=>{
    //{name categoría}
    let id = Number(req.params.id);
    let movieEdit = moviesDB.find(movie => movie.id === id)
    res.json(movieEdit);
});

app.get('/movie',(req,res)=>{
    res.json(moviesDB);
});

app.delete('/movie/:id',(req,res)=>{
    //{name categoría}
    let id = Number(req.params.id);
    let movieEditIndex = moviesDB.findIndex(movie => movie.id === id)
    res.json(moviesDB.splice(movieEditIndex, 1));
});

app.get('/',(req,res)=>{
    res.json();
});

app.listen(3000);