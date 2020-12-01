const express = require('express');
const bcrypt = require('bcryptjs');
const mysqlConnection = require('../database.js');

const router = express.Router();

//Constante con la ruta para las bicicletas
const URI = '/bicicletas'

//Ruta para crear una bicicleta
router.post(`${URI}/registro`, (req, res) => {
    const { modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen } = req.body;
    const query = `INSERT INTO bicicleta (modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    mysqlConnection.query(query, [ modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen ], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Bicicleta agregada' });
        } else {
            console.log(err);
        }
    });
});

//Ruta para consultar una bicicleta
router.get(`${URI}/:id`, (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM bicicleta WHERE idbicicleta = ?;', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Ruta para consultar todas las bicicletas
router.get(`${URI}`, (req, res) => {
    mysqlConnection.query('SELECT * FROM bicicleta', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Ruta para eliminar una bicicleta
router.delete(`${URI}/:id`, (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM bicicleta WHERE (`idbicicleta` = ?);', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Bicicleta eliminada' });
        } else {
            console.log(err);
        }
    });
});

//Ruta para editar una bicicleta
//Hay que editar esto
router.put(`${URI}/editar`, (req, res) => {
    const { modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen, idbicicleta } = req.body;
    const query = "UPDATE bicicleta SET modelo = ?, talla = ?, peso = ?, precio = ?, marca = ?, descripcion = ?, tamRueda = ?, tipo_bicicleta = ?, imagen = ? WHERE idbicicleta = ?;";
    mysqlConnection.query(query, [modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen, idbicicleta], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Bicicleta actualizada' });
        } else {
            console.log(err);
        }
    });
});



module.exports = router;