const express = require('express');
const logic = require('../models/curso_model');
const ruta = express.Router();


ruta.get('/',(req, res) => {
    res.json('respuesta por peticion get de cursos funcionando correctamente...')
});



module.exports = ruta;