---
layout: post
title: Trabajo 01
author: Santiago Henao Gonzalez, Santiago Gutierrez Pérez, Angie Dahiana Vargas Serna y Luisa María Zapata Saldarriaga 
date: 2021-03-05
---


1. Resumen de problema a solucionar (de nuevo)
Logging 

2. Diagrama entidad relación construido usando un software de diseño
como MySQL Workbench. 
3. Diccionario de datos: Definición de tablas y campos (nombre, tipo de dato), explicación del mismo y su necesidad en el sistema de información.


![image](https://user-images.githubusercontent.com/80167676/114285265-946e8e80-9a1b-11eb-8329-c3362ec8557e.png)



**permisos**
- id
- tipoPermiso

**permisos_usuario**
- id



Para el tipo de consulta, hay tres campos, consultar, eliminar o agregar, 1 indica que tiene dicho permiso y 0 no tiene permiso


**inventario**
- idInventario
- Nombre
- Marca
- Modelo
- Riesgo
- Tipo funcionamiento
- Ubicación
- Proveedor 
- Estado 1:  activo 0: Inactivo
- Manteniemiento
- ResgistroInvima

**marcas**
- idMarcas
- Nombre
- Modelo

**modelo**
- idModelos
- idMarcas
- Modelo

**tipoRiesgo**
- idRiesgo
- Nombre

**tipoFuncionamiento**
- idtipoFuncionamiento
- Nombre

**ubicacionDispositivo**
- idubicacionDispositivo
- piso
- Habitacion

**proveedores**
- idproveedores
- Nombre
- Telefono
- Dirección

marca tiene muchos modelos
