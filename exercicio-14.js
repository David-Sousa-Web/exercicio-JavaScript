//essa questão foi para desenvolver uma função que botava um objeto 
//dentro do array

function objetoParaArray(objeto) {
    const resultado = []

    for (let chave in objeto)
        resultado.push([ chave , objeto[chave] ])

    return resultado
    
}