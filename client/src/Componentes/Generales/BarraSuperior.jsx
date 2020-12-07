import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'


class BarraSuperior extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            sesionIniciada: false
        }
        this.cerrarSesion = this.cerrarSesion.bind(this)
    }

    cerrarSesion(e) {
        e.preventDefault()
        localStorage.removeItem('logueado')
        this.props.history.push("/loginUsuarios")
        window.location.reload(true);
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link className="navbar-light navbar-nav nav-link" to="/inicio">Inicio</Link></Nav.Link>
                        <NavDropdown className="navbar-light navbar-nav nav-link" title="Bicicletas" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link className="navbar-light navbar-nav nav-link" to="/reservas">Mis reservas</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className="navbar-light navbar-nav nav-link" to="/bicicletas/catalogo">Ver catálogo</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link className="navbar-light navbar-nav nav-link" to="/usuario/rutas">Rutas</Link></Nav.Link>
                        <Nav.Link><Link className="navbar-light navbar-nav nav-link" to="/usuario/perfil">Perfil</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link onClick={event => this.cerrarSesion(event)}>Cerrar sesión</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(BarraSuperior);