// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let puntos = 0;
let valorCLick = 1;

// ELEMENTOS
const $galleta = $('#galleta');
const $imagen = $('#imagen');
const $galletaClick = $('#galletaClick');

// EVENTOS
$galleta.addEventListener('click', puntuar);

// FUNCIONES
function puntuar(event){

    const { offsetX, offsetY } = event;
    // Actualiza el puntaje 
    puntos += valorCLick; //Habrá que crear en un futuro una funcion

    // Animación shake
    $galleta.classList.remove('shake');
    $galleta.classList.add('shake');
    $galletaClick.classList.remove('shake');
    $galletaClick.classList.add('shake');
    setTimeout(function() {
        $galleta.classList.remove('shake');
        $galletaClick.classList.remove('shake');
    }, 400);

    // Creo el div
    let nuevoP = document.createElement('div');

    // Añado el contenido
    nuevoP.innerHTML = `<p>+${valorCLick}</p>`;

    // Selecciono el contenedor del div
    $galletaClick.appendChild(nuevoP);

    $galletaClick.style.top = offsetY+"px";
    $galletaClick.style.left = 500+offsetX+"px";

    setTimeout(function(){
        $galletaClick.removeChild(nuevoP);
    }, 600);
}