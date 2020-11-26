const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
  connectionLimit: 10,
  host: "bfqpe49r5avzgv4ig6ak-mysql.services.clever-cloud.com",
  database: "bfqpe49r5avzgv4ig6ak",
  user: "up0qcenhkfgtzb1k",
  password: "Ph240rxDdxMNtdaUaHyJ",
  port: 3306
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('La Base de Datos ha sido conectada satisfactoriamente');
  }
});

module.exports = mysqlConnection;