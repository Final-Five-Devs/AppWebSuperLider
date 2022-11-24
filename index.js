require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()

// Base de datos 

const mongoose = require('mongoose');


console.log(process.env.MONGO_URI)

// Se crea función para llamar la base de datos en el Front
const connectDatabase =()=>{
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Base de datos supermarket conectada")  )
    .catch( e => console.log(e))
}

connectDatabase();

const inventario = require('./models/inventario')    

// const port = process.env.PORT || 5000;
const port = process.env.PORT;


 
const logger = require("morgan");
const cors = require("cors");

app.use(logger("dev"));

// Para crear CRUD con Express 

app.use(express.json());   
const productos=require("./routes/products")
const ventastotales=require("./routes/sales")
app.use('/api',productos)
app.use('/api',ventastotales)
module.exports=app


app.use(express.urlencoded({ extended: false }));
app.use(cors());

  app.disable('view cache');  


const root = require('path').join(__dirname, './Front/public')


app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

// SERVER---->>> Se realiza conexión al puerto 

app.listen(port, () => {
    console.log(`APP listening on port ${port}`)
  })  



