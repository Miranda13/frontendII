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
const MSJ_WIN_BOT = "El juego lo ganó la máquina";
const MSJ_WIN_USER = "El juego lo ganó el usuario"
const MSJ_WIN_DRAW = "El juego empató, vuelve a jugar";
const INTENTS = 3;

let intMaquina = 0;
let intUsuario = 0;

for (let index = 0; index < INTENTS; index++) {
    let eleccion = parseInt(prompt("Escribe 1: piedra, 2: papel ó 3: tijera: "));
    let maquina = parseInt(Math.random()*3+1);
    while(isNaN(eleccion) || eleccion <= 0 || eleccion > 3) {
        eleccion = parseInt(prompt("Por favor digita el número 1: piedra, 2: papel ó 3: tijera: "));
    }
    while (maquina === eleccion || isNaN(eleccion) || eleccion <= 0 || eleccion > 3) {
        alert(MSJ_WIN_DRAW);
        maquina = parseInt(Math.random()*3+1);
        eleccion = parseInt(prompt("Escribe 1: piedra, 2: papel ó 3: tijera: "));
    }
    if ( (maquina === 1 && eleccion === 3) || (maquina === 2 && eleccion === 1) || (maquina === 3 && eleccion === 2)) {
        intMaquina += 1;
        alert(MSJ_WIN_BOT);
    } else {
        intUsuario +=1;
        alert(MSJ_WIN_USER);
    }
}

if (intMaquina > intUsuario) {
    alert(MSJ_WIN_BOT);
} else if ((intMaquina < intUsuario) && (intUsuario > empates)) {
    alert(MSJ_WIN_USER);
}
/* 
Crear una función que reciba un número que será la cantidad de aciertos del
usuario sobre el total de casillas disponibles. La función deberá devolver el
monto del premio, el cual es proporcional al número de aciertos. */

/* Crear un programa que consista en una apuesta donde el usuario tenga que
ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre
en pantalla y se calcule aleatoriamente un resultado numérico con 4 posibles
casos de premios que pueda ganar: si el resultado es 0, gana $1000, si es 1,
gana $10000; si es 2 gana $10000, y si es 3 gana $100000. */

/* Crear una función que sortee un numero random ganador, luego haga un ciclo
desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa
iteración. Pero en el caso del número que sea el ganador, imprimir por consola
“Numero ganador:” seguido del número. */

