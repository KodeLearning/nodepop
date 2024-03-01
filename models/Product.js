const mongoose = require('mongoose')

// Definiendo el esquema de productos
const productSchema = mongoose.Schema({
  name: String,
  isSelling: Boolean,
  price: Number,
  tags: [String]
})

// Crear el modelo del producto
const Product = mongoose.model('Product', productSchema)

module.exports = Product