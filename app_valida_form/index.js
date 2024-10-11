const express = require('express');
const mustacheExpress = require('mustache-express');
const mustache = require('mustache-express');
const app = express();

const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + `/views`);
app.use(express.urlencoded({extended: true}));

app.listen(PORT, ()=>{
    console.log(`App running at PORT: ${PORT}`);
});

app.get('/', (req, res)=>{
    let erro_form = req.query.erro_form;

    res.render('index.html', {erro_form});
});

app.post('/data', (req, res)=>{
    let data = {
        name: req.body.name,
        birth_date: req.body.birth_date,
        description: req.body.description,
    };

    let erro_form = false;
    if(data.name.length == 0) {
        erro_form = true;
    }

    if(data.birth_date.length == 0) {
        erro_form = true
    }

    if(erro_form) {
        res.redirect('/?erro_form=true');
    } else {
        res.render('data.html', {data});
    }
});