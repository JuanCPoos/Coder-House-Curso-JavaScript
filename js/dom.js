
let titulo = document.getElementById("titulo")
titulo.innerHTML = "modificando desde javascript";

let parrafo = document.getElementById("parrafo")
parrafo.style.color = "red"

// nuevo elemento

let nuevoElemento = document.createElement('p')
nuevoElemento.innerHTML = 'nuevo parrafo'

document.body.appendChild(nuevoElemento)
