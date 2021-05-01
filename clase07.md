---
layout: post
title: MongoDB - Metodos, filtros y operadores
author: Santiago Gutiérrez Pérez
date: 2021-04-14
---

En MongoDB la estrucutra de la base de datos se ve como: `BasedeDatos.Coleccion.Metodos()`, en donde los metodos a su vez pueden o no recibir parametros, en el caso del metodo `find()` a este se le puede ingresar un parametro, que sería el filtro, equivalente al `WHERE` de SQL.  

* `find()`
El filtro de este método es un objeto JavaScript, tiene una clave y un valor, además puede tener operadores, estos operadores utilizan palabras reservadas del lenguaje de consulta, un ejemplo de una busqueda usando un operador es el siguiente:
```javascript
cine.peliculas.find({year: {$gt: 2011}}).pretty()
```
Lo que esta línea de codigo hace es buscar en la base de datos `cine`, en la colección `peliculas` aquellos elementos en donde su atributo `year` sea mayor a 2011, es decir, trae las peliculas que tengan fecha de estreno mayor a 2011.

#### Operadores de consulta o Query operators
Son los operadores usados para consultar la información, el ejemplo anterior muestra como usar el operador `$gt`, este equivale a valores mayores (greather than) el valor que se esta buscando.
Para añadir mas filtros en el metodo find, solo es separar los objetos de busqueda por comas, si se quiere buscar peliculas con fecha menor a 2008 y que ademas tengan como rating un valor  mayor a 7 el siguiente comando lo haría:

```javascript
cine.peliculas.find({year: {$lt: 2008}, rating: {$gt: 7}}).pretty()
```

Esta es una lista de operadores utiles:
* **Comparacion**
   * `$eq` - Matches values that are equal to a specified value.
   * `$gt` - Matches values that are greater than a specified value.
   * `$gte` - Matches values that are greater than or equal to a specified value.
   * `$in` - Matches any of the values specified in an array.
   * `$lt` - Matches values that are less than a specified value.
   * `$lte` - Matches values that are less than or equal to a specified value.
   * `$ne` - Matches all values that are not equal to a specified value.
   * `$nin` - Matches none of the values specified in an array.[1]  

---
* **Logicos**
  *  `$and` - Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
  * `$not` - Inverts the effect of a query expression and returns documents that do not match the query expression.
  * `$nor` - Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
  * `$or` - Joins query clauses with a logical OR returns all documents that match the conditions of either clause. [1]

Un ejemplo del uso de estos operadores es si se quiere consultar las peliculas que hayan salido despues del año 2000 *y* antes del 2008 incluyendolo, para hacer uso de este operador se tiene la siguiente sintaxis:
```javascript
cine.peliculas.find({$and: [{year:{$gt: 2000}}, {year:{$lte: 2008}}]).pretty()
```
Cabe resaltar que para añadir componentes al operador `$and` se debe pasar una lista de objetos con las consultas, en este caso de comparación.

---
* **De elemento**
  * `$exists` - Matches documents that have the specified field.
  * `$type` - Selects documents if a field is of the specified type.


#### Operadores de proyeccion o Projection operators
Estos son operadores usados para mostrar la información


### Busquedas dentro de un Array  
Si se tiene un campo dentro de una coleccion que este a su vez tenga una lista de objetos, por ejemplo si se tiene una coleccion de productos con una organizacion asi:

```javascript
{
      "_id" : ObjectId("6080e638152dc02b1fc55291"),
      "nombre producto" : "Crema dental",
      "Descripción del producto" : "descripcion",
      "Fecha de creacion" : 240421,
      "Precio" : 12000,
      "Cantidad de inventario" : 10,
      "vendedor" : {
              "nombre" : "Pepito",
              "teléfonos" : 123,
              "dirección" : "calle123",
              "ciudad de residencia" : "Medellin",
              "calificación por ventas" : 10
      }
}
```
Si se quiere consultar los productos cuyo vendedor sea Pepito la sintaxis es la siguiente:


```javascript

db.inventario.find({"vendedor.nombre": "Pepito"}).pretty()
```

Se tiene que enviar el nombre del campo de la coleccion con un punto y el nombre del campo interno para poder realizar esta consulta, debe de escribirse entre comilllas. Mongo reconoce que "vendedor" contiene un array de datos y con el punto va a buscar en cada uno de los objetos embebidos.

# Referencias
[1] Documentación oficial de MongoDB.
