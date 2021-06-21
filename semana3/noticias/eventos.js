let nacionales= document.querySelector(".nacional");
let internacionales= document.querySelector(".internacional");

noticias.forEach(noticia => {
  if(noticia.tipoNacional) {
    nacionales.innerHTML += `
    <div class = "noticia">
      <img src="${noticia.imgUrl}">
      <h2>${noticia.titulo}</h2>
      <p>${noticia.descripcion}</p>
      <p>${noticia.fecha}</p>
    </div>`
  } else {
    internacionales.innerHTML += `
    <div class = "noticia">
      <img src="${noticia.imgUrl}">
      <h2>${noticia.titulo}</h2>
      <p>${noticia.descripcion}</p>
      <p>${noticia.fecha}</p>
    </div>`
  }
    
  })