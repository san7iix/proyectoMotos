const express = require('express');
const bcrypt = require('bcryptjs');
const mysqlConnection = require('../database.js');

const router = express.Router();

//Constante con la ruta para las bicicletas
const URI = '/bicicletas'

//Ruta para crear una bicicleta
router.post(`${URI}/registro`, (req, res) => {
    const { idbicicleta, modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen } = req.body;
    const query = `INSERT INTO bicicleta (idbicicleta, modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    mysqlConnection.query(query, [ idbicicleta, modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen ], (err, rows, fields) => {
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
router.delete(`${URI}/id`, (req, res) => {
    const { id } = req.params;
    console.log(idUsuario)
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
    const { nombre, password, idUsuario } = req.body;
    const query2 = "UPDATE bicicleta SET nombre = ?, password = ? WHERE idusuario = ?;";
    mysqlConnection.query(query2, [nombre, bcrypt.hashSync(password, 10), idUsuario], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario actualizado' });
        } else {
            console.log(err);
        }
    });
});



module.exports = router;