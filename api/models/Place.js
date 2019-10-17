const db = require ('./db')

const Place = db.sequelize.define('places', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: db.Sequelize.STRING,
    },
    setor:{
        type: db.Sequelize.STRING
    },
    status:{
        type: db.Sequelize.BOOLEAN
    }
})

//Place.sync({force: true})
 
module.exports = Place