const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

// Exemplo usando variaveis
// buttonA.onClick = () => {
//     const name = prompt('What is your name?');
//     alert(`Hello ${name} nise to see you!`);
//     headingA.textContent = `Welcome ${name}`;
//     }

// exemplo sem o uso de variáveis, nesse caso ao executar
//percebemos que temos que pedir para o usuário digitar várias
// vezes a nome
buttonA.onclick = () => {
  alert(`Hello ${prompt("What is your name?")}, nise to see you!`);
  headingA.textContent = `Welcome  ${prompt("What is your name ?")}`;
};

