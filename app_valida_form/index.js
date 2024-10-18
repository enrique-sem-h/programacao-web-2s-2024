const formRouter = require('./routers/formRouter')
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + `/views`);
app.use(express.urlencoded({extended: true}));

app.use('/', formRouter);

app.listen(PORT, ()=>{
    console.log(`App running at PORT: ${PORT}`);
});