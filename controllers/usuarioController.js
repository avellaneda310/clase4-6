const Usuario = require("../models/usuario")

exports.crearUsuario = async (req, res) => {
   console.log("body => :", req.body);
   try {
       let usuario;
       usuario = new Usuario(req.body);
       await usuario.save();
       res.send("usuario guardado correctamente");
   } catch (error) {
       console.log(error);
       res.status(400).send("error al guardar");
       
   }
    
};
   
