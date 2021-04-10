**Trabajo 01**

**Integrantes:**

- Santiago Henao
- Santiago Gutierrez Pérez
- Angie Dahiana Vargas Serna
- Luisa María Zapata Saldarriaga 

1. Resumen de problema a solucionar (de nuevo)
Logging 

**usuarios**
-  id_usuarios
-  nombre_usuario
-  passUsario 
-
**permisos**
- idPermisos
- Tipo Permiso



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

3. Diagrama entidad relación construido usando un software de diseño
como MySQL Workbench. 
3. Diccionario de datos: Definición de tablas y campos (nombre, tipo de dato), explicación del mismo y su necesidad en el sistema de información.
