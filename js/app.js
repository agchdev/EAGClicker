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
const $rayos = $('#bgRayos');
const $body = $('#body');

// EVENTOS
$galleta.addEventListener('click', puntuar);

// FUNCIONES
function puntuar(event){

    const x = event.pageX; // Coordenada X del clic
    const y = event.pageY; // Coordenada Y del clic
    // Actualiza el puntaje 
    puntos += valorCLick; //Habrá que crear en un futuro una funcion

    
    let destello = document.createElement('div');
    destello.classList.add('flash');
    $body.appendChild(destello);

    // Animación shake
    // $destello.classList.remove('flash');
    // $destello.classList.add('flash');
    $galleta.classList.remove('shake');
    $galleta.classList.add('shake');
    $galletaClick.classList.remove('shake');
    $galletaClick.classList.add('shake');
    $rayos.classList.add('shake');
    setTimeout(function() {
        $galleta.classList.remove('shake');
        $galletaClick.classList.remove('shake');
        $rayos.classList.remove('shake');
        destello.classList.remove('flash');
    }, 400);

    // Creo el div
    let nuevoP = document.createElement('div');

    // Añado el contenido
    nuevoP.innerHTML = `<p>+${valorCLick}</p>`;
    

    // Selecciono el contenedor del div
    $galletaClick.appendChild(nuevoP);
    $galletaClick.style.left = `${x}px`;
    $galletaClick.style.top = `${y}px`;


    setTimeout(function(){
        $galletaClick.removeChild(nuevoP);
    }, 2000);
}