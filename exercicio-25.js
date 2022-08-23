//Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
//strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function buscarPalavrasSemelhantes(inicio, palavras) {
  const resultado = []
  
  for (let palavra of palavras)
    if (palavra.includes(inicio))
      resultado.push(palavra)
  return resultado
}
  
//outro jeito

function buscarPalavrasSemelhantes(inicio, palavras) {
  return palavras.filter(palavra => palavra.includes(inicio))
}