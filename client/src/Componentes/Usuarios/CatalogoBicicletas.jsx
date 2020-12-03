import React, { Component } from 'react';
import BicicletaCard from './CatalogoBicicletas/BicicletaCard';
import { Container, Row, Col } from 'react-bootstrap'
import UsuarioAPI from '../../api_interact/Usuario/UsuarioAPI';

class CatalogoBicicletas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bicicletas: []
        }

        this.getBicicletas = this.getBicicletas.bind(this)
    }

    getBicicletas() {
        UsuarioAPI.obtenerCatalogoBicicletas()
            .then(data => {
                this.setState({
                    bicicletas: data
                })
            })
    }

    componentDidMount() {
        this.getBicicletas()
    }

    render() {

        try {
            return (
                <Container>
                    <Row>
                        {
                            this.state.bicicletas.map((bicicleta) => (
                                <Col xl={3} className="m-2" key={bicicleta.idbicicleta} >
                                    <BicicletaCard nombre={`${bicicleta.marca} ${bicicleta.modelo}`} imagen={bicicleta.imagen} descripcion={bicicleta.descripcion} id={bicicleta.idbicicleta} precio={bicicleta.precio} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            );

        } catch (error) {
            console.log(error)
        }
    }
}

export default CatalogoBicicletas;