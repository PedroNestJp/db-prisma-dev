const {Router} = require('express')
const router = Router()
const productListController = require('../controllers/products.controller')

router.post('/', productListController.productsList)
