import React, { Component } from 'react';

class Login extends React.Component {
    render() {
        return (
          <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>login</title>
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
            <link rel="stylesheet" href="/static/css/styles.css" />
            {/* Favicon*/}
            <link rel="icon" type="image/x-icon" href="/static/assets/people.svg" />
            {/* Bootstrap icons*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container px-4 px-lg-5">
                {/* <a class="navbar-brand" href="#!"> <i class="bi-cart-fill me-1"></i> e-commerce</a> */}
                <a href="/index.html"><img src="/assets/icons/logo1.svg" width="150px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/templates/index.html"><i className="bi bi-house-fill" />Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/offers.html"><i className="bi bi-tags-fill" /> Ofertas </a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-cash-coin" /> Comprar </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Productos</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Favoritos</a></li>
                        <li><a className="dropdown-item" href="#!">Nuevos Articulos</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-dark" type="submit">Buscar</button>
                  </form>
                  <form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                      <i className="bi-people-fill me-1" />
                      Inicio Sesión
                      <span className="badge bg-dark text-white ms-1 rounded-pill" />
                    </button>
                    <button className="btn btn-outline-dark2" type="submit" />
                    <button className="btn btn-outline-dark" type="submit">
                      <i className="bi-heart-fill me-1" />
                      Favoritos
                      <span className="badge bg-dark text-white ms-1 rounded-pill">1</span>
                    </button>
                  </form>
                </div>
              </div>
            </nav>
            {/* Header*/}
            <main>
              <style dangerouslySetInnerHTML={{__html: "\n\t\t\t.formulario { \n\t\t  margin: 10px;\n\t\t  padding: 20px;\n\t\t  border-radius: 20px;\n\t\t  background:rgba(0, 0, 0, 0.72);\n\t\t  width: 100%;\n\t\t  height: 100%;\n\t\t  color: white;\n\t\t  text-decoration: border;\n\t\t  position: relative;\n\t\t  top: 0 ;\n\t\t  left: 0;\n\t\t  }\n\t\t  " }} />
              <form action className="formulario" id="formulario">
                {/* Grupo: Usuario */}
                <div className="formulario__grupo" id="grupo__usuario">
                  <h2><strong>Inicio de Sesion:</strong></h2>
                  <br />
                  <label htmlFor="usuario" className="formulario__label">Usuario</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="User" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">Debe ingresar el usuario registrado</p>
                </div>
                {/* Grupo: Contraseña */}
                <div className="formulario__grupo" id="grupo__password">
                  <br /><br /><br />
                  <label htmlFor="password" className="formulario__label">Contraseña</label>
                  <div className="formulario__grupo-input">
                    <input type="password" className="formulario__input" name="password" id="password" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">La contraseña debe tener de 4 a 12 caracteres.</p>
                </div>
                {/* Grupo: Terminos y Condiciones */}
                <div className="formulario__grupo" id="grupo__terminos">
                  <label className="formulario__label">
                    <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
                    Olvidó tu contraseña?
                  </label>
                </div>
                <div className="formulario__mensaje" id="formulario__mensaje">
                  <p><i className="fas fa-exclamation-triangle" /> <b>Error:</b> Por favor ingrese sus credenciales. </p>
                </div>
                <div className="formulario__grupo formulario__grupo-btn-enviar">
                  <button type="submit" className="formulario__btn">Ingresar</button>
                  <br />
                  <p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Bienvenido!</p>
                </div>
              </form>
            </main>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {/* Footer*/}
            <footer className="py-5 bg-dark">
              <div className="container"><p className="m-0 text-center text-white">Copyright © 2021 EQUIPO 3 GRUPO 17. TODOS LOS DERECHOS RESERVADOS.
                  ©  UNINORTE - MINTIC © | Email: info@phillips.com | Teléfono: (+57) 601 235 846.</p></div>
            </footer>
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
            {/* Scrips de Login de usuarios */}
          </div>
        );
      }
    };
 
export default Login;