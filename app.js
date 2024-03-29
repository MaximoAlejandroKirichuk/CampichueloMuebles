// Importar express
const express = require('express');
// Importar ejs
const ejs = require('ejs');
// Crear una instancia de express
const app = express();

const port = 3000;

// Configurar el motor de vistas y establecer la carpeta de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render('index');
});

// Carpeta 'public' como carpeta estática
app.use(express.static('public'));

app.get('/data/:productoId', (req, res) => {
    // Lógica para obtener datos del producto
    const productoId = req.params.productoId;
    res.send(`Mostrar datos del producto con ID ${productoId}`);
});

app.listen(port, () => {
    console.log(`El servidor está ejecutándose en http://localhost:${port}`);
});
