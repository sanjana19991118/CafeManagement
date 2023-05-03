const express = require('express')
const router = express.Router()
const menuItemsController = require('../app/controllers/menuItemsController')
const orderController = require('../app/controllers/orderController')


//menu
router.get('/api/menuItems', menuItemsController.list)
router.post('/api/menuItems', menuItemsController.create)

//search
router.get('/api/menuItems/search', menuItemsController.show)

//order
router.get('/api/order', orderController.list)
router.post('/api/order', orderController.create)
router.get('/api/order/:id', orderController.show)
router.put('/api/order/update/:id', orderController.update)


module.exports = router