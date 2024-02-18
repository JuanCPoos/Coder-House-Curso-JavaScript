/* Ejer 1 -> 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si.

A. Esta lloviendo
B. Esta soleado

En caso de estar lloviendo debe devolver por consola un mensaje que diga "Lleva paraguas"
En caso de estar soleado debe devolver por consola un mensaje que diga "No olvides tus shorts" */

let resptaUsuario = prompt('Si está lloviendo, presione A, en caso que no llueva presione B');
resptaUsuario = resptaUsuario.toUpperCase();
console.log(resptaUsuario);

if(resptaUsuario == 'A'){
    console.log('Lleva paraguas');
}else if(resptaUsuario == 'B'){
    console.log('No olvides tus shorts');
}else{
    console.log('entrada incorrecta')
}

/* Ejer 2 -> 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si.

A. Cometiste un delito
B. Eres inocente


En caso de estar haber cometido un delito debe devolver por consola un mensaje que diga "Iras a la cárcel"
En caso de ser inocente debe devolver por consola un mensaje que diga "Puedes ir a casa" */

let entrada = prompt('Si cometió un delito presione A, en caso que no presione B');
entrada = entrada.toUpperCase();

if(entrada == 'A'){
    console.log('irás a la carcel');
}else if(entrada == 'B'){
    console.log('puedes ir a casa');
}else{
    console.log('entrada incorrecta')
}

/* Ejercicio Avanzado -> 
1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.
Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo. */

let fechaEvaluar = 2022;
let copasTotal = 21;
let copas = []; // número de copas vividas según información ingresada
let añoNacimiento = parseFloat(prompt('ingrese su año de nacimiento'));

function calculo(param2){
    return copasVividas = parseInt((fechaEvaluar - param2) / 4 + 1)
}   

calculo(añoNacimiento);
console.log('Cantidad de copas vividas desde su nacimiento: '+ copasVividas)
