var express = require('express')
var router = express.Router()
const productController = require('../controllers/products')

/* GET home page. */
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
    res.render('index', { products })
  } catch (e) {
    next(e)
  }
})

module.exports = router
