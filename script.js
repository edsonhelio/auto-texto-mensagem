function gerarTexto() {
  const opcoesSelecionadas = document.querySelectorAll('input[type="checkbox"]:checked');
  let texto = '';

  opcoesSelecionadas.forEach((opcao, index) => {
    texto += opcao.value;

    if (index !== opcoesSelecionadas.length - 1) {
      texto += ', ';
    }
  });

  document.getElementById('textoGerado').textContent = 'Texto gerado: ' + texto;
}
