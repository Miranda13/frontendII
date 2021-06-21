function alternar () {    
    document.querySelector('body').classList.toggle('dark');     
}

let contenedor = document.querySelector(".contenedor");

PUBLICACIONES.forEach(publicacion => {
    contenedor.innerHTML+= `
    <div class="item">
        <img src="${publicacion.imagen}">
        <h2>${publicacion.titulo}</h2>
        <p>
        ${publicacion.descripcion}
        </p>
    </div>`;
})