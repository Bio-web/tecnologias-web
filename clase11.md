
# REACT
<https://create-react-app.dev/>

```js 
npx create-react-app my-app
```

Para ejecutar proyecto, primero se instalan las dependencias

```js
npm install
npm start
```

- index.js inicializa todo en react, renderiza App (componente principal)
- Permite utilizar Javascript como HTML, **JSX**: Javascript as XML
- Se trabaja Componentes Header y Sidenav
## BOOTSTRAP 

<https://getbootstrap.com/docs/5.1/getting-started/download/>

- Importar en .html primero estilos de Bootstrap y posteriormente, los de la hoja de estilos de CSS, para que esta última tenga prevalencia.
- Si se añade **!important** en css, no importa en qué orden se haya aplicado el estilo en el .html, siempre tendrá prevalencia.

## API REST
Surgieron las **API rest**, conectan varios dispositivos desde un servidor web que contiene el backend de la aplicación, tiene varios servicios que esta comunicado por medio de formato json.  En el body va un objeto JSON al igual que  en el body de la respuesta va en el mismo formato. 
Las aplicaciones tienen internamente componentes WEB, la api va responder un json con las componentes.
Al mismo tiempo se puede realizar varias peticiones. 

En estos momentos, existe la tendencia de IOT(Internet de las cosas), de la misma forma los servidores han crecido muchísimo, que se encuentran en la nube: microsft, google, amazon, y ellos se encargan de la memoria, los discos duros, dependiendo del capital que se tenga.

Estudiar: Arquictetura **JAMSTACK **

# REST (Representational state transfer)

Es una arquictetura,  conjunto de caracteristicas y reglas que existen dentro de una aplicación software que permite la interacción entre él y otros elementos, como otro software o hardware. Son como interface para que los clientes se comuniquen.

* Es una arquictetura de software para el desarrollo de aplicaciones web y servicios
* **Interface uniforme** 
* **Separación Cliente/ Servidor**
* **Stateless**: En informática, un protocolo sin estado es un protocolo de comunicaciones que trata cada petición como una transacción independiente que no tiene relación con cualquier solicitud anterior
* **Cacheable**: se puede guardar en chache 
* **En capas**
* **Agilidad y simpleza**

**URI**
es una secuencia de caracteres que idenfica un recurso físico o abstracto

**URL**
Es un subconjunto de URI que identifica un recurso y explica como debo acceder a ese recurso 

**HTTP**
Es el protocolo que los navegadores utilizan para acceder a documentos hipertextuales en internet.
Un servicio REST que utiliza HTTP como protocolo de comunicación es conocido como RESTful API (Servicio)

API de prueba,para interactuar : https://reqres.in/

**Anatomia de una petición REST**

**Método** **URI del recurso**
1. **GET**: Consulta de datos, no tiene un cuerpo.
- *sucess*: 200 ok
- *failure*: 404 not found 
2. **POST**: cambiar una accion, se envía un JSON.  Crea un nuevo recuerso y lo agrega a la colección
- *sucess*: 201 ok
- *failure*: 401 Unauthorized, 409 conflict ,404 not found 
3. **PUT**: actualizar, un único recurso basado en ID. Modifica todo 
- *sucess*: 200 ok
- *failure*: 401 Unauthorized,404 not found, 405 Method not allowed 
4. **PATCH**: Modifica solo una parte, responde de manera similar al PUT.
- *sucess*: 200 ok
- *failure*: 401 Unauthorized,404 not found, 405 Method not allowed
5. **DELETE**: Elimina un único recurso basado en ID.
- *sucess*: 200 ok
- *failure*: 401 Unauthorized,404 not found
6. **OPTIONS**: Obtiene las opciones disponibles para el recurso
- *sucess*: 200 ok
7. **HEAD**: Obtiene la cabecera de respuestas del recurso 
- *sucess*: 200 ok
- *failure*:404 not found

**postman**: es un cliente de aplicaciones REST, es gratiutad, nos ayuda hacer una petición con el método que queramos

**HTTP response status codes**
1. Respuestas informativas (100–199),
2. Respuestas satisfactorias (200–299)
3. Redirecciones (300–399),
4. Errores de los clientes (400–499),
4. Errores de los servidores (500–599)


decargar libreria react 
para crear rutas en la aplicación
```js
npm install react-router-dom
```

En el siguiente enlace encontrará un ejemplo de películas usando react :
