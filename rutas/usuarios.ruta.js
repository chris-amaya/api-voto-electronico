"use strict"

var express = require("express");
var ControladorUsuarios = require("../controladores/usuarios.controlador.js");
var api = express.Router();

// api.post("/login/:usuario/:password", ControladorUsuarios.login);



//Exportamos el módulo api
module.exports = api;