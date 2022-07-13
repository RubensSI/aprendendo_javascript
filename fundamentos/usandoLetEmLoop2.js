// define uma lista para receber funções
const funcs = []

// define uma loop for para percorrer 10 posiçoes com let
for (let i = 0; i < 10; i++) {
  // adiciona uma função para exibir o valor de índece sempre na próxima posoção da lista
  funcs.push(function () {
    console.log(i)
  })
}

// chamadas as funções em posições espacíficas na lista
funcs[1]()
funcs[8]()

