---
layout: post
title: Tecnologías del Desarrollo Web(HTML & CSS)
author: Santiago Henao González
date: 2021-08-24
---
# Frontend

La parte de la aplicación que tiene interacción con el usuario. Construido principalmente en las 3 principales tecnologías de la web.

# HTML

Es el *lenguaje de marcado*(markup) sirve para estructurar y describir el contenido de las páginas web. Es una extensión del lenguaje de XML.

Los navegadores están equipados para interpretar HTML para poder renderizar sitios web. Hay herramientas(frameworks) que facilitan el desarrollo pero los sitios web generados siempre están creados usando las tecnologías básicas.

Consiste en *elementos* o *tags* que describen los diferentes tipos de contenidos.

## Anatomía de elementos HTML

```html
<p> HTML es un lenguaje de marcado</p>
```
Las etiquetas que describen el contenido se abren y cierran y llevan el contenido que describen en medio.

El contenido de los elementos puede ser otros elementos hijos.

## Doctype

Es la tag que le dice al navegador que tipo de documento se está entregando y la versión de html usada.

## html

Es la tag que contiene toda la página web, ósea todo el contenido.

### head

Es la etiqueta que no se muestra en la página ni hace parte de la estructura, más bien brinda información al navegador.

## body

Es donde va toda la estructura de la página web. La información que se debe mostrar.

Un ejemplo de una página básica es

```html
<!DOCTYPE html>
<html>
	<!-- Metadatos -->
	<head>
		<title>Mi primera web</>
	</head>
	<!-- Contenido -->
	<body>
		<p>Contenido</p>
	</body>
</html> 
```

## Elementos de texto

Hay múltiples elementos de texto en html, entre ellos están.

### Cabeceras o títulos

Hay 6 niveles de títulos que se pueden usar en html, a menor el nivel más grande el título.

```html
<h1>Título 1</h1>
<h2>Título 2</h2>
<h3>Título 3</h3>
```
![image](https://user-images.githubusercontent.com/80167676/130699209-0009d2fa-7e2b-4ef0-9b8b-70cc1311f0f4.png)

### Párrafos

Es texto simple.

```html
<p>Texto de prueba</p>
```
![image](https://user-images.githubusercontent.com/80167676/130699261-a22c5f5e-c2d7-4466-8089-4d172849d582.png)

### Texto en negrilla y en itálica

Se puede resaltar texto cuando se busca darle importancia o énfasis usando estas etiquetas, se recomienda usar las nuevas versiones de la etiquetas de resaltado y italización ya que estas acarrean un significado semántico que ayuda a optimizar las búsquedas web.

```html
<p> orem ipsum dolor sit amet <b>adipisicing</b> elit. Ullam labore blanditiis eum <strong>necessitatibus</strong>  eius maiores numquam dolorum <i>repellendus dignissimos!</i>  Laborum debitis sunt voluptate! Placeat <em>aliquid aut eveniet</em>  amet quia magni.</p>
```
![image](https://user-images.githubusercontent.com/80167676/130699336-96ca9a65-9ed2-40f7-9890-95c1a5e475c6.png)

## Listas

Son elementos que buscan ordenar contenido relacionado entre sí, hay varios tipos de ellas.

### Listas ordenadas

Listas cuyo orden importa y por lo tanto sus elementos son enumerados por defecto.

```html
<ol><!-- listas ordenadas -->
	<li>item 1</li>
	<li>item 2</li>
	<li>item 3</li>
</ol>
```
![image](https://user-images.githubusercontent.com/80167676/130699460-c61a2670-1c29-4d4f-962f-e2eaa4c71b24.png)

### Listas sin orden

Son listas en las que el orden no importa y por lo tanto no están numeradas, los elementos vienen indicados por viñetas.

```html
<ul><!-- listas ordenadas -->
	<li>item 1</li>
	<li>item 2</li>
	<li>item 3</li>
</ul>
```
![image](https://user-images.githubusercontent.com/80167676/130699477-1eb66071-5229-4542-bf84-ba9b61a8cf59.png)

### Listas de descripción

No son muy usadas, similares a diccionarios que almacenan términos con sus respectivas descripciones.

```html
<dl><!-- lista descripción -->
	<dt>leche</dt><!-- Termino -->
	<dd>Bebida color blanco</dd><!-- Descripción -->
	<dt>leche</dt>
	<dd>Bebida color blanco</dd>
</dl>
```
![image](https://user-images.githubusercontent.com/80167676/130699514-afeb2ffd-28c2-467d-b388-97c41d63895b.png)

## Imágenes

Es una etiqueta que permite poner imágenes en los sitios web, por medio de los atributos de los elementos se especifica su origen y se puede modificar.

```html
<img src="Prueba.jpg" alt="texto alternativo" width="200"><!-- limitada a 200 pixeles de ancho -->
```
## Enlaces

Elementos que por medio de un clic nos permiten movernos a partes determinadas de la página web o a sitios externos.

```html
<a href="http://www.pagina.com">Enlace</a>
```
![image](https://user-images.githubusercontent.com/80167676/130699665-d2605e2e-61ec-4b90-9a45-7930d4ae83a8.png)

## Etiquetas semánticas

Con el objetivo de facilitar el trabajo de los buscadores se han introducido etiquetas que subdividen la página web en partes importantes, de  manera que los algoritmos de los buscadores pueden encontrar fácilmente determinadas partes de las mismas. No agregan visualmente al sitio pero si a su funcionalidad.

### nav

Etiqueta usada para contener los menús de navegación que permiten moverse más fácilmente por un sitio web, normalmente contienen arreglos de elementos tipo anchor(<a>).

### header

Usada para delimitar las cabeceras con información importante de la página.

### article

Etiqueta que delimita el contenido del que se trata de la página.

### footer

Pie de página de la página o de una determinada parte de la misma.

### main

Se usa para contener el contenido principal de la página, normalmente contiene etiquetas article dentro de sí.

### section

Usada para dividir en secciones una página web.

### aside

En esta etiqueta se suele ser usada para presentar enlaces a sitios externos de interés relacionados con la página web .

Un ejemplo de uso de dichas etiquetas se muestra a continuación.

```html
<header><!-- Cabecera -->
	<nav><!-- menú -->
		<ul>
			<li><a href="sitio-1">Enlace 1</a></li>
			<li><a href="sitio-2">Enlace 2</a></li>
		</ul>
	</nav>
</header>
<section><!-- sección -->
	<main>
		<article>
			<p>Contenido</p>
		</article>
	</main>
</section>
```

# CSS

Es la capa de estilo de las páginas web. Consiste en numerosas propiedades que se usan para darle formato al contenido: fuentes, espaciado y ubicación. Todo esto se logra estableciendo reglas que tienen la siguiente forma.

![image](https://user-images.githubusercontent.com/80167676/130700074-830c0bed-ed9b-48f9-8305-2ae1383d4104.png)
	
Las propiedades que CSS puede modificar dependen del elemento que se esté modificando. Para modificar determinados elementos del documento es importante tener en cuenta dos atributos de los elementos html, estos son, las clases o *class* y el *id* los cuales permiten aplicar cambios a varios elementos o a uno en específico, respectivamente.

```html
<nav id="menu-principal" class="menu">
    <ul>
	<li><a href="#">enlace menu 1</a></li>
	<li><a href="#">enlace menu 2</a></li>
	<li><a href="#">enlace menu 3</a></li>
	<li><a href="#">enlace menu 4</a></li>
	<li><a href="#">enlace menu 5</a></li>
    </ul>
</nav>	
```	
![image](https://user-images.githubusercontent.com/80167676/130701081-369d1fa0-f3d7-4a0d-806b-c95ff16eb5fe.png)
	
## Aplicar estilos

Hay tres maneras de aplicar estilos en CSS.

### Inline

Usando el atributo style de los elementos html es posible cambiar propiedades de un elemento específico.

```html
<p style="color: red">Texto de prueba</p>
```
![image](https://user-images.githubusercontent.com/80167676/130701631-ca7ca67d-f63a-43d6-a116-6dc65d77b12c.png)

### Internos

Usando la etiqueta *style* dentro del *head* del html se puede aplicar estilos a toda la página.
	
```html
<style>
    h1 {/* Se selecciona todas las etiquetas h1 de la página */
	color: salmon;/* Cambio de color */
	text-align: center;/* Cambio de alineación de texto */
    }
</style>	
```
![image](https://user-images.githubusercontent.com/80167676/130702060-ba6fc1ba-61e5-4acd-b720-c3b3bb1ff553.png)

### Externos

Se puede importar un archivo CSS externo en el cual están guardados los estilos a usar. Usando estos archivos se pueden aplicar estilos en diferentes páginas sin necesidad de reescribirlos. Se importa usando la etiqueta *link* en el head de la página.
	
```html
<!-- Se importa la hoja de estilos styleTest.css -->
<link rel="stylesheet" href="styleTest.css">
```

En la hoja de estilos
```css
/* Aplica selección por clase y por tag */
.menu ul li a {/* Cadena de selectores, los anchor  contenidos dentro de las tags y clases especificadas */
    color: yellow;
}
```
El menu con la clase "menu" se ve modificado.
	
![image](https://user-images.githubusercontent.com/80167676/130702730-f328a06e-1c98-403c-96a8-9640b0f59ccf.png)

También se puede seleccionar por id de la siguiente manera
```css
/* Selección por id */
#menu-principal {
    text-transform: capitalize;
}
```
![image](https://user-images.githubusercontent.com/80167676/130703118-88d1c771-763b-4590-911f-6ff02c338b76.png)

## Estilos de texto

Hay muchas propiedades que se pueden modificar en un texto, entre ellas están.

	• "color" que modifica el color del texto.
	• "font-size" que cambia el tamaño de la fuente.
	• "font-family" permite seleccionar otra familia de fuente, cambiando el tipo de letra.
	• "text-transofrm" que incluye aplicar transformaciones como capitalizar primera letra, poner todo en mayúsculas o en minusculas.
	• "font-style" la cual cambia el estilo de la fuente(itálica, negrilla, normal…).
	• "line-height" que mueve la línea sobre la que se escribe el texto.
	• "text-align" que controla la alineación del texto.

```html	
<p class="text mayuscula">Texto de prueba</p>
```
```css
.text {
    color: yellowgreen;
    font-size: 25;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;/* Fallback en caso de no cargar fuente */
    line-height: 5;
    text-align: center;
}
	
.text.mayuscula {/* Cadena de selectores, que tenga ambas clases */
    text-transform: uppercase;
}		
```
![image](https://user-images.githubusercontent.com/80167676/130703908-ab8112fb-fd40-4047-b63b-6d280205fbfa.png)

## Colores
  
Hay varias maneras de especificar colores  en CSS, ya sea por nombre, por código rgb o por hexadecimal.
	
```html
<div class="bloque-color">
    <p>Texto</p>
</div>
```

```css
.bloque-color {
    color: teal;
    background-color: rgb(255, 0, 0);
    
}

.bloque-color p {
    text-decoration: underline;
    text-decoration-color: #fff;
}
```
![image](https://user-images.githubusercontent.com/80167676/130705805-a8638da2-d724-4b96-b943-48b5ce99166b.png)	

## Continuación de la clase CSS
Se pueden utilizar en todos los elementos sin tener que especificar la clase
1. `first-child` : Le aplica el estilo al primer elemento que encuentre de esa clase
2. `last-child` : Le aplica el estilo al último elemento que encuentre de esa clase
3. `nth-child(X)` : Le aplica el estilo al n-ésimo elemento que encuentre de esa clase y la X significa el número al que se va asignar el estilo. También puede darse el parámetro de 'odd' para coger los items impares 

Para generar una lista de varias items de manera automática se puede utilizar lo siguiente: 
```js
    <header>
        <nav>
            ul> li*10{item $}        
    
        </nav>

    </header>  

```
En el último item de la lista presentada se aplicará el estilo css

```css
.lista li: last-child(4){

    color= blue
}
```
### Estilos de enlaces
- Link : Aparece el link en pantalla
- visited  : Cuando se visita el enlace
- hover : Estilo que se aplica cuando se pasa el mouse por el enlace
- active : Estilo que se aplica cuando da click en el enlace

```css
.enlace li: a: link { 
    color= dark
    text-decoration:none /* Sin subrayado */
    font-size: 20px /* Tamaño de la fuente */
}

.enlace li: a: visited { 
    color= blue /* Cuando se visita el enlace queda marcado en azul */
}
    
}
.enlace li: a: hover { 
    color= dark
    text_decoration:underline /* Subraya cada que pasa por el enlace */
}

.enlace li: a: active { 
    color= dark
    text_decoration:underline /* Subraya cada que pasa por el enlace */
}
```

## CSS BOX MODEL
![image](https://user-images.githubusercontent.com/64289042/131204196-264c3562-39dc-43db-a961-e7a54552a21b.png)


### Espaciado y dimensiones
 * Padding 
 * Margin
 * Width
 * Height


```css
.box {
    color= white;
    background-color:black  /* Fondo de la margen */
    font-size= 50px;
    display: inline /* Se ajusta al espacio, por defeto en block  */
    /* COn el parámetro inline no se pueden ajustar los tamaño en cambio si inline-block si lo deja editar */
    border: 10px solid red  /*  Tamaño-tipo de borde(punteado, sólido-color)  */
     /* El padding se puede ajustar para todos los lados, o solo para uno en específico  */
    padding-top=20px;  /* Ajusta el alto puede cambiarse por left, right, bottom */
    padding-bottom=20px; 
    padding-right=20px; 
    padding-left=20px; 
/* Se pueden ajustar los 4 parámetros en una línea */
/* Padding: Top, right, botton,left */
    padding= 20px 40px 10px 13px; 
    margin= 40px 20px /* Margin:Top, botton */
    position=absolute;/* Sobresale sobre los demás elementos*/
}

```
## ELEMENTOS BLOQUE
- Son formateados visualmente como bloques
- Ocupan el 100% del ancho del elemento padre
- Son apilados verticalemente por defecto uno tras otro

## ELEMENTOS EN LÍNEAS
 - Ocupan solo el espacio necesario que ocupa su contenido
 - NO hay saltos de línea antes o después del elemento
 - No se aplican altos y anchos
 - Los padding y los margin solo se aplican horizontalmente

## POSICIONAMIENTO ABSOLUTO
● El posicionamiento por defecto es el relativo, los elementos se posicionan uno después de otro dependiendo del orden que tenga en el código HTML. Estilo: position: relative

● En el posicionamiento absoluto los elementos no afectan a los demás y estos son superpuestos

● Estilo: position: absolute.

● Se usa top, left, bottom, right para posicionar el elemento con respecto al elemento padre con posición relativa.

## PSEUDO-ELEMENTOS

● before

● after

```css
a.enlaces li: before{
    content: "=>";
    color: blue;
    margin-right: 10px;
};


```
## LAYOUTS(Manejo de las planillas)
Sirven apra cambiar el posicionamiento de los elementos en la página web
● floats: Elementos flotantes

● flex-box: Elementos flexibles

● grid: Cuadrilla

En caso de que los flotantes interfieran en el espacio de otros elementos, se debe de aplicar el siguiente comando:
```html
<div class="clear"></div>
```
```css
.clear{
    clear:both;
    }
```

* FLOATS
```js
ul.floats>li*4>{item $}
-->
        <ul class="floats">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ul>
```
Aplicando el estilo a cada layouts
```css
.floats{
    padding:0;
    margin:0;
}

.floats li {
    list-style: none;
    background-color:yellow ;
    display: inline-block; /* Separa por bloques dejando modficar el tamaño */
    width: 50px;
    height: 50px;
    margin-bottom: 10px /* No se toma todo el ancho*/
    float: left; /*Elegir si apila los elemntos a la izquierda-derecha*/
    margin-right: 10px; 

}
```

* flex-box:
```css
.flex {
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    }

.flex div {
    width:100px;
    height: 100px;
    background: red;
    margin-right:10px;
    margin-bottom:10px;
    }

.flex div.small {/* No se toma todo el ancho*/
    width:50px;
    height:50px;

    }

.flex.column {/* No se toma todo el ancho*/
    flex-direction:row;  
    justify-content:space-between;
    
    width:50px;
    height:50px;

    }
```
* grid

```css
.grid{
    display:grid;
    grid-template-columns:1fr 1fr; /* Dos columnas con el tamaño de una fracción */ 
}
.grid{
    display:grid;
    grid-template-columns:1fr 1fr; /* Dos columnas con el tamaño de una fracción */
    gap:10px;/* Separar por bloques */

    
}
.grid div{
    background-color:yelow;
    border:1px solid black; /* Divide */
    
}
```
## RESPONSIVE

Ajusta cualquier tipo de pantalla respecto a su tamaño
* Media Querys

```js
@media only screem and (min-width: 768px){
    .box{
    width:300px;
    height:300px;

    }

}
```
Enlaces de interés:

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
	
https://flexboxfroggy.com/
	
https://css-tricks.com/snippets/css/complete-guide-grid/



	
	
	
	
	
	
	
	
	
	
	
