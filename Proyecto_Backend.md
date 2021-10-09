---
layout: post
title: Backend - Inventario de dispositivos médicos.
author: Santiago Henao González, Santiago Gutiérrez Pérez, Angie Dahiana Vargas Serna y Luisa María Zapata Saldarriaga 
date: 2021-10-09
---

# Introducción
Las instituciones hospitalarias requieren mantener un control estricto de los dispositivos médicos, por lo tanto se debe tener almacenada la información respecto a estos de manera ordenada y concisa, para solventar este problema se definen bases de datos que contienen los datos mas relevantes de cada dispositivo. Esto resulta útil para definir agendas de mantenimieno preventivo, control metrológico y tecnovigilancia, tambien para tener fácil acceso a la información de suministros ofrecidos por los proveedores en caso de requerir algún tipo de servicio. 

En este trabajo se busca presentar una servicio Backend para el almacenamiento y consulta de los datos del inventario de un hospital de forma eficiente, para esto se presenta una solución con base en aplicaciones en contenedores Docker, un servidor web Python con el framework Flask y una base de datos mongo.

# Metodología
El backend presentado esta basado en el siguiente repositorio: [Docker for development environments](https://github.com/afreydev/web-app-dev), específicamente `flask-backend-mongo`. A partir de esta plantilla se modificaron los métodos de inserción, consulta, actualización y borrado. Los datos de prueba usados para este proyecto solo incluyen información sobre la colección de Existencias y Proveedores presentados en el proyecto de [bases de datos no relacionales](https://bio-web.github.io/tecnologias-web/BD_no_relacionales).

## Instrucciones de instalación
- Clonar el repositorio [Docker for development environments](https://github.com/afreydev/web-app-dev) con el comando `git clone https://github.com/afreydev/web-app-dev.git` y usar el contenido de la carpeta `flask-backend-mongo`.
- En el archivo `docker-compose.yml` se deben comentar las lineas correspondientes a `node` y `nginx`, dado que este no será un ambiente de producción.
- Acceder a esta carpeta desde una consola con derechos de administrador e inicializar un entorno Vagrant con el comando `vagrant up`, este entorno ya se encuentra configurado con los puertos `5000` y `8080` compartidos, además de tener instalado completamente Docker.
- Luego con el comando `vagrant ssh` se ingresa a la nueva máquina virtual, en esta vamos a crear una carpeta en la raíz llamada `mongo` con el comando `mkdir mongo`.
- Vamos a la ruta `cd /vagrant/data/` y eliminar la carpeta `mongo` que existe con el comando `rm -rf mongo`, luego se crea un enlace simbólico a la carpeta creada en raíz con el comando `sudo ln -s /home/vagrant/mongo/ .`, es importante tener en cuenta que la consola debe ser abierta con derechos de administrador para poder correr este comando.
- En la ruta `/vagrant/` se corre el comando `docker-compose up`, esto instalará las librerías necesarias para que los contenedores de Python y Mongo funcionen correctamente, en caso de tener un error con el final de las secuencias de línea, se debe verificar que el archivo `docker-compose.yml` este guardado con **End of Line Sequence LF**.
- Una vez que los contenedores de Flask y Mongo este correctamente montados se puede acceder a los comandos CRUD.

### Carga de datos
Se deben enviar las siguientes listas de json con un método **POST** para la carga de información. La valores iniciales para la base de datos se encuentran en el README del repositorio, esto debe hacerse en las rutas `http://localhost:8080/existencias` y `http://localhost:8080/proveedores` respectivamente.

A continuación se detallan los métodos empleados usando como ejemplo la colección de existencias:

## Create
El servidor backend en la direccion `http://localhost:8080/existencias` espera recibir un método **POST** acompañado de un objeto `json` con la siguiente estructura:

```js
{
  "nombre" : "Bomba de infusion",
  "marca" : "Hospira",
  "referencia" : "Plum A+",
  "cantidad" : "5"
}
```

Para comprobar el correcto funcionamiento de este método se utiliza la API Postman para enviarlo, obteniendo el siguiente resultado:

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/136664274-81c937af-3039-4650-b260-e7eeaf0c2486.png"/>
</p>

El servidor retorna un "OK" demostrando que la instrucción se ejecutó completamente.

## Read
### Consultar todas las existencias
El servidor backend en la dirección `http://localhost:8080/existencias` espera recibir un método **GET** que no requiere un objeto json de entrada. Para comprobar el correcto funcionamiento de este método se utiliza la API Postman para enviarlo, obteniendo el siguiente resultado:

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/136664489-d095f19b-5848-4507-a233-3c50d747134e.png"/>
</p>

El servidor retorna una lista de objetos `json` con la información almacenada en la base de datos.

### Consultar una existencia
Para consultar un solo dispositivo se requiere enviar su `id` en la ruta, como se puede observar en la siguiente imagen:

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/136664658-9b2b2455-4e3f-41fb-a580-3f9f461828bb.png"/>
</p>

Lo retornado no es una lista, es únicamente un objeto `json` correspondiente a los datos del `id` entregado.

## Update
El servidor backend en la ruta `http://localhost:8080/existencias/<id>` recibe el `id` de un solo dispositivo acompañado de un objeto `json` que tenga toda la información de el dispositivo a actualizar, este objeto debe tener la misma estructura de un Create, por ejemplo si se quiere aumentar la cantidad de Bombas de infusión anteriormente agregadas se hace de la siguiente manera usando el método **PUT**:

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/136664891-d980bef4-043d-440b-9515-137f84454edc.png"/>
</p>

## Delete
El servidor backend en la ruta `http://localhost:8080/existencias/<id>` recibe el `id` del conjunto dispositivos que se requiere eliminar, por ejemplo si se quieren eliminar las  Bombas de infusión se realiza con un método **DELETE**:

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/136665000-7a0ff7e9-38b6-41c6-bc4a-bb57f1c27961.png"/>
</p>

## Repositorio
El código de este proyecto se encuentra disponible en el siguiente repositorio: [Inventario](https://github.com/Bio-web/Inventario-Backend)

# Conclusiones
- 

# Referencias bibliográficas 
1. Hospira PLUM A+, System Operating Manual. Tomado de: [Manual de usuario](https://www.icumed.com/media/9566/plum_aplus_with_hospira_mednet_software.pdf]https://www.icumed.com/media/9566/plum_aplus_with_hospira_mednet_software.pdf)
