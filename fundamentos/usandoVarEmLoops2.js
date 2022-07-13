// cria uma lista pareceber funções
const funcs = []

// define um loop for para percorrer 10 posições
for (var i = 0; i < 10; i++) {
  // adiciona funções sempre na próxima posição da lista
  funcs.push(function () {
    console.log(i)
  })
}

// chamada as funções da lista em posições específicas
funcs[1]()
funcs[8]()