var express = require('express')
var router = express.Router()
const productController = require('../controllers/products')

router.get('/', async function (req, res, next) {
  try {
    // Filtros
    const filter = {}
    const filterByName = req.query.name
    const filterByTag = req.query.tag
    // Paginación
    const start = req.query.start
    const limit = req.query.limit
    // Ordenación
    const sort = req.query.sort
    // Field selection
    const fields = req.query.fields

    if (filterByName) {
      filter.name = filterByName
    }

    if (filterByTag) {
      filter.tag = filterByTag
    }

    const products = await productController.allProducts(filter, start, limit, sort, fields)
    res.render('products', { products })
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async function (req, res, next) {
  const data = await productController.selectProduct(req.params.id)

  const product = data.product
  res.render('products_single', { product })
})

module.exports = router
