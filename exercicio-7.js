
//lembrar de usar o && quando for duas coisas

function estaEntre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

//resolução do professor


function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}