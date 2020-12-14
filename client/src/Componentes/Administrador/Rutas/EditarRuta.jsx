import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import AdministradorAPI from '../../../api_interact/Administrador/AdministradorAPI'
import { withRouter } from "react-router-dom";

class EditarRuta extends Component {

    
    constructor(props){
        super(props)

        this.state = {
            idruta: this.props.match.params.idruta,
            origen: '',
            destino: '',
            descripcion: '',
            tiempoEstimado: '',
            fecha: '',
            hora: ''
        }

        this.editarRuta = this.editarRuta.bind(this)
        this.obtenerInfoRuta = this.obtenerInfoRuta.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    editarRuta(){
        AdministradorAPI.editarRuta(this.state)
        .then(res=>{
            if(res.status){
                alert(res.message)
                this.props.history.push('/administrador/rutas')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    obtenerInfoRuta(){
        AdministradorAPI.consultarRuta(this.state.idruta)
        .then(res=>{
            this.setState(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.obtenerInfoRuta()
    }
    
    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <Container className="mt-4" >
            <Card className="text-center">
                <Card.Header>Agregar ruta</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Container>
                            <Row className="mt-2">
                                <FormControl
                                    onChange={this.handleChange}
                                    name="origen"
                                    placeholder="Origen"
                                    aria-describedby="basic-addon1"
                                    value={this.state.origen}>
                                </FormControl>
                            </Row>
                            <Row className="mt-2">
                                <FormControl
                                    name="destino"
                                    onChange={this.handleChange}
                                    placeholder="Destino"
                                    aria-describedby="basic-addon1"
                                    value={this.state.destino}>
                                </FormControl>
                            </Row>
                            <Row className="mt-2">
                                <FormControl
                                    name="descripcion"
                                    onChange={this.handleChange}
                                    placeholder="Descripción"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    value={this.state.descripcion}>
                                </FormControl>
                            </Row>
                            <Row className="mt-2">
                                <FormControl
                                    name="tiempoEstimado"
                                    onChange={this.handleChange}
                                    placeholder="Tiempo estimado"
                                    type="number"
                                    min="1"
                                    max="12"
                                    aria-describedby="basic-addon1"
                                    value={this.state.tiempoEstimado}>
                                </FormControl>
                            </Row>
                            <Row className="mt-2">
                                <FormControl
                                    name="fecha"
                                    type="date"
                                    onChange={this.handleChange}
                                    placeholder="Fecha"
                                    aria-describedby="basic-addon1"
                                    value={this.state.fecha}>
                                </FormControl>
                            </Row>
                            <Row className="mt-2">
                                <FormControl
                                    name="hora"
                                    type="time"
                                    onChange={this.handleChange}
                                    placeholder="Hora"
                                    aria-describedby="basic-addon1"
                                    value={this.state.hora}>
                                </FormControl>
                            </Row>
                                <Button className="mt-4" onClick={this.editarRuta}>Guardar</Button>
                        </Container>
                    </Card.Text>

                </Card.Body>

            </Card>
        </Container>
        );
    }
}

export default withRouter(EditarRuta);