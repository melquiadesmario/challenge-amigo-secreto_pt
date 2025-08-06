let amigos = [];

function sortearAmigo() {
    return 'teste'
}


function adicionarAmigo() {
  let nomeAmigo = document.querySelector('input').value;

  if (nomeAmigo === '') {
    alert('Por favor, insira um nome.');
    return;
  }else{
    amigos.push(nomeAmigo);
    limparCampoAmigo();
    console.log(`Amigos: ${amigos}`);
  }

  return amigos;
}

function limparCampoAmigo() {
  let campoAmigo = document.querySelector('input');
  campoAmigo.value = '';
}

function listarAmigos() {
  return amigos;
}
