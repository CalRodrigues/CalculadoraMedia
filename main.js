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

  var aprovacaoAluno =
    notaFinal < mediaEscolar
      ? 'reprovado... 😔 <br> Estude mais!'
      : 'aprovado! 🥳 <br> Parabéns!!!'

  var resultadoFinal = `Olá, ${nomeAluno}, sua nota final foi ${notaFixada}, você foi ${aprovacaoAluno}`
  document.getElementById('exibirResultado').innerHTML =
    '<h2>' + resultadoFinal + '</h2>'
}

function limparCampo() {
  nome.value = ' '
  media.value = ' '
  unidade1.value = ' '
  unidade2.value = ' '
  unidade3.value = ' '
  unidade4.value = ' '
  exibirResultado.innerHTML = ' '
}
