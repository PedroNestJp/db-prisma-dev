const {Router} = require('express')
const router = Router()
const productController = require('../controllers/product.controller')

router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getproduct)
router.post('/user/create', productController.createProducts)
router.delete('/user/:id', productController.deleteProduct)
router.put('/user/:id', productController.upProduct)

module.exports = router