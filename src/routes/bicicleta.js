const express = require('express');
const bcrypt = require('bcryptjs');
const mysqlConnection = require('../database.js');

const router = express.Router();

//Constante con la ruta para las bicicletas
const URI = '/bicicletas'

//Ruta para crear una bicicleta
router.post(`${URI}/registro`, (req, res) => {
    const { modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, estado } = req.body;
    const query = `INSERT INTO bicicleta (modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, estado ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    mysqlConnection.query(query, [modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, estado], (err, rows, fields) => {
        if (!err) {
            res.json({
                message: 'Bicicleta agregada',
                status: true
            });
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

//Ruta para consultar todas las bicicletas disponibles
router.get(`${URI}/catalogo/disp`, (req, res) => {
    mysqlConnection.query('SELECT * FROM bicicleta WHERE estado = 0', (err, rows, fields) => {
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
            res.json({
                message: 'Bicicleta eliminada',
                status: true
            });
        } else {
            console.log(err);
        }
    });
});

//Ruta para editar una bicicleta
router.put(`${URI}/editar`, (req, res) => {
    const { modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen, idbicicleta } = req.body;
    const query = "UPDATE bicicleta SET modelo = ?, talla = ?, peso = ?, precio = ?, marca = ?, descripcion = ?, tamRueda = ?, tipo_bicicleta = ? WHERE idbicicleta = ?;";
    mysqlConnection.query(query, [modelo, talla, peso, precio, marca, descripcion, tamRueda, tipo_bicicleta, imagen, idbicicleta], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Bicicleta actualizada' });
        } else {
            console.log(err);
        }
    });
});

//Ruta para consultar las imágenes de una bicicleta

router.post(`${URI}/imagenes/ver`, (req, res) => {
    const { idbicicleta } = req.body

    const query = `SELECT rutaimagen FROM bicicleta INNER JOIN imagenesbicicleta ON bicicleta.idbicicleta = imagenesbicicleta.bicicleta_idbicicleta WHERE idbicicleta = ?;`

    mysqlConnection.query(query, [idbicicleta], (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})

router.post(`${URI}/imagenes/unica`, (req, res) => {
    const { idbicicleta } = req.body

    const query = `SELECT rutaimagen FROM bicicleta INNER JOIN imagenesbicicleta ON bicicleta.idbicicleta = imagenesbicicleta.bicicleta_idbicicleta WHERE idbicicleta = ?;`

    mysqlConnection.query(query, [idbicicleta], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err)
        }
    })
})


router.post(`${URI}/agregarImagen`, (req, res) => {
    const { bicicleta_idbicicleta, rutaImagen, descripcion } = req.body


    const query = `INSERT INTO imagenesbicicleta (rutaImagen, descripcion, bicicleta_idbicicleta) VALUES (?,?,?);`

    mysqlConnection.query(query, [ rutaImagen, descripcion, bicicleta_idbicicleta], (err, rows, fields) => {
        if (!err) {
            res.json({
                message: 'Imágen agregada',
                status: true
            });
        } else {
            console.log(err);
        }
    });
})


module.exports = router;