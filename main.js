function calcularNota() {
  var nomeAluno = document.getElementById('nome').value
  var mediaEscolar = parseInt(document.getElementById('media').value)

  var notaUnidade1 = parseFloat(document.getElementById('unidade1').value)
  var notaUnidade2 = parseFloat(document.getElementById('unidade2').value)
  var notaUnidade3 = parseFloat(document.getElementById('unidade3').value)
  var notaUnidade4 = parseFloat(document.getElementById('unidade4').value)

  var notaFinal =
    (notaUnidade1 + notaUnidade2 + notaUnidade3 + notaUnidade4) / 4
  var notaFixada = notaFinal.toFixed(1)

  if ((aprovacaoAluno = notaFinal > mediaEscolar)) {
    aprovacaoAluno = `aprovado! Parabéns!!! 🥳`
  } else if ((aprovacaoAluno = notaFinal < mediaEscolar)) {
    aprovacaoAluno = `reprovado... 😔 Estude mais!`
  }

  var resultado = document.getElementById('exibirResultado')
  var resultadoFinal = `Olá, ${nomeAluno}, sua nota final foi ${notaFixada}, você foi ${aprovacaoAluno}`

  resultado.innerHTML = resultadoFinal
}

function limparCampo() {
  document.getElementById('nome').value = ' '
  document.getElementById('media').value = ' '
  document.getElementById('unidade1').value = ' '
  document.getElementById('unidade2').value = ' '
  document.getElementById('unidade3').value = ' '
  document.getElementById('unidade4').value = ' '
}
