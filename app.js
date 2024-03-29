// Importa express y otras dependencias necesarias
const express = require('express');
const path = require('path');

// Crea una instancia de express
const app = express();

// Configura el puerto
const port = process.env.PORT || 3000;

// Configura el motor de vistas y la carpeta de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define tus rutas y lógica de la aplicación aquí

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
