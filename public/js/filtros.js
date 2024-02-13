// hice este archivo para que pueda ver el codigo de los filtros, la idea es que se pueda ver los filtros de una manera mas clara y sencilla.(ya que queda mucho espacio entre estos)

//cuando solucione este problema voy a corregir las rutas de mi aside.(que cuando el usuario haga click por ejemplo en el boton de todo madera, se despliegue justamente la categoria todo madera)
// Selecciona todos los botones de filtro
// Selecciona todos los botones de filtro
const botonesFiltro = document.querySelectorAll('.botones-filtro');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const categoria = boton.id;

        // Selecciona todos los divs de los productos
        const productos = document.querySelectorAll('.producto');

        // Itera sobre los productos y cambia su estilo de visualización en función de la categoría seleccionada
        productos.forEach(producto => {
            const categoriaProducto = producto.dataset.categoria; // Obtener la categoría del producto desde su dataset
            if (categoria === 'Todos' || categoria === categoriaProducto) {
                producto.style.display = 'block'; // Mostrar el producto
            } else {
                producto.style.display = 'none'; // Ocultar el producto
            }
        });
    });
});






