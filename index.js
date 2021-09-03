const express = require("express");
const app = express();
const conectarDB = require("./config/db");


require("dotenv").config({path:`./config/variables.env`});
const port = process.env.PORT_SERVER || 4500;

conectarDB();//llama a conectar

//lectura/habilitar express.json
app.use(express.json({ extend: true }));

const home = require("./routes/home");
const servicios = require("./routes/servicios");
const posteos = require("./routes/posteos");

const usuarios = require("./routes/Usuarios");
const usuarioController = require("./controllers/usuarioController");

//rutas

app.use("/", home);
app.use("/servicios", servicios);
app.use("/", posteos);
app.use("/api/usuario", usuarios);




app.listen(port, () =>{
    console.log(`servidor en port ${port}`)
});

