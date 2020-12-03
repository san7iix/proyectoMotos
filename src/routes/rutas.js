const express = require('express');
const app = express();

app.use(require('./usuarios'));
app.use(require('./bicicleta'));
app.use(require('./ruta'));
app.use(require('./reserva'));
app.use(require('./admin'));
app.use(require('./tipoBicicleta'));

module.exports = app;