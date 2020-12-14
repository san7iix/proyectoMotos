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
            identificacion: localStorage.getItem('id_user_rutas'),
            imagen: 'https://assets.stickpng.com/images/585e4beacb11b227491c3399.png',
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            direccion: '',
            telefono: ''

        }

        this.getDatosUsuario = this.getDatosUsuario.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.editarInfo = this.editarInfo.bind(this)
    }

    getDatosUsuario() {
        UsuarioAPI.obtenerDatosUsuario(localStorage.getItem('id_user_rutas'))
            .then(data => {
                this.setState({
                    imagen: data.imagen,
                    nombre: data.nombre,
                    apellido: data.apellido,
                    email: data.email,
                    direccion: data.direccion,
                    telefono: data.telefono
                })
            })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    editarInfo() {
        let data = {
            identificacion: this.state.identificacion,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            password: this.state.password,
            direccion: this.state.direccion,
            telefono: this.state.telefono
        }

        UsuarioAPI.actualizarInfo(data)
        .then(res=>{
            if(res.status){
                alert(res.message)
                this.getDatosUsuario()
                this.setState({
                    password: ''
                })
            }
        })
        .catch(err=>{
            console.log(err)
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
                                src={this.state.imagen}
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
                                                value={this.state.nombre}
                                                name="nombre"
                                                onChange={this.handleChange}
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
                                                value={this.state.apellido}
                                                name="apellido"
                                                onChange={this.handleChange}
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
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleChange}
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
                                        type="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        name="password"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Dirección"
                                        aria-label="Dirección"
                                        aria-describedby="basic-addon1"
                                        value={this.state.direccion}
                                        name="direccion"
                                        onChange={this.handleChange}
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
                                        value={this.state.telefono}
                                        name="telefono"
                                        onChange={this.handleChange}
                                    />
                                </InputGroup>
                            </Container>
                        </Card.Text>
                        <Button onClick={this.editarInfo} variant="success">Guardar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Datos personales</Card.Footer>
                </Card>
            </Container>
        );
    }
}

export default PerfilUsuario;