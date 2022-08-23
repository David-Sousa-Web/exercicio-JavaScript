//crie uma função que receba um array com uma quantidade indeterminada
//de números e retorne a média simples desses números.


function calcularMedia(numeros) {
  const quantidadeDeNumeros = numeros.length
  let somaTotal = 0

  for(numero of numeros) {
    somaTotal += numero
  }

  return somaTotal / quantidadeDeNumeros
}
  

//outro jeito

function calcularMedia(numeros) {
  
  const quantidadeDeNumeros = numeros.length
  const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)

  return somaTotal / quantidadeDeNumeros
}