---
layout: post
title: Base de datos no relacionales - Inventario de dispositivos médicos.
author: Santiago Henao Gonzalez, Santiago Gutierrez Pérez, Angie Dahiana Vargas Serna y Luisa María Zapata Saldarriaga 
date: 2021-09-11
---

# Introducción

Las instituciones hospitalarias requieren mantener un control estricto de los dispositivos médicos, por lo tanto se debe tener almacenada la información respecto a estos de manera ordenada y concisa, para solventar este problema se definen bases de datos que contienen los datos mas relevantes de cada dispositivo. Esto resulta útil para definir agendas de mantenimieno preventivo, control metrológico y tecnovigilancia, tambien para tener fácil acceso a la información de suministros ofrecidos por los proveedores en caso de requerir algún tipo de servicio.

# Metodología

Para el diseño de la base de datos que se presenta a continuación se tuvieron en cuenta dos criterios:
- **login** :Acceso por usuario según su función en la compañia: aquí se asignan los posibles permisos que puede adquirir un usuario, estos varian desde Consultar, Agregar y Eliminar.
- **Inventario**: Aquí se almacena la información de cada dispositivo, detallando su marca, modelo, proveedor, tipo de funcionamiento, etc.
- **Existencias**: Se almacena la información de que dispositivos se encuentran activos o inactivos en el hospital, última fecha de mantenimiento y ubicación en el hospital.
 
Para definir las colecciones, se definen los siguientes campos:

## Colección: Inventario

Esta coleccion tendra los dispositivos existentes en cada ubicacion fisica del hospital, referenciando a los dispositivos con un identificador que inicia con las primeras letras del nombre del dispositivo y un consecutivo, ademas del estado de funcionamiento y la fecha del ultimo mantenimiento realizado

* **nombreDispositivo**: Campo tipo string que hace referencia al nombre del dispositivo
* **tipo**: Lista de colecciones con datos de marca, modelo, proveedor y registro invima de un dispositivo
* **id**: Identificador alfanumerico unico que representa un dispositivo segun marca y modelo
* **marca**: Campo tipo string que guarda el nombre de la marca
* **modelo**: Campo tipo string que guarda el nombre del modelo
* **proveedor**: Campo tipo string que guarda el nombre del proveedor
* **registroInvima**: Campo tipo string que guarda el registro invima del dispositivo
* **tipoFuncionamiento**: Campo tipo string que almacena el tipo de funcionamiento, puede ser mecanico, electromecanico o electrico
* **tipoRiesgo**: Campo tipo string indica el tipo de riesgo segun la legislacion colombiana

## Colección: Existencias


* **nombreDispositivo**: Campo tipo string que hace referencia al nombre del dispositivo
* **tipoDispositivo**: Identificador alfanumerico unico que identifica un dispositivo desde la coleccion inventario
* **ubicacionDispositivo**: coleccion que identifica la ubicacion de un dispositivo segun el piso y habitacion
* **piso**: Campo tipo numerico que identifica el piso donde esta el dispositivo
* **habitacion**: Campo tipo alfanumerico que identifica la habitacion especifica donde se encuentra el dispositivo
* **fechaMantenimiento**: Campo tipo fecha con formato ISO donde se guarda la fecha del ultimo mantenimiento realizado
* **estado**: campo numerico que indica si el dispositivo esta en uso
* **cantidad**: campo numerico que indica la cantidad de dispositivos en la ubicacion

## Colección: proveedores 

* **Nombre**: Campo tipo string que guarda el nombre de la empresa proveedora de servicios y equipos
* **NIT**: Campo tipo numerico que representa el numero  de identificacion tributario del proveedor
* **Telefono**: Campo tipo numerico que guarda el número de telefono del proveedor
* **Ciudad**: Campo tipo string que guarda la ciudad donde se encuentra la sede de ventas del proveedor
* **Direccion**: Campo tipo string que guarda lugar de la sede de venta del proveedor
* **Email**: Campo tipo string que guarda el correo electrónico del contacto

## Colección: Usuarios

Esta coleccion contiene la informacion de login y permisos de los usuarios para la base de datos
* **User**: Campo tipo string que hace referencia al nombre del usuario
* **Password**: Campo tipo string que hace referencia a la contraseña del usuario
* **permisos**: Coleccion que especifica que permisos tiene cada usuario
* **Leer**: Valor numerico que indica si puede o no leer la informacion de la base de datos
* **Editar**: Valor numerico que indica si puede o no editar la informacion de la base de datos
* **Eliminar**: Valor numerico que indica si puede o no eliminar la informacion de la base de datos

## Referencias

La relacion entre la coleccion de Inventarios y Existencias es de uno a muchos, porque pueden haber muchos dispositivos en Existencias que referencien a un solo dispositivo en Inventario

La relacion entre la coleccion de Proveedores e Inventarios es de muchos a uno, porque un equipo puede tener diferentes proveedores, incluso de la misma marca

## Diagramas 

### Colección: Existencias 
![image](https://user-images.githubusercontent.com/64289108/132766498-c4481e95-d206-42c5-ac3d-765d6b03e4b2.png)

### Colección: Inventario
![image](https://user-images.githubusercontent.com/64289108/132766570-a7d20066-ca41-44ef-8ce2-97da4932d325.png)

### Colección: Proveedores
![image](https://user-images.githubusercontent.com/64289108/132766614-5a82d23f-98d1-4a34-991d-ef77be908d04.png)

### Colección: Login
![image](https://user-images.githubusercontent.com/64289108/132766682-f3877a5f-682e-4724-a995-dcbd41470a08.png)

## Consultas

**1- Se requiere el nombre de los proveedores para el dispositivo regulador de vacío, únicamente los que se encuentren en el segundo piso**

```js
db.Existencias.aggregate([
    {
        $match:{
            $expr:{
                $and:[
                    {$eq:["$nombreDispositivo","Regulador vacío adulto"]},
                    {$eq:["$ubicacionDispositivo.piso",2]}
                ]
            }
        }
    },
    {
        $lookup:
        {
            from:"Inventario",
            localField:"tipoDispositivo",
            foreignField:"tipo.id",
            as: "informacionDispositivo",
            
        }
    },
    { $project : 
        { 
        "proveedor":"$informacionDispositivo.tipo.proveedor",
        "nombre":"$nombreDispositivo",
        "serial":"$tipoDispositivo",
        "piso":"$ubicacionDispositivo.piso",
        _id:0
        }
    },
    {
        $unwind: {
            path:"$proveedor"
        }
    },
    {
        $unwind: {
            path:"$proveedor"
        }
    }
]).pretty()
```
Resultado de la consulta: 
```js
{
    "proveedor" : "FLOW METER",
    "nombre" : "Regulador vacío adulto",
    "serial" : "Reg-1",
    "piso" : 2
}
{
    "proveedor" : "FLOW METER",
    "nombre" : "Regulador vacío adulto",
    "serial" : "Reg-1",
    "piso" : 2
}
{
    "proveedor" : "FLOW METER",
    "nombre" : "Regulador vacío adulto",
    "serial" : "Reg-1",
    "piso" : 2
}
{
    "proveedor" : "FLOW METER",
    "nombre" : "Regulador vacío adulto",
    "serial" : "Reg-1",
    "piso" : 2
}
{
    "proveedor" : "FLOW METER",
    "nombre" : "Regulador vacío adulto",
    "serial" : "Reg-1",
    "piso" : 2
}
{
    "proveedor" : "ABA Medica",
    "nombre" : "Regulador vacío adulto",
    "serial" : "Reg-2",
    "piso" : 2
}
```


**2- Una bomba de infusión requiere un repuesto y se desea contactar al proveedor para solicitar uno nuevo. Consultar los datos de los proveedores de bomba de infusión	**

``` js
db.Inventario.aggregate([
    {
        $match:{
            $expr:{
                $and:[
                    {$eq:["$nombreDispositivo","Bomba de infusion"]}
                ]
            }
        }
    },
    {
        $unwind:"$tipo"
    },
    {
        $lookup:
        {
            from:"Proveedores",
            localField:"tipo.proveedor",
            foreignField:"Nombre",
            as: "informacionProveedor",  
        }
    },
    { $project : 
        { 
        "nombre":"$informacionProveedor.Nombre",
        "telefono":"$informacionProveedor.Telefono",
        "email":"$informacionProveedor.Email",
        _id:0
        }
    },
    {
        $unwind:"$nombre"
    },
    {
        $unwind:"$telefono"
    },
    {
        $unwind:"$email"
    },
]).pretty()
```
Resultado de la consulta: 
``` js
{
    "nombre" : "AT. MEDICAS",
    "telefono" : 3654214,
    "email" : "contacto@atmedicas.com"
}
{
    "nombre" : "LINDE COLOMBIA S.A.",
    "telefono" : 202154,
    "email" : "contacto@lindesa.com"
}
```

**3- Con el fin de llevar un registro de inventario, se requiere  la información de cuántos dipositivos se encuentran en cada piso**
``` js
db.Existencias.aggregate([
    { // Agrupando por piso y dispositivo para poder contar el número de dispositivos 
        $group:{
            _id:{
                piso:"$ubicacionDispositivo.piso",
                nombre:"$nombreDispositivo"
            },
            numeroDispositivos: { $count: { } }   
        }
    },
    {
        $group:{// Agrupando por piso
            _id:{piso:"$_id.piso"},
            "Dispositivos":{
                $push:
                 {
                    "nombre":"$_id.nombre",
                    "cantidad":"$numeroDispositivos"
                } 
            }
        }
    }
])
```
Resultado de la consulta: 
```js
{ "_id" : { "piso" : 3 }, "Dispositivos" : [ { "nombre" : "Ventilador", "cantidad" : 5 }, { "nombre" : "Tensiometro", "cantidad" : 5 } ] }
{ "_id" : { "piso" : 2 }, "Dispositivos" : [ { "nombre" : "Regulador vacío adulto", "cantidad" : 6 } ] }
{ "_id" : { "piso" : 1 }, "Dispositivos" : [ { "nombre" : "Bomba de infusion", "cantidad" : 2 } ] }
```
**4- El comite de ingeniería requiere programar nuevos mantenimientos, para esto se necesita saber que dispositivos no han tenido mantenimiento los últimos dos años.** 

```js
db.Existencias.find({ 
    fechaMantenimiento: { $lte: new Date("2019-01-05T00:00:00Z")}},
    {"nombreDispositivo":1 ,
    "ubicacionDispositivo":1 ,
    "fechaMantenimiento":1,
    "_id":0
}).pretty()
```
Resultado de la consulta: 
```js
{
    "nombreDispositivo" : "Bomba de infusion",
    "ubicacionDispositivo" : {
            "piso" : 1,
            "habitacion" : "105"
    },
    "fechaMantenimiento" : ISODate("2019-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Bomba de infusion",
    "ubicacionDispositivo" : {
            "piso" : 1,
            "habitacion" : "106"
    },
    "fechaMantenimiento" : ISODate("2019-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Regulador vacío adulto",
    "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "201"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Regulador vacío adulto",
    "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "202"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Regulador vacío adulto",
    "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "203"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Regulador vacío adulto",
    "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "204"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Regulador vacío adulto",
    "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "205"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Tensiometro",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "302"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Tensiometro",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "303"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Tensiometro",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "304"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Tensiometro",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "305"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Tensiometro",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "306"
    },
    "fechaMantenimiento" : ISODate("2018-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Ventilador",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "301"
    },
    "fechaMantenimiento" : ISODate("2016-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Ventilador",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "302"
    },
    "fechaMantenimiento" : ISODate("2016-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Ventilador",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "303"
    },
    "fechaMantenimiento" : ISODate("2016-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Ventilador",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "304"
    },
    "fechaMantenimiento" : ISODate("2016-01-05T00:00:00Z")
}
{
    "nombreDispositivo" : "Ventilador",
    "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "305"
    },
    "fechaMantenimiento" : ISODate("2016-01-05T00:00:00Z")
}
```

**5- Se requiere hacer un proceso de obsolescencia para esto se necesita conocer la cantidad total de dispositivos activos e inactivos en todo el hospital.**

```js
db.Existencias.aggregate([
    {
        $group:{
            _id:{
                Estado:"$estado"
            },
            numeroDispositivos: { $count: { } }   
        }
    }
])
```
Resultado de la consulta: 
```js
{ "_id" : { "Estado" : 1 }, "numeroDispositivos" : 18 }
{ "_id" : { "Estado" : 0 }, "numeroDispositivos" : 1 }
```


# Conclusiones
- El uso de MongoDB  permite diseñar colecciones de bases de datos de manera fácil e intuitiva, con alta proyección de objetos que sustituyen de maneras eficiente las relaciones de bases de datos relacionales. 
- Al tener una estructa no relacional, reduce la cantidad de tablas que se requieren al implementar bases de datos relacionales.
- La síntaxis MongoDB comparte similitudes con JavaScript, lo que permite un aprendizaje fácil si se tiene conocimiento previo de este lenguaje. 
- Las bases de datos permiten almacenar información de cualquier entidad, como es el caso de los dispositivos médicos, por lo tanto esto resulta útil en el campo de la ingeniería clínica en donde se puede manejar un gran flujo de datos que deben de estar bien organizados y vigilados.


# Referencias
1. Hospira PLUM A+, System Operating Manual. Tomado de:[https://www.icumed.com/media/9566/plum_aplus_with_hospira_mednet_software.pdf](https://www.icumed.com/media/9566/plum_aplus_with_hospira_mednet_software.pdf)

