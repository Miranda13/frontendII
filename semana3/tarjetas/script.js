let imagenes = document.querySelectorAll("img");
let vinculos = document.querySelectorAll(".rutas-img");

imagenes.forEach((imagen, index) => {
    let externo = prompt("Ingrese una url de imagen");
    vinculos[index].setAttribute("href",externo);
    vinculos[index].setAttribute("target", "_blank")
    imagen.setAttribute("src",externo);
});

/* ETAPA 3
- Nodo padre: contenedor
- Nodo hijo repetitivo: tarjeta
- Explicación: el contenedor es el que encapsulara todas las etiquetas html, la tarjeta es la 
etiqueta que agrupa las repeticiones.
*/