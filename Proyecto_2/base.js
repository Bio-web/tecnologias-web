// INVENTARIO HOSPITALARIO


//COLECCIÓN INVENTARIO
//Esta coleccion tendra informacion de los dispositivos medicos, su marca, proveedor, registro invima, tipo de funcionamiento y riesgo de manera general, con el fin de referenciarlos en una segunda coleccion que contendra el numero de existencias por dispositivo

db.Inventario.insertMany([
    {
        "nombreDispositivo" : "Bomba de infusion",
        "tipo" : [{
            "id" : "Bomb-1",
            "marca" : "Hospira",
            "modelo" : "Plum A+",
            "proveedor" : "AT. MEDICAS",
            "registroInvima" : "2008DM-0003034"
        },
        {
            "id" : "Bomb-2",
            "marca" : "QCORE MEDICAL",
            "modelo" : "SAPPHIRE EPIDURAL",
            "proveedor" : "LINDE COLOMBIA S.A.",
            "registroInvima" : "2019EBC-0003486-R1"
        }],
        "tipoFuncionamiento" : "Mecanico",
        "tipoRiesgo" : "CLASE IIB"
    },
    {
        "nombreDispositivo" :  "Flujometro",
        "tipo" : [{
            "id" : "Fluj-1",
            "marca" : "AMVEX",
            "modelo" : "15 LITROS",
            "proveedor" : "LINDE COLOMBIA S.A.",
            "registroInvima" : "2008DM-0003034"
        }],
        "tipoFuncionamiento" : "Mecanico",
        "tipoRiesgo" : "CLASE IIB"
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipo" : [{
            "id" : "Reg-1",
            "marca" : "AMVEX",
            "modelo" : "VR-C2UD-CMA",
            "proveedor" : "FLOW METER",
            "registroInvima" : "2008DM-0003034"
        }],
        "tipoFuncionamiento" : "Mecanico",
        "tipoRiesgo" : "CLASE IIA"
    },
    {
        "nombreDispositivo" : "Tensiometro",
        "tipo" : [{
            "id" : "Tens-1",
            "marca" : "ALPK2",
            "modelo" : "NT",
            "proveedor" : "AT. MEDICAS",
            "registroInvima" : "2008DM-0001935"
        }],
        "tipoFuncionamiento" : "Mecanico",
        "tipoRiesgo" : "CLASE I"
    },
    {
        "nombreDispositivo" : "Ventilador",
        "tipo" : [{
            "id" : "Vent-1",
            "marca" : "Newport",
            "modelo" : "E360T",
            "proveedor" : "FLOW METER",
            "registroInvima" : "2008DM-0143034"
        }],
        "tipoFuncionamiento" : "Electro Mecanico",
        "tipoRiesgo" : "CLASE IIB"
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipo" : [{
            "id" : "Reg-2",
            "marca" : "AMVEX",
            "modelo" : "VR-C2UD-CMA",
            "proveedor" : "ABA Medica",
            "registroInvima" : "2008DM-0003034"
        }],
        "tipoFuncionamiento" : "Mecanico",
        "tipoRiesgo" : "CLASE IIA"
    }
])

// Campos
/*
nombreDispositivo: Campo tipo string que hace referencia al nombre del dispositivo
tipo: Lista de colecciones con datos de marca, modelo, proveedor y registro invima de un dispositivo
    id: Identificador alfanumerico unico que representa un dispositivo segun marca y modelo
    marca: Campo tipo string que guarda el nombre de la marca
    modelo: Campo tipo string que guarda el nombre del modelo
    proveedor: Campo tipo string que guarda el nombre del proveedor
    registroInvima: Campo tipo string que guarda el registro invima del dispositivo
tipoFuncionamiento: Campo tipo string que almacena el tipo de funcionamiento, puede ser mecanico, electromecanico o electrico
tipoRiesgo: Campo tipo string indica el tipo de riesgo segun la legislacion colombiana
*/

// -Especifica- //
// COLECCIÓN EXISTENCIAS
//Esta coleccion tendra los dispositivos existentes en cada ubicacion fisica del hospital, referenciando a los dispositivos con un identificador que inicia con las primeras letras del nombre del dispositivo y un consecutivo, ademas del estado de funcionamiento y la fecha del ultimo mantenimiento realizado

db.Existencias.insertMany([
    {
        "nombreDispositivo" : "Bomba de infusion",
        "tipoDispositivo" : "Bomb-1",
        "ubicacionDispositivo" : {
            "piso" : 1,
            "habitacion" : "105"
        },
        "fechaMantenimiento" : new Date("2019-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 2
    },
    {
        "nombreDispositivo" : "Bomba de infusion",
        "tipoDispositivo" : "Bomb-2",
        "ubicacionDispositivo" : {
            "piso" : 1,
            "habitacion" : "106"
        },
        "fechaMantenimiento" : new Date("2019-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipoDispositivo" : "Reg-1",
        "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "201"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipoDispositivo" : "Reg-1",
        "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "202"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipoDispositivo" : "Reg-1",
        "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "203"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipoDispositivo" : "Reg-1",
        "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "204"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipoDispositivo" : "Reg-1",
        "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "205"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Tensiometro",
        "tipoDispositivo" : "Tens-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "302"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Tensiometro",
        "tipoDispositivo" : "Tens-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "303"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Tensiometro",
        "tipoDispositivo" : "Tens-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "304"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Tensiometro",
        "tipoDispositivo" : "Tens-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "305"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Tensiometro",
        "tipoDispositivo" : "Tens-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "306"
        },
        "fechaMantenimiento" : new Date("2018-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Ventilador",
        "tipoDispositivo" : "Vent-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "301"
        },
        "fechaMantenimiento" : new Date("2016-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Ventilador",
        "tipoDispositivo" : "Vent-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "302"
        },
        "fechaMantenimiento" : new Date("2016-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Ventilador",
        "tipoDispositivo" : "Vent-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "303"
        },
        "fechaMantenimiento" : new Date("2016-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipoDispositivo" : "Reg-2",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "301"
        },
        "fechaMantenimiento" : new Date("2020-01-05T00:00:00Z"),
        "estado" : 0,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Ventilador",
        "tipoDispositivo" : "Vent-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "304"
        },
        "fechaMantenimiento" : new Date("2016-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Ventilador",
        "tipoDispositivo" : "Vent-1",
        "ubicacionDispositivo" : {
            "piso" : 3,
            "habitacion" : "305"
        },
        "fechaMantenimiento" : new Date("2016-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    },
    {
        "nombreDispositivo" : "Regulador vacío adulto",
        "tipoDispositivo" : "Reg-2",
        "ubicacionDispositivo" : {
            "piso" : 2,
            "habitacion" : "205"
        },
        "fechaMantenimiento" : new Date("2020-01-05T00:00:00Z"),
        "estado" : 1,
        "cantidad" : 1
    }
])


// Campos
/*
nombreDispositivo: Campo tipo string que hace referencia al nombre del dispositivo
tipoDispositivo: Identificador alfanumerico unico que identifica un dispositivo desde la coleccion inventario
ubicacionDispositivo: coleccion que identifica la ubicacion de un dispositivo segun el piso y habitacion
    piso: Campo tipo numerico que identifica el piso donde esta el dispositivo
    habitacion: Campo tipo alfanumerico que identifica la habitacion especifica donde se encuentra el dispositivo
fechaMantenimiento: Campo tipo fecha con formato ISO donde se guarda la fecha del ultimo mantenimiento realizado
estado: campo numerico que indica si el dispositivo esta en uso
cantidad: campo numerico que indica la cantidad de dispositivos en la ubicacion

*/

db.Proveedores.insertMany([
{
    "Nombre" : "FLOW METER",
    "NIT" : 900157123,
    "Telefono" : 3322114,
    "Ciudad" : "Medellin",
    "Direccion" : "Calle 54 # 2-32",
    "Email" : "contacto@flowmeter.com"
},
{
    "Nombre" : "AT. MEDICAS",
    "NIT" : 901150153,
    "Telefono" : 3654214,
    "Ciudad" : "Medellin",
    "Direccion" : "Calle 14 # 21-2",
    "Email" : "contacto@atmedicas.com"
},
{
    "Nombre" : "LINDE COLOMBIA S.A.",
    "NIT" : 910257123,
    "Telefono" : 202154,
    "Ciudad" : "Medellin",
    "Direccion" : "Calle 101 # 54-3",
    "Email" : "contacto@lindesa.com"
}
])


/*
Nombre: Campo tipo string que guarda el nombre de la empresa proveedora de servicios y equipos
NIT: Campo tipo numerico que representa el numero  de identificacion tributario del proveedor
Telefono: Campo tipo numerico que guarda el número de telefono del proveedor
Ciudad: Campo tipo string que guarda la ciudad donde se encuentra la sede de ventas del proveedor
Direccion: Campo tipo string que guarda lugar de la sede de venta del proveedor
Email: Campo tipo string que guarda el correo electrónico del contacto
*/

// Referencias
/*
La relacion entre la coleccion de Inventarios y Existencias es de uno a muchos, porque pueden haber muchos dispositivos en Existencias que referencien a un solo dispositivo en Inventario

La relacion entre la coleccion de Proveedores e Inventarios es de muchos a uno, porque un equipo puede tener diferentes proveedores, incluso de la misma marca

*/

// ----------------------------------------------//
/* Esta coleccion contiene la informacion de login y permisos de los usuarios para la base de datos*/

db.Usuarios.insertOne(
{
    "User" : "admin",
    "Password" : "123",
    "permisos" : {
        "Leer" : 1,
        "Editar" : 1,
        "Eliminar": 0 
    }
})

/*
User: Campo tipo string que hace referencia al nombre del usuario
Password: Campo tipo string que hace referencia a la contraseña del usuario
permisos: Coleccion que especifica que permisos tiene cada usuario
    Leer: Valor numerico que indica si puede o no leer la informacion de la base de datos
    Editar: Valor numerico que indica si puede o no editar la informacion de la base de datos
    Eliminar: Valor numerico que indica si puede o no eliminar la informacion de la base de datos

*/
//Consultas

//1. Se requiere el nombre de los proveedores para el dispositivo regulador de vacío, únicamente los que se encuentren en el segundo piso

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

/*
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
*/


//2. Una bomba de infusión requiere un repuesto y se desea contactar al proveedor para solicitar uno nuevo. Consultar los datos de los proveedores de bomba de infusión	

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

/*
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
/

//3. Con el fin de llevar un registro de inventario, se requiere  la información de cuántos dipositivos se encuentran en cada piso
 
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
/*
{ "_id" : { "piso" : 3 }, "Dispositivos" : [ { "nombre" : "Ventilador", "cantidad" : 5 }, { "nombre" : "Tensiometro", "cantidad" : 5 } ] }
{ "_id" : { "piso" : 2 }, "Dispositivos" : [ { "nombre" : "Regulador vacío adulto", "cantidad" : 6 } ] }
{ "_id" : { "piso" : 1 }, "Dispositivos" : [ { "nombre" : "Bomba de infusion", "cantidad" : 2 } ] }
*/
//4. El comite de ingeniería requiere programar nuevos mantenimientos, para esto se necesita saber que dispositivos no han tenido mantenimiento los últimos dos años. 

db.Existencias.find({ 
    fechaMantenimiento: { $lte: new Date("2019-01-05T00:00:00Z")}},
    {"nombreDispositivo":1 ,
    "ubicacionDispositivo":1 ,
    "fechaMantenimiento":1,
    "_id":0
}).pretty()

/*
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
*/

// 5. Se requiere hacer un proceso de obsolescencia para esto se necesita conocer la cantidad total de dispositivos activos e inactivos en todo el hospital.

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
/*
{ "_id" : { "Estado" : 1 }, "numeroDispositivos" : 18 }
{ "_id" : { "Estado" : 0 }, "numeroDispositivos" : 1 }
*/

