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


// boton de Todo madera
let botonTodoMadera = document.getElementById('boton-estilo-todo-madera');
let submenuTodoMaderaLista = document.getElementById('listado-productos-todo-madera');

botonTodoMadera.addEventListener('click', function () {
    submenuTodoMaderaLista.classList.toggle('show');
});



//BOTON ATRAS MENU
let botonAtras = document.getElementById('boton-volver-atras-productos');
botonAtras.addEventListener('click', function(){
    if (submenu.classList.remove('show')) {
        submenu.classList.contains('show');
    } else {
        submenu.classList.remove('show');
    }
});

//BOTON ATRAS PRODUCTOS ESTILOS
let botonAtrasProductosEstilos =document.getElementById('boton-para-atras-productos-estilos')
botonAtrasProductosEstilos.addEventListener('click', function() {
    if (submenuMesas.classList.remove('show')) {
        submenuMesas.classList.contains('show');
    } else {
        submenuMesas.classList.remove('show');
    }
});

//BOTON ATRAS PRODUCTOS ESTILO INDUSTRIAL
let botonAtrasProductosEstiloIndustrial= document.getElementById('boton-volver-atras-productos-estilos-estilo-industrial')
botonAtrasProductosEstiloIndustrial.addEventListener('click', function(){
    if (submenuEstiloIndustrial.classList.remove('show')) {
        submenuEstiloIndustrial.classList.contains('show');
    } else {
        submenuEstiloIndustrial.classList.remove('show');
    }
})


//BOTON ATRAS PRODUCTOS ESTILO TODO MADERA
let botonAtrasProductosEstiloTodoMadera = document.getElementById('boton-volver-atras-productos-estilos-todo-madera')
botonAtrasProductosEstiloTodoMadera.addEventListener('click',function(){
    botonAtrasProductosEstiloTodoMadera.addEventListener('click', function () {
        submenuTodoMaderaLista.classList.remove('show');
    });
})    
