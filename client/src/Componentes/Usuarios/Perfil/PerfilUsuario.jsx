import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, Image } from 'react-bootstrap'
import UsuarioAPI from '../../../api_interact/Usuario/UsuarioAPI';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
class PerfilUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.getDatosUsuario = this.getDatosUsuario.bind(this)
    }

    getDatosUsuario() {
        UsuarioAPI.obtenerDatosUsuario(localStorage.getItem('id_user_rutas'))
            .then(data => {
                console.log(data)
                this.setState({
                    data: data
                })
            })
    }

    componentDidMount() {
        this.getDatosUsuario()
    }


    render() {
        return (
            <Container className="mt-4">
                <Card className="text-center">
                    <Card.Header>Perfil</Card.Header>
                    <Card.Body>
                        <Card.Title>

                            <Image width={300}
                                height={300}
                                src={this.state.data.imagen}
                                roundedCircle />

                        </Card.Title>
                        <Card.Text>
                            <Container>

                                <Row className="mt-4 mb-4">
                                    <Col>
                                        <Button variant="primary">Cambiar foto</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="Nombre"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                value={this.state.data.nombre}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="Apellido"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                value={this.state.data.apellido}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        value={this.state.data.email}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Contraseña"
                                        aria-label="Contraseña"
                                        aria-describedby="basic-addon1"
                                        value={""}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Telefono"
                                        aria-label="Telefono"
                                        aria-describedby="basic-addon1"
                                        value={this.state.data.telefono}
                                    />
                                </InputGroup>
                            </Container>
                        </Card.Text>
                        <Button variant="success">Guardar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Datos personales</Card.Footer>
                </Card>
            </Container>
        );
    }
}

export default PerfilUsuario;