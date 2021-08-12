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
● Consultar los productos que tengan menos de 50 existencias en inventario
● Consultar los productos que fueron creados entre el 1 de enero de y el 31 de
diciembre de 2020
● Consultar todos los productos que contengan la palabra “aseo” en el nombre o en la
descripción
● Consultar todos los productos cuyo nombre inicie por la letra “C”
● Consultar el nombre y la descripción de los productos de un vendedor
● Consultar 10 productos ordenados por nombre alfabeticamente
● Consultar los 5 vendedores con mejor reputación de la tienda
● Consultar los productos con toda la información del vendedor
● Consultar el valor del producto más caro que venda cada vendedor
