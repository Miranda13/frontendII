let confirmacion = confirm("¿Quieres ver el modo oscuro?");
let tarjetas = document.querySelectorAll('div.item');
let parrafos = document.querySelectorAll('p');

if(confirmacion) {
    document.querySelector('body').classList.add('fondo-oscuro');
    document.querySelector('h1').classList.add('titulo-oscuro');
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.add('items-oscuros');
    });
    parrafos.forEach(parrafo => {
        parrafo.classList.add('textos');
    });
} 