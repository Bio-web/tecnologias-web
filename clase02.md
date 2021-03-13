---
layout: post
title: **Generalidades linux- parte 2**
author: Luisa Maria Zapara Saldarriaga
date: 2021-03-12
---

![image](https://user-images.githubusercontent.com/64289108/111040283-49536280-8400-11eb-85ff-cb21414e5797.png)

/etc/passwd
# Versión clásica para crear usuarios
sudo useradd pepito
# Pide los datos
sudo adduser fulanito
# cambiar password
sudo passwd fulanito
# volverse un usuario
sudo su - fulanito
# para limpiar la pantalla
clear
# revisar grupos
nano /etc/group
# crear grupos
sudo addgroup estudiantes
# Agregar usuario a grupo
sudo usermod -aG estudiantes cristian
#asignar el dueño del archivo o carpeta
sudo chown -R angel.profesores notas
