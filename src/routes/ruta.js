const express = require('express');
const bcrypt = require('bcryptjs');
const mysqlConnection = require('../database.js');

const router = express.Router();

//Constante con la ruta para las bicicletas
const URI = '/rutas'


//Ruta para crear una ruta
router.post(`${URI}/registro`, (req, res) => {
    const { origen, destino, descripcion, tiempoEstimado, fecha, hora } = req.body;
    const query = `INSERT INTO ruta (origen, destino, descripcion, tiempoEstimado, fecha, hora) VALUES (?, ?, ?, ?, ?, ?);`;
    mysqlConnection.query(query, [origen, destino, descripcion, tiempoEstimado, fecha, hora], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Ruta agregada' });
        } else {
            console.log(err);
        }
    });
});


//Ruta para consultar una ruta
router.get(`${URI}/:id`, (req, res) => {
    const { id } = req.params
    mysqlConnection.query('SELECT * FROM ruta WHERE idruta = ?;', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err)
        }
    });
});

//Ruta para consultar todos las rutas
router.get(`${URI}`, (req, res) => {
    mysqlConnection.query('SELECT * FROM ruta', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    });
});

//Ruta para eliminar una ruta
router.delete(`${URI}/:id`, (req, res) => {
    const { id } = req.params
    mysqlConnection.query('DELETE FROM ruta WHERE (`idruta` = ?);', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Ruta eliminada' })
        } else {
            console.log(err)
        }
    });
});

//Ruta para actualizar rutas
router.put(`${URI}/editar`, (req, res) => {
    const { idruta, origen, destino, descripcion, tiempoEstimado, fecha, hora } = req.body
    const query2 = "UPDATE ruta SET origen = ?, destino = ?, descripcion = ?, tiempoEstimado = ?, fecha = ?, hora = ? WHERE idruta = ?;"
    mysqlConnection.query(query2, [origen, destino, descripcion, tiempoEstimado, fecha, hora, idruta], (err, rows, fields) => {
        if (!err) {
            res.json({
                status: true,
                message: 'Ruta actualizada'
            })
        } else {
            console.log(err)
        }
    });
});


module.exports = router;