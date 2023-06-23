const botonMenu = document.querySelector('.boton-menu');
const menuPrincipal = document.querySelector('.menu-principal');

botonMenu.addEventListener('click', mostrarOcultarMenu);

function mostrarOcultarMenu() {
    menuPrincipal.classList.toggle('mostrar-menu');
}

botonMenu.addEventListener('mouseenter', function () {
    menuPrincipal.classList.add('mostrar-menu');
});

