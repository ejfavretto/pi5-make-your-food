const express = require('express')
const controllerOrder = require('../controllers/controllerOrder')

const routerOrder = express.Router()

routerOrder.get('/orders', controllerOrder.index)

module.exports = routerOrder
