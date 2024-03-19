/**El temporizador debería comenzar desde un número especificado por el usuario y contar hacia abajo hasta llegar a cero. Cuando el temporizador llegue a cero, se debe mostrar un mensaje indicando que el tiempo ha terminado. */


const btnComenzar = document.getElementById('btnCuentaRegresiva');
const btnReiniciar = document.getElementById('reiniciar');
const timer = document.getElementById('muestraValor');

function iniciarTemporizador(){
    /* obtener elementos y luego valor actual */
    let valorInicialInput = document.getElementById('numInicialTemp');
    let valorInicial = parseInt(valorInicialInput.value);

    timer.textContent = valorInicial;

    let intervalo = setInterval(() => {
        /* decrementa el valor */
        valorInicial--;

        timer.textContent = valorInicial;

        /* Si el valor llega a cero se detiene el contador y muestra un mensaje */
        if(valorInicial == 0){
            clearInterval(intervalo)
            timer.textContent = `${valorInicial} - Tiempo finalizado`;
            btnComenzar.disabled = true;
            btnReiniciar.disabled = false;
        }

    }, 1000);
}

btnComenzar.addEventListener('click', iniciarTemporizador);