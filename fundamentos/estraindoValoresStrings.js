// Declarando uma variável para receber uma texto
// vai conter os itens a ser extraidos
const sentence =
  'This is one sentence. This is a sentence with a list of items:' +
  'cherries, limes, oranges, apples, bananas. That was the list of items.'

// Mapeia a posião de de ":" pelo seu índice 
const start = sentence.indexOf(':')

// Mapeia a posição da segunda ocorrencia "." 
const end = sentence.indexOf('.', start + 1)

// Retorna uma lista contendo os itens dentro do intervalo especificado
const listString = sentence.substring(start + 1, end)

console.log(`ListString: ${listString}`)

// Retorna uma lista com os itens definidos no intervalo
const fruits = listString.split(',')

fruits.forEach((element, index, array) => (array[index] = element.trim()))
console.log(`Formate: ${fruits}`)
