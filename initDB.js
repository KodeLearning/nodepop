'use strict'

const readline = require('node:readline')
const connection = require('./lib/connectMongoose')
const Product = require('./models/Product')

main().catch((e) => console.log('Hubo un error:', e))

async function main() {
  // Esperar a la conexión de MongoDB
  await new Promise((resolve) => connection.once('open', resolve))

  const remove = await askToContinue('¿Estás seguro de querer borrar todo el contenido de la base de datos? (y/n)')
  if (!remove) {
    process.exit()
  }

  await initProducts()

  connection.close()
}

async function initProducts() {
  // Borrar todos los productos
  const deleted = await Product.deleteMany()
  console.log(`Eliminados ${deleted.deletedCount} productos.`)

  // Crear productos iniciales
  const inserted = await Product.insertMany([
    {
      name: 'PlayStation 1',
      isSelling: true,
      price: 100,
      image: 'playstation1.png',
      tags: ['console', 'sony'],
    },
    {
      name: 'PlayStation 2',
      isSelling: false,
      price: 200,
      image: 'playstation2.png',
      tags: ['console', 'sony'],
    },
    {
      name: 'PlayStation 3',
      isSelling: false,
      price: 300,
      image: 'playstation3.png',
      tags: ['console', 'sony'],
    },
    {
      name: 'PlayStation 4',
      isSelling: true,
      price: 400,
      image: 'playstation4.png',
      tags: ['console', 'sony'],
    },
    {
      name: 'XBOX',
      isSelling: false,
      price: 200,
      image: 'xbox.png',
      tags: ['console', 'microsoft'],
    },
    {
      name: 'XBOX One',
      isSelling: false,
      price: 200,
      image: 'xboxone.png',
      tags: ['console', 'microsoft'],
    },
    {
      name: 'Game Boy Color',
      isSelling: false,
      price: 50,
      image: 'gameboycolor.png',
      tags: ['console', 'nintendo'],
    },
    {
      name: 'Nintendo 64',
      isSelling: false,
      price: 200,
      image: 'nintendo64.png',
      tags: ['console', 'nintendo'],
    },
    {
      name: 'Nvidia Shield',
      isSelling: true,
      price: 600,
      image: 'nvidiashield.png',
      tags: ['console', 'nvidia'],
    },
  ])
  console.log(`Creados ${inserted.length} productos.`)
}

function askToContinue(question) {
  return new Promise((resolve, reject) => {
    // Conectar readline con la consola
    const ifc = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    ifc.question(question, (reply) => {
      ifc.close()
      resolve(reply.toLocaleLowerCase() === 'yes' || reply.toLocaleLowerCase() === 'y')
    })
  })
}
