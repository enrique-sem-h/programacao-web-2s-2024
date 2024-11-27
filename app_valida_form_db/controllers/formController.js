const Appointment = require('../models/formModel');

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
        Appointment.create(data).then(()=>{
            res.render('data.html', {data});
        });
    }
}

function getAppointmentsView(req, res) {
    Appointment.findAll().then((appointments)=>{
        res.render('appointments.html', {appointments});
    });
}

module.exports = {
    getIndexView,
    postData,
    getAppointmentsView
}