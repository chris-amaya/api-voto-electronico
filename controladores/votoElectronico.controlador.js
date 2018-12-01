"use strict"
const connection = require('../connection.js');
function mostrarElecciones(req, res){

    connection.getConnection((err, conn) => 
    {
        if(err) {console.log(err)}
        else 
        {
            conn.query(`SELECT * FROM voto_presidente;`, (err, presidentes) => {
                if(err) {console.log(err); }
                else 
                {
                    conn.query(`SELECT * FROM voto_senadores;`, (err, senadores) => {
                        if(err) {console.log(err); }
                        else 
                        {
                            conn.query(`SELECT * FROM voto_diputados;`, (err, diputados) => {
                                if(err) {console.log(err); }
                                else 
                                {
                                    res.status(200).send({"voto_presidente": presidentes,
                                                            "voto_senadores": senadores,
                                                            "voto_diputados": diputados
                                    });

                                }
                            });
                        }
                    });
                }
            });
        }
    })

   
}

function votoGeneral(req, res)
{
    connection.getConnection((err, conn) => 
    {
        const parametros = req.params;
        const presidenteId = parametros.presidenteId;
        const presidente = parametros.presidenteNombre;
        const presidenteVotos = parametros.presidenteVotos;
        
        const diputadoId = parametros.diputadoId;
        const diputadoNombre = parametros.diputadoNombre;
        const diputadoVotos = parametros.diputadoVotos;

        const senadorId = parametros.senadorId;
        const senadorNombre = parametros.senadorNombre;
        const senadorVotos = parametros.senadorVotos;

        const usuarioId = parametros.usuarioId;
        const usuarioNombre = parametros.usuarioNombre;
        const usuarioVoto = parametros.usuarioVoto;

        connection.getConnection((err, conn) => {
            if(err) {console.log(err);}
            else 
            {
                    conn.query(`SELECT * FROM usuario WHERE idusuario = ${usuarioId}`, (err, usuario) => 
                    {
                        if(err) {console.log(err);}
                        else 
                        {
                            console.log(usuario);
                            if(usuario.voto == 0 || usuario.voto == null )
                            {
                                conn.query(`UPDATE voto_presidente SET votos = ${presidenteVotos} WHERE idPresidente = ${presidenteId}`, (err, votoPresidente) =>
                                {

                                if(err) {console.log(err);}
                                else 
                                {
                                    conn.query(`UPDATE voto_diputados SET votos = ${diputadoVotos} WHERE iddiputado = ${diputadoId}`, (err, votoDiputado) => 
                                    { 
                                        if(err) {console.log(err);}
                                        else 
                                        {
                                            conn.query(`UPDATE voto_senadores SET votos = ${senadorVotos} WHERE idSenador = ${senadorId}`, (err, votoSenador) => 
                                            {
                                            if(err) {console.log(err);}
                                            else 
                                            {
                                                conn.query(`UPDATE usuario SET voto = 1 WHERE idUsuario = ${usuarioId}`)
                                                res.status(200).send({"mensaje" : "datos enviados correctamente"})
                                            } 
                                            });
                                        }
                                    });
                                }
                            });

                            } 
                            else 
                            {
                                res.status(404).send({"mensajeError": "el usuario ya había votado"})
                            }
                        }
                    });


                
            }
        });
    });
}

function login(req, res)
{
    const parametros = req.params;
    const usuario = parametros.usuario;
    const password = parametros.password;

    connection.getConnection((err, conn) =>{
        if(err) {console.log(err);}
        else 
        {
            conn.query(`SELECT * FROM usuario WHERE (usuario = "${usuario}") AND (password = ${password})`, (err, usuario) =>{
                if(err){console.log(err);} 
                else
                {
                    if(usuario.voto == 1)
                    {
                        res.status(404).send({"mensajeError" : "El usuario ya votó" })
                    } else{
                        res.status(200).send({usuario});
                    }
                }
            });
        }
    });
}





module.exports = 
{
    votoGeneral, 
    mostrarElecciones,
    login
}