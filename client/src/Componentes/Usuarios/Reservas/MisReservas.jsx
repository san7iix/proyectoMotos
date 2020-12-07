import React, { Component } from 'react';
import UsuarioAPI from '../../../api_interact/Usuario/UsuarioAPI';
import { Container, Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'
class MisReservas extends Component {

    constructor(props) {
        super(props)


        this.state = {
            email: localStorage.getItem('id_user_rutas'),
            reservas: []
        }
    }

    getReservas() {
        UsuarioAPI.obtenerReservas(this.state.email)
            .then(data => {
                this.setState({
                    reservas : data
                })
            })
    }

    componentDidMount() {
        this.getReservas()
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="m-2">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Horas contratadas</th>
                                    <th>Hora de entrega</th>
                                    <th>Hora de devolución</th>
                                    <th>Estado</th>
                                    <th>Bicicleta</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.reservas.map((reserva) => (
                                        <tr key={reserva.idreservaBici}>
                                            <td>{reserva.fecha}</td>
                                            <td>{reserva.horasContratadas}</td>
                                            <td>{reserva.horaEntrega}</td>
                                            <td>{reserva.horaDevolucion}</td>
                                            <td>{reserva.estado}</td>
                                            <td><Link to={`bicicletas/detalle/${reserva.idbicicleta}`}>Ver bicicleta</Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MisReservas;