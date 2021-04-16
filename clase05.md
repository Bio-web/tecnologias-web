---
layout: post
title: 
author: Santiago Henao Gonzalez
date: 2021-04-10
---

En la clase 5 del curso el profesor comenzo con la parte introductoria necesaria para el manejo de las bases de datos no relacionales. Inicio la explicación informandonos que la manera de interactuar con este tipo de bases de datos es por medio del lenguaje de programación JavaScript. Por lo que la clase se centraría en brindar elementos básicos para el uso de JavaScript.

# Información básica de JavaScript

Javascript es un lenguaje de alto nivel, por lo que no requiere reservar espacio de memoria en cada operación que se realiza. Su punto de venta como el lenguaje de programación de la web está fuertemente soportado en su versatilidad que permite escribir programas de muchas maneras diferentes. Al ser débilmente tipado resulta de fácil manejo en cuanto a los tipos de datos.

Es un lenguaje interpretado cuyo interprete es el motor V8 incluido en muchos navegadores.

# Las tres tecnologías más importantes de la web

Javascript es una de las tres herramientas principales del desarrollo web, siendo específicamente el encargado de hacer que las páginas web sean interactivas y su información no sea estática. Las otras dos serían **HTML5** y **CSS** que se encargan respectivamente de la estructura(contenido) y la presentación de las páginas web.

# El ecosistema de JavaScript

Para usar JavaScript en el campo del desarrollo web se suele usar frameworks que brindan herramientas con vidas útiles determinadas. Entre ellos podemos encontrar React y Angular para aplicaciones web en navegador, Node JS para configurar servidores, React Mobile y Ionic para aplicaciones móviles nativas y Electron para aplicaciones de escritorio.

# Especificación de JavaScript

Este número es el que brinda al desarrollador y al navegador la información de la versión y las características del JavaScript usado.

# Valores y Variables

Dado que JavaScript es débilmente tipado cuando se define una variable el automáticamente elige que tipo de dato es de acuerdo con el valor asignado.

Como convención el profesor indico que es recomendable usar **"camelCase"** para nombrar las variables.

# Tipos de Datos

Se tienen dos tipos de datos en JavaScript, los primivitovs que consisten en:

- number: Todos los numéricos.
- string: Cadenas de caracteres.
- boolean: verdadero o falso.
-  undefined: No ha sido definido la variable o sin valor.
- null: Valor nulo. Typeof no da como resultado nulo.
- symbol: Variable única e inmodificable.
- big int: números muy grandes.

El otro tipo de datos serían los objetos, ya que precisamente JavaScript es un lenguaje de programación orientado a objetos.

El comando `typeof` es útil para obtener el tipo de dato de una variable en específico.

# Let, const y var

Para inicializar variables en JavaScript se disponen de tres comandos:

- `let nombreVariable` es cual crea variables cuyo valor puede ser modificado posteriormente.
- `const nombreVariable` el cual crea variables cuyo valor no se puede cambiar una vez inicializada.
- `var nombreVariable` es un comando poco usado ya que es poco eficiente.

# Operadores Básicos

JavaScript cuenta con los operadores matemáticos básicos como lo son +, -, * , \/. Estos operadores aritméticos se pueden usar en operaciones entre variables e incluso en asignaciones como se muestra a continuación.

`const year = 2020;
const edadAndres = 2020 - 1990;`

Cabe mencionar que para la operación de potenciación se cuenta con el operador \**.

También se cuenta con los operadores de comparación básicos: >, >=, <, <=.

# Operadores de Asignación

Se pueden usar ciertos operadores para de manera breve modificar el valor de variables con operaciones básicas. Naturalmente hay uno de ellos para cada operación básica. Ellos son: +=, -=, *=, \/=.

Su uso sería del estilo `variable += 10` que correspondería a sumarle 10 al valor de "variable" y asignarselo a "variable".

También existen otros operadores para modificar de manera rápida el valor de una variable y estos son ++ y -- que respectivamente suman y restan 1 a la variable a la que son aplicados y le asignan el nuevo valor a la variable.

# Challenge 1

A continuación se muestra el código en respuesta al primer desafío de programación en JavaScript.

```
// Prueba 1

let pesoJuan = 92;
let pesoMarcos = 78;
let alturaJuan = 1.95;
let alturaMarcos =  1.69;

let marcosIMC = pesoMarcos/(alturaMarcos**2);
let juanIMC = pesoJuan/(alturaJuan**2);

let marcosMayorIMC = marcosIMC > juanIMC;


// Prueba 2

pesoJuan = 85;
pesoMarcos = 95;
alturaJuan = 1.76;
alturaMarcos =  1.88;

marcosIMC = pesoMarcos/(alturaMarcos**2);
juanIMC = pesoJuan/(alturaJuan**2);

marcosMayorIMC = marcosIMC > juanIMC;
 ```
 
 
 # Strings y Plantillas Literales
 
 La creación de strings o cadenas de caracteres en JavaScript sólo requiere que estas sean envueltas en comillas simples o dobles siempre y cuando se usen las mismas para abrir y cerrar la cadena. El operador de concatenación es el de suma "+". A continuación se muestra un ejemplo de su creación y uso, en el que también se hace uso de la función "console.log" para mostrar los resultados obtenidos:
 
 `const primerNombre = 'Andrés';
const segundoNombre = 'Felipe';
console.log(primerNombre + ' ' + segundoNombre);`

Otra manera de crear strings es por medio de las plantillas literales las cuales se encierran con los símbolos \`\` y dentro de ellos se puede llamar el valor de las variables usando el comando ${nombreVariable} dentro de la plantilla, como se muestra en el siguiente ejemplo:

``const templateLiteral = `Mi primer nombre es ${primerNombre} y mi segundo nombre es ${segundoNombre}`;
console.log(templateLiteral);``
 
 Se pueden crear strings con varias lineas dependiendo de si se usan strings normales o plantillas literales de la siguiente manera:
 
 ```
 console.log('linea 1 \n\ linea 2');

console.log(`linea 1
linea 2`);
```

# Condicionales: if / else

Usando la sentencia if/ese se crean condicionales los cuales dependen de un valor lógico entregado como parámetro, estos condicionales requieren estar encerrados en llaves "{}" cuando son de más de una linea. A continuación se muestra un ejemplo de estos:

```
const edad = 17;

if (edad >= 18) {
    console.log('Puedo obtener la licencia de conducción');
} else if (edad >= 17) {
    console.log('puede aprender aconducir pero no obtendra licencia aún');
} else {
    console.log('aún no puedo aprender a conducir');
}
```

# Challenge 2

```
// Prueba 1

let pesoJuan = 92;
let pesoMarcos = 78;
let alturaJuan = 1.95;
let alturaMarcos =  1.69;

let marcosIMC = pesoMarcos/(alturaMarcos**2);
let juanIMC = pesoJuan/(alturaJuan**2);

let marcosMayorIMC = marcosIMC > juanIMC;

console.log('Prueba 1 \n')
if(marcosMayorIMC)console.log(`¡El IMC de Marcos (${marcosIMC}) es más alto que el de Juan (${juanIMC})!`);
else console.log(`¡El IMC de Juan (${juanIMC}) es más alto que el de Marcos (${marcosIMC})!`);

// Prueba 2

pesoJuan = 85;
pesoMarcos = 95;
alturaJuan = 1.76;
alturaMarcos =  1.88;

marcosIMC = pesoMarcos/(alturaMarcos**2);
juanIMC = pesoJuan/(alturaJuan**2);

marcosMayorIMC = marcosIMC > juanIMC;

console.log('\nPrueba 2 \n')
if(marcosMayorIMC)console.log(`¡El IMC de Marcos (${marcosIMC}) es más alto que el de Juan (${juanIMC})!`);
else console.log(`¡El IMC de Juan (${juanIMC}) es más alto que el de Marcos (${marcosIMC})!`);
```

# Conversión de tipos y Coerción

Aunque JavaScript elige el tipo de dato más adecuado al momento de inicializar una variable, es posible modificar dicho tipo usando funciones proporcionadas por el mismo JavaScript. También cabe destacar que en ciertas situaciones cuando se realicen determinadas operaciones usando variables JavaScript determinará que es necesario realizar ciertos cambios de tipo de dato forzado para poder llevar a cabo el proceso solicitado, a esto se le llama coerción, podemos observar ejemplos de dichas situaciones a continuación.

```
// Ejemplos de conversión de datos
const year = '2020';
console.log(Number(year));
const edad = 30;
const edadString = String(edad);
console.log(edadString);
console.log(typeof edadString);

// Coerción
console.log('Yo tengo ' + 30 + ' años');// El 30 pasa a ser un string
console.log('10' + '10');
console.log('10' + 3);
console.log('100' / '5');// Convierte los strings en numeros
console.log('100' > '5');
console.log(100 > 5);
console.log('100' < '5');
console.log('100' > 5);
```

# Valores Truthy y Falsy

Todos los tipos de dato tienen un valor de verdad intrínseco dependiendo de su valor y su tipo, de manera que pueden ser usados en condicionales, los valores que tienen atado un valor de verdad "falsy" son los tipos undefined y null, los numéricos con valor 0,los strings vacíos '' y NaN. Todos los demás valores y tipos tendrán un valor "truty" si son usados en operaciones lógicas.

# Operadores de Igualdad

JavaScript cuenta con los operadores lógicos básicos de igualdades == y !=. Cabe destacar que para evitar que se causen errores debido a la coerción se puede usar los operadores === y !== los cuales evitan que haya cualquier conversión de tipo de dato forzada, de manera que se requiere que los datos sean del mismo tipo originalmente.

# Operadores Lógicos

Los operadores lógicos básicos estan disponibles en JavaScript correspondiendo "&&" a la operación "and", "||" a la operación "or" y "!" a la operación "not".

# Challenge 3

```
// Prueba 1

let puntajeDelfines = (96 + 108 + 89)/3;
let puntajeKoalas = (88 + 91 + 110)/3;

if((puntajeDelfines > puntajeKoalas) && (puntajeDelfines >= 100))
{
    console.log(`¡Los ganadores son los Delfines con (${puntajeDelfines}) puntos!`);
}
else if((puntajeKoalas > puntajeDelfines) && (puntajeKoalas >= 100))
{
    console.log(`¡Los ganadores son los Koalas con (${puntajeKoalas}) puntos!`);
}
else if((puntajeKoalas == puntajeDelfines) && (puntajeKoalas >= 100))
{
    console.log(`¡Ambos equipos quedan empatados con (${puntajeKoalas}) puntos!`);
}
else
{
    console.log(`Nigún equipo cumple con los requisitos para ganar o empatar`);
}

console.log('\n');

// Prueba 2

puntajeDelfines = (97 + 112 + 101)/3;
puntajeKoalas = (109 + 95 + 123)/3;

if((puntajeDelfines > puntajeKoalas) && (puntajeDelfines >= 100))
{
    console.log(`¡Los ganadores son los Delfines con (${puntajeDelfines}) puntos!`);
}
else if((puntajeKoalas > puntajeDelfines) && (puntajeKoalas >= 100))
{
    console.log(`¡Los ganadores son los Koalas con (${puntajeKoalas}) puntos!`);
}
else if((puntajeKoalas == puntajeDelfines) && (puntajeKoalas >= 100))
{
    console.log(`¡Ambos equipos quedan empatados con (${puntajeKoalas}) puntos!`);
}
else
{
    console.log(`Nigún equipo cumple con los requisitos para ganar o empatar`);
}

console.log('\n');

// Prueba 3

puntajeDelfines = (97 + 112 + 101)/3;
puntajeKoalas = (109 + 95 + 106)/3;

if((puntajeDelfines > puntajeKoalas) && (puntajeDelfines >= 100))
{
    console.log(`¡Los ganadores son los Delfines con (${puntajeDelfines}) puntos!`);
}
else if((puntajeKoalas > puntajeDelfines) && (puntajeKoalas >= 100))
{
    console.log(`¡Los ganadores son los Koalas con (${puntajeKoalas}) puntos!`);
}
else if((puntajeKoalas == puntajeDelfines) && (puntajeKoalas >= 100))
{
    console.log(`¡Ambos equipos quedan empatados con (${puntajeKoalas}) puntos!`);
}
else
{
    console.log(`Nigún equipo cumple con los requisitos para ganar o empatar`);
}
```

# Sentencia Switch

La sentencia switch permite crear condicionales basados en el valor de una variable de manera más cómoda y breve que tratando de hacerlo usando sentencias if/else. En el ejemplo se muestra su uso:

```
const edad = 11;

switch (edad) {
    case 10:
    case 11:
    case 12:
        console.log('es un niño');
        break;
    case 15:
        console.log('es un adolescente');
        break;
    case 18:
        console.log('es un adulto');
        break;
    default:
        console.log('')
}
```

# Operador Condicional o Ternario

El operador ternario permite escribir condicionales cortos de manera resumida dando opciones deacuerdo a si un la condición es verdadera o falsa. A continuación se muestra su funcionamiento.

```
const edad = 11;

const respuesta = edad > 18 ? 'puede conducir' : 'no puede conducir';
console.log(respuesta);
```

# Challenge 4
```
// Prueba 1

let factura = 275;

let propina = ((factura >= 50) && (factura <= 300)) ? factura*0.15 : factura*0.2;

console.log(`El valor de la factura es ${factura}, la propina es ${propina} y el valor total es ${propina+factura}`);

console.log('\n');

// Prueba 2

factura = 40;

propina = ((factura >= 50) && (factura <= 300)) ? factura*0.15 : factura*0.2;

console.log(`El valor de la factura es ${factura}, la propina es ${propina} y el valor total es ${propina+factura}`);

console.log('\n');

// Prueba 3

factura = 430;

propina = ((factura >= 50) && (factura <= 300)) ? factura*0.15 : factura*0.2;

console.log(`El valor de la factura es ${factura}, la propina es ${propina} y el valor total es ${propina+factura}`);
```

# Funciones

Las funciones son segmentos de código que se planea reciclar para hacer más fácil usarlos cuando sean necesarios de nuevo. Hay dos maneras de declarar estas funciones en JavaScript como se muestra a continuación:

```
// Declaración convencional

function calcEdad(anioNacimiento) 
{
    return 2020 - anioNacimiento;
}

// función como expresión

const calcEdad2 = function (anioNacimiento) 
{
    return 2020 - anioNacimiento;
}
```

Cabe mencionar que el comando "return" es el que indica que valor va a retornar la función cuando esta sea ejecutada. No todas las funciones tienen que retornar valores por lo que esta sentencia no siempre está presente en una función. Algo más que se debe tener en cuenta es que las funciones cuadno son decalradas como expresión no pueden ser llamadas antes de su declaración a diferencia de las declaradas convencionalmente. 

# Fucniones Arrow

Las funciones arrow son otra forma de declarar funciones en JavaScript. A continuación se muestra al manera de crear funciones arrow cortas de una sola línea o con varias sentencias dentro de ellas:

```
const calcEdad3 = anioNacimiento => 2020 - anioNacimiento;

console.log(calcEdad3(1990));

const calcEdad4 = (anioNacimiento, primerNombre) => {
    const edad = `La edad de ${primerNombre} es ${2020 - anioNacimiento}`;
    return edad;
}
```

# Challenge 5

```
// Prueba 1

const calcPromedio = (puntuacion1, puntuacion2, puntuacion3) => (puntuacion1 + puntuacion2 + puntuacion3)/3;

let puntajeDelfines = calcPromedio(44, 23, 71);
let puntajeKoalas = calcPromedio(65, 54, 49);

const verificarGanador = function(promDelfines, promKoalas)
{
    if(promDelfines > 2*promKoalas) console.log(`Los Delfines ganan (${promDelfines} contra ${promKoalas})`);
    else if(promKoalas > 2*promDelfines) console.log(`Los Koalas ganan (${promKoalas} contra ${promDelfines})`);
    else console.log('Ningún equipo gana');
    console.log('\n');
}

verificarGanador(puntajeDelfines, puntajeKoalas);

// Prueba 2

puntajeDelfines = calcPromedio(85, 54, 41);
puntajeKoalas = calcPromedio(23, 34, 27);

verificarGanador(puntajeDelfines, puntajeKoalas)
```
