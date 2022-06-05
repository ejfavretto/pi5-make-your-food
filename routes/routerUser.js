const controllerUser = require('../controllers/controllerUser')
const controllerOrder = require('../controllers/controllerOrder')

const express = require('express')
const router = express.Router()

// router.get('/user', controllerUser.index)

router.get('/user/createUser', controllerUser.createUser)
router.post('/user/storeUser', controllerUser.storeUser)

router.get('/user/editUser', controllerUser.editUser)
router.post('/user/updateUser', controllerUser.updateUser)

router.get('/user/editPassword', controllerUser.editPassword)
router.post('/user/updatePassword', controllerUser.updatePassword)

router.get('/user/userSignIn', controllerUser.userSignIn)
router.post('/user/userLogged', controllerUser.userLogged)

router.get('/user/userSignUp', controllerUser.userSignUp)
router.post('/user/userCreated', controllerUser.userCreated)

router.get('/user/orders', controllerOrder.index)

module.exports = router
