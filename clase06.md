---
layout: post
title: Fundamentos de JavaScript y Bases de datos no relacionales
author: Luisa María Zapata Saldarriaga
date: 2021-04-17
---
A continuación se presenta algunos fundamentos de JavaScript como son arrays,objetos, bucle for y while, que son indispensables en la implementación de dicho lenguaje. Por otro lado, se presentará de forma general conceptos básicos y comandos de bases de datos no relacionales como lo es mongoDB. 

# Arrays
* Son estructuras de datos que permiten almacenar conjuntos de datos que pueden ser de un tipo especifico o de cualquier tipo. A continuación se presenta un ejemplo.

``` js
const amigos = ['Luis','Juan','carlos'];
console.log(amigos);
console.log(amigos.length);
console.log(amigos[0]);
console.log(amigos[amigos.length-1]); //para acceder a la ultima posición de una array sin conocer su posición
amigos[1]='Andrés' // acceder y modificar datos en array
```
* Un array puede contener varios tipos de datos como `string`, `enteros` y `arrays` dentro de arrays. 

``` js
const firstName= 'Andrés';
const persona= [firstName,'Castillo',30,'Profesor',amigos];
console.log(persona);
``` 

## Operaciones de los arrays
Los arrays tienen diferentes operaciones como es agregar un elemento a la lista, eliminar elementos, entre otros. 
``` js
amigos.push('Daniela'); 
// agrega un elemento a la lista en la última posición
amigos.pop(amigos); 
// elimina el ultimo elemento agregado
console.log(amigos.pop());
console.log(amigos.indexOf('Andrés')); 
//  retorna el primer índice en el que se puede encontrar un elemento dado en el array
console.log(amigos.includes('Carlos')); 
// determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
if (amigos.indludes('carlos')){
    console.log('carlos es mi amigo');
}
``` 
## Challenge 6

Steven todavía está construyendo su calculadora de propinas, usando las mismas reglas que antes: propina del 15% de la factura si
el valor de la factura está entre 50 y 300, y si el valor es diferente, la propina es del 20%.
1. Escriba una función 'calcPropina' que tome cualquier valor de factura como entrada y devuelva la propina correspondiente calculada según las reglas anteriores (puede consultar el código del primer desafío de la calculadora de propinas si es necesario.
Utilice el tipo de función que más le guste. Pruebe la función con un valor de factura de 100.
2. ¡Y ahora usemos arrays! Así que cree un array de 'facturas' que contenga los datos de prueba que se presentan al final.
3. Cree una array de 'propinas' que contenga el valor de la propina para cada factura, calculada a partir de la función que creó anteriormente.
4. Cree un array 'totales' que contenga los valores totales, que sería el valor de la factura + la propina.

**DATOS DE PRUEBA**: 125, 555 y 44

**SUGERENCIA**: Recuerde que un array necesita un valor en cada posición, ¡y ese valor puede ser el valor devuelto de una función!
Entonces, puede simplemente llamar a una función como valores del array (así que no almacene los valores de las propinas en
variables separadas primero, sino directamente en el nuevo array)

``` js
function calcPropina(valorFactura,propinas,totales){
    let propina = ((valorFactura >= 50) && (valorFactura<= 300)) ? valorFactura*0.15 : valorFactura*0.2;
    console.log(`El valor de la factura es ${valorFactura}, la propina es ${propina} y el valor total es ${propina+valorFactura}`);
    return propina
}
  
calcPropina (100)
let facturas = [ 125, 555,44];
var propinas=[];
var total=[];
facturas.forEach(element => { // itera sobre cada elemento del array facturas 
    propinas.push(calcPropina(element));
    total.push(calcPropina(element)+element);
})
console.log(propinas);
console.log(total);
``` 

# Objetos 
En JavaScript, un objeto es un entidad independiente con propiedades y tipos. En donde se pueden acceder a los atributos o métodos según sea de interés. 

EL método `toString` que se llama automáticamente cuando el objeto se representa como un valor de texto o cuando un objeto se referencia de tal manera que se espera una cadena.

``` js
const amigos = ['Luis','Juan','carlos'];
const persona ={
    //creación de campos: clave valor
    primerNombre:'Andrés', 
    primerApellido: 'Castillo',
    anioNacimiento:1990,
    profesion: 'profesor',
    amigos:amigos,
    calcularEdad:()=>{
        return 2020-1990;
    }
    toStrig:function (){
        return `Primer Nombre: ${this.primerNombre}, primer apellido: ${this.primerApellido} ` 
        // this busca sobre el ámbito del objeto
    }
}
console.log(persona);
console.log(persona.primerNombre); // acceder a los atributos
console.log(persona['primerNombre']);

console.log(persona.calcularEdad()); // acceder a los métodos
console.log(persona.toString());
```

## Challenge 7 
¡Volvamos a Marcos y Juan comparando sus IMC! ¡Esta vez, usemos objetos para implementar los cálculos!
**Recuerde**: IMC = masa / altura ** 2 = masa / (altura *altura). (masa en kg y altura en metros)

1. Para cada uno de ellos, cree un objeto con propiedades para su nombre completo, masa y altura (Marcos
Muñoz y Juan López)
2. Cree un método 'calcIMC' en cada objeto para calcular el IMC (el mismo método en ambos objetos).
Almacene el valor del IMC en una propiedad y también devuélvalo del método.
3. Ingrese a la consola quién tiene el IMC más alto, junto con el nombre completo y el IMC respectivo. Ejemplo:
"¡El IMC de Juan López (28,3) es más alto que el de Marcos Muñoz (23,9)!"
**DATOS DE LA PRUEBA**: Marcos pesa 78 kg y mide 1,69 m de altura. Juan pesa 92 kg y mide 1,95 m de altura.

``` js
const persona ={
    //creación de campos: clave valor
    nombreCompleto:['Marcos Muñoz','Juan Lopez'],
    masa: [78,92],
    altura: [1.69, 1.95],
    calcIMC:function(){
        marcosIMC=this.masa[0]/((this.altura[0])**2);
        juanIMC= this.masa[1]/((this.altura[1])**2);
        if (marcosIMC > juanIMC){
            return console.log(`El IMC de Marcos Muñoz ${marcosIMC.toFixed(2)} es más alto que el de Juan Lopez ${juanIMC.toFixed(2)} `)
        } else {
            return console.log(`El IMC de Juan Lopez ${juanIMC.toFixed(2)} es más alto que el de Marcos Muñoz ${marcosIMC.toFixed(2)} `)}
        }
      
    }
console.log(persona.calcIMC()); // Imrpimir el método 
```

# Bucle For 
Realiza una operación iterando, su sintaxis esta dada de la siguiente forma:

`for ([expresion-inicial]; [condicion]; [expresion-final])sentencia`

A continuación, se presenta un ejemplo implemmentando el uso del ciclo for:

``` js
for (let i =0 ; i<=30;i++){
    console.log('iteracion: '+i) // ejecuta 30 veces esta línea de código
}

const firstName= 'Andrés';
const amigos = ['Luis','Juan','carlos'];
const persona= [firstName,'Castillo',30,'Profesor',amigos];
for (let i=0;i<persona.length; i++){
    console.log(persona[i], typeof(persona[i]));
}

// Forma más utilizada para recorrer un array
persona.forEach(item=>{ 
    console.log(item, typeof item);
});
```

# Bucle while 
Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera dicha condición es evaluada antes de ejecutar la sentencia. Su sintaxis esta dada de la siguiente forma:

``` js
while (condition) {
  // código-sentencia
}
```
``` js
let i=0;
// Este while nunca termina, desborda la memoria cada vez hasta que se cae la aplicación
while (i<=10){
    console.log('iteracion: '+i);
    i++; // se aumenta el valor de i para que el bucle termine
```  

## Challenge #8 
¡Mejoremos aún más la calculadora de propinas de Steven, esta vez usando bucles!

1. Cree un array de 'facturas' que contenga los 10 valores de facturas de prueba
2. Cree arrays vacíos para las propinas y los totales ('propinas' y 'totales')
3. Utilice la función 'calcPropina' que escribimos antes (no es necesario repetirla) para calcular las propinas y los valores totales (factura + propina) para cada valor de factura en el array de facturas. ¡Utilice un bucle for para realizar los 10 cálculos!

**DATOS DE PRUEBA**: 22, 295, 176, 440, 37, 105, 10, 1100, 86 y 52

**SUGERENCIA**: Llame a calcPropina en el bucle y use el método push para agregar valores a los arrays de propinas y totales

4. Escriba una función 'calcPromedio' que tome un array llamado 'arr' como parámetro. Esta función calcula el promedio de todos los números en el array pasado. ¡Este es un desafío DIFÍCIL (no lo hemos hecho antes)! He aquí cómo solucionarlo:

4.1. Primero, necesitará sumar todos los valores en el array. Para hacer la suma, empiece creando una variable 'suma' que comience en 0. Luego recorra el array usando un bucle for. En cada iteración, agregue el valor actual a la variable 'suma'. De esta manera, al final del ciclo,tiene todos los valores sumados

4.2. Para calcular el promedio, divida la suma que calculó antes por la longitud del array (porque ese es el número de elementos)

4.3. Llame a la función con el array 'totales'

``` js
let facturas = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
var propinas=[];
var total=[];

function calcPropina(valorFactura,propinas,totales){
    let propina = ((valorFactura >= 50) && (valorFactura<= 300)) ? valorFactura*0.15 : valorFactura*0.2;
    return propina
}

facturas.forEach(element => { // itera sobre cada elemento del array facturas 
    propinas.push(calcPropina(element));
    total.push(calcPropina(element)+element);
    console.log(`El valor de la factura es ${element}, la propina es ${calcPropina(element)} y el valor total es ${calcPropina(element)+element}`);
})
console.log(propinas);
console.log(total);

function calcPromedio (arr){
    suma = 0;
    arr.forEach (function(numero){
        suma += numero;
    });
    return console.log('La suma de todas las propinas es '+ suma.toFixed(2) + 'y el promedio es: ' + suma/(arr.length));
}


console.log(calcPromedio(propinas)); // calculando promedio
console.log(calcPromedio(totales)); // calculando promedio
``` 

# Cola de procesos y cola de llamados asíncronos 


# BASES DE DATOS NO RELACIONALES NoSQL

Las bases de datos NoSQL están diseñadas específicamente para modelos de datos específicos y tienen esquemas flexibles para crear aplicaciones modernas. Las bases de datos NoSQL son ampliamente reconocidas porque son fáciles de desarrollar, por su funcionalidad y el rendimiento a escala. A diferencia de las relacionales, no tienen un identificador que sirva de relación entre un conjunto de datos y otros. 

## Caracteristicas de las BD no relacionales

- No hay integridad de los datos a través de relaciones 
- **Schema-Less**
    * no hay definición de estructura de datos
    * Los datos pueden ser grabados arbitrariamente
    * La definción de la estructura de datos se realiza en la creación de registros
    * La gestión de la estructura de datos se traslada a la aplicación 
    * Fácil de usar.
    * Flexibilidad.
    * No utilizan un lenguaje declarativo de consulta.
    * Optimizadas para la gestión de grandes cantidades de datos.
    * Es altamente escalable.
    * Rápido desarrollo.
    * clave-valor
    * **Documentos**: tiene una estructura definida, dependiendo de la BD se guardan en diferentes formatos.
    * **Grafos**: bases de datos almacenada en nodos
    * Column family
    * En memoria
    * Cualquier tipo de almacenamiento que no utilice relaciones para mantener la consistencia de los datos

- **Tipos de bases de datos no relacionales:**

!["imagen"](https://www.certia.net/wp-content/uploads/2021/03/NoSQL4.png)

![image](https://user-images.githubusercontent.com/64289108/115439107-d2b23d80-a1d3-11eb-86c5-34e158ce138c.png)

- **Ejemplos de bases de datos no relacionales**
    * redis
    * cassandra: base de datos CF
    * CouchDB
    * mongoDB
    * amazon-DynamoDB
    * riak
    * Apache HBASE
    * memcached 
    
![image](https://user-images.githubusercontent.com/64289108/115439229-f4abc000-a1d3-11eb-87a1-e0273071cd1c.png)

# DOCUMENTOS

* cada ítem de la base de dato se le denomina **documento** que son almacenados en **colecciones** y cada uno de estos tiene una clave única, estos pueden se guardados en formatos  `XML`, `JSON` u otros. 

Los campos del Documento pueden ser de diferentes tipos de dato (numéricos, cadenas de caracteres, fechas, arrays, etc

## JSON  (Javascript Object Notation)

Es un formato de datos fácil de leer y escribir para humanos así como también es fácil interpretarlo por las aplicaciones.Está basado en un subconjunto del lenguaje de programación Javascript, y u extensión es  `.json `.

JSON está constituído por pares  `nombre-valor `, listas y objetos embebidos. Es un lenguaje ideal para el intercambio de
datos.

!["JSON"](https://addons.cdn.mozilla.net/user-media/previews/full/29/29967.png?modified=1616525854)

## YAML (Yet Another Markup Language)

Es un formato de datos fácil de leer y escribir, sin embargo, es sensible a mayúsculas y minúsculas.Los archivos tienen extensión `.yaml`.

* No se usan *tabs* como delimitadores sino espacios.
* Los ítems de las listas inician con un guión y están al
mismo nivel de identación.
* Un diccionario es representado en una forma simple
de `clave - valor`.
* Los valores pueden abarcar múltiples líneas usando
los caracteres | o >

!["YAML"](https://cdn.ttgtmedia.com/rms/onlineImages/itops-yaml_code_7_mobile.png)


- **Carácteristicas de Mongo DB**
MongoDB es una base de datos Documental gratuita y de código abierto.
![image](https://user-images.githubusercontent.com/64289108/115439282-07be9000-a1d4-11eb-9efe-12687f84cbaf.png)

    * En MongoDB los documentos son objetos JSON.
    * Los datos son guardados como BSON (Binary JSON).
    * La consola de comandos usa Javascript.
    *  Multiplataforma.
    * Usado por compañías para suplir necesidades de grandes cantidades de datos.

 

**Comparación de una tabla de SQL y un documento de no SQL**
**Comparación de una tabla de SQL y un documento de no SQL**

Se puede simplificar como un solo documento embedido dos tablas en comparación con SQL. La consulta va ser más rápido en comparación con las BD SQL. 

**Ejemplo estructura de una BD no SQL**

A continuación se presenta una estructura de una pelicula para una base de datos no SQL. 

```js
{
    "nombrePelicula":"Volver al futuro",
    "generoPelicula": ["Comedia","Acción y aventuras"],
    "directorPelicula:": " ",
    "anioPublicacion": 1985,
    "rating"="12",
    "abstract":"description",
    "duracionPelicula": 120,
    "actoresPrincipales": [],
    "productora": ""
} 
```

* Mongo DB es una base de datos Documental gratuita y de código abierto
* En MongoDB los documentos son objetos JSON
* Los datos son guardados como BSON (Binary JSON)
* La consola de comandos usa JavaScript
* Multiplataforma
* Usado por compañias para suplir necesidades


**Funciones CRUD**
Las funciones para crear,consultar,actualizar y eliminar tienen la siguiente sintáxis:

```js
Nombre_basedatos.nombre_coleccion.funcionCRUD
```
MongoDB tiene funciones que permiten realizar las funciones CRUD de forma masiva o única. 

# **Instalación MongoDB**

    ● Descargar e instalar mongo de la pagina oficial: https://www.mongodb.com/download-center/community
    ● En Windows agregar la ruta de la carpeta bin que se encuentra dentro del directorio de instalación de mongo a la
    variable de entorno Path.
    ● En Linux y OSX se deben copiar el contenido del directorio bin al directorio de binarios del sistema /usr/local/bin.
    ● Crear los directorios data y data/db en la carpeta donde vayamos a ejecutar el servicio de mongo (en Linux y OSX se
    deben dar permisos de lectura y escritura a los directorios).
    ● En la consola de comandos ejecutar el comando mongod (mongo daemon) para levantar el servicio de mongo.
    ● En otra consola ejecutar el comando mongo para conectarse como cliente del servicio montado en el punto anterior.
    ● Una vez conectados deberá aparecer la consola de mongo 

![image](https://user-      images.githubusercontent.com/64289108/115643355-388ceb00-a2e2-11eb-9de4-61afecfefad8.png)

## **Comandos mongoDB**
    - `use` :Para crear una base de datos.
    - `show dbs`: Para listar las bases de datos.
    - `db.dropDatabase()`: Para borrar una nueva bases de datos.
    - `db.createCollections`: Para crear una nueva colección usando la base de datos creada.
    - `show collections`:Para listar las colecciones 
    -`db.collection.drop()`:Para eliminar una colección 
    - `db.collection.find: consultar colecciones 

● Un **Documento** está compuesto por campos y sus valores.
● Los **Documentos** se almacena en notación Javascript. El _id es un valor único de cada Documento que permite identificarlo.
● El _id es un campo obligatorio en cada Documento, si no se especifica MongoDB lo agrega automáticamente.
● En MongoDB el valor autoasignado del campo _id es un objeto de tipo ObjectId con un valor hexadecimal único para ese Documento.

![image](https://user-images.githubusercontent.com/64289108/115644499-4cd1e780-a2e4-11eb-9d86-3cf1f92fd5e1.png)

