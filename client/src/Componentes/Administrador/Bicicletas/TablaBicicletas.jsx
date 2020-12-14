import React, { Component } from 'react';
import AdministradorAPI from '../../../api_interact/Administrador/AdministradorAPI';
import { Container, Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class TablaBicicletas extends Component {


    constructor(props) {
        super(props)

        this.state = {
            bicicletas: []
        }

        this.eliminarBicicleta = this.eliminarBicicleta.bind(this)
    }

    eliminarBicicleta(id){
        AdministradorAPI.eliminarBicicleta(id)
        .then(res=>{
            if(res.status){
                alert(res.message)
                this.getBicicletas()
            }
        })
    }


    getBicicletas(){
        AdministradorAPI.obtenerBicicletas()
        .then(res=>{
            this.setState({
                bicicletas:res
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.getBicicletas()
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="m-2">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Id Bicicleta</th>
                                    <th>Modelo</th>
                                    <th>Talla</th>
                                    <th>Peso</th>
                                    <th>Precio</th>
                                    <th>Marca</th>
                                    <th>Descripción</th>
                                    <th>Tamaño de la rueda</th>
                                    <th>Tipo</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.bicicletas.map((bicicleta) => (
                                        <tr key={bicicleta.idbicicleta}>
                                            <td> {bicicleta.idbicicleta} </td>
                                            <td> {bicicleta.modelo} </td>
                                            <td> {bicicleta.talla} </td>
                                            <td> {bicicleta.peso} </td>
                                            <td> {bicicleta.precio} </td>
                                            <td> {bicicleta.marca} </td>
                                            <td> {bicicleta.descripcion} </td>
                                            <td> {bicicleta.tamRueda} </td>
                                            <td> {bicicleta.tipo_bicicleta} </td>
                                            <td> { bicicleta.estado !== 0 ? 'Ocupada' : 'Disponible' } </td>
                                            <td>
                                                <Row>
                                                    {/* <Col className="m-1">
                                                        <Link to={`./bicicletas/editar/${bicicleta.idbicicleta}`}>Editar</Link>
                                                    </Col> */}
                                                    <Col className="m-1">
                                                        <Link to={`./bicicletas/agregarImagen/${bicicleta.idbicicleta}`}>Agregar imágen</Link>
                                                    </Col>
                                                    <Col className="m-1">
                                                        <Button variant="danger" onClick={()=>this.eliminarBicicleta(bicicleta.idbicicleta)} >Eliminar</Button>
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

export default TablaBicicletas;