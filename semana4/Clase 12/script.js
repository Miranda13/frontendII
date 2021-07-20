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
    evento.preventDefault();
    if(validarNombre(nombre.value) != "error"){
        persona.nombre = nombre.value
    }
});

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(box){
        if (checkbox.value === 'hobbiesVideoJuegos' && checkbox.checked) {
            document.querySelector('#cocina').disabled = true;
        } else if (checkbox.value === 'hobbiesVideoJuegos' && !checkbox.checked) {
            document.querySelector('#cocina').disabled = false;
        }
        if (checkbox.value === 'hobbiesCocina' && checkbox.checked) {
            document.querySelector('#video').disabled = true;
        } else if (checkbox.value === 'hobbiesCocina' && !checkbox.checked) {
            document.querySelector('#video').disabled = false;
        }
    })
})

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
    const reg = new RegExp("^[a-zA-Z ]+$");
    //valido el largo del nombre y apellido + que haya completado ambos  
    if (completo[0].length > 1 && completo[1] && completo[1].length > 1 && nom.length < 150 && reg.test(nom)) {
        //normalizar
        respuesta = nom.trim().toLowerCase();
    } else {
        respuesta = "error";
    }
    return respuesta;
}

function validarPassword(pass) {
    let respuesta;
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