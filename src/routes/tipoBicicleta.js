const express = require('express')
const bcrypt = require('bcryptjs')
const mysqlConnection = require('../database.js')

const router = express.Router();

//Constante con la ruta para los tipos de bicicleta
const URI = '/tipoBicileta'

router.post(`${URI}/registro`, (req, res) => {
    const { idtipobicicleta, nombre, descripcion } = req.body;
    const query = `INSERT INTO bicicleta ( idtipobicicleta, nombre, descripcion ) VALUES (?, ?, ?);`;
    mysqlConnection.query(query, [idtipobicicleta, nombre, descripcion], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Tipo de bicicleta agregado agregada' });
        } else {
            console.log(err);
        }
    });
});