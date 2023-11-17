// função para verificar se os valor informado formam 
// triângulo e se é isósceles, escaleno ou equilátero

const triângulo = (lado1, lado2, lado3) => {
  if ((lado1 + lado2) > lado3 || (lado2 + lado3) > lado1 || (lado1 + lado3) > lado2) {
    console.log('É triângulo')
    if (lado1 == lado2 && lado2 == lado3) {
      console.log('Triângulo equilátero!')
    }
  }
}