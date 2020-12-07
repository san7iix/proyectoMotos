import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


class BicicletaCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imagen: this.props.imagen,
            nombre: this.props.nombre,
            descripcion: this.props.descripcion,
            id: this.props.id
        }
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.state.imagen} />
                <Card.Body>
                    <Card.Title>{this.state.nombre}</Card.Title>
                    <Card.Text>{this.state.descripcion}</Card.Text>
                    <Link to={`detalle/${this.state.id}`}><Button >Ver más</Button></Link>
                </Card.Body>
            </Card>
        );
    }
}

export default BicicletaCard;