{
  {
    {
      {
        var sera = 'Será??'
        console.log(sera)
      }
    }
  }
}

// a variável "sera" ficara visível mesmo fora do bloco
console.log(sera)

function escopFunc() {
  var local = 123
  console.log(local)
}
escopFunc()

//console.log(local) // local somente pode ser accessado dentro do bloco da função a qual ela foi definida
