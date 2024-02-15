// Abrir filtro
const abrirFiltro = document.getElementById('boton-filtro');
const Filtros = document.getElementById('filtros');

abrirFiltro.addEventListener('click', function() {
    Filtros.classList.toggle('show');
    document.getElementById('overlay-filtro').style.display = Filtros.classList.contains('show') ? 'block' : 'none';
});

// Cerrar filtro
const botonParaAtrasProductosFiltro = document.getElementById('boton-atras-filtro');

botonParaAtrasProductosFiltro.addEventListener('click', function() {
    Filtros.classList.remove('show');
    document.getElementById('overlay-filtro').style.display = 'none';
});

// Funcion filtrar

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
                Filtros.classList.remove('show');// Ocultar el aside filtro
                document.getElementById('overlay-filtro').style.display = 'none';// Ocultar el overlay
            } else {
                producto.style.display = 'none'; // Ocultar el producto
                
            }
        });
    });
});






