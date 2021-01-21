var capturar = ""
var quantidade = document.getElementById('quantity')

function input () {
    capturar = quantidade.value
    resultado = calculo(capturar).toFixed(2)

    document.getElementById('resultado-area').innerHTML = `R$ ${resultado}`
    quantidade.value = ""
}

function calculo (gr) {

    let mols = gr * 22
    let resultado = mols * 2.57

    return resultado
}