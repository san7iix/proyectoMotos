const express = require('express')
const bcrypt = require('bcryptjs')
const mysqlConnection = require('../database.js')

const router = express.Router();

//Constante con la ruta para usuarios
const URI = '/admin'

//Ruta para crear un admin
router.post(`${URI}/registro`, (req, res) => {
    const { usuario, password } = req.body;
    const query = `INSERT INTO administradores (usuario, password) VALUES (?, ?);`
    mysqlConnection.query(query, [ usuario, bcrypt.hashSync(password, 10) ], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Administrador creado' })
        } else {
            console.log(err)
        }
    });
});

//Ruta para consultar un admin
router.get(`${URI}/:id`, (req, res) => {
    const { id } = req.params
    mysqlConnection.query('SELECT * FROM administradores WHERE idadministradores = ?;', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err)
        }
    });
});

//Ruta para consultar todos los admin
router.get(`${URI}`, (req, res) => {
    mysqlConnection.query('SELECT * FROM administradores', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    });
});

//Ruta para eliminar un admin
router.delete(`${URI}/:id`, (req, res) => {
    const { id } = req.params
    mysqlConnection.query('DELETE FROM administradores WHERE (`idadministradores` = ?);', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Administrador eliminado' })
        } else {
            console.log(err)
        }
    });
});

//Ruta para actualizar un administrador
router.put(`${URI}/editar`, (req, res) => {
    const { usuario, password, id } = req.body
    const query = "UPDATE administradores SET usuario = ?, password = ? WHERE idadministradores = ?;"
    mysqlConnection.query(query, [usuario, bcrypt.hashSync(password, 10), id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Reserva actualizada' })
        } else {
            console.log(err)
        }
    });
});

module.exports = router;