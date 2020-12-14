import React, { Component } from 'react';
import UsuarioAPI from '../../../api_interact/Usuario/UsuarioAPI';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'
class MisReservas extends Component {

    constructor(props) {
        super(props)


        this.state = {
            email: localStorage.getItem('id_user_rutas'),
            reservas: []
        }

        this.getReservas = this.getReservas.bind(this)
        this.devolver = this.devolver.bind(this)
    }

    getReservas() {
        UsuarioAPI.obtenerReservas(this.state.email)
            .then(data => {
                this.setState({
                    reservas : data
                })
            })
    }

    devolver(id, idbicicleta){
        let data = {
            id: id,
            idbicicleta: idbicicleta
        }

        UsuarioAPI.devolverBicicleta(data)
        .then(res=>{
            if(res.status){
                alert(res.message)
                window.location.reload(true)
            }
        })
        .catch(err=>{
            console.log(err)
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
                                    <th>Acciones</th>
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
                                            <td>
                                                { reserva.estado === 'A' ? <Button onClick={()=>this.devolver(reserva.idreservaBici,reserva.idbicicleta)} >Devolver</Button> : false }
                                            </td>
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