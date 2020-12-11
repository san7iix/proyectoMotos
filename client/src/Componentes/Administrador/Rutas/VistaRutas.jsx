import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import TablaRutas from './TablaRutas'
import AgregarRuta from './AgregarRuta'

class VistaRutas extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <AgregarRuta />
                    </Col>
                    <Col>
                        <TablaRutas />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VistaRutas;