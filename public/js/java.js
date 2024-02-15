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




