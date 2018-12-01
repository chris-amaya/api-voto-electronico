"use strict"

var express = require("express");
var ControladorVoto = require("../controladores/votoElectronico.controlador.js");
var api = express.Router();

//api.post("/voto/:presidente/:diputado/:senador/:usuario", ControladorUsuarios.login);
api.get("/mostrarElecciones", ControladorVoto.mostrarElecciones);
api.post("/usuario/:usuarioId/votoPresidente/:presidenteId/:presidenteVotos/votoSenador/:senadorId/:senadorVotos/votoDiputado/:diputadoId/:diputadoVotos", ControladorVoto.votoGeneral);
api.post("/login/:usuario/:password", ControladorVoto.login);

//Exportamos el módulo api
module.exports = api;