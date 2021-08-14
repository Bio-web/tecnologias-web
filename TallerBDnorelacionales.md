# Taller MongoDB

# Parte 1

Diseñar e implementar una base de datos no relacional en MongoDB con base en el siguiente enunciado:

Se requiere la creación de una tienda virtual de productos varios donde se tenga la capacidad de almacenar para cada producto características tales como el nombre, la descripción del producto, la fecha de creación, el precio y la cantidad en inventario, adicionalmente por cada producto se requiere poder consultar la información del vendedor como el nombre, información de contacto (`teléfono o teléfonos, dirección,ciudad de residencia, etc`) y calificación por ventas. Poblar la base de datos con varios productos y vendedores haciendo uso de las funciones
de creación insertOne o insertMany. A partir de la base de datos implementada realizar las siguientes consultas:

    ● Consultar todos los productos de la tienda.
    ● Consultar un producto específico de la tienda por nombre.
    ● Consultar todos los productos que tengan existencias de la tienda.
    ● Consultar a todos los vendedores.
    ● Consultar la información de un vendedor por nombre.
    ● Consultar todos los vendedores cuya ciudad de residencia sea Medellín.
    ● Consultar el vendedor con mejor calificación.
    ● El producto más caro de la tienda.
Puede agregar campos y más complejidad a los documentos si lo cree conveniente.

## Desarrollo
```js
use tiendaVirtual
db.inventario.insertOne( {"nombre producto":"Crema dental","Descripción del producto":"descripcion", "Fecha de creacion":240421 ,"Precio": 12000 ,"Cantidad de inventario": 10, "vendedor":{"nombre":"Pepito","teléfonos":123, "dirección":"calle123", "ciudad de residencia":"Medellin" ,"calificación por ventas": 10}})
db.inventario.insertOne( {"nombre producto":"Cepillo dental","Descripción del producto":"descripcion", "Fecha de creacion":240421 ,"Precio":5000 ,"Cantidad de inventario": 140, "vendedor":{"nombre":"Panchito","teléfonos":1234, "dirección":"calle1243", "ciudad de residencia":"Bogota" ,"calificación por ventas":8}})
db.inventario.insertOne( {"nombre producto":"jabon","Descripción del producto":"descripcion", "Fecha de creacion":240421 ,"Precio":1000 ,"Cantidad de inventario": 0, "vendedor":{"nombre":"Pepa","teléfonos":1234, "dirección":"calle1243", "ciudad de residencia":"Bogota" ,"calificación por ventas":2}})
db.inventario.insertOne( {"nombre producto":"caja de cervezas","Descripción del producto":"debida", "Fecha de creacion":311221 ,"Precio":60000 ,"Cantidad de inventario": 4, "vendedor":{"nombre":"Juanito","teléfonos":4567, "dirección":"calle1243", "ciudad de residencia":"Bucaramanga" ,"calificación por ventas":8}})
```
* Consultar productos de la tienda 
```js
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
{
        "_id" : ObjectId("6080e6c7152dc02b1fc55292"),
        "nombre producto" : "Cepillo dental",
        "Descripción del producto" : "descripcion",
        "Fecha de creacion" : 240421,
        "Precio" : 5000,
        "Cantidad de inventario" : 140,
        "vendedor" : {
                "nombre" : "Panchito",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 8
        }
}
```
* Consultar un producto específico de la tienda por nombre.
``` js
 db.inventario.find({"nombre producto":"Crema dental"}).pretty()
{
        "_id" : ObjectId("6080e608152dc02b1fc55290"),
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
* Consultar todos los productos que tengan existencias de la tienda.
```js
db.inventario.find({"Cantidad de inventario":{$gt:0}}).pretty()
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
{
        "_id" : ObjectId("6080e6c7152dc02b1fc55292"),
        "nombre producto" : "Cepillo dental",
        "Descripción del producto" : "descripcion",
        "Fecha de creacion" : 240421,
        "Precio" : 5000,
        "Cantidad de inventario" : 140,
        "vendedor" : {
                "nombre" : "Panchito",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 8
        }
}

```
* Consultar a todos los vendedores.
```js
db.inventario.find({},{"vendedor.nombre":1}).pretty()
{
        "_id" : ObjectId("61157778eef8a0052b1da4ce"),
        "vendedor" : {
                "nombre" : "Pepito"
        }
}
{
        "_id" : ObjectId("61157790eef8a0052b1da4cf"),
        "vendedor" : {
                "nombre" : "Panchito"
        }
}
{
        "_id" : ObjectId("611579c4eef8a0052b1da4d0"),
        "vendedor" : {
                "nombre" : "Pepa"
        }
}
```
* Consultar la información de un vendedor por nombre.
``` js
 db.inventario.find({"vendedor.nombre":"Panchito"}).pretty()
{
        "_id" : ObjectId("6080e6c7152dc02b1fc55292"),
        "nombre producto" : "Cepillo dental",
        "Descripción del producto" : "descripcion",
        "Fecha de creacion" : 240421,
        "Precio" : 5000,
        "Cantidad de inventario" : 140,
        "vendedor" : {
                "nombre" : "Panchito",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 8
        }
}
``` 
* Consultar todos los vendedores cuya ciudad de residencia sea Medellín.

``` js
 > db.inventario.find({"vendedor.ciudad de residencia":"Medellin"}).pretty()
{
        "_id" : ObjectId("6080e608152dc02b1fc55290"),
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

* Consultar el vendedor con mejor calificación.
```js
 db.inventario.find().sort({"vendedor.calificacion por ventas":-1}).limit(1).pretty()
{
        "_id" : ObjectId("6080e608152dc02b1fc55290"),
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
* El producto más caro de la tienda.
 ```js
 db.inventario.find().sort({precio:-1}).limit(1).pretty()
{
        "_id" : ObjectId("6080e608152dc02b1fc55290"),
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

# Parte 2

Con base en la base de datos implementada en el punto anterior realizar las siguientes
consultas:

● Consultar los productos de la tienda cuyo precio sea mayor a 50 mil pesos
```js
db.inventario.find({"Precio":{$gt:50000}}).pretty()
{
        "_id" : ObjectId("61157fbeeef8a0052b1da4d1"),
        "nombre producto" : "caja de cervezas",
        "Descripción del producto" : "debida",
        "Fecha de creacion" : 311221,
        "Precio" : 60000,
        "Cantidad de inventario" : 4,
        "vendedor" : {
                "nombre" : "Juanito",
                "teléfonos" : 4567,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bucaramanga",
                "calificación por ventas" : 8
        }
}
```
● Consultar los productos que tengan menos de 50 existencias en inventario
```js
db.inventario.find({"Cantidad de inventario":{$lt:50}}).pretty()
{
        "_id" : ObjectId("61157778eef8a0052b1da4ce"),
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
{
        "_id" : ObjectId("611579c4eef8a0052b1da4d0"),
        "nombre producto" : "Jabon",
        "Descripción del producto" : "descripcion",
        "Fecha de creacion" : 240421,
        "Precio" : 1000,
        "Cantidad de inventario" : 0,
        "vendedor" : {
                "nombre" : "Pepa",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 2
        }
}
{
        "_id" : ObjectId("61157fbeeef8a0052b1da4d1"),
        "nombre producto" : "caja de cervezas",
        "Descripción del producto" : "debida",
        "Fecha de creacion" : 311221,
        "Precio" : 60000,
        "Cantidad de inventario" : 4,
        "vendedor" : {
                "nombre" : "Juanito",
                "teléfonos" : 4567,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bucaramanga",
                "calificación por ventas" : 8
        }
}
```
● Consultar los productos que fueron creados entre el 1 de enero de y el 31 de
diciembre de 2020
```js
db.inventario.insertMany( [{"nombre producto":"Papel higienico","Descripción del producto":"aseo", "Fecha de creacion":311220 ,"Precio":12000 ,"Cantidad de inventario": 90, "vendedor":{"nombre":"Juanito","teléfonos":4567, "dirección":"calle1243", "ciudad de residencia":"Bucaramanga" ,"calificación por ventas":8}},{"nombre producto":"cereales","Descripción del producto":"granos", "Fecha de creacion":050120 ,"Precio":15000 ,"Cantidad de inventario": 89, "vendedor":{"nombre":"Pepa","teléfonos":4567, "dirección":"calle1243", "ciudad de residencia":"Barranquilla" ,"calificación por ventas":1}}])
```
Muestra el número de productos con fechas entre ese rango
```js 
 db.inventario.find({$and:[{"Fecha de creacion":{$gte:010120}}, {"Fecha de creacion": {$lte: 311220}}]}).pretty().count()
5
```
● Consultar todos los productos que contengan la palabra “aseo” en el nombre o en la
descripción
```js
db.inventario.find({"Descripción del producto":/aseo/}).pretty()
{
        "_id" : ObjectId("6115830eeef8a0052b1da4d2"),
        "nombre producto" : "Papel higienico",
        "Descripción del producto" : "aseo",
        "Fecha de creacion" : 311220,
        "Precio" : 12000,
        "Cantidad de inventario" : 90,
        "vendedor" : {
                "nombre" : "Juanito",
                "teléfonos" : 4567,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bucaramanga",
                "calificación por ventas" : 8
        }
```
● Consultar todos los productos cuyo nombre inicie por la letra “C”
```js
db.inventario.find({"nombre producto":/[C]/}).pretty().count()
```
● Consultar el nombre y la descripción de los productos de un vendedor
```js
 db.inventario.find({"vendedor.nombre":"Pepa"},{"nombre producto": 1}).pretty().count()
```
● Consultar 10 productos ordenados por nombre alfabeticamente
```js
db.inventario.find({"nombre producto":/[A-Z]/}).sort({"nombre producto":-1}).pretty()
{
        "_id" : ObjectId("6115830eeef8a0052b1da4d2"),
        "nombre producto" : "Papel higienico",
        "Descripción del producto" : "aseo",
        "Fecha de creacion" : 311220,
        "Precio" : 12000,
        "Cantidad de inventario" : 90,
        "vendedor" : {
                "nombre" : "Juanito",
                "teléfonos" : 4567,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bucaramanga",
                "calificación por ventas" : 8
        }
}
{
        "_id" : ObjectId("611579c4eef8a0052b1da4d0"),
        "nombre producto" : "Jabon",
        "Descripción del producto" : "descripcion",
        "Fecha de creacion" : 240421,
        "Precio" : 1000,
        "Cantidad de inventario" : 0,
        "vendedor" : {
                "nombre" : "Pepa",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 2
        }
}
{
        "_id" : ObjectId("61157778eef8a0052b1da4ce"),
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
{
        "_id" : ObjectId("61157790eef8a0052b1da4cf"),
        "nombre producto" : "Cepillo dental",
        "Descripción del producto" : "descripcion",
        "Fecha de creacion" : 240421,
        "Precio" : 5000,
        "Cantidad de inventario" : 140,
        "vendedor" : {
                "nombre" : "Panchito",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 8
        }
}
```
● Consultar los 5 vendedores con mejor reputación de la tienda
```js
db.inventario.aggregate([{$group:{ _id:{nombre:"$vendedor.nombre"}, "calificación por ventas":{$first:"$vendedor.calificación por ventas"} } }, {$limit:5},{$sort:{"calificación por ventas":-1}} ]).pretty()
{ "_id" : { "nombre" : "Pepito" }, "calificación por ventas" : 10 }
{ "_id" : { "nombre" : "Juanito" }, "calificación por ventas" : 8 }
{ "_id" : { "nombre" : "Panchito" }, "calificación por ventas" : 8 }
{ "_id" : { "nombre" : "Pepa" }, "calificación por ventas" : 2 }
```
● Consultar los productos con toda la información del vendedor
```js
db.inventario.find(null,{"vendedor":1,"_id":0,"nombre producto":1}).pretty()
{
        "nombre producto" : "Crema dental",
        "vendedor" : {
                "nombre" : "Pepito",
                "teléfonos" : 123,
                "dirección" : "calle123",
                "ciudad de residencia" : "Medellin",
                "calificación por ventas" : 10
        }
}
{
        "nombre producto" : "Cepillo dental",
        "vendedor" : {
                "nombre" : "Panchito",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 8
        }
}
{
        "nombre producto" : "Jabon",
        "vendedor" : {
                "nombre" : "Pepa",
                "teléfonos" : 1234,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bogota",
                "calificación por ventas" : 2
        }
}
{
        "nombre producto" : "caja de cervezas",
        "vendedor" : {
                "nombre" : "Juanito",
                "teléfonos" : 4567,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bucaramanga",
                "calificación por ventas" : 8
        }
}
{
        "nombre producto" : "Papel higienico",
        "vendedor" : {
                "nombre" : "Juanito",
                "teléfonos" : 4567,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Bucaramanga",
                "calificación por ventas" : 8
        }
}
{
        "nombre producto" : "cereales",
        "vendedor" : {
                "nombre" : "Pepa",
                "teléfonos" : 4567,
                "dirección" : "calle1243",
                "ciudad de residencia" : "Barranquilla",
                "calificación por ventas" : 1
        }
}
```
● Consultar el valor del producto más caro que venda cada vendedor
```js
db.inventario.aggregate([ { $group:{ _id:{Vendedor:"$vendedor.nombre"}, Precio:{$max:"$Precio"} } }, { $sort:{Precio:-1} } ])
{ "_id" : { "Vendedor" : "Juanito" }, "Precio" : 60000 }
{ "_id" : { "Vendedor" : "Pepa" }, "Precio" : 15000 }
{ "_id" : { "Vendedor" : "Pepito" }, "Precio" : 12000 }
{ "_id" : { "Vendedor" : "Panchito" }, "Precio" : 5000 }
```
● Para todos los vendedores consultar el nombre, el nombre y la cantidad de susproductos y el total de productos en inventario
```js
db.inventario.aggregate([ { $group:{ _id:{Vendedor:"$vendedor.nombre"}, Productos:{$push:"$nombre producto"},"Total Productos Inventario":{$sum:"$Cantidad de inventario"} } },{$addFields:{"Cantidad Productos":{$size:"$Productos"}}} ])
{ "_id" : { "Vendedor" : "Pepa" }, "Productos" : [ "jabon", "cereales" ], "Total Productos Inventario" : 89, "Cantidad Productos" : 2 }
{ "_id" : { "Vendedor" : "Juanito" }, "Productos" : [ "caja de cervezas", "Papel higienico" ], "Total Productos Inventario" : 94, "Cantidad Productos" : 2 }
{ "_id" : { "Vendedor" : "Panchito" }, "Productos" : [ "Cepillo dental" ], "Total Productos Inventario" : 140, "Cantidad Productos" : 1 }
{ "_id" : { "Vendedor" : "Pepito" }, "Productos" : [ "Crema dental" ], "Total Productos Inventario" : 10, "Cantidad Productos" : 1 }
```
● Consultar el valor total de las ventas de la tienda en un año especifico, primero poblamos la base de datos con las ventas
```js
db.ventas.insertMany([{Fecha:new Date("2018-12-20T16:00:00Z"),Productos:[{nombre:"Crema dental",cantidad:2,precio:12000}],Total:24000},{Fecha:new Date("2019-01-05T21:58:00Z"),Productos:[{nombre:"Crema dental",cantidad:1,precio:12000},{nombre:"cereales",cantidad:2,precio:15000}],Total:42000},{Fecha:new Date("2018-12-15T01:34:00Z"),Productos:[{nombre:"Papel higienico",cantidad:3,precio:12000},{nombre:"Crema dental",cantidad:1,precio:12000}],Total:48000},{Fecha:new Date("2018-12-01T05:45:00Z"),Productos:[{nombre:"Crema dental",cantidad:1,precio:12000},{nombre:"caja de cervezas",cantidad:1,precio:60000},{nombre:"jabon",cantidad:5,precio:1000}],Total:77000},{Fecha:new Date("2018-10-31T18:35:00Z"),Productos:[{nombre:"Cepillo dental",cantidad:2,precio:5000},{nombre:"Crema dental",cantidad:2,precio:12000}],Total:34000},{Fecha:new Date("2018-11-20T10:14:00Z"),Productos:[{nombre:"Crema dental",cantidad:2,precio:12000}],Total:24000},{Fecha:new Date("2018-12-23T14:57:00Z"),Productos:[{nombre:"Crema dental",cantidad:2,precio:12000}],Total:24000}])
```
Ahora se muestra el valor para el año 2019.
```js
db.ventas.aggregate([{ $match:{$expr:{$eq:[{$year:"$Fecha"},2019]}}},{$group:{_id:null,"Total vendido 2019":{$sum:"$Total"}}},{$project:{_id:0}}])
{ "Total vendido 2019" : 42000 }
```
● Consultar todos los productos vendidos por un vendedor específico, el valor total por
factura y la fecha de venta
```js
db.ventas.aggregate([
    {
        $unwind:"$Productos"
    },
    {
        $lookup:
        {
            from:"inventario",
            let:{producto:"$Productos.nombre"},
            pipeline:[
                {
                    $match:
                    {
                        $expr:
                        {
                            $eq:["$$producto","$nombre producto"]
                        }
                    }
                },
                {
                    $project:{nombre:"$vendedor.nombre",_id:0}
                }
            ],
            as:"Vendedor"
        }
    },
    {
        $match:
        {
            "Vendedor.nombre":"Pepa"
        }
    },
    {
        $unwind:"$Vendedor"
    },
    {
        $group:
        {
            _id:{"Fecha venta":"$Fecha"},
            Vendedor:{$first:"$Vendedor.nombre"},
            Productos:{$push:"$Productos.nombre"},
            "Total Fectura":{
                $sum:{
                    $multiply:["$Productos.cantidad","$Productos.precio"]
                }
            }
        }
    }
]).pretty()
{
        "_id" : {
                "Fecha venta" : ISODate("2018-12-01T05:45:00Z")
        },
        "Vendedor" : "Pepa",
        "Productos" : [
                "jabon"
        ],
        "Total Fectura" : 5000
}
{
        "_id" : {
                "Fecha venta" : ISODate("2019-01-05T21:58:00Z")
        },
        "Vendedor" : "Pepa",
        "Productos" : [
                "cereales"
        ],
        "Total Fectura" : 30000
}
```
● Consultar la información de los 5 productos más vendidos de la tienda y el valor total
vendido
```js
db.ventas.aggregate([
    {
        $unwind:"$Productos"
    },
    {
        $group:{
            _id: {"Producto":"$Productos.nombre"},
            "Cantidad vendida":{$sum:"$Productos.cantidad"},
            "Total Vendido":{
                $sum:{
                    $multiply:["$Productos.cantidad","$Productos.precio"]
                }
            }
        }
    },
    {
        $sort:{"Cantidad vendida":-1}
    },
    {
        $limit:5
    }
])
{ "_id" : { "Producto" : "Crema dental" }, "Cantidad vendida" : 11, "Total Vendido" : 132000 }
{ "_id" : { "Producto" : "jabon" }, "Cantidad vendida" : 5, "Total Vendido" : 5000 }
{ "_id" : { "Producto" : "Papel higienico" }, "Cantidad vendida" : 3, "Total Vendido" : 36000 }
{ "_id" : { "Producto" : "cereales" }, "Cantidad vendida" : 2, "Total Vendido" :30000 }
{ "_id" : { "Producto" : "Cepillo dental" }, "Cantidad vendida" : 2, "Total Vendido" : 10000 }
```
