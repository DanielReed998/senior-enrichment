'use strict';

const Sequelize = require('sequelize');
const db = require('../index');


const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgUrl: {
        type: Sequelize.TEXT,
        defaultValue: '',
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus;