function maiorouIgual(primeiro, segundo){
    if(primeiro > segundo){
        return true
    }else{
        return false
    }
}

console.log(maiorouIgual(2, 1))
console.log(maiorouIgual(1, "1"))
console.log(maiorouIgual(1, 3))


//resolução correta pois tive falta de atenção no enunciado!!!

function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}