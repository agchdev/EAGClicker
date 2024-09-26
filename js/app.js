// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let puntos = 0;
let valorCLick = 1;
let colores = ["#ff1605","#3cff00","#00f2ff","#fbff00"];
let posColores = 0;

// ELEMENTOS
const $galleta = $('#galleta');
const $imagen = $('#imagen');
const $galletaClick = $('#galletaClick');
const $rayos = $('#bgRayos');
const $body = $('#body');
const $caeGalleta = $('#galletacae');

// EVENTOS
$galleta.addEventListener('click', puntuar);

// FUNCIONES
function puntuar(event){
    if(posColores > 3) posColores = 0;
    $body.style.background = colores[posColores];
    posColores++;

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
    $galleta.classList.remove('pump1');
    $galleta.classList.add('pump1');
    $galletaClick.classList.remove('shake');
    $galletaClick.classList.add('shake');
    $rayos.classList.add('shake');
    setTimeout(function() {
        $galleta.classList.remove('shake');
        $galletaClick.classList.remove('shake');
        $rayos.classList.remove('shake');
        destello.classList.remove('flash');
        $galleta.classList.remove('pump1');
        $galleta.classList.remove('pump2');
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

    caeGalleta();
}

function caeGalleta(){
    let max = 0;
    screen.width = max;

    let posCaida = Math.random() * (max - 0) + 0;
    let nuevoCae = document.createElement('div');
    nuevoCae.innerHTML = `<img id="galletacae" src="img/EAG_Logo.png">`;
    nuevoCae.classList.add('caenGalletas');
    $caeGalleta.style.right = posCaida+"px";
    $body.appendChild(nuevoCae);
}