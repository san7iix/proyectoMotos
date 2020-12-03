import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import UsuarioAPI from '../../api_interact/Usuario/UsuarioAPI'
import { withRouter } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.loguear = this.loguear.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    loguear() {
        UsuarioAPI.loguear(this.state)
        .then((data)=>{
            if(data.result){
                this.props.history.push('/inicio');
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
                                <Button variant="primary" onClick={this.loguear}>
                                    Entrar
                                    </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default withRouter(Login);