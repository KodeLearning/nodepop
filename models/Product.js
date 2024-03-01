const mongoose = require('mongoose')

// Definiendo el esquema de productos
const productSchema = mongoose.Schema({
  name: String,
  isSelling: Boolean,
  price: Number,
  image: String,
  tags: Array
})

// Método listar
productSchema.statics.allProducts = (filter, start, limit) => {
  const query = Product.find(filter)
  query.skip(start)
  query.limit(limit)

  return query.exec()
}

// Crear el modelo del producto
const Product = mongoose.model('Product', productSchema)

module.exports = Product