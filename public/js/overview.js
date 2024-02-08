// En la página de vista previa (overview)
const mostrarInformacionOverview = document.getElementById('mostrar-informacion-overview');

if (mostrarInformacionOverview) {
  // Obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productoId = urlParams.get('id');

  // Cargar la información del producto correspondiente
  function cargarInformacionProducto() {
    fetch('/productos.json')
      .then(response => response.json())
      .then(productos => {
        const producto = productos.find(prod => prod.id === productoId);
        if (producto) {
          mostrarInformacionOverview.innerHTML = `
            <h2>${producto.titulo}</h2>
            <img src="${producto.imagen}" alt="${producto.titulo}" />
            <p>${producto.detalles['texto-descripcion']}</p>
            
          `;
        } else {
          mostrarInformacionOverview.innerHTML = '<p>Producto no encontrado</p>';
        }
      })
      .catch(error => console.error('Error:', error));
  }
//funcion para cargar la informacion del producto
  cargarInformacionProducto();
} else {
  console.error('Elemento mostrarInformacionOverview no encontrado');
}
