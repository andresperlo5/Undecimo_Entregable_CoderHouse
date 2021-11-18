const express = require('express')
const router = express.Router()
const { GetAllMessage, CreateMessage } = require('../controllers/message.controllers')

router.get('/productos-test', GetAllMessage)

router.post('/productos-test/postmessage', CreateMessage)




module.exports = router
