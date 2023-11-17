// O operador de exponenciação.
// O ES7 nos trouxe o tão esperando operador de exponenciação! Veio de forma
// simples e intuitiva facilitar o uso desse cálculo matemático para nós, amantes do
// Javascript

// Para utilizar a exponenciação da maneira antiga:
let exp = Math.pow(2, 3) // o primeiro parâmetro é a base e o segundo é o expoente
console.log(`Resultado = ${exp}`) // 2 elevado a 3 é igual a 8 

// ES7
exp =  2 ** 3
console.log(`Resultado = ${exp}`) // o primeiro valor representa a base e o segundo o expoente

// Atribuição exponencial
let base2 = 2
base2 **= 3
console.log(`Base2 = ${base2}`) // pega o valor contido em base2 e eleva a 3

// expoente negativo
let base3 = 2 ** -3
console.log(`Expoente negativo = ${base3}`) // 2 elevado -3 == 0.125


