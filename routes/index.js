var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', async function (req, res, next) {
  const data = await fetch('http://192.168.1.129:3000/api/products?start=0&limit=3')
  const products = await data.json()
  res.render('index', { products: products.results })
})

module.exports = router
