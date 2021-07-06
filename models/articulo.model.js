const sql = require("../dbcon.js");

// constructor
const Articulo = function (articulo) {
  this.cod = articulo.cod;
  this.nombre = articulo.nombre;
  this.marca = articulo.marca;
};
