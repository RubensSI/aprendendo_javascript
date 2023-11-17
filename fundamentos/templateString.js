const nome = 'Olá Reberca'

const concatenacao = 'Olá ' + nome + '!' // exemplo de concatenção
const tamplate = ` // exemplo com o uso de templateString
  Olá
  ${nome}`

console.log(tamplate)

let mensagem = ` 1 + 1 = ${1 + 1}`
console.log(mensagem)

// up recebe uma função arrow que 
// transformar um texto minusculo em maiusculo
const up = texto => texto.toUpperCase()
console.log(up("ola mundo"))
console.log(`Ola mundo ${up('javascript')}`)
