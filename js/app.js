// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let puntos = 0;
let valorCLick = 1;

// ELEMENTOS
const $galleta = $('#galleta');
const $imagen = $('#imagen');
const $plusOneText = $('#plusOneText');

// EVENTOS
$galleta.addEventListener('click', puntuar);

// FUNCIONES
function puntuar(event){

    // Actualiza el puntaje 
    puntos += valorCLick;

    // Animación shake
    $galleta.classList.remove('shake');
    $galleta.classList.add('shake');
    setTimeout(function() {
        $galleta.classList.remove('shake');
    }, 400);

    // Muestra el texto "+1"
    const { offsetX, offsetY } = event;
    console.log(offsetX);
    console.log(offsetY);
    $plusOneText.style.top = 200+offsetY;
    $plusOneText.style.left = 500+offsetX;
    $plusOneText.classList.remove('hidden');
    $plusOneText.textContent = `+${valorCLick}`; // Muestra la cantidad de puntos ganados

    // Oculta el texto después de 1 segundo
    setTimeout(function() {
        $plusOneText.classList.add('hidden');
    }, 1000);
}