const controllerHome = require('../controllers/controllerHome')

const express = require('express')
const router = express.Router()

router.get('/', controllerHome.index)

module.exports = router