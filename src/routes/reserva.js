const express = require('express');
const bcrypt = require('bcryptjs');
const mysqlConnection = require('../database.js');

const router = express.Router();

//Constante con la ruta para las bicicletas
const URI = '/reserva'


//Ruta para crear una reserva
router.post(`${URI}/registro`, (req, res) => {
    const { fecha, horasContratadas, horaEntrega, horaDevolucion, estado, idbicicleta, usuario_identificacion } = req.body;
    const query = `INSERT INTO reservabici (fecha, horasContratadas, horaEntrega, horaDevolucion, estado, idbicicleta, usuario_identificacion) VALUES (?, ?, ?, ?, ?, ?, ?);`;
    mysqlConnection.query(query, [ fecha, horasContratadas, horaEntrega, horaDevolucion, estado, idbicicleta, usuario_identificacion ], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Reserva agregada' });
        } else {
            console.log(err);
        }
    });
});


//Ruta para consultar una reserva
router.get(`${URI}/:id`, (req, res) => {
    const { id } = req.params
    mysqlConnection.query('SELECT * FROM reservabici WHERE idreservabici = ?;', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err)
        }
    });
});

//Ruta para consultar todos las reservas
router.get(`${URI}`, (req, res) => {
    mysqlConnection.query('SELECT * FROM reservabici', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    });
});

//Ruta para eliminar una reserva
router.delete(`${URI}/:id`, (req, res) => {
    const { id } = req.params
    mysqlConnection.query('DELETE FROM reservabici WHERE (`idreservabici` = ?);', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Reserva eliminada' })
        } else {
            console.log(err)
        }
    });
});

//Ruta para actualizar una reserva
router.put(`${URI}/editar`, (req, res) => {
    const { fecha, horasContratadas, horaEntrega, horaDevolucion, estado, idbicicleta, usuario_identificacion, idreservabici } = req.body
    const query = "UPDATE reservabici SET fecha = ?, horasContratadas = ?, horaEntrega = ?, horaDevolucion = ?, estado = ?, idbicicleta = ?, usuario_identificacion = ? WHERE idreservabici = ?;"
    mysqlConnection.query(query, [fecha, horasContratadas, horaEntrega, horaDevolucion, estado, idbicicleta, usuario_identificacion, idreservabici], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Reserva actualizada' })
        } else {
            console.log(err)
        }
    });
});


module.exports = router;