// Diversas formas de declarar variáveis no javascript

// declaração literal de string, numbers e boolens
let str1 = 'Esta é uma simples string'
let num1 = 1.45
let answer1 = true

if (str1 == String('Esta é uma simples string')) console.log(`Equals: ${str1}:`)
if (num1 == Number(1.45)) console.log(`Equals: ${num1}`)
if (answer1 == Boolean(true)) console.log(`Equal: ${answer1}`)
/* 
  podemos criar variáveis ​​booleanas, strings e numéricas primitivas usando uma representação literal ou usando o objeto sem usar o  operador new
*/
let str2 = String('Esta é uma simlpes string')
let num2 = 1.45
let answer2 = true

// Ou ainda declarando atravéz de objetos passando um valor como parâmetro
// sendo essas agora instâncias de objetos
let str3 = new String('Esta é uma simples string')
let num3 = new Number(1.45)
let answer3 = new Boolean(true)

// comparando valores literais com valores objetos, é igual mais não do mesmo tipo.
let str = str1 === str2 && str2 === str3 ? 'Equal' : 'Not Equal'
console.log(str)

let num = num1 === num2 && num2 === num3 ? 'Equal' : 'Not Equal'
console.log(num)

let answer = answer1 === answer2 && answer2 === answer3 ? 'Equal' : 'Not Equal'
console.log(answer)

console.log(typeof str1)
console.log(typeof str3)
