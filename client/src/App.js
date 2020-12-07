import { Container } from 'react-bootstrap'
import React, { Component } from 'react';
import Login from './Componentes/Generales/Login'
import InicioUsuario from './Componentes/Generales/InicioUsuario'
import './app.css'
import BarraSuperior from './Componentes/Generales/BarraSuperior'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CatalogoBicicletas from './Componentes/Usuarios/CatalogoBicicletas';
import BicicletaDetalle from './Componentes/Usuarios/CatalogoBicicletas/BicicletaDetalle';
import MisReservas from './Componentes/Usuarios/Reservas/MisReservas';
import UsuarioRutas from './Componentes/Usuarios/Rutas/UsuarioRutas'
import PerfilUsuario from './Componentes/Usuarios/Perfil/PerfilUsuario';
import FormReserva from './Componentes/Usuarios/Reservas/FormReserva';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logueado: localStorage.getItem('logueado')
    }
  }

  render() {
    return (

      <div className="App">
        <Router>
          {this.state.logueado ? <BarraSuperior /> : false}
          <Container className="vh-100" fluid>
            <Switch>
              <Route path="/loginUsuarios" exact>
                <Login />
              </Route>
              <Route path="/inicio" exact component={InicioUsuario} />
              <Route path="/bicicletas/catalogo" exact component={CatalogoBicicletas} />
              <Route path="/bicicletas/detalle/:id" exact component={BicicletaDetalle} />
              <Route path="/reservas" exact component={MisReservas} />
              <Route path="/usuario/rutas" exact component={UsuarioRutas} />
              <Route path="/usuario/perfil" exact component={PerfilUsuario} />
              <Route path="/usuario/reservar/:id" exact component={ FormReserva } />
            </Switch>
          </Container>
        </Router>
      </div>
    );

  }
}

export default App;
