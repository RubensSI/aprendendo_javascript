let bool = true;
console.log(typeof bool);

let isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo)

let available = true;

console.log("Available: ", !available);

let getAnswer = (!available) ? "Deu certo!" : "Não deu certo!";
console.log(getAnswer);

getAnswer = available ? "Deu certo!" : "Não deu certo!";
console.log(getAnswer);

isAtivo = 0;
console.log(!!isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

isAtivo = 2;
console.log(!!isAtivo);


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')









