import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import UsuarioAPI from '../../api_interact/Usuario/UsuarioAPI'
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            mensaje: ''
        }
        this.loguear = this.loguear.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    loguear() {
        if(this.state.email === '' || this.state.password ===''){
            this.setState({
                mensaje: 'Los campos no pueden ser vacíos'
            })
            return
        }
        UsuarioAPI.loguear(this.state)
            .then((data) => {
                if (data.result) {
                    localStorage.setItem('id_user_rutas', data.identificacion)
                    localStorage.setItem('is_ad_min', data.tipo)
                    localStorage.setItem('logueado', data.result)
                    window.location.reload(true);
                }else{
                    this.setState({
                        mensaje: 'Los datos ingresados son incorrectos'
                    })
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
                            <Card.Title>Login</Card.Title>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Introduzca su email" onChange={this.handleChange} name="email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" name="password" onChange={this.handleChange} />
                                </Form.Group>
                                <p>{this.state.mensaje}</p>
                                <Button variant="primary" onClick={this.loguear}>
                                    Entrar
                                    </Button>
                                    <Link to="/registro">Registrarme</Link>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default withRouter(Login);