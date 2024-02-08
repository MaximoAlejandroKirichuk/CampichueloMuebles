// En la página de la lista de productos
const contenedorProductos = document.getElementById('contenedor-productos');
//lo estoy cargando de una forma dinamica atraves de un archivo json
if (contenedorProductos) {
    function cargarProductos() {
        fetch('/productos.json')
            .then(response => response.json())
            .then(productos => {
                productos.forEach(producto => {
                    contenedorProductos.innerHTML += `
                        <button onclick="location.href='/html/overview.html?id=${producto.id}'">
                            <div class="producto">
                            <img src="${producto.imagen}" alt="${producto.nombre}" />
                            <h3>${producto.titulo}</h3>
                            </div>
                        </button>
                    `;
                });
            })
            .catch(error => console.error('Error:', error));
    }
//funcion para cargar los productos
    cargarProductos();
} else {
    console.error('Elemento contenedorProductos no encontrado');
}