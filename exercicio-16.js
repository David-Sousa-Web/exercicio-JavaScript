
//função para saber se o ano é bissexto


function checarAnoBissexto(ano) {

  const divisivelPorQuatro = ano % 4 == 0
  const divisivelPorCem = ano % 100 == 0
  const divisivelPorQuatrocentos = ano % 400 == 0

  return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos

}


//outra forma é checando fervereiro

function checarAnoBissexto(ano) {

  return new Date(ano, 1, 29).getDate() === 29;
  
}