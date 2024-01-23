const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index'); // Asegúrate de que este nombre coincide con el de tu archivo HTML sin la extensión
});

app.get('/data/:productoId', (req, res) => {
  // Lógica para obtener datos del producto
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});