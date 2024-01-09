const express = require('express')
const { getHomePage, getHomeProduct, getAllProduct, creatNewUser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/home', getHomeProduct)
router.get('/product', getAllProduct)
router.post('/test', creatNewUser)




module.exports = router;