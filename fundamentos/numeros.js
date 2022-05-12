const peso1 = 2.0 // valor de tipo number
const peso2 = Number(2.0) // converte um valor string para um valor number

console.log(peso1 === peso2 ? 1 : 0)

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // verifica se valor é do tipo number
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // retorna um valor float com duas casas após a vírgula

// retorna o valor como uma string sem modificar o valo original,
// caso pasarmos o valor 2 como parametro ela retorna o valor em binário
console.log('toString com 2', media.toString(2))
console.log('toString', media.toString())

console.log(typeof media)
console.log(typeof Number)
