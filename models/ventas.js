
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ventasSchema = new Schema({


  articulos: {
    type: Array,
    required: true
  },
  total: {
    type: Number,
    required: true,
    trim: true
  },
  
},
  {
    timestamps: true,
  }  
  
);

const Ventas = mongoose.model('ventas', ventasSchema)

module.exports = Ventas

