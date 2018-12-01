"use strict"
const connection = require('../connection.js');
function verDiputados(req, res){

    connection.query(`SELECT * FROM voto_diputados`, (err, diputados) => 
    {
        if(err)
        {
            res.status(404).send({"error": err});
            console.log(err);
        } 
        else 
        {
            res.status(200).send({"response": diputados});
            console.log(usuario);
        }
    });
    
}

function votoDiputado(req, res)
{
    const parametros = req.params;
    const diputado = parametros.diputado;
    const usuario = parametros.usuario;
    
    pool.getConnection((err, connection) => 
    {
        if (err) 
        {
            console.log(err);
        } 
        else 
        {
            connection.query(`UPDATE voto_senadores SET votos = 1 WHERE partidoNombre = ${diputado}`, (err, voto) => 
            {
                if(err)
                {
                    res.status(404).send({"error": err});
                    console.log(err);
                } 
                else 
                {
                    connection.query(`UPDATE usuario SET voto = 1 WHERE usuario = ${usuario};`, (err, usuario) => 
                    {
                        if(err) {console.log(err)}
                        else 
                        {
                            res.status(200).send({"response": usuario,
                                                "operacion": true});
                            console.log(diputados);
                            connection.release();
                        }
                    });
                    
                } 
            }); // cierra la query de diputados
        }
      }); // cierra el pool
} // cierra la función principal

module.exports = {
	verDiputados
}