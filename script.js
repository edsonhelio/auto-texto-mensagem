function gerarTexto() {
  const trem = document.getElementById('trem').value;
  const carro = document.getElementById('carro').value;
  const destino = document.getElementById('destino').value;
  const tipoInfrator = document.getElementById('tipoInfrator').value;
  const sexo = document.getElementById('sexo').value;
  const cabeloTipo = document.getElementById('cabeloTipo').value;
  const corCabelo = document.getElementById('corCabelo').value;

  const texto = `Trem: ${trem}
Carro: ${carro}
Destino: ${destino}
Tipo de Infrator: ${tipoInfrator}
Sexo: ${sexo}
Cabelo tipo: ${cabeloTipo}
Cor do cabelo: ${corCabelo}`;

  document.getElementById('textoGerado').textContent = 'Texto gerado:\n' + texto;
}
