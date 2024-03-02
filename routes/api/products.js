var express = require('express')
var router = express.Router()
const Product = require('../../models/Product')

// GET /api/products
// Devuelve una lista de productos
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

    const products = await Product.allProducts(filter, start, limit, sort, fields)
    res.json({ results: products })
  } catch (e) {
    next(e)
  }
})

// GET /api/products/:id
// Devuelve un producto
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id

    const product = await Product.findById(id)

    res.json({ result: product })
  } catch (e) {
    next(e)
  }
})

// PUT /api/product/:id (body)
// Actualiza un producto
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body

    const productUpdated = await Product.findByIdAndUpdate(id, data, { new: true })

    res.json({ result: productUpdated })
  } catch (e) {
    next(e)
  }
})

// POST /api/product (body)
// Crea un producto nuevo
router.post('/', async (req, res, next) => {
  try {
    const data = req.body

    // Creamos una instancia del producto en memoria
    const product = new Product(data)

    // Lo persistimos en la BD
    const productSaved = await product.save()

    res.json({ result: productSaved })
  } catch (e) {
    next(e)
  }
})

// DELETE /api/product/:id
// Elimina un producto
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id

    await Product.deleteOne({ _id: id })

    res.json()
  } catch (e) {
    next(e)
  }
})

module.exports = router
