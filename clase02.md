---
layout: post
title: **Generalidades linux- parte 2**
author: Luisa Maria Zapara Saldarriaga
date: 2021-03-12
---
**EXTRAS**
Con el comando **clear** podemos vaciar o limpar la pantalla de la consola
Para eliminar una carpeta en home se hace de la siguiente con **rmdir -rf /home/"${username}"** 

**Modelo OSI**
Es el modelo de interconexión de sistemas abiertos, el cual, tiene por objetivo comunicar la unidad de datos con el nivelo capa.

![image](https://user-images.githubusercontent.com/64289108/111040283-49536280-8400-11eb-85ff-cb21414e5797.png)

**TCP**: Protocolo orientado a la conexión
**UDP**= Protocolo asíncrono **no** orientado a la conexión

# Generalidades de los usuarios:

- Conocer los usuarios se debe colocar el comando **nano /etc/passwd** 
- Agregar o añadir usuario con **sudo useradd new_user**
- Crea una carpeta incluyendo alguna información que requiere un password **sudo passwd new_user** como se muestra en la siguiente imagen.
 
![image](https://user-images.githubusercontent.com/64289042/111040738-84569580-8402-11eb-9242-2f0bec5eee51.png)
- Cambiar password con **sudo passwd new_user** 
- Al entrar como root puedo cambiarme a otro un usuario con **sudo su - new_user**. Tener en cuenta que desde este usuario es necesario conocer el **password** para convertirse de nuevo en el usuario **vagrant**, de lo contrario con el comando **exit** puede retornar a dicho usuario.
- Se puede eliminar un usuario con **sudo deluser new_user**

# Grupos
- Para crear un nuevo grupo **sudo addgroup new_group** 
- Para revisar los grupos existentes se hace con **nano /etc/group**
- Para agregrar un asuario a un determinado grupo es con **sudo usermod -aG grugo usuario**
- Existen permisos para los grupos en bloques como se desgloza a continuación:
![image](https://user-images.githubusercontent.com/64289042/111041376-e4027000-8405-11eb-8074-0650de186740.png)
- Además para revisar los permisos que se tiene en cada directorio en un respectivo grupo se puede ver con el comando **ls -l** obteniendo lo siguiente:
![image](https://user-images.githubusercontent.com/64289042/111041528-8de1fc80-8406-11eb-815e-c532a1b28c70.png)

- Para asignar los permisos requeridos a una carpeta se hace con **sudo chown -R usuario.grupo carpeta** 
- Para crear archivos dentro de un archivo donde se tiene acceso se puede hacer con **echo "New_edition" namefile.txt** y para visualizar dicha edición es **cat namefile.txt** 
- Para modificar los accesos de un directorio es posible con **chmod ±X archivo** o **chmod 754 archivo** estando en el ambiente vagrant.
Donde X puede ser : 
- Read(r) 
- Write (w)
- Ejecution(x(

# aplicando permisos recursivamente a folders
chmod -R 754 myapp

# refrescar la base de datos de paquetes en ubuntu
sudo apt update
# buscar paquetes
apt search neofetch
# instalar
sudo apt install neofetch
# desinstalar
sudo apt remove neofetch
# instalar apache
sudo apt install apache2
# ver si el servicio está encendido
systemctl status apache2
# apagar el servicio de apache
sudo systemctl stop apache2
# prender el servicio
sudo systemctl start apache2


