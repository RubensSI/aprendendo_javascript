// define um objeto vazio e atribui a prod1
const prod1 = {}

// adiciona novas propriedades a prod1
prod1.nome = "Celular"
prod1.preco = 4897.80
prod1['deconto'] = 0.40

// Percorre pelos elemento do objeto e os exibe
// for (let item in prod1) {
//   console.log(item)
// }

const prod2 = {
  nome: 'Notebook',
  preco: 8895.27,
  obj: {
    props: 1,
    obj: {
      props: 2
    }
  }
}

// acessando as propriedades do objeto
console.log(prod2.nome)
console.log(prod2.preco)
console.log(prod2.obj)
console.log(prod2.obj.obj)