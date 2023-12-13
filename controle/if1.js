// receber uma nota por parâmetro
function soBoaNoticia(nota) {
  // verificar se nota é maior ou igual à 7
  if (nota >= 7) {
    return `Aprovado com: ${nota}`
  } else { // caso contrário mostrar reprovado
    return `Reprovado, sua nota foi: ${nota}`
  }

}

// invocar a função soBoaNoticia
// console.log(soBoaNoticia(8.9))
// console.log(soBoaNoticia(5.0))

// o javascript conpara os valores das variaveis como vedadeiro ou falso
function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log(`É verdade ${valor}`)
  }
}

seForVerdadeEuFalo() // false
seForVerdadeEuFalo(null) // false
seForVerdadeEuFalo(undefined) // false
seForVerdadeEuFalo(NaN) // false
seForVerdadeEuFalo('Rubens é Lindão') // true