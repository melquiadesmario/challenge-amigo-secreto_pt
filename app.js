let amigos = [];
console.log(`Amigos1: ${amigos}`);

function sortearAmigo() {
    return 'teste'
}


function adicionarAmigo() {
  let nomeAmigo = document.getElementById('amigo').value;
  console.log(`Adicionando amigo: ${nomeAmigo}`);
  amigos.push(nomeAmigo);
  console.log(`Amigos2: ${amigos}`);
}

console.log(`Amigos2: ${amigos}`);

function listarAmigos() {
  return amigos;
}
