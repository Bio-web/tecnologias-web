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

















