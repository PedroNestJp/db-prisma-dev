const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/user/:id', userController.findUser)
router.get('/users', userController.findUsers)
router.post('/user/create', userController.createUser)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.upUser)

module.exports = router