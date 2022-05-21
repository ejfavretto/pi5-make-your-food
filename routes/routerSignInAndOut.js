const controllerSignInAndOut = require('../controllers/controllerSignInAndOut')

const express = require('express')
const router = express.Router()

router.get('/login', controllerSignInAndOut.index)

module.exports = router