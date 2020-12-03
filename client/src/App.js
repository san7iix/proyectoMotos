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

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logueado: true
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
            </Switch>
          </Container>
        </Router>
      </div>
    );

  }
}

export default App;
