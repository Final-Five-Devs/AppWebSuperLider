const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const inventarioSchema = new Schema({

  id: Number,
  nombre: String,
  precio: Number,
  descripcion:String,
  imagen: String,
  amount: Number

});

const Inventario = mongoose.model('inventario',inventarioSchema)

module.exports = Inventario

