const express = require ('express');
const app =  express()
const bodyParser = require('body-parser')
const db = require('./models/db')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//carregamento de models


//caregamento de rotas
const routeIndex = require('./src/routes/index-routes')
const routePlace = require('./src/routes/place-route')
const routeUser = require('./src/routes/user-route')

app.use('/place', routePlace)
app.use('/user', routeUser)

app.listen(3001, function(){
    console.log('servidor rodando na url http://localhost:3001')
})   

module.exports = app