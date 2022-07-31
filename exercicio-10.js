function simboloMais(mais){
    let numero = ''
    for(let i = 0; i < mais; i++)
        numero += '+'
    return numero
}

console.log(simboloMais(50))

//outras formas mais faceis de responder


function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
}

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
}