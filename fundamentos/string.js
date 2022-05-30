const escola = 'Cod3r'

// A função charAt retorna o valor a partir de um ídice expecificado
console.log(escola.charAt(2))

// caso o valor de índece seja maior, a função retorna um string vazia
console.log(escola.charAt(8))

//retorna o valor apartir de um índece so que esse valor respondente na tabela ASCII
console.log(escola.charCodeAt(3))

// retorna o índece de um caractere passado como parâmetro
console.log(escola.indexOf('C'))

// retorna a string iniciando apartir  do valor passado como parâmetro, até o fim da string
console.log('Substring')
console.log(escola.substring(1))

// retorna um trecho da uma string apartir dos valores passado como parâmetro
// que indicam onde começar e terminar a string, sem modificar a string original
// inicia o valor de índice 1 e termina no ultimo valor antes do segundo valor passado como parâmetro
console.log(escola.substring(1, 3))

let nomes = 'Rubens, Elise, Mariane'
let lista = nomes.split(',')
for (let i in lista) {
  console.log(lista[i].replace(' ', ''))
}

