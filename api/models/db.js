const Sequelize = require ('sequelize')

const sequelize = new Sequelize ('sezamo', 'postgres', 'postgres', {
    host: "localhost",
    dialect: "postgres"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}