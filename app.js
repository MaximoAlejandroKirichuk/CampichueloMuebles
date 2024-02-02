//imoporte express
const express = require('express');
//importe ejs
const ejs = require('ejs');
//cree una instancia de express
const app = express();

const port = 3000;

// Configurar el motor de vistas y establecer la carpeta de vistas
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    res.render('index');
});


// Establecer la carpeta 'public' como carpeta estática
app.use(express.static('public'));



app.get('/data/:productoId', (req, res) => {
    // Lógica para obtener datos del producto
    const productoId = req.params.productoId;
    res.send(`Mostrar datos del producto con ID ${productoId}`);
});

app.listen(port, () => {
    console.log(`El servidor está ejecutándose en http://localhost:${port}`);
});