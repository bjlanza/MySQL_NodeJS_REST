const mysql = require("mysql2");

let config;
try {
  //config = require(path.join(__dirname, "./config/dbconfig.js"));
  config = require("./config/dbconfig.js");
} catch (e) {
  config = {};
}

// Crear un pool de MySQL
// Los pools de conexión reutilizan las conexiones entre las invocaciones,
// y manejan las conexiones caídas o expiradas automáticamente.
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
