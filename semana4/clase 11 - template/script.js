let datosUsuario = {
    nombre: '',
    telefono: '',
    contrasenia: '',
    hobbies: '',
    nacionalidad: ''
}

const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const pass = document.querySelector('#pass');
const tel = document.querySelector('#tel');
const checkboxes = document.getElementsByName('hobbies');
const radioButtons = document.getElementsByName('nacionalidad');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    datosUsuario.nombre = nombre.value.trim().toLowerCase();
   
    datosUsuario.contrasenia = pass.value.trim();

    datosUsuario.telefono = tel.value.trim();

    let checkboxesChecked = [];
    checkboxes.forEach(item => {
        
        if (item.checked) {
            checkboxesChecked.push(item.value.replace("hobbies", ""));
        }
    });
    datosUsuario.hobbies = checkboxesChecked.join(", ");
    
    radioButtons.forEach(radio => {
        if (radio.checked) {
            datosUsuario.nacionalidad = radio.value.replace("nacionalidad", "");
        }
    });
    
})