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

To start the application in development mode use:

```js
npm run dev
```

## API

### Product list
GET /api/products

```json
{
    "results": [
        {
            "_id": "65e1bc886bba9b304467d641",
            "name": "PlayStation 5",
            "isSelling": true,
            "price": 100,
            "tags": [
                "['console', 'Sony']"
            ],
            "__v": 0
        }
    ]
}
```

#### Filtros
Filtrar por nombre de producto: `GET /api/products?name=<TEXT>`

Filtrar por una etiqueta: `GET /api/products?tag=<TEXT>`

### Add new product
POST /api/products
```
Product {
  name: String,
  isSelling: Boolean,
  price: Number,
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
  tags: Array
}
```

## Delete product
DELETE /api/products/<_id>
