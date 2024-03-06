const express = require('express');
const ruta = express.Router();
const logic = require('../models/usuario_model');

ruta.get('/',(req, res) => {
    res.json('respuesta por peticion get de usuarios funcionando correctamente...')
});



module.exports = ruta;