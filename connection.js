const mysql = require('mysql');
   const connection = mysql.createPool({
         connectionLimit: 10,
         host: 'sql9.freesqldatabase.com',
         user: 'sql9267957',
         password: 'CSgtuj3SqR',
         database: 'sql9267957',
     });
     /* connection.connect(function(error){
         if(error){
            throw error;
         }else{
            console.log('Conexion correcta.');
         }
     }); */


module.exports = connection;
