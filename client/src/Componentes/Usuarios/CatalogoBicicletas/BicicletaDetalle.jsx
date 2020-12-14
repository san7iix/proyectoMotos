import React, { Component } from 'react';
import { Container, Col, Row} from 'react-bootstrap'
import Media from 'react-bootstrap/Media'
import UsuarioAPI from '../../../api_interact/Usuario/UsuarioAPI'
import Button from 'react-bootstrap/Button'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { withRouter } from "react-router-dom";
import FormControl from 'react-bootstrap/FormControl'

class BicicletaDetalle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            usuario_identificacion: localStorage.getItem('id_user_rutas'),
            data: {},
            horasContratadas: '1',
            imagenes: []
        }

        this.obtenerDetalleBicicleta = this.obtenerDetalleBicicleta.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.reservar = this.reservar.bind(this)
    }


    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    reservar() {
        let data = {
            usuario_identificacion: this.state.usuario_identificacion,
            idbicicleta: this.state.id,
            horasContratadas: this.state.horasContratadas
        }
        UsuarioAPI.reservarBicicleta(data)
            .then(res => {
                if (res.status) {
                    alert(res.message)
                    this.props.history.push('/reservas');
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    obtenerDetalleBicicleta() {
        UsuarioAPI.obtenerDetalleBicicleta(this.state.id)
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch(err => {
                console.log(err)
            })

        UsuarioAPI.obtenerImagenesBicicleta(this.state.id).
            then(res => {
                this.setState({
                    imagenes: res
                })
            })
    }

    componentDidMount() {
        this.obtenerDetalleBicicleta()
    }

    render() {
        return (
            <Container>
                <Media>
                    <Col md={8}>
                        <AwesomeSlider >
                           {
                               this.state.imagenes.map(imagen=>(
                                   <div data-src={imagen.rutaimagen}/>
                               ))
                           }
                        </AwesomeSlider>
                    </Col>
                    <Media.Body className="mt-3">
                        <h3>{this.state.data.marca}</h3>
                        <p>{`Modelo: ${this.state.data.modelo}`}</p>
                        <p>{`Peso: ${this.state.data.peso}`}</p>
                        <p>{`Talla: ${this.state.data.talla}`}</p>
                        <p>{`Tamaño de la rueda: ${this.state.data.tamRueda}`}</p>
                        <p>{this.state.data.descripcion}</p>
                        <p>{`Precio: $${this.state.data.precio} COP`}</p>
                        {this.state.data.estado === 0 ? <p>Horas a reservar:</p> : false}
                        {this.state.data.estado === 0 ? <FormControl
                            placeholder="Horas a contratar"
                            aria-label="horasContratadas"
                            value={this.state.horasContratadas}
                            onChange={this.handleChange}
                            className="mb-3 col-md-4"
                            name="horasContratadas"
                            id="horasContratadas"
                            type="number"
                            min="1"
                            max="12"
                        /> : false}

                        {this.state.data.estado === 0 ? <Button onClick={this.reservar} variant="primary">Reservar</Button> : false}

                    </Media.Body>
                </Media>
            </Container>
        );
    }
}

export default withRouter(BicicletaDetalle);