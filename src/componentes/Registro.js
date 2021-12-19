import React, { Component } from 'react';

class Registro extends React.Component {
    render() {
        return (
          <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Registro Usuarios</title>
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
            <link rel="stylesheet" href="/static/css/styles.css" />
            {/* Favicon*/}
            <link rel="icon" type="image/x-icon" href="/static/assets/user.svg" />
            {/* Bootstrap icons*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container px-4 px-lg-5">
                {/* <a class="navbar-brand" href="#!"> <i class="bi-cart-fill me-1"></i> e-commerce</a> */}
                <a href="/index.html"><img src="/public/assets/icons/logo1.svg" width="150px" /></a>
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
                {/* Grupo: Tipo de Documento de Identidad */}
                <div className="formulario__grupo" id="grupo__usuario">
                  <h2><strong>Registro de Usuarios:</strong></h2>
                  <br />
                  <label htmlFor="usuario" className="formulario__label"><strong>Tipo de Documento de Identidad</strong></label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="CC, CE o PA" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El cargo a registrar solo puede ser Usuario o Administrador.</p>
                </div>
                {/* Grupo: Documento de Identidad */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <br /><br /><br />
                  <label htmlFor="telefono" className="formulario__label">Documento de Identidad</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder={1033000000} />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El teléfono solo puede contener números y el maximo son 14 dígitos.</p>
                </div>
                {/* Grupo: Fecha de expedicion */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <label htmlFor="telefono" className="formulario__label">Fecha de Expedicion</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder="AAAA/MM/DD" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El teléfono solo puede contener números y el maximo son 14 dígitos.</p>
                </div>
                {/* Grupo: Nombre Completo */}
                <div className="formulario__grupo" id="grupo__nombre">
                  <label htmlFor="nombre" className="formulario__label">Nombre Completo</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Nombre Apellido" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El nombre solo puede contener letras.</p>
                </div>
                {/* Grupo: Fecha de Nacimiento */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <label htmlFor="telefono" className="formulario__label">Fecha de Nacimiento</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder="AAAA/MM/DD" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El teléfono solo puede contener números y el maximo son 14 dígitos.</p>
                </div>
                {/* Grupo: Usuario */}
                <div className="formulario__grupo" id="grupo__usuario">
                  <label htmlFor="usuario" className="formulario__label"><strong>Usuario</strong></label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="Nickname" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El cargo a registrar solo puede ser Usuario o Administrador.</p>
                </div>
                {/* Grupo: Contraseña */}
                <div className="formulario__grupo" id="grupo__password">
                  <label htmlFor="password" className="formulario__label">Contraseña</label>
                  <div className="formulario__grupo-input">
                    <input type="password" className="formulario__input" name="password" id="password" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
                </div>
                {/* Grupo: Contraseña 2 */}
                <div className="formulario__grupo" id="grupo__password2">
                  <label htmlFor="password2" className="formulario__label">Repetir Contraseña</label>
                  <div className="formulario__grupo-input">
                    <input type="password" className="formulario__input" name="password2" id="password2" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
                </div>
                {/* Grupo: Correo Electronico */}
                <div className="formulario__grupo" id="grupo__correo">
                  <label htmlFor="correo" className="formulario__label">Correo Electrónico</label>
                  <div className="formulario__grupo-input">
                    <input type="email" className="formulario__input" name="correo" id="correo" placeholder="correo@dominio.com" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El correo solo puede contener letras, números, puntos, guiones y guion bajo.</p>
                </div>
                {/* Grupo: Teléfono */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <label htmlFor="telefono" className="formulario__label">Teléfono</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder={6014567891} />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El teléfono solo puede contener números y el maximo son 14 dígitos.</p>
                </div>
                {/* Grupo: Terminos y Condiciones */}
                <div className="formulario__grupo" id="grupo__terminos">
                  <label className="formulario__label">
                    <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
                    Acepto los Terminos y Condiciones
                  </label>
                </div>
                <div className="formulario__mensaje" id="formulario__mensaje">
                  <p><i className="fas fa-exclamation-triangle" /> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                </div>
                <div className="formulario__grupo formulario__grupo-btn-enviar">
                  <button type="submit" className="formulario__btn">Registrar</button>
                  <p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Registro enviado exitosamente!</p>
                  <br />
                </div>
              </form>
            </main>
            <br /><br /><br /><br /><br /><br /><br />
            {/* Footer*/}
            <footer className="py-5 bg-dark">
              <div className="container"><p className="m-0 text-center text-white">Copyright © 2021 EQUIPO 3 GRUPO 17. TODOS LOS DERECHOS RESERVADOS.
                  ©  UNINORTE - MINTIC © | Email: info@phillips.com | Teléfono: (+57) 601 235 846.</p></div>
            </footer>
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
            {/* Scrips del Registro de usuarios */}
          </div>
        );
      }
};
 
export default Registro;