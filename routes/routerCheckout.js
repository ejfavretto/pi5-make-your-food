const controllerCheckout = require('../controllers/controllerCheckout')

const express = require('express')
const router = express.Router()

router.get('/checkout', controllerCheckout.index)

module.exports = router