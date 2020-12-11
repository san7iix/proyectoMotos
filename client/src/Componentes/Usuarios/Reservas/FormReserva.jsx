import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import UsuarioAPI from '../../../api_interact/Usuario/UsuarioAPI';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Container, Row, Col, Image } from 'react-bootstrap'


class FormReserva extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idbicicleta: this.props.match.params.id,
            horasContratadas: '',
            usuario_identificacion: localStorage.getItem("id_user_rutas")
        }

        this.reservar = this.reservar.bind(this)
    }

    reservar() {

    }



    render() {
        return (
            <Container className="mt-4" >
                <Card className="text-center">
                    <Card.Header>Reservar bicicleta</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <FormControl
                                        placeholder="Horas a contratar"
                                        aria-label="Horas"
                                        aria-describedby="basic-addon1"
                                        value=""
                                        className="mb-3"
                                        name="horasContratadas"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default withRouter(FormReserva);