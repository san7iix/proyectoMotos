import { Container } from 'react-bootstrap'
import React, { Component } from 'react';
import Login from './Componentes/Generales/Login'
import InicioUsuario from './Componentes/Generales/InicioUsuario'
import './app.css'
import BarraSuperior from './Componentes/Generales/BarraSuperior'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CatalogoBicicletas from './Componentes/Usuarios/CatalogoBicicletas';
import BicicletaDetalle from './Componentes/Usuarios/CatalogoBicicletas/BicicletaDetalle';
import MisReservas from './Componentes/Usuarios/Reservas/MisReservas';
import UsuarioRutas from './Componentes/Usuarios/Rutas/UsuarioRutas'
import PerfilUsuario from './Componentes/Usuarios/Perfil/PerfilUsuario';
import FormReserva from './Componentes/Usuarios/Reservas/FormReserva';
import InicioAdministrador from './Componentes/Administrador/InicioAdministrador';
import VistaRutas from './Componentes/Administrador/Rutas/VistaRutas';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logueado: localStorage.getItem('logueado'),
      isAdmin: localStorage.getItem('is_ad_min')
    }
  }

  render() {
    return (

      <div className="App">
        <Router>
          {this.state.logueado ? <BarraSuperior /> : false}
          <Container className="vh-100" fluid>
            <Switch>
              {/* Rutas para usuarios */}
              <Route exact path="/">
                {this.state.logueado ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route exact path="/bicicletas/catalogo">
                {!this.state.logueado ? <Redirect path="/" /> : <CatalogoBicicletas />}
              </Route>
              <Route exact path="/bicicletas/detalle/:id">
                {!this.state.logueado ? <Redirect path="/" /> : <BicicletaDetalle />}
              </Route>
              <Route exact path="/reservas">
                {!this.state.logueado ? <Redirect path="/" /> : <MisReservas />}
              </Route>
              <Route exact path="/usuario/rutas">
                {!this.state.logueado ? <Redirect path="/" /> : <UsuarioRutas />}
              </Route>
              <Route exact path="/usuario/perfil">
                {!this.state.logueado ? <Redirect path="/" /> : <PerfilUsuario />}
              </Route>
              <Route exact path="/usuario/reservar/:id">
                {!this.state.logueado ? <Redirect path="/" /> : <FormReserva />}
              </Route>
              {/* Rutas para usuarios */}
              {/* Rutas para administradores */}
              <Route exact path="/administrador/inicio">
                {this.state.isAdmin !== "1" ? <Redirect path="/" /> : <InicioAdministrador />}
              </Route>
              <Route exact path="/administrador/rutas">
                {this.state.isAdmin !== "1" ? <Redirect path="/" /> : <VistaRutas />}
              </Route>
              {/* Rutas para administradores */}
            </Switch>
          </Container>
        </Router>
      </div>
    );

  }
}

export default App;
