// hice este archivo para que pueda ver el codigo de los filtros, la idea es que se pueda ver los filtros de una manera mas clara y sencilla.(ya que queda mucho espacio entre estos)

//cuando solucione este problema voy a corregir las rutas de mi aside.(que cuando el usuario haga click por ejemplo en el boton de todo madera, se despliegue justamente la categoria todo madera)

// Filtrar por categoría
function generarBotonesFiltro(productos) {
    const categorias = [...new Set(productos.map(producto => producto.categoria.nombre))];

    categorias.forEach(categoria => {
        const botonFiltro = `<button class="" id="${categoria}">${categoria}</button>`;
        $('#lista-filtros').append(botonFiltro);
    });

    // Añade un controlador de eventos de clic a cada botón
    $('#lista-filtros button').each((_, boton) => {
        $(boton).on('click', () => {
            // Obtén la categoría del botón que se hizo clic
            const categoria = boton.id;

            // Oculta todos los productos
            $('.producto').hide();

            // Muestra solo los productos que coinciden con la categoría seleccionada
            $(`.producto.${categoria}`).show();
        });
    });
}