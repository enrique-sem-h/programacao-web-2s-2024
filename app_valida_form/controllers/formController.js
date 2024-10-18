function getIndexView(req, res) {
    let erro_form = req.query.erro_form;

    let name = req.query.name;
    let birth_date = req.query.birth_date;
    let description = req.query.description;

    res.render('index.html', {erro_form, name, birth_date, description});
}

function postData(req, res) {
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
        res.redirect(`/?erro_form=true&name=${data.name}&description=${data.description}&birth_date=${data.birth_date}`);
    } else {
        res.render('data.html', {data});
    }
}

module.exports = {
    getIndexView,
    postData
}