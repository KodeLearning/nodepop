var express = require('express')
var router = express.Router()

router.get('/', async function (req, res, next) {
  const data = await fetch('http://192.168.1.129:3000/api/products')
  const products = await data.json()
  res.render('products', { products: products.results })
})

router.get('/:id', async function (req, res, next) {
  const data = await fetch('http://192.168.1.129:3000/api/products/' + req.params.id)
  const product = await data.json()
  res.render('products_single', { product: product.result })
})

module.exports = router
