---
layout: post
title: REACT - Docker Compose
author: Santiago Henao Gonzalez
date: 2021-09-11
---

## Continuación REACT

### Contexto

Usano el el contexto se puede pasar un estado(variable que es constantemente monitoreada por los componentes) a diferentes componentes. Recordar cuando se vaya a acceder a una variable del contexto hay que acceder correctamente a ella

```jsx
{!user.isLoggedIn ? (
  <Link to="/login" className="boton-login">
    <i className="fas fa-user"></i>
  </Link>
) : (
  <button className="boton-logout" onClick={() => cerrarSesion()}>
    <i className="fas fa-sign-out-alt"></i>
  </button>
)}
```
