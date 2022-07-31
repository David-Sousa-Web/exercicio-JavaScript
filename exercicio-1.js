function Comprimentar(nome){
    return `Olá, ${nome}! `
}

console.log(Comprimentar("Leonardo"))
console.log(Comprimentar("maria"))


//Outras formas do professor
function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

function cumprimentar(nome) {
    return "Olá, " + nome + "!"
}