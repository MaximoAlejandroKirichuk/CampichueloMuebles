//abrir el boton de menu
class Menu {
    constructor(menuId, toggleButtonId) {
        this.menuElement = document.getElementById(menuId);
        this.toggleButton = document.getElementById(toggleButtonId);

        this.toggleButton.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        if (this.menuElement.classList.contains('show')) {
            this.menuElement.classList.remove('show');
        } else {
            this.menuElement.classList.add('show');
        }
    }
}

// Uso de la clase
const mainMenu = new Menu('main-menu', 'menu-toggle-button');

// Cerrar el aside
document.getElementById('menu-close-button').addEventListener('click', function() {
    document.getElementById('main-menu').classList.remove('show');
});



$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass('show');
    });

    return false;
});

    //cargar productos

fetch('productos.json')
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
