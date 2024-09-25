// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let puntos = 0;
let valorCLick = 1;

// ELEMENTOS
const $galleta = $('#galleta');
const $imagen = $('#imagen');

// EVENTOS
$galleta.addEventListener('click', puntuar);

// FUNCIONES
function puntuar(event){

    // Actualiza el puntaje 
    puntos += valorCLick; //Habrá que crear en un futuro una funcion

    // Animación shake
    $galleta.classList.remove('shake');
    $galleta.classList.add('shake');
    setTimeout(function() {
        $galleta.classList.remove('shake');
    }, 400);

    // Creo el div
    let nuevoP = document.createElement('div');

    // Añado el contenido
    nuevoP.innerHTML = `<p>+${valorCLick}</p>`;

    // Selecciono el contenedor del div
    $galleta.appendChild(nuevoP);

    setTimeout(function(){
        contenedor.removeChild(nuevoP);
    }, 300);
}