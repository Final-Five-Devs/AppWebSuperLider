require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()

const mongoose = require('mongoose');
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Base de datos supermarket conectada")  )
    .catch( e => console.log(e))

const inventario = require('./models/inventario')    

const port = process.env.PORT || 5000;

const logger = require("morgan");
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

  app.disable('view cache');  

app.get("/api/test", (req, res) => {
  res.send("test");
});

app.get("/api/todoventa", (req ,res) =>{
    res.send(listTotal)
})

app.get("/api/traeinventario", async(req,res) => {
   const arrayInventario = await inventario.find()
   console.log(arrayInventario)
   res.send(arrayInventario)
})

const root = require('path').join(__dirname, './cliente/build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.listen(port, () => {
    console.log(`APP listening on port ${port}`)
  })  