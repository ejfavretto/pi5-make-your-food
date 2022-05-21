const controllerUser = require('../controllers/controllerUser')

const express = require('express')
const router = express.Router()

router.get('/login', controllerUser.index)

module.exports = router