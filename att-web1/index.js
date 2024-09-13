const letter_case = require('./letter_case/letter_case');

// imports express pkg
const xp = require('express');
const app = xp();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App successfully launched at port " + PORT);
});

app.get('/', function(req,res){
    res.send("Hello World!");
});

app.get('/upper', function(req, res){
    res.send(letter_case.uppercase("Hello World!"));
});

app.get('/lower', function(req, res){
    res.send(letter_case.lowercase("Hello World!"));
});

app.get('/upper/:n', function(req, res){
    res.send(letter_case.uppercase(req.params.n));
});

app.get('/lower/:n', function(req, res){
    res.send(letter_case.lowercase(req.params.n));
});

let s1 = "AbCd";

// console.log(letter_case.uppercase(s1));
// console.log(letter_case.lowercase(s1));
// console.log(letter_case.lowercase(123));
