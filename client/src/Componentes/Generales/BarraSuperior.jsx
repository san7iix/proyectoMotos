import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { withRouter } from "react-router-dom";

class BarraSuperior extends Component {
    constructor(props){
        super(props)
        this.setState = {
            sesionIniciada : false
        }
        this.cerrarSesion = this.cerrarSesion.bind(this)
    }

    cerrarSesion(e){
        e.preventDefault()
        this.props.history.push("/loginUsuarios")
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/inicio">Inicio</Nav.Link>
                        <NavDropdown title="Bicicletas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Mis reservas</NavDropdown.Item>
                            <NavDropdown.Item href="bicicletas/catalogo">Ver catálogo</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Rutas" id="basic-nav-dropdown2">
                            <NavDropdown.Item href="#action/3.1">Mis rutas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Ver catálogo de rutas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link onClick={event=>this.cerrarSesion(event)}>Cerrar sesión</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(BarraSuperior);