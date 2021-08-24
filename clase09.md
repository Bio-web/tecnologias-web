---
layout: post
title: Tecnologías del Desarrollo Web(HTM & CSS)
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
![image](https://user-images.githubusercontent.com/80167676/130699784-f5655d9c-b417-404f-b108-73a6b963ad1d.png)

# CSS

Es la capa de estilo de las páginas web. Consiste en numerosas propiedades que se usan para darle formato al contenido: fuentes


