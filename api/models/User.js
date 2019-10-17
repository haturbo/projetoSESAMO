const db = require ('./db')

const User = db.sequelize.define('users', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: db.Sequelize.STRING,
        required: true
    },
    cpf:{
        type: db.Sequelize.STRING,
        length: 11,
        required: true
    },
    email:{
        type: db.Sequelize.STRING
    },
    dataNascimento:{
        type: db.Sequelize.DATE
    }
})


 
module.exports = User