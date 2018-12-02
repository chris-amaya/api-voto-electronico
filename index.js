"use strict"

var mysql = require("mysql");
var app = require("./app");
var port = process.env.PORT || 1234;

/*=============================================
CONEXIÓN A BASE DE DATOS
=============================================*/
var connection = mysql.createConnection({
   host: 'sql9.freesqldatabase.com',
   user: 'sql9267957',
   password: 'CSgtuj3SqR',
   database: 'sql9267957',
});
connection.connect((error, respuesta) => {
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
      app.listen(port, function(){
			console.log("Servidor del ApiRest en http://localhost:"+port)
		})
   }
});
