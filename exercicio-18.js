//Crie uma função que receba um array de produtos e retorne o total das despesas.



function despesasTotais(itens) {

  var total = 0

  for (let item of itens)
    total += item.preco
  return total
}

//outras formas

function despesasTotais(itens) {
  return itens
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

function despesasTotais(itens) {
  
  return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)

}