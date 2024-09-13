const calc = require('./calc/calc');

const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("Succesfully launched app on port " + PORT);
});

app.get('/', function(req, res){
    res.send("Hello and welcome to simpleCalc! \n To use type in the desired endpoints:\n/sum/(parameters) to sum\n/sub/(parameters) to subtract\n/mult/(parameter a)/(parameter b) to multiply\n/div/(parameters) to divide");
});

app.get('/sum/:a/:b', function(req, res){
    a = Number(req.params.a);
    b = Number(req.params.b);
    res.send(String(calc.sum(a, b)));
});
app.get('/sub/:a/:b', function(req, res){
    a = Number(req.params.a);
    b = Number(req.params.b);
    res.send(String(calc.subtract(a, b)));
});
app.get('/mult/:a/:b', function(req, res){
    a = Number(req.params.a);
    b = Number(req.params.b);
    res.send(String(calc.multiply(a, b)));
});
app.get('/div/:a/:b', function(req, res){
    a = Number(req.params.a);
    b = Number(req.params.b);
    res.send(String(calc.divide(a, b)));
});