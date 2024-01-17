// Rubens: 19/05/2022
// Algoritimo que calcule a média aritimética entre quatro notas
// fornecidas pelo usuário

const notas = new Array(4);
let acum = 0;

for (let i = 0; i < notas.length; i++ ) {
  notas[i] = Number(prompt(`Informe a ${i}º nota: `))
  acum += notas[i]
}

const result = acum/notas.length;

alert(`Média das notas: ${result}`)
