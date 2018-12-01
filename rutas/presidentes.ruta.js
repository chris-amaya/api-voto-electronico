"use strict"

var express = require("express");
var ControladorVoto = require("../controladores/votoElectronico.controlador.js");
var api = express.Router();

api.get("/mostrarElecciones", ControladorVoto.mostrarElecciones);
api.post("/voto/:presidente/:diputado/:senador/:usuario", ControladorVoto.votoElectronico);



//Exportamos el módulo api
module.exports = api;