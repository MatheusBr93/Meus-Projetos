function mostrarMais() {
    var conteudoMais = document.getElementById('conteudoMais');
    if (conteudoMais.style.display === 'none') {
      conteudoMais.style.display = 'block';
    } else {
      conteudoMais.style.display = 'none';
    }
  }
  function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
  }
  function playAudio2() {
    var audio2 = document.getElementById('audio2');
    audio2.play();
  }
  function moverBotao() {
    var botao = document.getElementById('botao');
    botao.style.setProperty('position', 'absolute');
    botao.style.setProperty('top', '50px');
    botao.style.setProperty('left', '100px');
}
function mostrarTexto() {
  var texto = document.getElementById('textoOculto');

  if (texto.style.display === 'none') {
      texto.style.display = 'block'; // ou 'inline', dependendo do seu layout
  } else {
      texto.style.display = 'none';
  }
}