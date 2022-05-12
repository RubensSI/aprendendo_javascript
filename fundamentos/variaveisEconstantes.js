// cria uma variável chamada a e atribui o valor 3 em "a".
var a = 3

// cria uma variável chamada b e atribui o valor 4 em "b".
let b = 4

// variáveis declaradas com var podem ser redevlaradas no masmo contexto...
var a = 30

// com o let isso não é possível
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

// variáveis declaradas com const, tem seu valor 
// constante por isso seu valor tem de ser definido no momento de sua declaração
const c = 500
/* 
    ao definir uma constante seu valor não pode ser mais modificado, 
    por isso será apresentado um erro ao tentar reatruir um valor a uma contante
*/
// c = 5
console.log(c)

const bird  = { species: 'kestrel' }
console.log(bird.species)

bird.species = ['kestrel', 'colibri', 'bentvi'];

for(specie of bird.species) {
    console.log(`specie: ${specie}`);
}