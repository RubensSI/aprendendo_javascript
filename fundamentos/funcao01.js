// funçao com retorno
function imprimeSoma(num1, num2) {
  return num1 + num2 + arguments[2]
}

console.log(imprimeSoma(2, 3))

console.log(imprimeSoma(5, 5, 1))

// função sem retorno
function soma(value1, value2, value3) {
  console.log(value1 + value2 + value3)
}

soma(1, 2, 3)
