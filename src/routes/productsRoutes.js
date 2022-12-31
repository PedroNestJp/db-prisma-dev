const {Router} = require('express')
const router = Router()
const productListController = require('../controllers/products.controller')

router.get('/produtos', productListController.getProducts)
router.get('/produtos/:id', productListController.getproduct)
