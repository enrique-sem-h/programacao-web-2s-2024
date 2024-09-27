const stock = require("./API");

// imports express pkg
const xp = require('express');
const app = xp();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App successfully launched at port " + PORT);
});

app.get("/", function(req, res){
    res.send("Welcome to my simple stock API");
});

app.get("/adicionar/:id/:nome/:qnt", function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qnt = req.params.qnt;

    stock.addProduct(id, nome, qnt);
    res.send(`item ${nome} adicionado com sucesso!`);
});

app.get("/listar", function(req, res){
    res.send(`<pre>${stock.list()}</pre>`);
});

app.get("/remover/:id", function(req, res){
    let id = req.params.id;

    stock.remove(id);
    res.send(`item no id: ${id} removido com sucesso!`);
});

app.get("/editar/:id/:qnt", function(req, res){
    let id = req.params.id;
    let qnt = req.params.qnt;
    
    stock.edit(id, qnt)
    res.send(`item no id: ${id} agora possui x${qnt}!`);
});