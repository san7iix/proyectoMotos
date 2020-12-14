import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";
import AdministradorAPI from '../../../api_interact/Administrador/AdministradorAPI';

class AgregarImagen extends Component {

    constructor(props){
        super(props)

        this.state = {
            bicicleta_idbicicleta: this.props.match.params.id,
            rutaImagen: '', 
            descripcion: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.AgregarImagen = this.AgregarImagen.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    AgregarImagen(){
        AdministradorAPI.agregarImagen(this.state)
        .then(res=>{
            if(res.status){
                alert(res.message)
                this.props.history.push("/administrador/bicicletas")
            }
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
                                    name="rutaImagen"
                                    placeholder="URL imagen"
                                    aria-describedby="basic-addon1"
                                    value={this.state.rutaImagen}>
                                </FormControl>
                            </Row>
                            <Row className="mt-2">
                                <FormControl
                                    onChange={this.handleChange}
                                    name="descripcion"
                                    placeholder="Descripcion"
                                    aria-describedby="basic-addon1"
                                    value={this.state.descripcion}>
                                </FormControl>
                            </Row>
                                <Button className="mt-4" onClick={this.AgregarImagen}>Agregar</Button>
                        </Container>
                    </Card.Text>

                </Card.Body>

            </Card>
        </Container>
        );
    }
}

export default withRouter(AgregarImagen);