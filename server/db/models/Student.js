const Sequelize =  require('sequelize');
const db = require('../index');

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            max: 4,
            min: 0
        }
    },
    name: {
        type: Sequelize.STRING,
        get() {
            return [this.firstName, this.lastName].join(' ');
        }
    }

})

module.exports = Student;