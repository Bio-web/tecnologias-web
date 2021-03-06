---
layout: post
title: Generalidades de linux-parte 1
author: Santiago Henao Gonzalez
date: 2021-03-05
---

En la primera clase del curso, el profesor tomo la primera parte de esta para presentar los contenidos a trabajar durante el semestre, luego de realizar una revisión general de estos se paso a comenzar el tema de comandos básicos de Linux.

Para comenzar se realizó una revisión rápida de la guía para la instalación del entorno **vagrant**, por medio del cual se crea una máquina virtual con el sistema operativo Ubuntu instalado.
Pasos para crear la máquina virtual :

- Descargar virtual box 
- Descargar vagrant 
- Descargar notepad ++
- Abrir el Command Prompt (cmd)
- vagrant init
- Abir el archivo vagrant cargado, y cambiar las siguientes líneas dependiente de la máquina que se quiera subir
  ej: config.vm.box = **"ubuntu/bionic64"**
      vb.memory = **"1024"**
	    vb.cpus = **"2"**
- vagrant up
- vagrant ssh -> servicio para conectar de manera remota a un servidor 

**Sugerencia**: descargar primero virtual box antes de instalar vagrant.

Luego de haber hecho la demostración de la instalación se pocedio a discutir acerca de la estructura básica de las carpetas en Linux. Entre las carpetas que se discutieron se destacan las siguientes:

- "**/**"  básicamente es la carpeta base en la que están contenidos todos los archivos.
- "**/bin**" la carpeta en donde se almacenan los programas y funciones básicas del sistema operativo.
- "**/etc**" Donde se almacenan configuraciones del sistema y los archivos con los datos de los usuarios.
- "**/home**" Donde se guardan las carpetas de los usuarios que guardarán sus respectivos archivos.
- "**/usr**" Una carpeta parecida al program files de windows que guarda aplicaciones.
- "**/var**" Ruta donde se guardan archivos generados por los programas, en la subcarpeta *"/var/lib"* se guardan archivos de bases de datos.
- "**/tmp**" Carpeta que alberga archivos temporales generados por algunos programa los cuales son períodicamente eliminados.
- "**/opt**" En donde se guardan aplicaciones autocontenidas en donde código y configuración van juntas.
- "**/root**" Que es la carpeta de usuario del administrador sólo accesible cuando se es un usuario con derechos de administrador.

**Nota**: tener  en cuenta que dentro del root usando el comando **rm-rf** se puede eliminar todo el sistema.

Adicionalmente se hablo de las maneras en que se puede referir a la ubicación de un archivo en alguna de estas carpetas, la manera básica es citando su posición exacta comenzando por la carpeta **"/"** un ejemplo sería "/home/santiago/musica/" o simplemente usando lo que se llama una **ruta relativa**, la cual obvia ciertas partes de la ubicación del archivo "santiago/musica". También se puede escribir rutas deacuerdo al directorio actual, usando los comodines **"."** que se refiere a la carpeta actual y **".."** que se refiere a la carpeta padre.

Habiendo entendido en terminos generales la estructura de las carpetas del sistema operativo Linux,
se procedio a revisar algunos de los comandos básicos, entre ellos cabe mencionar:

- "**cd**" comando que sirve para cambiar el directorio actual, básicamente moverse entre carpetas.
- "**pwd**" el cual muestra el directorio actual.
- "**ls**" comando que lista el contenido del directorio actual, es posible pasarle parámetros como **-l** que hace la lista descendente mientras que **-lt** hace que se muestre una lista descendente por fecha de creación.
- "**whoami**" que muestra el usuario que se está usando actualmente.
- "**rm**" que permite borrar archivos, se puede usar el parámetro **-rf** para realizar operaciones de borrado recursivas y forzadas(no se pregunta si se desea continuar en cada una de ellas).
- "**rmdir**" que como es de esperarse remueve directorios, sin embargo no se puede borrar directorios no vacios, aunque para remediar esto se puede usar también el parámetro **-rf**.
- "**mkdir**" comando que permite crear un directorio en el directorio actual o en la ruta proporcionada.
- "**touch**" el cual actualiza la fecha de modificación del archivo.
- "**cp**" con el cual se copian archivos a la ruta destino proporcionada.
- "**mv**" el cual mueve archivos a la ruta destino.
- "**nv**" el cual renombra archivos, además puede a la vez moverlos a otra ruta si se propociona una ruta destino.
- "**su -**" pide permiso con password.
- "**wget**" descargar cosas de la nube por consola.
- "**file**" permite conocer la extensión de cada archivo.
- "**cat**" permite ver el contenido de un archivo.

Otro comando que se trabajo fue **"sudo"** el cual si antecedia un comando permitia ejecutar este con derechos de administrador, por lo cual se mostró su uso para usar pasar a ser un usuario administrador con el comando **"sudo su -"** lo cual brindaba acceso a la carpeta **"/root"** antes inaccesible. Se hizo especial enfásis en tener cuidado a la hora de trabajar usando un usuario administrador, pues se pueden borrar por accidente archivos necesarios para el funcionamiento del sistema operativo.

Finalmente se explicó el uso del comando **"exit"** para cerrar sesión del usuario administrador y luego se mostró como se detenia de manera correcta la máquina virtual, además usando el comando vagrant **halt** permite apagar el sistema de desarrollo de nuestra máquina de una manera correcta.


