// const mysql = require("mysql");

// const createConnection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'okplayers',
//     port: 3306
// });
// const promisePool = createConnection.promise();
// module.exports = promisePool;
const mysql = require('mysql');
const util = require("util");

const con = mysql.createConnection({
  host: "localhost",
  database: "base_politiqueando",
  user: "root",
  password: "",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected!");
});

const query = util.promisify(con.query).bind(con);

module.exports = query;