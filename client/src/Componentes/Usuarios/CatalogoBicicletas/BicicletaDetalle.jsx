import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'
import UsuarioAPI from '../../../api_interact/Usuario/UsuarioAPI'
import Button from 'react-bootstrap/Button'

class BicicletaDetalle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            data: {}
        }

        this.obtenerDetalleBicicleta = this.obtenerDetalleBicicleta.bind(this)
    }

    obtenerDetalleBicicleta() {
        UsuarioAPI.obtenerDetalleBicicleta(this.state.id)
            .then(data => {
                this.setState({
                    data: data
                })
                console.log(this.state.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.obtenerDetalleBicicleta()
    }

    render() {
        return (
            <Container>
                <Media>
                    <img
                        width={600}
                        height={600}
                        className="mr-3"
                        src={ this.state.data.imagen }
                        alt="imagen bicicleta"
                    />
                    <Media.Body className="mt-3">
                        <h3>{this.state.data.marca}</h3>
                        <p>{`Modelo: ${this.state.data.modelo}`}</p>
                        <p>{`Peso: ${this.state.data.peso}`}</p>
                        <p>{`Talla: ${this.state.data.talla}`}</p>
                        <p>{`Tamaño de la rueda: ${this.state.data.tamRueda}`}</p>
                        <p>{this.state.data.descripcion}</p>
                        <p>{`Precio: $${this.state.data.precio} COP`}</p>
                        <Button variant="primary">Reservar</Button>
                    </Media.Body>
                </Media>
            </Container>
        );
    }
}

export default BicicletaDetalle;