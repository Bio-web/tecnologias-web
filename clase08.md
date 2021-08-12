---
layout: post
title: Bases de datos en Mongo
author:Angie Dahiana Vargas Serna
date: 2021-07-31
---

# Índices en bases de datos No relacionales:

Los *índices* son estructuras de datos especiales que almacenan una pequeña parte de datos de la colección en una forma más fácil de recorrer. 

*Sin índices* MongodB realiza un scaneo completo de la colección para encontrar coincidencias y mostrar un resultado, por lo tanto este tipo de búsqueda cuando hay muchos datos puede ser de gran costo computacional debido a que busca por cada colección completa por lo cual es recomendable utilizar índices por categorías más comunes en la búsqueda. 

*Importante:* Definir de la mejor manera los índices necesarios.

## Tipos de índices


```js
○ `Campo específico:`
db.movies.createIndex({name:1})

○ `Compuesto:`
db.movies.createIndex({name:1, year:1})

○ `Único:`
db.movies.createIndex({name:1},{unique:true})
Crea un campo único como la cédula.

○ `Texto`
db.movies.createIndex({name:"text"},{sipnosis:"text"})
Busca entre cadenas de texto sin importar minúsculas, mayúsculas o tíldes.
Pero para hacer las búsquedas por este índice se hace de la siguiente manera:

db.collections.find({$text:{$search:"palabraBuscar"}})

```
Solo se puede crear un índice de texto con varios campos 

- Para revisar los distintos indices actuales se puede utilizar el siguiente comando:
db.collection.getIndexes()

- Para revisar el plan de ejecución de los query que permite saber si busca los datos por scaneo de toda la colleción o por scaneo de index
```js
db.collecion.explain()
`stage`: COOLSCAN //Por colección
`stage`: IXSCAN  //Por índices
```

## Eliminar índices
```js
db.collections.dropIndex("nameIndex")
```

## Agregación en Mongo

- Permite procesar los datos y devolver los calculados
- Permite agregar valores de varios documentos y realizar operaciones sobre los datos agrupados


### Métodos 

1)Pipeline de agregación:
```js 
db.collection.aggregate([{$match:{campo: valor}}, $group: {_id : "$year", numeroPeliculas:{$count:{}}} ])
```
*match:* Filtro del campo

*group:* Agrupación   

*count:* Contador // Cúantas películas cumple el filtro

*sum:* Sumador 


### Ejemplo lookup:
```js 
db.peliculas.aggregate([
    {
        $lookup:{  
        from: "actors",
        localField: "actors._id",
        foreignField: "_id",
        as:"actors"
        }
    }
])
```

2) Map-Reduce
3) Operaciones de único propósito



# MONDO DB COMPASS
Cadena de conexión:
*mongodb://localhost:27017*
