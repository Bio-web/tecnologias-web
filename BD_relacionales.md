---
layout: post
title: Base de datos - Inventario de dispositivos médicos.
author: Santiago Henao Gonzalez, Santiago Gutierrez Pérez, Angie Dahiana Vargas Serna y Luisa María Zapata Saldarriaga 
date: 2021-04-10
---

# introducción

Las instituciones hospitalarias requieren mantener un control estricto de los dispositivos médicos, por lo tanto se debe tener almacenada la información respecto a estos de manera ordenada y concisa, para solventar este problema se definen bases de datos que contienen los datos mas relevantes de cada dispositivo. Esto resulta útil para definir agendas de mantenimieno preventivo, control metrológico y tecnovigilancia, tambien para tener fácil acceso a la información de suministros ofrecidos por los proveedores en caso de requerir algún tipo de servicio.

# Metodología
Para el diseño de la base de datos que se presenta a continuación se tuvieron en cuenta dos criterios:
- Acceso por usuario según su función en la compañia: aquí se asignan los posibles permisos que puede adquirir un usuario, estos varian desde Consultar, Agregar y Eliminar.
- Inventario: Aquí se almacena la información de cada dispositivo, detallando su marca, modelo, proveedor, tipo de funcionamiento, ubicación en el hospital, etc.
 
Una vez definidos los campos, las tablas y las relaciones adecuadas se procedió a estructurar los diagramas de diseño teniendo presente el tipo de variable de cada campo, las claves primarias y las relaciones entre tablas, luego se exportó a .sql y con Docker se creo una base de datos, en ella se restaura la base de datos desde el archivo .sql y se confirmó las relaciones entre tablas y su adecuado funcionamiento.


## Diagrama de diseño: Inventarios.

![image](https://user-images.githubusercontent.com/80167676/114286082-5d9b7700-9a21-11eb-940f-0c2e604fe60d.png)  

## Diagrama de diseño: Logging.

![image](https://user-images.githubusercontent.com/80167676/114286102-7ad04580-9a21-11eb-8977-b27caeee9013.png)  

Para la verificación del funcionamiento de las relaciones se ingresaron datos de una bomba de infusión marca Hospira y modelo PLUM A+. A continuación, se presenta el resultado de esta prueba.

![image](https://user-images.githubusercontent.com/80167676/114286624-1794e200-9a26-11eb-9485-0f5f20f0219b.png)  

Con base en esta imagen se comprueba que la base de datos permite ingresar nuevos dispositivos cumpliendo completamente con las relaciones establecidas, también se comprobó que cuando una marca o modelo no existe no es posible ingresar un dispositivo, y se debe de llenar previamente este campo.

---
# Diccionario de datos.

Estas tres tablas se encargan del login a la aplicación de inventarios.

## Usuarios
Esta tabla contiene la información de los usuarios con acceso al inventario.

![image](https://user-images.githubusercontent.com/80167676/114285314-ea433680-9a1b-11eb-86cc-17396284bec9.png)  

- id: Campo autogenerado que identifica a cada usuario.
- nombreUsuario: Nombre completo del usuario.
- passUsuario: Contraseña de acceso al sistema.

## Permisos
Esta tabla contiene la información de los permisos que puede tener un usuario.

![image](https://user-images.githubusercontent.com/80167676/114285366-31312c00-9a1c-11eb-92e7-1035aa856272.png)  

- id: Campo autogenerado que identifica cada tipo de permiso.
- tipoPermiso: Nombre del permiso(Agregar, Eliminar y Consultar).

## Permisos por usuario
Relaciona a los usuarios con los permisos

![image](https://user-images.githubusercontent.com/80167676/114285370-3aba9400-9a1c-11eb-8766-a691866aff52.png)  

- id: Campo autogenerado que identifica el permiso por usuario.
- usuarios_id: Usuario al que se le asigna un permiso
- permiso_id: Tipo de permiso a asignar.


---

<h2><center>Estas tablas representan la estructura de la base de datos.</center></h2>


## Inventario
Tabla principal donde se recopila información de los diferentes equipos médicos.

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

## Marcas
Tabla que contiene las marcas de los dispositivos médicos.

![image](https://user-images.githubusercontent.com/80167676/114285387-54f47200-9a1c-11eb-9b4a-832ed70da6ce.png)  

- id: Campo autogenerado que identifica la marca.
- Nombre: Nombre de la marca.

## Modelos
Tabla que contiene los modelos de los dispositivos médicos.

![image](https://user-images.githubusercontent.com/80167676/114285402-705f7d00-9a1c-11eb-8538-ef70dddaa954.png)  

- id: Campo autogenerado que identifica el modelo.
- idMarcas: id que representa a una marca.
- Modelo: Nombre del modelo.


## Tipo de riesgo
Tabla que contiene los tipos de riesgo según la legistlación Colombiana.

![image](https://user-images.githubusercontent.com/80167676/114285409-7bb2a880-9a1c-11eb-8def-900998d66f26.png)  

- id: Campo autogenerado que identifica el tipo de riesgo.
- Nombre: Categoria según la legistlación Colombiana.

## Tipo de funcionamiento
Tabla que contiene el tipo de funcionamiento de los dispositivos médicos.

![image](https://user-images.githubusercontent.com/80167676/114285411-82412000-9a1c-11eb-8667-9a993b57f718.png)  

- id: Campo autogenerado que identifica el tipo de funcionamiento.
- Nombre: representa el tipo del funcionamiento(Eléctrico, mecánico y electromecánico).

## Ubicacion dispositivo
Tabla que contiene la ubicación de los dispositivos, según el piso y la habitación.

![image](https://user-images.githubusercontent.com/80167676/114285415-8a995b00-9a1c-11eb-9c7e-5248abc45c63.png)  

- id: Campo autogenerado que identifica la ubicacion del dispositivo.
- Piso: Piso donde esta el dispositivo
- Habitacion: Habitación en donde esta el dispositivo.

## Proveedores
Tabla que tiene información de los proveedores

![image](https://user-images.githubusercontent.com/80167676/114285417-938a2c80-9a1c-11eb-9616-f1896159f332.png)  

- id: Campo autogenerado que identifica el proveedor de los dispositivos.
- Nombre: Nombre de la empresa proveedora de servicios y equipos.
- Telefono: Número de contacto del proveedor.
- Direccion: Sede de venta del proveedor.
- Email: Correo electrónico del contacto.

## Marcas proveedor
Tabla que relaciona las marcas y los proveedores.

![image](https://user-images.githubusercontent.com/80167676/114285426-aac91a00-9a1c-11eb-816a-55f5fa7df3af.png)

- id: Campo autogenerado que identifica las marcas según el proveedor.
- marcas_id: id que representa la marca.
- proveedores_id: id que representa el proveedor.


# Conclusiones
- El uso de MySQL Workbench permite diseñar estructuras de bases de datos de manera fácil e intuitiva, permitiendo construir una base de datos sin necesidad de código.
- Las relaciones entre tablas permiten un diseño limpio y eficiente al momento de asociar varias entidades.
- Las bases de datos permiten relacionar información de cualquier entidad, como es el caso de los dispositivos médicos, por lo tanto esto resulta útil en el campo de la ingeniería clínica en donde se puede manejar un gran flujo de datos que deben de estar bien organizados y vigilados.


# Referencias
1. Hospira PLUM A+, System Operating Manual. Tomado de:[https://www.icumed.com/media/9566/plum_aplus_with_hospira_mednet_software.pdf]
2. Documentación oficial de MySQL Workbench. [https://dev.mysql.com/doc/workbench/en/]

