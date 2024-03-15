// funções em javascript são first class object ou (citizens)
// higher order-function

// criar uma função literal
function func1() {

}

// é possível armazenar uma função em uma variavel, 
// no caso, a variável recebe uma função anônima que 
// vai ser invocada apartir do nome da variável que 
// recebeu a função
const func2 = function() {

}

// armazenando funções em lista ou arrays
const lista = [function(a, b) { return a + b }, func1, func2];

