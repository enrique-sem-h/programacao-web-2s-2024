const Sequelize = require('sequelize');
const db = require('../db');

const Appointment = db.define('appointment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },  
    birth_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Appointment;