import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import UsuarioAPI from '../../../api_interact/Usuario/UsuarioAPI';

class FormReserva extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: localStorage.getItem('id_user_rutas'),
            idbicicleta: this.props.match.params.id,
            horasContratadas: '',
            usuario_identificacion: ''
        }

        this.reservar = this.reservar.bind(this)
        this.obtenerIdUsuario = this.obtenerIdUsuario.bind(this)
    }

    reservar() {

    }

    obtenerIdUsuario() {
        UsuarioAPI.obtenerIdUsuario(this.state.email)
            .then(data => {
                // this.setState({
                //     usuario_identificacion: res.identificacion
                // })
                console.log(this.state)
            })
    }

    componentDidMount() {
        this.obtenerIdUsuario()
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default withRouter(FormReserva);