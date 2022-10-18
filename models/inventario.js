const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const inventarioSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  price: Number,
  img: String,
  amount: Number
});

const Inventario = mongoose.model('inventario',inventarioSchema)

module.exports = Inventario

