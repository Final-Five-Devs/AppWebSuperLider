const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const ventasSchema = new Schema({

  CodVenta: Number,
  descripcion:String,
  TotalVenta: Number
  
});

const Ventas = mongoose.model('ventas',ventasSchema)

module.exports = Ventas

