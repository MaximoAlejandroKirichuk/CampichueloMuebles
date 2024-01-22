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



// Galeria de imagenes
    const imagenes = [
        'img/foto-carrusel mesa-sillas.png',
        'img/foto-carrusel-1.png',
        'img/foto-carrusel rack tv master.png',
        'img/foto-carrusel isla.png',
        // Agrega más rutas de imágenes según sea necesario
    ];

    let imagenActual = 0;

    function cambiarImagen(incremento) {
        imagenActual += incremento;
        if (imagenActual >= imagenes.length) {
            imagenActual = 0;
        }
        if (imagenActual < 0) {
            imagenActual = imagenes.length - 1;
        }
        document.getElementById('imagen-carrusel').src = imagenes[imagenActual];
    }

    // Cambia la imagen automáticamente cada 3.5 segundos
    setInterval(function() {
        cambiarImagen(0);
    }, 3500);

    // Inicializa la imagen del carrusel
    document.getElementById('imagen-carrusel').src = imagenes[imagenActual];

    // Agrega controladores de eventos para los botones
    document.getElementById('atras').addEventListener('click', function() {
        cambiarImagen(-1);
    });
    document.getElementById('adelante').addEventListener('click', function() {
        cambiarImagen(1);
    });



    //cargar productos
let productos = [];

fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

function cargarProductos(productos){
    const contenedorProductos = document.getElementById("contenedor-productos"); // Asegúrate de tener un elemento con este id en tu HTML

    productos.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <p>${producto.descripcion}</p>
        `;
        contenedorProductos.appendChild(main);
    });
}

