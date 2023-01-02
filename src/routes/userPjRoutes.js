const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/userpj/:id', userController.getUser)
router.get('/userspj', userController.getUsers)
router.post('/user/create', userController.createUser)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.upUser)

module.exports = router