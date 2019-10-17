const Place = require('../../models/User')

exports.post = (req, res)=>{
    User
    .create(req.body)
    .then(function(){
        res.status(201).send('Criado')
    })
    .catch(e =>{
        console.log(e)
        res.status(400)
    })
}

exports.put = (req, res)=>{
    const data = req.body;
    User
    .update(data, {where: {idPlace: req.params.id}})
    .then(r=>{
        res.status(200).send('Atualizado')
    })
    .catch(e=>{
        console.log(e)
        res.status(400)
    })
}

exports.delete = (req, res)=>{
    User
    .destroy({where: {idPlace: req.params.id}})
    .then(r =>{
        res.status(200).send('Deletado')
    })
    .catch(e=>{
        console.log(e)
        res.status(400)
    })
}

//problemas no get
exports.get = (req, res)=>{
    User
    .findAll()
    .then(data=>{
        res.status(200).send(data)
    })
}
