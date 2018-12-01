"use strict"
const connection = require('../connection.js');
function login(req, res){
    const parametros = req.params;
    const usuario = parametros.usuario;
    const password = parametros.password;
    connection.query(`SELECT * FROM usuario WHERE (usuario = "${usuario}") AND (password = ${password});`, (err, usuario) => 
    {
        if(err)
        {
            res.status(404).send({"error": err});
            console.log(err);
        } 
        else 
        {
            res.status(200).send({"res": usuario});
            console.log(usuario);
        }
    });
    console.log(req.params);
}

module.exports = {
	login
}