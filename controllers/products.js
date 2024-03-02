const Product = require('../models/Product')

async function allProducts(filter, start, limit, sort, fields) {
  const products = await Product.allProducts(filter, start, limit, sort, fields)

  return products
}

async function selectProduct(id) {
  try {
    const product = await Product.findById(id)

    return { product }
  } catch (e) {
    throw Error(e)
  }
}

module.exports = {
  selectProduct,
  allProducts,
}
