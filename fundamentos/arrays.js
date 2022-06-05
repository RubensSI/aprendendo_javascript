// Arrays

// Declarando arrys de forma literal
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)

// retorna undefined, pois essa posição não possue valor definido
console.log(valores[4]);

// adicinando valores pelo índice
valores[4] = 10
console.log(valores) 

// exibindo o tamanho do array/lista
console.log(`tamanho da lista: ${valores.length}`)

// usando a função push para adicionar valores do final da lista
valores.push({id: 10}, false, null, 'nome')
console.log(valores)
console.log(`tamanho da lista: ${valores.length}`)// agora  passou a ser 9

// retirando valores do final da lista
console.log(valores.pop()) // essa função retira um valor do final da lista e o retorna

console.log(valores)

// delete retira uma valor definido através do sue índice, mais mantem o tamanho da lista
// a posição fica como undefined
delete valores[0]

console.log(`tamanho da lista: ${valores.length}`)

console.log(valores.length)

console.log(valores)

// percorre a lista e exibe seus valores pos seus índices
for (let valor in valores)
  console.log(valores[valor])

// exibe o tipo da varável passada
console.log(typeof valores) // Araays são do tipo object

const nomes = new Array(5)

// Usando essa forma não podemos iterar sobre a lista
for (let nome in nomes) {
  nomes[nome] = "Hello" // isso não é atribuido a lista
}

console.log(nomes)

// dessa forma consequimos iterar sobre a lista
for (let nome = 0; nome < nomes.length; nome++) {
  nomes[nome] = "Hello" // isso é atribuido a lista
}
console.log(nomes)
