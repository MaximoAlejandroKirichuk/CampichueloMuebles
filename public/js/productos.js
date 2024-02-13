// En la página de la lista de productos
const contenedorProductos = document.getElementById('contenedor-productos');

// Estoy cargando los productos de forma dinámica a través de un archivo JSON
if (contenedorProductos) {
    function cargarProductos() {
        fetch('/productos.json')
            .then(response => response.json())
            .then(productos => {
                productos.forEach(producto => {
                    contenedorProductos.innerHTML += `
                        <button  data-categoria="${producto.categoria.nombre}" class="producto" onclick="location.href='/html/overview.html?id=${producto.id}'">
                            <div>
                                <img src="${producto.imagen.principal}" alt="${producto.titulo}" />
                                <h3>${producto.titulo}</h3>
                            </div>
                        </button>
                    `;
                });
            })
            .catch(error => console.error('Error:', error));
    }
    

    // Función para cargar los productos
    cargarProductos();
} else {
    console.error('Elemento contenedorProductos no encontrado');
}

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

