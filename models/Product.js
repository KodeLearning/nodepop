const mongoose = require('mongoose')

// Definiendo el esquema de productos
const productSchema = mongoose.Schema({
  name: { type: String, index: true },
  isSelling: Boolean,
  price: Number,
  image: String,
  tags: { type: [String], index: true },
})

// Método listar
productSchema.statics.allProducts = (filter, start, limit, sort, fields) => {
  const query = Product.find(filter)
  query.skip(start)
  query.limit(limit)
  query.sort(sort)
  query.select(fields)

  return query.exec()
}

// Crear el modelo del producto
const Product = mongoose.model('Product', productSchema)

module.exports = Product
