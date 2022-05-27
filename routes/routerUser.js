const controllerUser = require('../controllers/controllerUser')

const express = require('express')
const router = express.Router()

router.get('/user', controllerUser.index)

module.exports = router
