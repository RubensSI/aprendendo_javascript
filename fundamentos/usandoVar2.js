// cria uma variavel chamada número, que é inicializada com 1
var numero = 1

{
  // uma nova variável que recebe o mesmo endereço de mamória
  // da primeira declaraçãoa de da variável numero
  var numero = 2
  console.log(numero)
}

// exibe a variável com valor 2., pois ela foi sobrescrita na segunda declaração
console.log(numero)
