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

<code> // Prueba 1

let pesoJuan = 92;
let pesoMarcos = 78;
let alturaJuan = 1.95;
let alturaMarcos =  1.69;

let marcosIMC = pesoMarcos/(alturaMarcos**2);
let juanIMC = pesoJuan/(alturaJuan**2);

let marcosMayorIMC = marcosIMC > juanIMC;
console.log(marcosMayorIMC);


// Prueba 2

 pesoJuan = 85;
 pesoMarcos = 95;
 alturaJuan = 1.76;
 alturaMarcos =  1.88;

 marcosMayorIMC = marcosIMC > juanIMC;
 console.log(marcosMayorIMC); <\code>
 
 
 # Strings y Plantillas Literales
 
 La creación de strings o cadenas de caracteres en JavaScript sólo requiere que estas sean envueltas en comillas simples o dobles siempre y cuando se usen las mismas para abrir y cerrar la cadena. El operador de concatenación es el de suma "+". A continuación se muestra un ejemplo de su creación y uso, en el que también se hace uso de la función "console.log" para mostrar los resultados obtenidos:
 
 `const primerNombre = 'Andrés';
const segundoNombre = 'Felipe';
console.log(primerNombre + ' ' + segundoNombre);`

Otra manera de crear strings es por medio de las plantillas literales las cuales se encierran con los símbolos \`\` y dentro de ellos se puede llamar el valor de las variables usando el comando ${nombreVariable} dentro de la plantilla, como se muestra en el siguiente ejemplo:

``const templateLiteral = `Mi primer nombre es ${primerNombre} y mi segundo nombre es ${segundoNombre}`;
console.log(templateLiteral);``
 
 
