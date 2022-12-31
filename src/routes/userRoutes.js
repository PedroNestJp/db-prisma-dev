const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/user', userController.findUser)
router.get('/users', userController.findUsers)
router.post('/user/create', userController.createUser)

module.exports = router