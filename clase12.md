---
layout: post
title: REACT - Docker Compose
author: Santiago Henao Gonzalez
date: 2021-09-11
---

## Continuación REACT

### Contexto

Usano el el contexto se puede pasar un estado(variable que es constantemente monitoreada por los componentes) a diferentes componentes. Recordar cuando se vaya a acceder a una variable del contexto hay que acceder correctamente a ella.

```jsx
const { user, setUser } = useContext(UserContext);

return(
  {!user.isLoggedIn ? (
    <Link to="/login" className="boton-login">
      <i className="fas fa-user"></i>
    </Link>
  ) : (
    <button className="boton-logout" onClick={() => cerrarSesion()}>
      <i className="fas fa-sign-out-alt"></i>
    </button>
  )}
);
```
En el ejemplo de clase se observa como cuando se quiere acceder a la variable **isLoggedIn** hubo que acceder al objeto **user** primero. para ver que elemento html se agrega.

### UseHistory

Otro de los hooks que ofrece react y nos permite llevar a usuario a otras páginas.

```jsx
function Login() {
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = await login({
      username,
      password,
    });
    userInfo.isLoggedIn = true;

    console.log(userInfo);
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
    history.push("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="text-white" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
```

La función **handleSubmit** del componente **login** usa el hook history para llevar al usuario ala página principal luego de logearse.

### REACT-Bootstrap

Con el siguiente comando se puede instalar como tal la librería de REACT-Bootstrap en las dependencias del proyecto REACT.

```js
npm install react-bootstrap@next bootstrap@5.1.0
```

Usando un formulario de la librería se construyó en el ejemplo de clase el componente para ingresar nuevas películas, cabe aclarar que todos los componentes Reaact-Bootstrap usados deben ser importados.

```jsx
function GuardarPelicula() {
  const { id } = useParams();
  const [formData, setFormData] = useReducer(formReducer, {});

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/json/${id}.json`)
        .then((response) => response.json())
        .then((data) => setFormData(data));
    }
  }, [id]);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
      isEvent: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // guardarPelicula(formData, id).then(() => {
    //   // la pelicula se guardó exitosamente
    // });
  };

  return (
    <>
      <h1 className="mb-5">
        <i className="fas fa-film"></i> Guardar Pelicula
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupTitulo">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Título de la pelicula"
            name="titulo"
            onChange={handleChange}
            value={formData.titulo}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupSinopsis">
          <Form.Label>Sinopsis</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Sinopsis de la pelicula"
            name="sinopsis"
            onChange={handleChange}
            value={formData.sinopsis}
          />
        </Form.Group>
        <Row>
          <Form.Group
            as={Col}
            lg="4"
            className="mb-3"
            controlId="formGroupDirector"
          >
            <Form.Label>Director</Form.Label>
            <Form.Control
              type="text"
              placeholder="Director de la pelicula"
              name="director"
              onChange={handleChange}
              value={formData.director}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            sm="12"
            md="6"
            lg="4"
            className="mb-3"
            controlId="formGroupCalificacion"
          >
            <Form.Label>Calificación</Form.Label>
            <Form.Control
              type="number"
              step=".1"
              placeholder="Calificación de la pelicula"
              name="calificacion"
              onChange={handleChange}
              value={formData.calificacion}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGroupImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Poster de la pelicula"
              name="imagen"
              onChange={handleChange}
              value={formData.imagen}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-4" controlId="formGroupActores">
          <Form.Label>Actores</Form.Label>
          <Form.Control
            type="text"
            placeholder="Actores de la pelicula separados por coma"
            name="actores"
            onChange={handleChange}
            value={formData.actores}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar Pelicula
        </Button>
      </Form>
    </>
  );
}
```
También cabe resaltar que en este componente se uso el hook de REACT **useReducer** para poder ir actualizando el objeto que contenía la información del formulario cada que un campo cambiaba de valor.

### Local Storage

Se puede almacenar datos en el navegador, ya sea en Local que es común para todas laspestañas o en la sesión que sólo existe en su respectiva pestaña. Esto se usó en el componente Login del ejempo de clase.

## Patrones Arquitectónicos

Estándares establecidos para atacar problemas específicos en programación. Dicho de otra manera son soluciones abstractas y reutilizables para problemas frecuentes en la arquitectur de software.

### MVC

Es el patrón Modelo-Vista-Controlador que corresponden a las capas de datos, interfaz de usuario y la lógica. La idea es que la capa de vista no tengan acceso a los datos, y usar el control como intermediarios.

### Arquitectura de Microservicios

En el pasado en un único servidor se guaradab toda la aplicación, osea eran aplicaciones **Monoliticas** por lo que si había sobrecarga de peticiones a un servidor se debía usar más servidores para suplir la demanda.

Para mejorar la experiencia del usuario se ideo la llamada arquitectura de microservicios, en donde se divide una aplicación en diferentes aplicaciones e independientes que pueden diferir en lenguaje de programación y en base de datos. De manera que si algún microservicio falla, el reinicio de este es corto y se hace inperceptible la caída para los usuarios que no estuvieran haciendo transacciones con ese servicio. Esto también permite hacer más replicables los microservicios de manera que se pueden crear más servidores o maquinas virtuales de respaldo de respaldo.

## BackEnd con Docker-Compose

La parte del software quw tiene acceso a la base de datos, esta montado en servidores que reciben solicitudes del FrontEnd.

Se trabajo usando plantillas de docker-compose facilitadas por el profesordisponibles en el siguiente repositorio.

<https://github.com/afreydev/dev-docker-templates/>

### Protocolo HTTP

Protocolo basado en texto para comunicar servidores en donde se envia texto y la respuesta es texto. Ya se hizo una revisión de ese tema en la clase 11.

### SOAP

Siglas para simple object access protocol, es un protocolo de transferecia de datos algo antiguo. Difiere de JSON en que es más largo porque incluye más información.

### Restful

Patrón arquitectónico implementado aprovechando http. Usado para comunicación entre sistemas.

### JSON

Protocolo de bajo peso para intercambio de datos y de fácil lectura para humanos.

## Docker

Usando la maquina virtual de Vagrant estudiada en las primeras clases se usara docker para compartimentalizar el back end de la aplicación a desarrollar.

Usando el tutorial del sitio web de Docker se instala este en la maquina virtual montada con vagrant.

<https://docs.docker.com/engine/install/ubuntu/>

#### Docker Compose

Otra herramienta a usar en la creación de proyectos de BackEnd es Docker Compose que permite por medio de lenguaje declarativo crear un proyecto de Docker de manera que administra cosas como la instalación de paquetes requeridos a la hora de crear la imagen.

El tutorial para descargarlo se encuentra en:

<https://docs.docker.com/compose/install/>

Ya dentro de la maquina virtual y con el sigueinte comando, luego de entrar a al carpeta /vagrant donde debería estar el archivo de configuración del Docker Compose, se monta la aplicación de back-end.

```ubuntu
docker-compose up
```
