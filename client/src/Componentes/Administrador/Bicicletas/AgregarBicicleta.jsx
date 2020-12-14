import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";
import {Form} from 'react-bootstrap'
import AdministradorAPI from '../../../api_interact/Administrador/AdministradorAPI';


class AgregarBicicleta extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modelo: '',
            talla: '',
            peso: '',
            precio: '',
            marca: '',
            descripcion: '',
            tamRueda: '',
            tipo_bicicleta: '',
            estado: '0',
            tipos: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.obtenerTipos = this.obtenerTipos.bind(this)
        this.agregarBicicleta = this.agregarBicicleta.bind(this)

    }

    agregarBicicleta(){
        AdministradorAPI.agregarBicicleta(this.state)
        .then(res=>{
            if(res.status){
                alert(res.message)
                window.location.reload(true)
            }
        })
    }

    obtenerTipos(){
        AdministradorAPI.obtenerTipos()
        .then(res=>{
            this.setState({
                tipos: res
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.obtenerTipos()
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSelect(e) {
        const valor = e.target.options[e.target.selectedIndex].value
        this.setState({
            tipo_bicicleta: valor
        })
    }

    render() {
        return (
            <Container className="mt-4" >
                <Card className="text-center">
                    <Card.Header>Agregar bicicleta</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Container>
                                <Row className="mt-2">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="modelo"
                                        placeholder="Modelo"
                                        aria-describedby="basic-addon1"
                                        value={this.state.modelo}>
                                    </FormControl>
                                </Row>

                                <Row className="mt-2">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="talla"
                                        placeholder="Talla"
                                        aria-describedby="basic-addon1"
                                        value={this.state.talla}
                                        >
                                        
                                    </FormControl>
                                </Row>

                                <Row className="mt-2">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="peso"
                                        placeholder="Peso"
                                        type="number"
                                        aria-describedby="basic-addon1"
                                        value={this.state.peso}>
                                    </FormControl>
                                </Row>

                                <Row className="mt-2">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="precio"
                                        placeholder="Precio"
                                        type="number"
                                        aria-describedby="basic-addon1"
                                        value={this.state.precio}>
                                    </FormControl>
                                </Row>

                                <Row className="mt-2">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="marca"
                                        placeholder="Marca"
                                        type="text"
                                        aria-describedby="basic-addon1"
                                        value={this.state.marca}>
                                    </FormControl>
                                </Row>

                                <Row className="mt-2">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="descripcion"
                                        placeholder="Descripcion"
                                        type="text"
                                        aria-describedby="basic-addon1"
                                        value={this.state.descripcion}>
                                    </FormControl>
                                </Row>

                                <Row className="mt-2">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="tamRueda"
                                        placeholder="Tamaño de la rueda"
                                        type="number"
                                        aria-describedby="basic-addon1"
                                        value={this.state.tamRueda}>
                                    </FormControl>
                                </Row>

                                <Row className="mt-2">
                                    <Form.Group controlId="exampleForm.ControlSelect2">
                                        <Form.Label>Tipo bicicleta</Form.Label>
                                        <Form.Control as="select" single name="tipo_bicicleta" onChange={this.handleSelect}>
                                            <option defaultValue="" selected disabled>-</option>
                                            {
                                                this.state.tipos.map(tipo=>(
                                                    <option key={tipo.idtipoBicicleta} value={tipo.idtipoBicicleta}> {tipo.nombre} </option>
                                                ))
                                            }
                                        </Form.Control>
                                        
                                    </Form.Group>
                                </Row>



                                <Button className="mt-4" onClick={this.agregarBicicleta}>Agregar</Button>
                            </Container>
                        </Card.Text>

                    </Card.Body>

                </Card>
            </Container>
        );
    }
}

export default withRouter(AgregarBicicleta);