let valor // não inicializada

console.log(valor)

valor = null // ausencia de valor

// erro
// valor.toString() // não é possível apontar para uma propriedade de um objeto nulo

console.log(valor)

const produto = {}

produto.nome = "Notebook Lenovo"
produto.preco = 2.389
produto.descricao = 'Notebook usado mais em otimas condiçoes de uso!'
console.log( produto)

const produto2 = {}

// não dá erro pois produto2 não esta nulo, mais também
// possúe a propriedade preco definida
console.log(produto2.preco)
// console.log(produto2.preco.valor) // não é possivel acessar um valor de uma propriedade idefinida
console.log(produto2)

produto2.preco = 3.50
console.log(produto2)

produto2.preco = undefined // evite atribuir udefined
console.log(!!produto2.preco)

delete produto2.preco // excluir uma propriedade em um objeto

console.log(produto2)

produto2.preco = null

console.log(!!produto2.preco) // null resolve para false pois tem uma valor valido

console.log(produto2)
