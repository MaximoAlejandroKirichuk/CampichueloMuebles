const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Define tus rutas y lógica de la aplicación aquí

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
