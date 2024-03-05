/* DOM organizo el documento en forma de árbol 
representa atributos de un elemnto*/

let tituloNode = document.getElementById('titulo')
let miLista = document.getElementById('miLista')


let nuevoElemento = document.createElement('li')

let textoElemento = document.createTextNode('Elemento 5')
nuevoElemento.appendChild(textoElemento);
miLista.appendChild(nuevoElemento)
document.body.appendChild(miLista);