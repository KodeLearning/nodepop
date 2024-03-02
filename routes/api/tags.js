var express = require('express')
var router = express.Router()
const Product = require('../../models/Product')

// GET /api/tags
// Deuvelve todas las etiquetas utilizadas
router.get('/', async (req, res, next) => {
  try {
    const tags = await Product.find({}).select({ 'tags': 1, '_id': 0 }).distinct('tags')

    res.json(tags)
  } catch (e) {
    next(e)
  }
})

module.exports = router
