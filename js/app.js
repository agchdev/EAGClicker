// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let puntos = 0;
let valorCLick = 1;
let colores = ["#ff1605","#3cff00","#00f2ff","#fbff00"];
let colores1 = ["#3cff00","#00f2ff","#fbff00","#ff1605"];
let posColores = 0;
let pClick = 100;
let pCerve = 200;
let pMonster = 500;
let pCoca = 200;
let pVape = 200;
let pPorro = 500;

// ELEMENTOS
const $galleta = $('#galleta');
const $imagen = $('#imagen');
const $galletaClick = $('#galletaClick');
const $rayos = $('#bgRayos');
const $body = $('#body');
const $caeGalleta = $('#galletacae');
const $puntos = $('#puntos');
const $titulo = $('#titulo');
const $precioClick = $('#precioClick');
const $precioCerveza = $('#precioCerveza');
const $precioMonster = $('#precioMonster');
const $precioCoca = $('#precioCoca');
const $precioVape = $('precioVape');
const $precioPorro = $('#precioPorro');

// EVENTOS
$galleta.addEventListener('click', puntuar);
$precioClick.addEventListener('click', clickear);
$precioCerveza.addEventListener('click', beberCerveza);
$precioMonster.addEventListener('click', beberMonster);
$precioPorro.addEventListener('click', fumar);
$precioCoca.addEventListener('click', esnifar);
$precioVape.addEventListener('click', vapear);

// FUNCIONES
function puntuar(event){
    if(posColores > 3) posColores = 0;
    $body.style.background = colores[posColores];
    $titulo.style.color = colores1[posColores];
    posColores++;

    const x = event.pageX; // Coordenada X del clic
    const y = event.pageY; // Coordenada Y del clic
    // Actualiza el puntaje 
    puntos += valorCLick; //Habrá que crear en un futuro una funcion
    $puntos.innerHTML = `<p>${puntos}</p>`;
    let destello = document.createElement('div');
    destello.classList.add('flash');
    $body.appendChild(destello);

    // Animación shake
    // $destello.classList.remove('flash');
    // $destello.classList.add('flash');
    // $galleta.classList.remove('shake');
    $galleta.classList.add('shake');
    // $puntos.classList.remove('shake');
    $puntos.classList.add('shake');
    // $titulo.classList.remove('shake');
    $titulo.classList.add('shake');
    // $galletaClick.classList.remove('shake');
    $galletaClick.classList.add('shake');
    $rayos.classList.add('shake1');
    setTimeout(function() {
        $galleta.classList.remove('shake');
        $galletaClick.classList.remove('shake');
        $puntos.classList.remove('shake');
        $titulo.classList.remove('shake');
        $rayos.classList.remove('shake1');
        destello.classList.remove('flash');
    }, 400);
    setTimeout(function() {
        destello.classList.remove('flash');
        destello.remove();
    }, 300);

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
    let max = 1920;
    screen.width = max;
    console.log(max);

    let posCaida = Math.random() * (max - 0) + 0;
    let nuevoCae = document.createElement('div');
    console.log(posCaida);
    nuevoCae.innerHTML = `<img id="galletacae" style="width: 10%; max-width: 100%;" src="img/EAG_Logo.png">`;
    nuevoCae.classList.add('caenGalletas');
    nuevoCae.style.right = -posCaida+"px";
    $body.appendChild(nuevoCae);
    setTimeout(function(){
        $body.removeChild(nuevoCae);
    }, 1000);
}

function clickear(){
    if (puntos>pClick) {
        console.log("No tienes dinero!");
        valorCLick*2;
        pClick*2;
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p class="pPobre">POBRE</p>`;
        mensajePobre.classList.add('pobre')
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }
}

function beberCerveza(){
    if (puntos>pCerve) {
        console.log("No tienes dinero!");
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p>POBRE</p>`;
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }
}

function beberMonster(){
    if (puntos>pMonster) {
        console.log("No tienes dinero!");
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p>POBRE</p>`;
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }
}

function esnifar(){
    if (puntos>pCoca) {
        console.log("No tienes dinero!");
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p>POBRE</p>`;
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }
}

function fumar(){
    if (puntos>pPorro) {
        console.log("No tienes dinero!");
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p>POBRE</p>`;
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }
}

function vapear(){
    if (puntos>pVape) {
        console.log("No tienes dinero!");
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p>POBRE</p>`;
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }
}
// PREDETERMINADOS
