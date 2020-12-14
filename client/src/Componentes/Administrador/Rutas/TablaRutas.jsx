import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import AdministradorAPI from '../../../api_interact/Administrador/AdministradorAPI';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class TablaRutas extends Component {


    constructor(props) {
        super(props)

        this.state = {
            rutas: []
        }
    }


    getRutas() {
        AdministradorAPI.obtenerRutas()
            .then(data => {
                this.setState({
                    rutas: data
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    componentDidMount() {
        this.getRutas()
    }


    eliminarRutas(id){
        AdministradorAPI.eliminarRuta(id)
        .then(res=>{
            if(res){
                this.getRutas()
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="m-2">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Id ruta</th>
                                    <th>Origen</th>
                                    <th>Destino</th>
                                    <th>Descripción</th>
                                    <th>Tiempo estimado (horas)</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rutas.map((ruta) => (
                                        <tr key={ruta.idruta}>
                                            <td> {ruta.idruta} </td>
                                            <td> {ruta.origen} </td>
                                            <td> {ruta.destino} </td>
                                            <td> {ruta.descripcion} </td>
                                            <td> {ruta.tiempoEstimado} </td>
                                            <td> {ruta.fecha} </td>
                                            <td> {ruta.hora} </td>
                                            <td>
                                                <Row>
                                                    <Col className="m-1">
                                                        <Link to={`./rutas/editar/${ruta.idruta}`}>Editar</Link>
                                                    </Col>
                                                    <Col className="m-1">
                                                        <Button variant="danger" onClick={()=>this.eliminarRutas(ruta.idruta)} >Eliminar</Button>
                                                    </Col>
                                                </Row>
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

export default TablaRutas;