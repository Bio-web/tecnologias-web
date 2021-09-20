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
