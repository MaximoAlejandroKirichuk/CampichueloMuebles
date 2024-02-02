    //cargar productos

    fetch('/productos.json')
    .then(response => response.json())
    .then(productos => {
        const contenedorProductos = document.getElementById('contenedor-productos');
        productos.forEach(producto => {
            contenedorProductos.innerHTML += `
                <div>
                    <img src="${producto.imagen}" alt="${producto.nombre}" />
                    <h3>${producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <p>${producto.descripcion}</p>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
