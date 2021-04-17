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


La especifiación de javaScript esta acompaño por un número y las siglas ES, la cual brindan al desarrollador y al navegador la información de la versión y las características del JavaScript usado.

**Ej**: ES5-> ES6/2015->ES11/ES2020

# Valores y Variables

Dado que JavaScript es débilmente tipado cuando se define una variable el automáticamente elige que tipo de dato es de acuerdo con el valor asignado.

Como convención el profesor indico que es recomendable usar **"camelCase"** para nombrar las variables,en donde la primera letra esen minúscula y la segunda en mayúscula. Esto mejora la legibilidad del código y facilita el mantenimiento de este. 

# Tipos de Datos

Se tienen dos tipos de datos en JavaScript, los primivitos que consisten en:

- **number**: Todos los numéricos (enteros, flotantes, double)
- **string**: Cadenas de caracteres.
- **boolean**: verdadero o falso.
- **undefined**: No ha sido definido la variable o sin valor.
- **null**: Valor nulo. Typeof no da como resultado nulo.
- **symbol**: Variable única e inmodificable.
- **big int**: números muy grandes.

El otro tipo de datos serían los objetos, ya que precisamente JavaScript es un lenguaje de programación orientado a objetos.

El comando `typeof` es útil para obtener el tipo de dato de una variable en específico.

# Let, const y var

Para inicializar variables en JavaScript se disponen de tres comandos:

- `let nombreVariable` es cual crea variables cuyo valor puede ser modificado posteriormente.
- `const nombreVariable` el cual crea variables cuyo valor no se puede cambiar una vez inicializada.
- `var nombreVariable` es un comando poco usado ya que es poco eficiente.

# Operadores Básicos

JavaScript cuenta con los operadores matemáticos básicos como lo son +, -, *  ,\/. Estos operadores aritméticos se pueden usar en operaciones entre variables e incluso en asignaciones como se muestra a continuación.

`const year = 2020;
const edadAndres = 2020 - 1990;`

Cabe mencionar que para la operación de potenciación se cuenta con el operador \**.

También se cuenta con los operadores de comparación básicos: >, >=, <, <=.

# Operadores de Asignación

Se pueden usar ciertos operadores de manera breve modificar el valor de variables con operaciones básicas. Naturalmente hay uno de ellos para cada operación básica. Ellos son: +=, -=, *=, \/=.

Su uso sería del estilo `variable += 10` que correspondería a sumarle 10 al valor de "variable" y asignarselo a "variable".

También existen otros operadores para modificar de manera rápida el valor de una variable y estos son ++ y - - que respectivamente suman y restan 1 a la variable a la que son aplicados y le asignan el nuevo valor a la variable.

# Challenge 1

Marcos y Juan están tratando de comparar su IMC (índice de masa corporal), que se calcula usando la fórmula: IMC = masa / altura ** 2 = masa / (altura * altura). (masa en kg y altura en metros).

1. Almacene la masa y la altura de Marcos y Juan en variables
2. Calcule ambos IMC usando la fórmula (incluso puede implementar ambas versiones)
3. Cree una variable booleana 'marcosMayorIMC' que contenga información sobre si Marcos tiene un IMC más alto que Juan.

**DATOS DE LA PRUEBA 1**: Marcos pesa 78 kg y mide 1,69 m de altura. Juan pesa 92 kg y mide 1,95 m de altura.
**DATOS DE LA PRUEBA 2**: Marcos pesa 95 kg y mide 1,88 m de altura. Juan pesa 85 kg y mide 1,76 m de altura.

A continuación se muestra el código en respuesta al primer desafío de programación en JavaScript.

```js
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
 
 ```js
 console.log('linea 1 \n\ linea 2');

console.log(`linea 1
linea 2`);
```

# Condicionales: if / else

Usando la sentencia if/else se crean condicionales los cuales dependen de un valor lógico entregado como parámetro, estos condicionales requieren estar encerrados en llaves "{}" cuando son de más de una linea. A continuación se muestra un ejemplo de estos:

```js
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

Utilice el ejemplo de IMC del Coding Challenge # 1 y el código que ya escribió y mejóralo:

1. Imprima un resultado agradable en la consola, diciendo quién tiene el IMC más alto. El mensaje puede ser
"¡El IMC de Marcos es más alto que el de Juan!" o "¡El IMC de Juan es más alto que el de Marcos!"

2. Utilice una plantilla literal para incluir los valores de IMC en las salidas. Ejemplo: "¡El IMC de Marcos (28,3)
es más alto que el de Juan (23,9)!" 

**SUGERENCIA**: Utilice una declaración if / else

```js
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

```js
// Ejemplos de conversión de datos
const year = '2020';
console.log(Number(year));
const edad = 30;
const edadString = String(edad);
console.log(edadString);
console.log(typeof edadString);

// Coerción
console.log('Yo tengo ' + 30 + ' años');// El 30 pasa a ser un string
console.log('10' + '10'); // se concatena  1010
console.log('10' + 3); // Obliga el string para que se convierta en tipo int, 103
console.log('100' / '5');// Convierte los strings en numeros, hace la operación
console.log('100' > '5'); // compara los strings no los numero: False
console.log(100 > 5); // True
console.log('100' < '5'); // True
console.log('100' > 5); // True
```

# Valores Truthy y Falsy

Todos los tipos de dato tienen un valor de verdad intrínseco dependiendo de su valor y su tipo, de manera que pueden ser usados en condicionales, los valores que tienen atado un valor de verdad "falsy" son los tipos undefined y null, los numéricos con valor **0**,los strings vacíos **''** y **NaN**. Todos los demás valores y tipos tendrán un valor "truthy" si son usados en operaciones lógicas.

# Operadores de Igualdad

JavaScript cuenta con los operadores lógicos básicos de igualdades `==` y `!=`. Cabe destacar que para evitar que se causen errores debido a la coerción se puede usar los operadores `===` y `!==` los cuales evitan que haya cualquier conversión de tipo de dato forzada, de manera que se requiere que los datos sean del mismo tipo originalmente.

# Operadores Lógicos

Los operadores lógicos básicos estan disponibles en JavaScript correspondiendo `&&` a la operación `and`, `||` a la operación `or` y `!` a la operación `not`.

# Challenge 3

Hay dos equipos de gimnasia, Delfines y Koalas. Compiten entre sí 3 veces. ¡El ganador con la puntuación media más alta gana el
campeonato!

1. Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba a continuación.
2. Compare los puntajes promedio del equipo para determinar el ganador de la competencia e imprímalo en la consola. No olvide que
puede haber un empate, así que pruebe eso también (empate significa que tienen el mismo puntaje promedio).
3. Incluya un requisito para una puntuación mínima de 100. Con esta regla, un equipo solo gana si tiene una puntuación más alta que
el otro equipo y, al mismo tiempo, una puntuación de al menos 100 puntos. SUGERENCIA: Utilice un operador lógico para probar la
puntuación mínima, así como varios bloques else-if
4. ¡La puntuación mínima también se aplica a un empate! Entonces, un empate solo ocurre cuando ambos equipos tienen la misma
puntuación y ambos tienen una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo gana el campeonato.

**DATOS DE LA PRUEBA 1**: Los delfines obtienen una puntuación de 96, 108 y 89. Los koalas de 88, 91 y 110
**DATOS DE LA PRUEBA 2**: Los delfines obtienen una puntuación de 97, 112 y 101. Los koalas de 109, 95 y 123
**DATOS DE LA PRUEBA 3**: Los delfines obtienen una puntuación de 97, 112 y 101. Los koalas de 109, 95 y 106


```js
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

```js
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

```js
const edad = 11;

const respuesta = edad > 18 ? 'puede conducir' : 'no puede conducir';
console.log(respuesta);
```

# Challenge 4

Steven quiere construir una calculadora de propinas muy simple para cada vez que vaya a comer a un restaurante. En su país, es habitual dar una propina del 15% si el valor de la factura está entre 50 y 300. Si el valor es diferente, la propina es del 20%.

1. Su tarea es calcular la propina, dependiendo del valor de la factura. Cree una variable llamada 'propina' para esto. No
está permitido usar una declaración if / else (si le resulta más fácil, puede comenzar con una declaración if / else y luego
intentar convertirla en un operador ternario).
2. Imprima una cadena en la consola que contenga el valor de la factura, la propina y el valor final (factura + propina).

**Ejemplo**: 'El valor de la factura es 275, la propina es 41,25 y el valor total es 316,25'
**DATOS DE PRUEBA**: prueba para valores de factura 275, 40 y 430
**SUGERENCIA**: Para calcular el 20% de un valor, simplemente multiplícalo por 20/100 = 0,2
**SUGERENCIA**: El valor X está entre 50 y 300, si es >= 50 && <= 300

```js
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

```js
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

```js
const calcEdad3 = anioNacimiento => 2020 - anioNacimiento;

console.log(calcEdad3(1990));

const calcEdad4 = (anioNacimiento, primerNombre) => {
    const edad = `La edad de ${primerNombre} es ${2020 - anioNacimiento}`;
    return edad;
}
```

# Challenge 5
Steven quiere construir una calculadora de propinas muy simple para cada vez que vaya a comer a un restaurante. En su país, es habitual dar una propina del 15% si el valor de la factura está entre 50 y 300. Si el valor es diferente, la propina es del 20%.¡Volvamos a los dos equipos de gimnasia, Delfines y Koalas! Hay una nueva disciplina de gimnasia, que funciona de manera diferente.
Cada equipo compite 3 veces, y luego se calcula el promedio de los 3 puntajes (es decir, un puntaje promedio por equipo).
Un equipo SOLO gana si tiene al menos el DOBLE de la puntuación media del otro equipo. De lo contrario, ¡ningún equipo gana!
1. Cree una función arrow 'calcPromedio' para calcular el promedio de 3 puntuaciones
2. Usa la función para calcular el promedio de ambos equipos.
3. Cree una función 'verificarGanador' que tome el puntaje promedio de cada equipo como parámetros ('promDelfines' y 'promKoalas'), y luego
registre al ganador en la consola, junto con los puntos de victoria, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan (30 contra 13)".
4. Utilice la función 'verificarGanador' para determinar el ganador para DATOS 1 y DATOS 2.
5. Ignore los empates esta vez.
DATOS DE LA PRUEBA 1: Los delfines logran un puntaje de 44, 23 y 71. Los koalas de 65, 54 y 49
DATOS DE LA PRUEBA 2: Los delfines logran un puntaje de 85, 54 y 41. Los koalas de 23, 34 y 27
SUGERENCIA: Para calcular el promedio de 3 valores, súmelos todos y divídalos por 3
SUGERENCIA: Para verificar si el número A es al menos el doble del número B, verifique A >= 2 * B. Aplique esto a los puntajes promedio del
equipo




```js
// Prueba 1

const calcPromedio = (puntuacion1, puntuacion2, puntuacion3) => (puntuacion1 + puntuacion2 + puntuacion3)/3;

let puntajeDelfines = calcPromedio(44, 23, 71);
let puntajeKoalas = calcPromedio(65, 54, 49);

const verificarGanador = function(promDelfines, promKoalas)
{
    if(promDelfines >= 2*promKoalas) console.log(`Los Delfines ganan (${promDelfines} contra ${promKoalas})`);
    else if(promKoalas >= 2*promDelfines) console.log(`Los Koalas ganan (${promKoalas} contra ${promDelfines})`);
    else console.log('Ningún equipo gana');
    console.log('\n');
}

verificarGanador(puntajeDelfines, puntajeKoalas);

// Prueba 2

puntajeDelfines = calcPromedio(85, 54, 41);
puntajeKoalas = calcPromedio(23, 34, 27);

verificarGanador(puntajeDelfines, puntajeKoalas);
```
