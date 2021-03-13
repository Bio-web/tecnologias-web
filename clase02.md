---
layout: post
title: **Generalidades linux- parte 2**
author: Luisa Maria Zapara Saldarriaga
date: 2021-03-12
---

Con el comando **clear** podemos vaciar o limpar la pantalla de la consola

**Modelo OSI**
Es el modelo de interconexión de sistemas abiertos, el cual, tiene por objetivo comunicar la unidad de datos con el nivelo capa.

![image](https://user-images.githubusercontent.com/64289108/111040283-49536280-8400-11eb-85ff-cb21414e5797.png)

**TCP**: Protocolo orientado a la conexión
**UDP**= Protocolo asíncrono **no** orientado a la conexión

# Generalidades de los usuarios:

- Conocer los usuarios se debe colocar el comando **nano /etc/passwd** 
- Agregar o añadir **sudo useradd new_user**
- Crea una carpeta incluyendo alguna información que requiere un password **sudo passwd new_user** como se muestra en la siguiente imagen.
- 
![image](https://user-images.githubusercontent.com/64289042/111040738-84569580-8402-11eb-9242-2f0bec5eee51.png)
- Cambiar password con **sudo passwd new_user** 
- Al entrar como root puedo cambiarme a otro un usuario con **sudo su - new_user**. Tener en cuenta que desde este usuario es necesario conocer el **password** para convertirse de nuevo en el usuario **vagrant**, de lo contrario con el comando **exit** puede retornar a dicho usuario.
- Se puede eliminar un usuario con **sudo deluser new_user**

# Grupos
- 


# revisar grupos
nano /etc/group
# crear grupos
sudo addgroup estudiantes
# Agregar usuario a grupo
sudo usermod -aG estudiantes cristian
#asignar el dueño del archivo o carpeta
sudo chown -R angel.profesores notas
