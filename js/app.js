// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let puntos = 0;
let valorCLick = 25000;
let colores = ["#ff1605","#3cff00","#00f2ff","#fbff00"];
let colores1 = ["#3cff00","#00f2ff","#fbff00","#ff1605"];
let posColores = 0;
let pClick = 100;
let pCerve = 200;
let pMonster = 50000;
let pCoca = 200;
let pVape = 200;
let pPorro = 500;

let mejoraCerve = 1;

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
const $precioVape = $('#precioVape');
const $precioPorro = $('#precioPorro');

console.log($precioVape);
// EVENTOS
document.addEventListener('DOMContentLoaded', function() {
    $precioClick.innerHTML=`CLICK x2 [${pClick}]`;
    $precioCerveza.innerHTML=`CERVEZA DEL BAR [${pCerve}]`;
    $precioCoca.innerHTML=`COCAINA [${pCoca}]`;
    $precioMonster.innerHTML=`MONSTER JAMÓN [${pMonster}]`;
    $precioPorro.innerHTML=`VERDE [${pPorro}]`;
    $precioVape.innerHTML=`VAPER [${pVape}]`;
    $galleta.addEventListener('click', puntuar);
    $precioClick.addEventListener('click', clickear);
    $precioCerveza.addEventListener('click', beberCerveza);
    $precioMonster.addEventListener('click', beberMonster);
    $precioPorro.addEventListener('click', fumar);
    $precioCoca.addEventListener('click', esnifar);
    $precioVape.addEventListener('click', vapear);
});
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

    caeGalleta(valorCLick);
}

function caeGalleta(valor){
    let max = 1920;
    let valorClickparaDibujo = 0;
    screen.width = max;
    if (valor>50) {
        valorClickparaDibujo =50;
    }else{
        valorClickparaDibujo = valor;
    }
    for (let i = 0; i < valorClickparaDibujo; i++) {
        let posCaidaX = Math.random() * (max - 0) + 0;
        let posCaidaY = Math.random() * (max - 0) + 0;
        let nuevoCae = document.createElement('div');
        nuevoCae.innerHTML = `<img id="galletacae" style="width: 10%; max-width: 100%;" src="img/EAG_Logo.png">`;
        nuevoCae.classList.add('caenGalletas');
        nuevoCae.style.right = -posCaidaY+"px";
        nuevoCae.style.top = -posCaidaX+"px";
        $body.appendChild(nuevoCae);
        setTimeout(function(){
            $body.removeChild(nuevoCae);
        }, 1000);
    }
    
}


function clickear(){
    console.log(puntos+"  "+pClick);
    if (puntos>=pClick) {
        valorCLick*=2;
        puntos-=pClick;
        pClick*=4;
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p class="pPobre">POBRE</p>`;
        mensajePobre.classList.add('pobre')
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }
    
    $precioClick.innerHTML=`CLICK x2 [${pClick}]`;
    
    // Creo el div
    let nuevoP = document.createElement('div');
    // Añado el contenido
    nuevoP.innerHTML = `<p>+${valorCLick}</p>`;

    $puntos.innerHTML = `<p>${puntos}</p>`;
}

function beberCerveza(){
    if (puntos>=pCerve) {
        puntos-=pCerve;
        pCerve*=4;
        puntosAuto();
        console.log("No tienes dinero!");
    }else{
        let mensajePobre = document.createElement('div');
        mensajePobre.innerHTML = `<p class="pPobre">POBRE</p>`;
        mensajePobre.classList.add('pobre')
        $body.appendChild(mensajePobre);

        setTimeout(function(){
            $body.removeChild(mensajePobre);
        }, 500);
    }

    $precioCerveza.innerHTML=`CERVEZA DEL BAR [${pCerve}]`;

    // Creo el div
    let nuevoP = document.createElement('div');
    // Añado el contenido
    nuevoP.innerHTML = `<p>+${valorCLick}</p>`;

    $puntos.innerHTML = `<p>${puntos}</p>`;
}

function beberMonster(){
    if (puntos>=pMonster) {
        if (puntos>=pMonster) {
            puntos-=pMonster;
            pMonster*=2;
            monsterEffect();
        }
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

function esnifar(){
    if (puntos>pCoca) {
        console.log("No tienes dinero!");
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

function fumar(){
    if (puntos>pPorro) {
        console.log("No tienes dinero!");
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

function vapear(){
    if (puntos>pVape) {
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



function puntosAuto() {
    mejoraCerve++;
    nIntervId = setInterval(sumarPuntos, 1000);
}

function sumarPuntos() {
    puntos+=mejoraCerve;
    $puntos.innerHTML = `<p>${puntos}</p>`;
    console.log(puntos);
    // Creo el div
    let nuevoPauto = document.createElement('div');

    // Añado el contenido
    nuevoPauto.innerHTML = `<p>+${mejoraCerve}</p>`;
    

    // Selecciono el contenedor del div
    $galletaClick.appendChild(nuevoPauto);
    $galletaClick.style.left = `50%`;
    $galletaClick.style.top = `50%`;

    setTimeout(function(){
        $galletaClick.removeChild(nuevoPauto);
    }, 2000);

    caeGalleta(mejoraCerve);
}

function monsterEffect(){
    valorCLick*=10;
    // Creo el div
    let monsterDiv = document.createElement('div');

    // Añado el contenido
    monsterDiv.innerHTML = `<img class="monster1" src="img/monster.png" alt="">
                            <img class="monster2" src="img/monster.png" alt="">`
    setTimeout(function(){
        valorCLick/=10;
    },10000);
}
// PREDETERMINADOS

