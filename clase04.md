---
layout: post
title: Bases de datos implmentados en MySQL
author: Angie Dahiana Vargas Serna
date: 2021-03-27
---

En el presente resumen se encontrará las bases y generalidades para implementar una base de datos utilizando MySQL en donde se desgloza los comandotas más relevantes y los pasos a seguir en la instalación, configuración y desarrollo.


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

 y en la opción de contraseña coloque: *password*
 - Dar clic derecho sobre la nueva conexión -> herramientas -> restore database ->  buscar el archivo .sql del workbench

# **Instrucciones de inserción, actualización,consulta y borrado en la base de datos**

- ## **1. Inserción:**

**INSERT INTO** nombre_tabla(campo1,campo2,…,campoN) **VALUES** (valor1,valor2,…,valorN);
Ej:

**INSERT INTO** categorias(nombre, descripcion) **VALUES** ("Nueva categoría", "Nueva Descripción");

NOTA: Para variables de fechas se deben ingresar (Año-mes-día)

- ##  **2. Actualización (Recordar siempre usar el WHERE):**

 *2.1. Por clave primaria:*
 
**UPDATE** nombre_tabla **SET** campo=nuevo_valor **WHERE** campo_clave_primaria = valor;

Ej:
**UPDATE** cursos **SET** nombre = "Español" **WHERE** id = 5;

*2.2. Usando condición:*

**UPDATE** nombre_tabla **SET** campo=nuevo_valor **WHERE** campo1 = valor1 AND campo2 = valor2 … campo_otra_condicion = valorN;

Ej:
**UPDATE** cursos **SET** nombre = "Lectoescritura" **WHERE** nombre LIKE "%spa%";


- ## **3. Borrado (Recordar siempre usar el WHERE):**

*3.1. Por clave primaria:*

**DELETE FROM** nombre_tabla **WHERE** campo_clave_primaria = valor;

Ej:
**DELETE FROM** categorias **WHERE** id = 10;

*3.2. Usando condición:*

**DELETE FROM** nombre_tabla **WHERE** campo1 = valor1 AND campo2 = valor2 …campo_otra_condicion = valorN;

Ej:
**DELETE FROM** categorias **WHERE** nombre = "Nueva categoría";

- ## **4. Consultar** 

- **SELECT** (Hace referencia a las columnas)
- **FROM**  (Hace referencia a las tablas)
- **WHERE**  (Permite filtrar información utilizando lógica booleana o relacional como OR,AND,>=, < o LIKE que permite hacer búsquedas)
* **SELECT**  *  Consulta todas las columnas o Abreviatura.Columna
* **FROM** nombre_tabla Abreviatura
* **WHERE** Abreviatura.columnaX== 'Y '

### Ejemplos
1. **SELECT** pers.named

   **FROM** personas pers
   
   **WHERE** (pers.nombres = 'Juan Felipe' **OR** pers.ciudad = 'Bello' **AND** pers.nombres LIKE 'Juan%')


2. pers.nombres **LIKE**  %Juan busca todos los que terminen por Juan

   pers.nombres **LIKE**  Juan% busca todos los que empiezan por Juan
   
   pers.nombres **LIKE** Ju%an% busca todos los que empiezan por Ju o Juan 

### **Para ilustrar la relación entre el id de dos tablas**

- **INSERT INTO** generos(nombre, descripcion) **VALUES** ('comedia','Peliculas graciosas');
- **INSERT INTO** generos(nombre, descripcion) **VALUES** ('terror','Peliculas que dan miedo');
- **INSERT INTO** generos(nombre, descripcion) **VALUES** ('romantica','Peliculas sobre amor');

- **INSERT INTO** peliculas(nombre, imdb, anio_lanzamiento,resumen,genero) **VALUES** ('El profesor chiflado','asdd',1995,'resumen',1);
- **INSERT INTO** peliculas(nombre, imdb, anio_lanzamiento,resumen,genero) **VALUES** ('Chicas rubias','rewr',2003,'resumen',1);
- **INSERT INTO** peliculas(nombre, imdb, anio_lanzamiento,resumen,genero) **VALUES** ('El conjuro','asdd',2012,'resumen',2);
- **INSERT INTO** peliculas(nombre, imdb, anio_lanzamiento,resumen,genero) **VALUES** ('Amor ciego','trer',2001,'resumen',3);
- **INSERT INTO** peliculas(nombre, imdb, anio_lanzamiento,resumen,genero) **VALUES** ('El stand de los besos','sdffs',2019,'resumen',3);

**SELECT** *

**FROM** generos gen, peliculas pel

**WHERE** pel.genero = gen.id









