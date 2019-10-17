const express = require('express')
const router = express.Router()
const controller = require('../controllers/user-controller')

router.post('/register', controller.post)
router.put('/update/:id', controller.put)
router.delete('/delete', controller.delete)
router.get('/consult', controller.get)

module.exports = router