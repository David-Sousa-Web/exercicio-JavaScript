function repetir(entrada, digite){
    const src = []
    for(let i = 0; i < digite; i++)
        src.push(entrada)    
    return src

}

console.log(repetir("ashley", 3))

//outra forma de fazer

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}