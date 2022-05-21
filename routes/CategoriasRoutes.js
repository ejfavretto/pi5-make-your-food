const express = require('express')
const CategoriasController = require('../controllers/CategoriasController')

const router = express.Router()

router.get('/', CategoriasController.index)
router.get('/categories', CategoriasController.categoriesView)

module.exports = router
