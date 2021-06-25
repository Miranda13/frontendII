let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2021 - parseInt(prompt("Ingresa el año en que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  confirm("Te interesa javascript") ? datosPersona.interesPorJs = "Si" : datosPersona.interesPorJs = "No"
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let span = document.querySelectorAll("h3 span");
  let i = 0;
  for (const key in datosPersona) {
    span[i].innerText = datosPersona[key];
    i++
  }
}
/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.getElementById("fila");
  if(!!document.querySelector(".caja")) {
    let cajas = document.querySelectorAll(".caja");
    cajas.forEach(caja => fila.removeChild(caja))
  } else {
    listado.forEach(materia => {
      fila.innerHTML += `
      <div class = "caja">
        <img src="${materia.imgUrl}" alt=${materia.lenguajes}>
        <p class = "lenguajes"> Lenguajes: ${materia.lenguajes}</p>
        <p class = "bimestre"> Bimestre:  ${materia.bimestre}</p>
      </div>
      `
    });
  }
}

function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.querySelector(".sobre-mi").classList.toggle("sobre-mi-completo");
}
