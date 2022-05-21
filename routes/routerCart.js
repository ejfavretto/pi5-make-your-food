const controllerCart = require('../controllers/controllerCart')

const express = require('express')
const router = express.Router()

router.get('/cart', controllerCart.index)

module.exports = router