import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import UsuarioAPI from '../../api_interact/Usuario/UsuarioAPI'
import { withRouter } from "react-router-dom";

class Registro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            direccion: '',
            telefono: '',
            mensaje: ''
        }
        this.registrar = this.registrar.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    registrar() {
        if (this.state.email === '' || this.state.password === '' || this.state.direccion === '' || this.state.direccion === '' || this.state.telefono === '' || this.state.nombre === '' || this.state.apellido === '') {
            this.setState({
                mensaje: 'Los campos no pueden ser vacíos'
            })
            return
        }
        UsuarioAPI.registrarUsuario(this.state)
        .then(res=>{
            console.log(res)
            if(res.status){
                alert(res.message)
                this.props.history.push("/")
            }
        })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Row className="justify-content-center align-items-center vh-100">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Registro</Card.Title>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Introduzca su nombre" onChange={this.handleChange} name="nombre" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Introduzca su Apellido" onChange={this.handleChange} name="apellido" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Introduzca su email" onChange={this.handleChange} name="email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" name="password" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicAddress">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control type="text" placeholder="Introduzca su dirección" onChange={this.handleChange} name="direccion" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type="text" placeholder="Introduzca su número de teléfono" onChange={this.handleChange} name="telefono" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>


                                <p>{this.state.mensaje}</p>
                                <Button variant="primary" onClick={this.registrar} >
                                    Registrarme
                                    </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default withRouter(Registro);