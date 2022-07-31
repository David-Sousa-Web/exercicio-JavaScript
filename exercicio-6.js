function inverso(valor){
    if(valor == "boolean" || "number"){
        return !valor || -valor
    }else{
        return `booleano ou numeros esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(true))

//resolução do professor que está totalmente certo, primeiro ele fez uma variavel constante que ja recebesse o tipo do valor
//depois ele fez um if com os retornos junto com um else if 

function inverso2(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso2('agua'))

// como meu ajudaram

function inverso3(valor) {
    if (valor == "boolean" || "number") {
      return typeof valor == "boolean" ? !valor : -valor;
    } else {
      return `booleano ou numeros esperados, mas o parâmetro é do tipo ${typeof valor}`;
    }
}

console.log(inverso3('bolo'))