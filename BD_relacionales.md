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

---

Estas tres tablas se encargan del login a la aplicación de inventarios.

# Usuarios
![image](https://user-images.githubusercontent.com/80167676/114285314-ea433680-9a1b-11eb-86cc-17396284bec9.png)
Esta tabla contiene la información de los usuarios con acceso al inventario.
- id: Campo autogenerado que identifica a cada usuario.
- nombreUsuario: Nombre completo del usuario.
- passUsuario: Contraseña de acceso al sistema.

# Permisos
![image](https://user-images.githubusercontent.com/80167676/114285366-31312c00-9a1c-11eb-92e7-1035aa856272.png)
- id: Campo autogenerado que identifica cada tipo de permiso.
- tipoPermiso: Nombre del permiso(Agregar, Eliminar y Consultar).

# Permisos por usuario
![image](https://user-images.githubusercontent.com/80167676/114285370-3aba9400-9a1c-11eb-8766-a691866aff52.png)
Relaciona a los usuarios con los permisos
- id: Campo autogenerado que identifica el permiso por usuario.
- usuarios_id: Usuario al que se le asigna un permiso
- permiso_id: Tipo de permiso a asignar.


---
Estas tablas representan la estructura de la base de datos.

# Inventario
![image](https://user-images.githubusercontent.com/80167676/114285381-4c03a080-9a1c-11eb-8e3f-29e96c4ab8f8.png)
- id: Campo autogenerado que identifica el equipo médico.
- Nombre: Nombre del equipo médico.
- modelos: Correspone al id en la tabla Modelos.
- Estado: 1 activo, 0 inactivo.
- fechaMantenimiento: Fecha correspondiente al último mantenimiento realizado.
- proveedor: Correspone al id en la tabla Proveedores.
- tipoFuncionamiento: Correspone al id en la tipoFuncionamiento.
- tipoRiesgo: Correspone al id en la tabla tipoRiesgo.
- ubicacionDispositivo: Correspone al id en la tabla ubicacionDispositivo.
- registroInvima: Registro obligatorio para algunos equipos médicos.

# Marcas
![image](https://user-images.githubusercontent.com/80167676/114285387-54f47200-9a1c-11eb-9b4a-832ed70da6ce.png)
- id: Campo autogenerado que identifica la marca.
- Nombre: Nombre de la marca.

# Modelos
![image](https://user-images.githubusercontent.com/80167676/114285402-705f7d00-9a1c-11eb-8538-ef70dddaa954.png)
- id: Campo autogenerado que identifica el módelo.
- idMarcas: id que representa a una marca.
- Modelo: Nombre del módelo.


# Tipo de riesgo
![image](https://user-images.githubusercontent.com/80167676/114285409-7bb2a880-9a1c-11eb-8def-900998d66f26.png)
- id: Campo autogenerado que identifica el tipo de riesgo.
- Nombre: Categoria según la legistlación Colombiana.

# Tipo de funcionamiento
![image](https://user-images.githubusercontent.com/80167676/114285411-82412000-9a1c-11eb-8667-9a993b57f718.png)
- id: Campo autogenerado que identifica el tipo de funcionamiento.
- Nombre: representa el tipo del funcionamiento(Eléctrico, mecánico y electromecánico).

# Ubicacion dispositivo
![image](https://user-images.githubusercontent.com/80167676/114285415-8a995b00-9a1c-11eb-9c7e-5248abc45c63.png)
- id: Campo autogenerado que identifica la ubicacion del dispositivo.
- Piso: Piso donde esta el dispositivo
- Habitacion: Habitación en donde esta el dispositivo.

# Proveedores
![image](https://user-images.githubusercontent.com/80167676/114285417-938a2c80-9a1c-11eb-9616-f1896159f332.png)
- id: Campo autogenerado que identifica el proveedor de los dispositivos.
- Nombre: Nombre de la empresa proveedora de servicios y equipos.
- Telefono: Número de contacto del proveedor.
- Direccion: Sede de venta del proveedor.
- Email: Correo electrónico del contacto.

# Marcas proveedor
![image](https://user-images.githubusercontent.com/80167676/114285426-aac91a00-9a1c-11eb-816a-55f5fa7df3af.png)
- id: Campo autogenerado que identifica las marcas según el proveedor.
- marcas_id: id que representa la marca.
- proveedores_id: id que representa el proveedor.

marca tiene muchos modelos
