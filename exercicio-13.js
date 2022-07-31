function filtrarNumeros(array) {
    const resultado = []
    for(let item of array)
        if(typeof item === "number")
        resultado.push(item)
    return resultado
}

//resolução mais simples de como tirar um numero do array

function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}