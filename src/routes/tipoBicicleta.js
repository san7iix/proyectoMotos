const express = require('express')
const bcrypt = require('bcryptjs')
const mysqlConnection = require('../database.js')

const router = express.Router();

//Constante con la ruta para los tipos de bicicleta
const URI = '/tipoBicicleta'

//Registrar tipo
router.post(`${URI}/registro`, (req, res) => {
    const { nombre, descripcion } = req.body;
    const query = `INSERT INTO tipobicicleta ( nombre, descripcion ) VALUES (?, ?);`;
    mysqlConnection.query(query, [nombre, descripcion], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Tipo de bicicleta agregado agregada' });
        } else {
            console.log(err);
        }
    });
});

//Consultar un tipo
router.get(`${URI}/:id`, (req, res) => {
    const { id } = req.params
    mysqlConnection.query('SELECT * FROM tipobicicleta WHERE idtipobicicleta = ?;', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err)
        }
    });
});

//Consultar todos los tipos
router.get(`${URI}`, (req, res) => {
    mysqlConnection.query('SELECT * FROM tipobicicleta', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    });
});



module.exports = router;