// par nome/valor
const saudacao = 'Opa' // cantexto léxico 1

function exec() {
  const saudacao = 'Fallaa' // contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Rubens',
  idade: 30,
  peso: 92,
  endereco: {
    logradouro: 'Rua Do Fim',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
