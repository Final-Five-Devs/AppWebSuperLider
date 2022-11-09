const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const inventarioSchema = new Schema({

  
  nombre: String,
  precio: Number,
  descripcion:String,
  imagen: String,
  inventario: Number,
  inventarioResta:Number

});

const Inventario = mongoose.model('inventario',inventarioSchema)

module.exports = Inventario

