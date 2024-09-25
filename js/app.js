// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let puntos = 0;

// ELEMENTOS
const $galleta = $('#galleta');

// EVENTOS
$galleta.addEventListener('click', puntuar);

// FUNCIONES
function puntuar(){
    $galleta.classList.remove('shake');
    $galleta.classList.add('shake');
    setTimeout(function() {
        $galleta.classList.remove('shake');
    }, 400);
}