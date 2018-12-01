const mysql = require('mysql');
   const connection = mysql.createPool({
         connectionLimit: 10,
         host: 'localhost',
         user: 'root',
         password: 'celeron',
         database: 'votoElectronico',
     });
     /* connection.connect(function(error){
         if(error){
            throw error;
         }else{
            console.log('Conexion correcta.');
         }
     }); */


module.exports = connection;
