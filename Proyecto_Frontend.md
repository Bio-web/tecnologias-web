---
layout: post
title: Frontend - Inventario de dispositivos médicos.
author: Santiago Henao González, Santiago Gutiérrez Pérez, Angie Dahiana Vargas Serna y Luisa María Zapata Saldarriaga 
date: 2021-10-02
---

# Introducción
Las instituciones hospitalarias requieren mantener un control estricto de los dispositivos médicos, por lo tanto se debe tener almacenada la información respecto a estos de manera ordenada y concisa, para solventar este problema se definen bases de datos que contienen los datos mas relevantes de cada dispositivo. Esto resulta útil para definir agendas de mantenimieno preventivo, control metrológico y tecnovigilancia, tambien para tener fácil acceso a la información de suministros ofrecidos por los proveedores en caso de requerir algún tipo de servicio. 

En este trabajo se busca presentar una alternativa para al almacenamiento y consulta de los datos del inventario de un hospital de forma interactiva, para esto se presenta un diseño de una página web basada en tecnologias actuales tales como React, Bootstrap, html, JavaScript y css.

# Metodología
El diseño general de la página fue estructurado de acuerdo a los contenidos vistos en clase, se uso la librería de desarrollo React para generar la aplicación, inicialmente se dividió el contenido en componentes, estos son:


## Layout
Este documento contiene la distribución de los componentes de la página, según la ruta en la que se encuentre el navegador, tambien tiene en cuenta si el usuario se encuentra dentro del sistema, en caso de que el usuario no este autenticado solo mostrara la pantalla de Login y de Footer, una vez que se ingrese empezará a mostrar el contenido de la barra de navegacion y los demas componentes, el código de este Layour es el siguiente:

```js
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route } from "react-router-dom";

function Layout(props) {
    const userStorage = JSON.parse(localStorage.getItem("user"));

    return(
        <>
            {userStorage ? (
                <Header></Header>) : (null)}
            <main className = "contenedor">
                <Route {...props}/>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;
```

En donde la variable `userStorage` guarda el estado de conexión del usuario, el cual pregunta su estado booleano y muestra o no el `Header`.

## Login
En esta pantalla se le pregunta al usuario su información de acceso a la aplicación, y cuando se ingresan las credenciales ingresa a la pantalla principal.

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/134785058-b9d4d428-a2ac-439d-b9f5-cb90db3a416c.png"/>
</p>


## Header
Esta es la barra superior de la página en donde se muestra los botones de navegación una vez el usuario se haya autenticado con su usuario y contraseña, aqui tambien podrá cerrar sesión.
<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/134784829-97062c7e-a9c8-4935-abce-b4bcc03f809c.png"/>
</p>

## Footer
El footer es la parte inferior de la página web, en la que se incluye información de contacto, redes sociales o enlaces a textos legales, este componente se carga siempre en todas las pantallas.

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/134785026-88a083cb-eeac-43c4-8325-a5f69aa2b21c.png"/>
</p>

## Principal
Esta es la pantalla inicial de la aplicación cuando se ingresa correctamente el usuario y contraseña, aquí se visualizan imagenes de los productos y servicios que se ofrecen en el hospital.

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/134785097-84f4949b-7b5f-4f86-ad0e-4210de00726e.png"/>
</p>

## Existencias
Muestra en una tabla los dispositivos con existencias en el inventario, su marca, referencia y cantidad.

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/134785338-9072d67b-1458-4ec5-9921-96c6ea398663.png"/>
</p>

### Existencia
Al dar click en cualquiera de los dispositivos listados, se ingresa a una nueva página en donde se muestra una descripción del dispositivo y una imagen, además hay un botón de para volver atras.

<p align="center">
  <img src="https://user-images.githubusercontent.com/39310306/134785247-0b4ac80f-af18-49ed-b34a-dc34b5d78760.png"/>
</p>



## Proveedores
Aquí se muestra la información de contacto de los proveedores de los equipos existentes en el inventario.

<p align="center">
  <img src="![image](https://user-images.githubusercontent.com/64289042/135723867-23871061-b2d0-49d3-b28b-756f6948a70f.png)"/>
</p>
### Proveedor
En esta parte se muestra la información exclusiva de cada proveedor.

<p align="center">
  <img src="![image](https://user-images.githubusercontent.com/64289042/135723886-1efadb2f-3a0a-415c-b8e5-9aed74765ae0.png)"/>
</p>
## Propuesta de microservicios
La página idealmente contaría con diferentes microservicios, uno para el login el cual tendría una conexión al servidor y podrá recibir peticiones independientes a la carga de la página principal, por ejemplo si ya hay usuarios logeados y se recibe un gran flujo de nuevos usuarios, los usuarios ya conectados no se veran afectados porque el servicio de login es independiente del servicio principal.

Una vez logeado en el sistema, se tiene un microservicio para Existencias, en donde se pueden consultar la cantidad y datos de los dispositivos de manera independiente, permitiendo el buen funcionamiento de los demas componentes, de igual manera se tiene otro microservicio para proveedores que cumple la misma funcionalidad.

## Repositorio
El código de este proyecto se encuentra disponible en el siguiente repositorio: [Inventario](https://github.com/Bio-web/Inventario)

# Conclusiones
- Las tecnologías web permiten un diseño de aplicaciones rápidas, estables y altamente personalizables.
- Bootstrap es un framework que facilita el diseño de aplicaciones web al incorporar una gran cantidad de hojas de estilos y elementos HTML.
- Las librerías de código abierto como React tienen disponibles disponibles una amplia gama de recursos debido a las grandes comunidades que las soportan, lo que permite encontrar soluciones a problemas comúnes de manera ágil.
- El enfoque de microservicios permite que los usuarios tengan una experiencia más agradable en el sitio debido a que se hace imperceptible la caida para los usuarios que no esten realizando transacciones con un servicio en específico.


# Referencias bibliográficas 
1. Hospira PLUM A+, System Operating Manual. Tomado de: [Manual de usuario](https://www.icumed.com/media/9566/plum_aplus_with_hospira_mednet_software.pdf]https://www.icumed.com/media/9566/plum_aplus_with_hospira_mednet_software.pdf)

