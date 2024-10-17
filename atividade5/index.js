const express = require("express");
const mustache = require("mustache-express");
const app = express();


const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`App running on PORT: ${PORT}`);
});

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    let error = req.query.error;

    let data = req.query.body

    res.render('index.html', {error, data});
});

app.post('/data', (req, res)=>{
    let data = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        apt_date: req.body.apt_date,
    };

    let error = errorHandler(data);

    if(error) {
        res.render('index.html', {error, data});
    } else {
        res.render('data.html', {data});
    }
});

function errorHandler(data) {
    if(data.name.length == 0) {
        return true;
    }
    if(data.phone.length == 0) {
        return true;
    }
    if(data.address.length == 0) {
        return true;
    }
    if(data.apt_date.length == 0) {
        return true;
    }
    return false;
}