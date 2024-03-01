# Nodepop

## Notas para el desarrollo

### Acciones que debe poder realizar la API
  * Listar los anuncios
    * Paginación si es necesaria
    * Filtro de anuncios por:
      * Etiqueta
      * Tipo de anuncio (Se vende o Se busca)
      * Rango de precio (mínimo y máximo)
      * Nombre del artículo
  * Listar las etiquetas
  * Crear un anuncio

### Cada anuncio debe tener
  * Nombre del artículo
    * Cada artículo debe tener su propio anuncio
  * _Se vende_ o _Se busca_
  * Precio
    * Si _Se vende_ será el precio de venta; Si _Se busca_ será el precio que se pretende pagar.
  * Foto del anuncio
    * Una por anuncio
  * Etiquetas del anuncio
    * Puede tener una o varias etiquetas
    * Posibles etiquetas: work, lifestyle, motor y mobile


## Development

Install dependencies.
```sh
npm install
```

Initialize the database:
* Warning, the next command deletes all contents of the database!!!!

```sh
npm run init-db
```

To start the application in development mode use:

```sh
npm run dev
```

## API

### Product list
GET /api/products

```json
{
  "results": [
    {
      "_id": "65e1c674e38cc3a9db3c99fb",
      "name": "PlayStation 5",
      "isSelling": true,
      "price": 100,
      "image": "playstation5.png",
      "tags": [
          "console",
          "sony"
      ],
    }
  ]
}
```

#### Filtros
Filtrar por nombre de producto: `GET /api/products?name=<TEXT>`

Filtrar por una etiqueta: `GET /api/products?tag=<TEXT>`

Filtrar usando paginación: `GET /api/products?start=<NUMBER>&limit=<NUMBER>`

Ordenar por uno o más campos: `GET /api/products?sort=<DB_FIELD>`

### Add new product
POST /api/products
```
Product {
  name: String,
  isSelling: Boolean,
  price: Number,
  image: String,
  tags: Array
}
```

## Update product
PUT /api/products/<_id>
```
Product {
  name: String,
  isSelling: Boolean,
  price: Number,
  image: String,
  tags: Array
}
```

## Delete product
DELETE /api/products/<_id>
