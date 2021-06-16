/* 
Realizar un script que permita sumar un array de números consecutivamente; de forma
que se sume el primer número con el segundo y lo imprima por consola; luego tomar este
resultado y sumarle el tercer número, y así hasta terminar de recorrer el array:
 */
function sumarArreglos (array) {
    let suma = array[0];
    console.log(suma);
    for (let i = 1; i < array.length; i++) {
        suma += array[i];
        console.log(suma);
    }
}

sumarArreglos([-5,0,-4,6]);

/* Piedra, papel o tijera */

let empates = 0;
let intMaquina = 0;
let intUsuario = 0;

for (let index = 0; index < 3; index++) {
    let eleccion = parseInt(prompt("Escribe 1: piedra, 2: papel ó 3: tijera: "));
    let maquina = parseInt(Math.random()*3+1);
    while(isNaN(eleccion) || eleccion <= 0 || eleccion > 3) {
        eleccion = parseInt(prompt("Por favor digita el número 1: piedra, 2: papel ó 3: tijera: "));
    }
    while (maquina === eleccion) {
        alert("El juego empató vuelve a jugar");
        maquina = parseInt(Math.random()*3+1);
        eleccion = parseInt(prompt("Escribe 1: piedra, 2: papel ó 3: tijera: "));
    }
    if ( (maquina === 1 && eleccion === 3) || (maquina === 2 && eleccion === 1) || (maquina === 3 && eleccion === 2)) {
        intMaquina += 1;
        alert("El juego lo ganó la máquina");
    } else {
        intUsuario +=1;
        alert("El juego lo ganó el usuario")
    }
}

if ((intMaquina > intUsuario) && (intMaquina > empates)) {
    alert("La máquina ganó");
} else if ((intMaquina < intUsuario) && (intUsuario > empates)) {
    alert("El usuario ganó");
}

