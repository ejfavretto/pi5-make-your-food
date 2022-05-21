const controllerCategory = require('../controllers/controllerCategory')

const express = require('express')
const router = express.Router()

router.get('/category', controllerCategory.index)

module.exports = router