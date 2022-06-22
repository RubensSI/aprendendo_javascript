console.log(typeof Object)

const prod = {}
console.log(typeof prod)

class Pessoa {
  constructor(nome = 'fulano', sobrenome = 'de Tal') {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  dadosPessoa() {
    return `Meu nome é ${this.nome} ${this.sobrenome}`
  }
}

class Pressor extends Pessoa {
  constructor(salario, disciplina, nome, sobrenome) {
    super(nome, sobrenome)
    this.salario = salario
    this.disciplina = disciplina
  }

  dadosPessoa() {
    return `Meu nome é ${this.nome} ${this.sobrenome} ${this.dadosPessoa} ${this.disciplina}`
  }
}

const pessoa = new Pressor(50000, 'JavaScript', 'Rubens', 'Santos')

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.salario)
console.log(pessoa.disciplina)


