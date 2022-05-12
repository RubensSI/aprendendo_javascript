/**
 * variáveis em javascript possuem tipagem fraca, por isso podem sempre ser reatribuidas
 * com valos de tipos diferentes
 */

let qualquer = 'lagal'
console.log(`primeira atribuição: ${qualquer}`)

// typeof é um comando que retorna o tipo de uma variável
console.log(typeof qualquer)

qualquer = 3.1516
console.log(`segunda atribuição: ${qualquer}`)
console.log(typeof qualquer)

// evitar nomes genéricos ou siglas
let valor = ''
let numero = 1
let pqp = false

let value = 12;
console.log(value)
console.log(typeof value)


value = "Ola Mundo"
console.log(value)
console.log(typeof value)
