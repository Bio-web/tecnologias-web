---
layout: post
title: Bases de datos MySQL
author: Angie Dahiana Vargas Serna
date: 2021-03-27
---
 # WORKBENCH
 
Para crear un nuevo modelo se deben hacer los siguientes pasos:

 **1. New model**
 
 **2. Añadir diagrama (Add diagram)**
 
 **3. Crear tabla**
 
 ![image](https://user-images.githubusercontent.com/64289042/112903629-6731f000-90ad-11eb-8d53-b32ac441ad27.png)
 
 **4. Configuración del tipo de variable de las columnas** 

![image](https://user-images.githubusercontent.com/64289042/112903709-82046480-90ad-11eb-8ef5-799a50d69a32.png)

*PK:* Primary key

*NN:* Not nule(No obligatorio) 

*AI:* Autoimplement 
 
**Tipos de variables**

En el campo **data_type** se selecciona el tipo de variable y el número de bits requeridos como se muestran en la siguiente imagen

![image](https://user-images.githubusercontent.com/64289042/112903005-9300a600-90ac-11eb-93f5-5a01d3435244.png)

**5. Crear las relaciones entre tablas**

![image](https://user-images.githubusercontent.com/64289042/112905445-0b1c9b00-90b0-11eb-864a-e35965c0a73b.png)

**6. Finalmente exportar el modelo generando el script:**

- File -> Export -> Forward Engineer SQL CREATE script
- Seleccionar extensión
- Presionar en la opción **Omit squema qualifier in objects names** --> *Next*
- Export MySQL table objects -> *Next*
- Finish
- Revisar el archivo creado y borrar la palabra **VISIBLE** 

# CONEXIÓN ENTRE MySQL y DOCKER

- Para direccionar la base de datos de MySQL a nuestro equipo cambiamos el *host* de la siguiente manera

*config.vm.network "forwarded_port", guest: 80, host: 8080*
*config.vm.network "forwarded_port", guest: 3306, host: 3309*

- Vagrant halt
- Vagrant up
- Vagrant ssh
- sudo usermod -aG docker vagrant 
- mkdir dbdata
- sudo systemctl stop mysql(Por si hay otro MySQL instalado)
- docker run -ti --rm --name mysqldb -d -p 3306:3306 -v $PWD/dbdata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=peliculas -e MYSQL_USER=peliculas -e MYSQL_PASSWORD=password mysql:5.7
- docker star mysqldb (Correr los contenedores)
- docker ps (Lista los contenedores que están corriendo)
- docker stop mysqldb (Detiene los contenedores)

# dbeaver

- Instalar la aplicación desde https://dbeaver.io/download/ 
- Seleccione *Nueva conexión*
- En Seccione base de datos dar clic en MySQL y configurar las siguientes opciones

![image](https://user-images.githubusercontent.com/64289042/112910284-ae71ae00-90b8-11eb-9079-964e20a877d1.png)

 y en la opción de contraseña : password
 - Dar clic derecho sobre la nueva conexión -> herramientas -> restore database ->  buscar el archivo .sql del workbench

**Instrucciones de inserción, actualización y borrado en la base de datos**
- *1. Inserción:*

INSERT INTO nombre_tabla(campo1,campo2,…,campoN) values (valor1,valor2,…,valorN);
Ej:
INSERT INTO categorias(nombre, descripcion) VALUES ("Nueva categoría", "Nueva Descripción");

- *2. Actualización (Recordar siempre usar el WHERE):*
-   2.1. Por clave primaria:
UPDATE nombre_tabla SET campo=nuevo_valor WHERE campo_clave_primaria = valor;
Ej:
UPDATE cursos SET nombre = "Español" WHERE id = 5;
2.2. Usando condición:
UPDATE nombre_tabla SET campo=nuevo_valor WHERE campo1 = valor1 AND campo2 =
valor2 … campo_otra_condicion = valorN;
Ej:
UPDATE cursos SET nombre = "Lectoescritura" WHERE nombre LIKE "%spa%";
















