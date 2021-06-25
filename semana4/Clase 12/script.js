const form = document.querySelector('form');
const btn = document.querySelector('button');

const nombre = document.querySelector('#nombre');
const ayudaNombre = document.querySelector('#ayudaNombre');
const ayudaPass = document.querySelector('#ayudaPass');
const pass = document.querySelector('#pass');
const tel = document.querySelector('#tel');
const checkboxes = document.getElementsByName('hobbies');
const radioButtons = document.getElementsByName('nacionalidad');

const persona = {
    nombre: "",
    password: "",
    telefono: "",
    hobbies: [],
    nacionilad: ""
}

form.addEventListener('submit', function (evento) {
    // evento.preventDefault();
    if(validarNombre(nombre.value) != "error"){
        persona.nombre = nombre.value
    }


});

nombre.addEventListener('keyup', function(e){
    if(validarNombre(nombre.value)==="error"){
        nombre.classList.add('error');
        ayudaNombre.classList.remove('noVisible')
    }else{
        nombre.classList.remove('error');
        ayudaNombre.classList.add('noVisible')
    }
});


function validarNombre(nom) {
    let respuesta;
    let completo = nom.split(" "); //esto es un array
    //valido el largo del nombre y apellido + que haya completado ambos  
    if (completo[0].length > 2 && completo[1] && completo[1].length > 2) {

        //normalizar
        respuesta = nom.trim().toLowerCase();
    } else {
        respuesta = "error";
    }

    return respuesta;
}

function validarPassword(pass) {
     //esto es un array
    //valido el largo del nombre y apellido + que haya completado ambos  
    if (pass.length > 6) {
        //normalizar
        respuesta = pass;
    } else {
        respuesta = "error";
    }
    return respuesta;
}

pass.addEventListener('keyup', function(e){
    console.log(e);
    if(validarPassword(pass.value)==="error"){
        pass.classList.add('error');
        ayudaPass.classList.remove('noVisible')
    }else{
        nombre.classList.remove('error');
        ayudaPass.classList.add('noVisible')
    }
});