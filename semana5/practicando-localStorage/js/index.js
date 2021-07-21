/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/
const comments = document.querySelector('.comentarios');
const contenido = document.querySelector('#comentario');
const form = document.forms[0];
let comentarios = [];

if(localStorage.getItem('comentarios')) {
    comentarios = JSON.parse(localStorage.getItem('comentarios'));
    render(comentarios);
}

function render (com) {
    if (com.length > 1) {
        com.forEach(comentario => {
            comments.innerHTML += `<p> ${comentario} </p>`
        });
    } else {
        comments.innerHTML += `<p> ${com} </p>`
    }
    
}

form.addEventListener('submit', () => {
    comentarios.unshift(contenido.value);
    localStorage.setItem('comentarios',JSON.stringify(comentarios));
    render(comentarios[0]);
})


