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


// Oscurecer el fondo

document.getElementById('menu-toggle-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('menu-close-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

//Menu desplegable


//PRODUCTOS
let productos = document.getElementById('Boton-productos');
let submenu = document.getElementById('sub-menu');

productos.addEventListener('click', function() {
    if (submenu.classList.contains('show')) {
        submenu.classList.remove('show');
    } else {
        submenu.classList.add('show');
    }
});

//mesas de comedor y sillas
let mesas = document.getElementById('boton-mesas-comedor');
let submenuMesas = document.getElementById('sub-menu-mesas-comedor-sillas');

mesas.addEventListener('click', function() {
    if (submenuMesas.classList.contains('show')) {
        submenuMesas.classList.remove('show');
    } else {
        submenuMesas.classList.add('show');
    }
});
//boton de estilo industrial
let estiloIndustrial = document.getElementById('boton-estilo-industrial');
let submenuEstiloIndustrial = document.getElementById('listado-productos-industrial');
estiloIndustrial.addEventListener('click', function() {
    if (submenuEstiloIndustrial.classList.contains('show')) {
        submenuEstiloIndustrial.classList.remove('show');
    } else {
        submenuEstiloIndustrial.classList.add('show');
    }
});


//boton de Todo madera
let todoMadera = document.getElementById('boton-todo-madera');
let submenuTodoMadera = document.getElementById('listado-productos-todo-madera');
todoMadera.addEventListener('click', function() {
    if (submenuTodoMadera.classList.contains('show')) {
        submenuTodoMadera.classList.remove('show');
    } else {
        submenuTodoMadera.classList.add('show');
    }
});
