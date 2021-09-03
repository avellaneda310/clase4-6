const express = require ("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>servicios</title>
</head>
<body>
    <h1>Hola pagina Servicios</h1>
</body>
</html>
    
    `)

});

router.put("/:id", (req, res) =>{
    const params = req.params.id;
    res.send(`PUT de servicios id: ${params}`);
});

router.post("/", (req, res) =>{
    res.send(`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>post</title>
</head>
<body>
    <h1>Hola servicios.post</h1>
</body>
</html>
    `)
});

module.exports = router;