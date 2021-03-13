---
layout: post
title: **Generalidades linux- parte 2**
author: Luisa Maria Zapara Saldarriaga
date: 2021-03-12
---

**Modelo OSI**
Es el modelo de interconexión de sistemas abiertos, el cual, tiene por objetivo comunicar la unidad de datos con el nivelo capa.

![image](https://user-images.githubusercontent.com/64289108/111040283-49536280-8400-11eb-85ff-cb21414e5797.png)

**TCP**: Protocolo orientado a la conexión
**UDP**= Protocolo asíncrono **no** orientado a la conexión

## Generalidades de los usuarios:

- Conocer los usuarios se debe colocar el comando **nano /etc/passwd** 
- Agregar o añadir usuario con **sudo useradd new_user**
- Crea una carpeta incluyendo alguna información que requiere un password **sudo passwd new_user** como se muestra en la siguiente imagen.
 
![image](https://user-images.githubusercontent.com/64289042/111040738-84569580-8402-11eb-9242-2f0bec5eee51.png)

- Cambiar password con **sudo passwd new_user** 
- Al entrar como root puedo cambiarme a otro un usuario con **sudo su - new_user**. Tener en cuenta que desde este usuario es necesario conocer el **password** para convertirse de nuevo en el usuario **vagrant**, de lo contrario con el comando **exit** puede retornar a dicho usuario.
- Se puede eliminar un usuario con **sudo deluser new_user**

### Grupos
- Para crear un nuevo grupo **sudo addgroup new_group** 
- Para revisar los grupos existentes se hace con **nano /etc/group**
- Para agregrar un asuario a un determinado grupo es con **sudo usermod -aG grugo usuario**
- Existen permisos para los grupos en bloques como se desgloza a continuación:
![image](https://user-images.githubusercontent.com/64289042/111041376-e4027000-8405-11eb-8074-0650de186740.png)
- Además para revisar los permisos que se tiene en cada directorio en un respectivo grupo se puede ver con el comando **ls -l** obteniendo lo siguiente:
![image](https://user-images.githubusercontent.com/64289042/111041528-8de1fc80-8406-11eb-815e-c532a1b28c70.png)

- Para asignar los permisos requeridos a una carpeta se hace con la siguiente línea: **sudo chown -R usuario.grupo carpeta** 
- Para crear archivos dentro de un archivo donde se tiene acceso se puede hacer con: **echo "New_edition" namefile.txt** y para visualizar dicha edición es: **cat namefile.txt** 
- Para modificar los accesos de un directorio,archivo o folders es posible con **chmod ±X archivo** o **chmod 754 archivo** estando en el ambiente vagrant.
Donde X puede ser : 
 Read(r) 
 Write (w)
 Ejecution(x)
- Para aplicar permisos recursivamente a folders se puede con **chmod -R 754 myapp**

## Instalar/Desinstalar 
- **sudo apt update:** Para refrescar la base de datos de paquetes en ubuntu
- **apt search name_paquete** Busca paquetes
- **sudo apt install name_paquete:** Instalar paquetes
- **name name_paquete:** Observa el contenido de name_paquete
- **sudo apt remove neofetch:** desinstalar name_paquete

## Servicios
Es la creación de una red de trabajo en un ordenador
**¿Qué es un puerto?**
- Es una interfaz a través de la cual se pueden enviar y recibir los diferentes tipos de datos.
**DNS:** Servicio que se encarga de traducir a IP
**nslookup:** Servicio para consultar DNS

- **systemctl status name_paquete** Sirve para ver si el servicio está encendido
- **sudo systemctl start apache2** Enciende el servicio
- **sudo systemctl stop name_paquete** Se utiliza para pagar el servicio
- **sudo systemctl disable name_paquete:**  Cada vez que la máquina comience, el servicio deberá de activar manualmente
- **sudo systemctl enable name_paquete:** Cada vez que la máquina comience, el servicio ya estará en funcionamiento

**¿Qué es apache?:** Apache es un servidor web de de código abierto, multiplataforma y gratuito. Que sirve para desplegar páginas web o programas.


## Editores de texto
- **nano:** Editor de texto por consola
- El archivo creado por nano se puede editor en modo **edición** Y las acciones que muestra en pantalla pueden ser accedidas a partir el comando **ctrl + letra indicada**
- 


**Anexos**
Con el comando **clear** podemos vaciar o limpar la pantalla de la consola
Para eliminar una carpeta en home se hace de la siguiente con **rmdir -rf /home/"${username}"** 
**apt:** Utilidad para actualizar,instalar o remover basados en Ubuntu
**yum:** Buscar todos los archivos basados en red hat
**pacman:** Utilidades basadas en hart Linux 

