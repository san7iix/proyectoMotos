import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import AgregarBicicleta from './AgregarBicicleta';
import TablaBicicletas from './TablaBicicletas';

class VistaBicicletas extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
                <Col xs={3}>
                    <AgregarBicicleta />
                </Col>
                <Col>
                    <TablaBicicletas />
                </Col>
            </Row>
        </Container>
        );
    }
}

export default VistaBicicletas;