let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.querySelector('input').value;

  if (nomeAmigo === '') {
    alert('Por favor, insira um nome.');
    return;
  }else{
    amigos.push(nomeAmigo);
    limparCampoAmigo();
    listarAmigos(amigos); 
  }

  return amigos;
}

function limparCampoAmigo() {
  let campoAmigo = document.querySelector('input');
  campoAmigo.value = '';
}

function listarAmigos(nome) {
  let listaAmigos = document.querySelector('listaAmigos');

  if (amigos.length === 0) {
      listaAmigos.value = 'Nenhum amigo cadastrado.';
      return
  } else {
      const lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";

      amigos.forEach(function(amigo) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
      });
  }
  return;
}

function sortearAmigo() {
  const ulElemento = document.getElementById("resultado");

  if (amigos.length === 0) {
      alert('Nenhum amigo cadastrado.');
      return;
  }else{
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const texto = document.createElement("li");
    texto.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    ulElemento.appendChild(texto);
  }
}